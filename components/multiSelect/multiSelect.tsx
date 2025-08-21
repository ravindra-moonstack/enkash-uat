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
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  name,
  options,
  placeholder = "Select options...",
}) => {
  const [selected, setSelected] = useState<string[]>([])
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const toggleOption = (value: string) => {
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    )
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

        {/* Dropdown Arrow */}
        <span className={styles.arrow}>{open ? "▲" : "▼"}</span>
      </div>

      {open && (
        <div className={styles.dropdown}>
          {options.map((opt) => (
            <label key={opt.value} className={styles.option}>
              <input
                type="checkbox"
                checked={selected.includes(opt.value)}
                onChange={() => toggleOption(opt.value)}
              />
              {opt.label}
            </label>
          ))}
        </div>
      )}

      {/* Hidden input for form submission */}
      <input type="hidden" name={name} value={selected.join(", ")} />
    </div>
  )
}

export default MultiSelect
