"use client"
import React, { useState, useRef, useEffect } from "react"
import styles from "./single.module.scss"

interface Props {
  name: string
  options: { value: string; label: string }[]
  placeholder?: string
  otherPlaceholder?: string
  onChange?: (val: string) => void
}

const SingleSelect: React.FC<Props> = ({
  name,
  options,
  placeholder = "Please select...",
  onChange,
}) => {
  //

  const [open, setOpen] = useState<boolean>(false)
  const [selected, setSelected] = useState<string>("")
  const wrapperRef = useRef<HTMLDivElement>(null)

  const handleSelect = (value: string) => {
    setSelected(value)
    setOpen(false)
    onChange?.(value)
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
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div
      ref={wrapperRef}
      tabIndex={0}
      role="button"
      aria-label={name}
      aria-expanded={open}
      aria-haspopup="listbox"
      className={styles.wrapper}
    >
      <input type="hidden" name={name} value={selected} />
      {/* Custom styled box */}
      <div className={styles.inputBox} onClick={() => setOpen((prev) => !prev)}>
        <div className={styles.inputContent}>
          {selected ? (
            <span className={styles.tag}>
              {options.find((opt) => opt.value === selected)?.label}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  setSelected("")
                  onChange?.("")
                }}
              >
                ✕
              </button>
            </span>
          ) : (
            <span className={styles.placeholder}>{placeholder}</span>
          )}
        </div>
        <span className={styles.arrow}>{open ? "▲" : "▼"}</span>
      </div>

      {/* Dropdown */}
      {open && (
        <div tabIndex={0} role="menu" className={styles.dropdown}>
          {options.map((opt) => (
            <div
              key={opt.value}
              role="menuitem"
              className={styles.option}
              onClick={() => handleSelect(opt.value)}
            >
              <label htmlFor={opt.label}>{opt.label}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SingleSelect
