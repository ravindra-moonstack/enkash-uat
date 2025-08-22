import React, { useState } from "react"
import styles from "./categoryWithOther.module.scss"

interface Props {
  name: string
  options: { value: string; label: string }[]
  placeholder?: string
  otherPlaceholder?: string
}

const CategoryWithOther: React.FC<Props> = ({
  name,
  options,
  placeholder = "Please select...",
  otherPlaceholder = "Please specify...",
}) => {
  const [selected, setSelected] = useState("")
  const [otherText, setOtherText] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value)
  }

  return (
    <div className={styles.wrapper}>
      <select
        name={name}
        id={name}
        value={selected}
        onChange={handleChange}
        className={styles.select}
        required
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

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

      {/* This hidden input captures the actual submission value */}
      <input
        type="hidden"
        name={`${name}_value`}
        value={selected === "other" ? otherText : selected}
      />
    </div>
  )
}

export default CategoryWithOther
