"use client"

import React, { useState, useRef, useEffect, useMemo } from "react"
import styles from "./categoryMultiSelect.module.scss"

interface Option {
  value: string
  label: string
  children?: Option[]
}

interface CategoryMultiSelectProps {
  name: string
  options: Option[]
  placeholder?: string
  onChange?: (val: string[]) => void
}

const CategoryMultiSelect: React.FC<CategoryMultiSelectProps> = ({
  name,
  options,
  placeholder = "What are you looking for? (dropdown)*",
  onChange,
}) => {
  const [selected, setSelected] = useState<string[]>([])
  const [open, setOpen] = useState(false)
  const [openCategories, setOpenCategories] = useState<string[]>([])
  const wrapperRef = useRef<HTMLDivElement>(null)

  const toggleCategory = (value: string) => {
    setOpenCategories((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    )
  }

  const displayValues = useMemo(() => {
    return options
      .filter(
        (cat) =>
          selected.includes(cat.value) ||
          cat.children?.some((child) => selected.includes(child.value))
      )
      .map((cat) => cat.value)
  }, [options, selected])

  const toggleOption = (value: string) => {
    const category = options.find((cat) => cat.value === value)

    setSelected((prev) => {
      let newSelected = [...prev]

      if (category) {
        const allChildren = category.children?.map((c) => c.value) || []

        if (newSelected.includes(category.value)) {
          newSelected = newSelected.filter(
            (v) => v !== category.value && !allChildren.includes(v)
          )
        } else {
          newSelected = [
            ...new Set([...newSelected, category.value, ...allChildren]),
          ]
        }
      } else {
        if (newSelected.includes(value)) {
          newSelected = newSelected.filter((v) => v !== value)
        } else {
          newSelected.push(value)
        }

        // Keep parent in sync
        options.forEach((cat) => {
          if (cat.children?.some((c) => c.value === value)) {
            const allChildren = cat.children.map((c) => c.value)
            const allSelected = allChildren.every((c) =>
              newSelected.includes(c)
            )

            if (allSelected) {
              if (!newSelected.includes(cat.value)) {
                newSelected.push(cat.value)
              }
            } else {
              newSelected = newSelected.filter((v) => v !== cat.value)
            }
          }
        })
      }

      const finalSelected = [
        ...new Set([
          ...newSelected,
          ...options
            .filter((cat) =>
              cat.children?.some((child) => newSelected.includes(child.value))
            )
            .map((cat) => cat.value),
        ]),
      ]

      onChange?.(finalSelected)

      return newSelected
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
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    // eslint-disable-next-line jsx-a11y/role-supports-aria-props
    <div
      ref={wrapperRef}
      className={styles.wrapper}
      role="combobox"
      aria-haspopup="listbox"
      aria-expanded={open}
      aria-multiselectable="true"
    >
      {/* Input Box */}
      <div
        className={styles.inputBox}
        tabIndex={0}
        onClick={() => setOpen((prev) => !prev)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            setOpen((prev) => !prev)
          }
          if (e.key === "Escape") setOpen(false)
        }}
        aria-controls={`${name}-dropdown`}
        aria-label={placeholder}
      >
        <div className={styles.inputContent}>
          {displayValues.length > 0 ? (
            <div className={styles.tags}>
              {displayValues.map((val) => (
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
        </div>
        <span className={styles.arrow}>{open ? "▲" : "▼"}</span>
      </div>

      {/* Dropdown */}
      {open && (
        <div
          id={`${name}-dropdown`}
          role="listbox"
          aria-multiselectable="true"
          className={styles.dropdown}
        >
          {options.map((cat) => (
            <div key={cat.value} className={styles.category}>
              <div
                className={styles.categoryHeader}
                onClick={() => toggleCategory(cat.value)}
                role="option"
                aria-selected={selected.includes(cat.value)}
              >
                <div className={styles.categoryHeaderLabel}>
                  <input
                    id={`${name}-${cat.value}`}
                    type="checkbox"
                    checked={selected.includes(cat.value)}
                    onChange={() => {
                      toggleOption(cat.value)
                      setOpenCategories((prev) =>
                        prev.includes(cat.value) ? prev : [...prev, cat.value]
                      )
                    }}
                    onClick={(e) => e.stopPropagation()}
                  />
                  <label htmlFor={`${name}-${cat.value}`}>{cat.label}</label>
                </div>

                {cat.children && (
                  <span
                    className={styles.arrow}
                    aria-label={`Toggle ${cat.label} sub-options`}
                  >
                    {openCategories.includes(cat.value) ? "▲" : "▼"}
                  </span>
                )}
              </div>

              {openCategories.includes(cat.value) && cat.children && (
                <div className={styles.subOptions}>
                  {cat.children.map((child) => (
                    <label
                      htmlFor={`${name}-${child.value}`}
                      key={child.value}
                      className={styles.option}
                    >
                      <input
                        id={`${name}-${child.value}`}
                        type="checkbox"
                        checked={selected.includes(child.value)}
                        onChange={() => toggleOption(child.value)}
                      />
                      {child.label}
                    </label>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Hidden input for form submission */}
      <input type="hidden" name={name} value={JSON.stringify(selected)} />
    </div>
  )
}

export default CategoryMultiSelect
