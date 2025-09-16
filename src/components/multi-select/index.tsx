"use client"
import React, { useState, useRef, useEffect, useId } from "react"
import styles from "./multiselect.module.scss"

interface Option {
  value: string
  label: string
}

interface MultiSelectProps {
  name: string
  options: Option[]
  placeholder?: string
  onChange: (selected: string[]) => void
  label?: string
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  name,
  options,
  placeholder = "Select options...",
  onChange = () => {},
}) => {
  //

  const [selected, setSelected] = useState<string[]>([])
  const [open, setOpen] = useState<boolean>(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const inputId = useId()

  const toggleOption = (value: string) => {
    setSelected((prev) => {
      const updated = prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]

      onChange(updated)
      return updated
    })
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      setOpen((prev) => !prev)
    }
    if (e.key === "Escape") {
      setOpen(false)
    }
  }

  return (
    <div
      ref={wrapperRef}
      className={styles.multiSelectWrapper}
      role="combobox"
      aria-haspopup="listbox"
      aria-label={name}
      aria-expanded={open}
      aria-owns={`${inputId}-listbox`}
      aria-controls={`${inputId}-listbox`}
    >
      <div
        className={styles.multiSelectInput}
        tabIndex={0}
        role="button"
        aria-labelledby={`${inputId}-label`}
        aria-describedby={`${inputId}-helper`}
        onClick={() => setOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
      >
        {selected.length > 0 ? (
          <div className={styles.tags}>
            {selected.map((val) => (
              <span key={val} className={styles.tag}>
                {options.find((o) => o.value === val)?.label}
                <button
                  type="button"
                  aria-label={`Remove ${options.find((o) => o.value === val)?.label}`}
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleOption(val)
                  }}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        ) : (
          <span className={styles.placeholder}>{placeholder}</span>
        )}
        <span className={styles.arrow} aria-hidden="true">
          {open ? "▲" : "▼"}
        </span>
      </div>

      {open && (
        <div
          id={`${inputId}-listbox`}
          role="listbox"
          className={styles.dropdown}
          aria-multiselectable="true"
        >
          {options.map((opt) => (
            <label
              key={opt.value}
              htmlFor={`${inputId}-${opt.value}`}
              role="option"
              aria-selected={selected.includes(opt.value)}
              className={styles.option}
            >
              <input
                type="checkbox"
                id={`${inputId}-${opt.value}`}
                name={name}
                value={opt.value}
                checked={selected.includes(opt.value)}
                onChange={() => toggleOption(opt.value)}
              />
              {opt.label}
            </label>
          ))}
        </div>
      )}
    </div>
  )
}

export default MultiSelect
