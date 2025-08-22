"use client"

import React, { useState, useRef, useEffect } from "react"
import styles from "./multiselect.module.scss"

const options = [
  {
    value: "payment_collection",
    label: "Looking for Payment Collection Solution",
  },
  { value: "make_payments", label: "Looking for a solution to make Payments" },
  { value: "expense_management", label: "Looking for Expense Management" },
  { value: "corporate_jobs", label: "Looking for Corporate Jobs" },
  { value: "job_opportunities", label: "Exploring Job Opportunities" },
  { value: "customer_support", label: "Need Customer Support" },
  { value: "partnership", label: "Interested In Partnership Opportunities" },
  { value: "marketing_team", label: "Want to Connect to Marketing Team" },
]

const MultiSelect: React.FC<{ name: string }> = ({ name }) => {
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
          <span className={styles.placeholder}>How can we help you?*</span>
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
