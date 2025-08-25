"use client"

import React, { useState, useRef, useEffect } from "react"
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

      return newSelected
    })
  }

  // 🔹 Trigger onChange whenever selected updates
  useEffect(() => {
    if (onChange) {
      onChange(selected)
    }
  }, [selected, onChange])

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

  const getDisplayValues = () => {
    return options
      .filter(
        (cat) =>
          selected.includes(cat.value) ||
          cat.children?.some((child) => selected.includes(child.value))
      )
      .map((cat) => cat.value)
  }

  const displayValues = getDisplayValues()

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <div className={styles.inputBox} onClick={() => setOpen((prev) => !prev)}>
        <div className={styles.inputContent}>
          {displayValues.length > 0 ? (
            <div className={styles.tags}>
              {displayValues.map((val) => (
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
        </div>
        <span className={styles.arrow}>{open ? "▲" : "▼"}</span>
      </div>

      {open && (
        <div className={styles.dropdown}>
          {options.map((cat) => (
            <div key={cat.value} className={styles.category}>
              <div
                className={styles.categoryHeader}
                onClick={() => toggleCategory(cat.value)}
              >
                <div className={styles.categoryHeaderLabel}>
                  <input
                    type="checkbox"
                    checked={selected.includes(cat.value)}
                    onChange={() => {
                      toggleOption(cat.value)
                      setOpenCategories(
                        (prev) =>
                          prev.includes(cat.value) ? prev : [...prev, cat.value]
                      )
                    }}
                    onClick={(e) => e.stopPropagation()}
                  />

                  <span>{cat.label}</span>
                </div>

                {cat.children && (
                  <span className={styles.arrow}>
                    {openCategories.includes(cat.value) ? "▲" : "▼"}
                  </span>
                )}
              </div>

              {openCategories.includes(cat.value) && cat.children && (
                <div className={styles.subOptions}>
                  {cat.children.map((child) => (
                    <label key={child.value} className={styles.option}>
                      <input
                        type="checkbox"
                        name="MultipleChoice1"
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

      {/* Parent categories */}
      {selected
        .filter((v) => options.some((cat) => cat.value === v))
        .map((val) => (
          <input key={val} type="hidden" name="MultipleChoice" value={val} />
        ))}

      {/* Child categories */}
      {selected
        .filter((v) =>
          options.some((cat) => cat.children?.some((c) => c.value === v))
        )
        .map((val) => (
          <input key={val} type="hidden" name="MultipleChoice1" value={val} />
        ))}
    </div>
  )
}

export default CategoryMultiSelect
