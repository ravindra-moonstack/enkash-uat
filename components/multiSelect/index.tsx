"use client"

import React, { useState, useRef, useEffect } from "react"
import styles from "./multiselect.module.scss"

// Type definition for an option
interface Option {
  value: string
  label: string
}

interface MultiSelectProps {
  name: string
  options: Option[]
  placeholder?: string
  onChange: (selected: string[]) => void
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  placeholder = "Select options...",
  onChange = () => {},
}) => {
  const [selected, setSelected] = useState<string[]>([])
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const toggleOption = (value: string) => {
    setSelected((prev) => {
      const updated = prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]

      onChange(updated) // ✅ Call onChange with updated selection
      return updated
    })
  }

  // ✅ Close dropdown on outside click
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

  return (
    <div ref={wrapperRef} className={styles.multiSelectWrapper}>
      <div
        className={styles.multiSelectInput}
        onClick={() => setOpen((prev) => !prev)}
      >
        {selected.length > 0 ? (
          <div className={styles.tags}>
            {selected.map((val) => (
              <span key={val} className={styles.tag}>
                {options.find((o) => o.value === val)?.label}
                <button
                  type="button"
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

        <span className={styles.arrow}>{open ? "▲" : "▼"}</span>
      </div>

      {open && (
        <div className={styles.dropdown}>
          {options.map((opt) => (
            <label
              key={opt.value}
              htmlFor={opt.value}
              className={styles.option}
            >
              <input
                type="checkbox"
                id={opt.value}
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
