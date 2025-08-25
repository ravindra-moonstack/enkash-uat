"use client"
import React, { useState, useRef, useEffect } from "react"
import styles from "./categoryWithOther.module.scss"

interface Props {
  name: string
  options: { value: string; label: string }[]
  placeholder?: string
  otherPlaceholder?: string
  onChange?: (val: string) => void
}

const CategoryWithOther: React.FC<Props> = ({
  name,
  options,
  placeholder = "Please select...",
  otherPlaceholder = "Please specify...",
  onChange,
}) => {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState("")
  const [otherText, setOtherText] = useState("")
  const wrapperRef = useRef<HTMLDivElement>(null)

  const handleSelect = (value: string) => {
    setSelected(value)
    setOpen(false)
    if (value !== "other") {
      onChange?.(value) // notify parent
    }
  }

  useEffect(() => {
    if (selected === "other") {
      onChange?.(otherText) // notify parent when "Other" changes
    }
  }, [otherText, selected, onChange])

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
    <div ref={wrapperRef} className={styles.wrapper}>
      {/* Custom styled box */}
      <div className={styles.inputBox} onClick={() => setOpen((prev) => !prev)}>
        <div className={styles.inputContent}>
          {selected ? (
            <span className={styles.tag}>
              {selected === "other"
                ? otherText || "Other"
                : options.find((opt) => opt.value === selected)?.label}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  setSelected("")
                  setOtherText("")
                  onChange?.("") // reset
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
        <div className={styles.dropdown}>
          {options.map((opt) => (
            <div
              key={opt.value}
              className={styles.option}
              onClick={() => handleSelect(opt.value)}
            >
              {opt.label}
            </div>
          ))}
          <div className={styles.option} onClick={() => handleSelect("other")}>
            Other
          </div>
        </div>
      )}

      {/* If "Other" is selected → input box show */}
      {selected === "other" && (
        <input
          type="text"
          placeholder={otherPlaceholder}
          className={styles.textInput}
          value={otherText}
          onChange={(e) => setOtherText(e.target.value)}
          required
        />
      )}

      {/* Hidden input for forms */}
      <input
        type="hidden"
        name={`${name}_value`}
        value={selected === "other" ? otherText : selected}
      />
    </div>
  )
}

export default CategoryWithOther
