"use client"

import React, { memo } from "react"
import DynamicHeading from "@/src/components/dynamic-heading"
import styles from "./style.module.scss"

interface TaxInputProps {
    label: string
    value: string
    onChange: (v: string) => void
    placeholder?: string
    hint?: string
}

export const TaxInput = memo(({ label, value, onChange, placeholder, hint }: TaxInputProps) => {
    const fmtInd = (num: number): string => {
        const n = Math.round(Math.abs(num))
        const s = n.toString()
        if (s.length <= 3) return s
        const last3 = s.slice(-3)
        const rest = s.slice(0, -3).replace(/\B(?=(\d{2})+(?!\d))/g, ",")
        return rest + "," + last3
    }

    return (
        <div className={styles.inpGrp}>
            <label>
                {label} {hint && <span className={styles.hint}>({hint})</span>}
            </label>
            <div className={styles.inpWrap}>
                <span className={styles.rupee}>₹</span>
                <input
                    type="text"
                    inputMode="numeric"
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => {
                        const digits = e.target.value.replace(/[^0-9]/g, "")
                        onChange(digits ? fmtInd(parseInt(digits, 10)) : "")
                    }}
                />
            </div>
        </div>
    )
})
TaxInput.displayName = "TaxInput"

interface SummaryBoxProps {
    label: string
    value: string
    sub: string
    variant?: "default" | "primary" | "winner"
}

export const SummaryBox = memo(({ label, value, sub, variant = "default" }: SummaryBoxProps) => (
    <div
        className={`${styles.summaryBox} ${variant === "primary" ? styles.summaryBoxPrimary : variant === "winner" ? styles.summaryBoxWinner : ""
            }`}
    >
        <div className={styles.summaryBoxLabel}>{label}</div>
        <div className={styles.summaryBoxValue}>{value}</div>
        <div className={styles.summaryBoxSub}>{sub}</div>
    </div>
))
SummaryBox.displayName = "SummaryBox"

interface Slab {
    min: number
    max: number
    rate: number
}

export const SlabMini = memo(({ regime, regimeSlabs }: { regime: string; regimeSlabs: Slab[] }) => {
    const formatSlabAmount = (amt: number) => (amt / 100000).toLocaleString("en-IN")

    return (
        <div className={styles.slabMini}>
            <div className={styles.slabMiniHeader}>{regime === "new" ? "New" : "Old"} Regime Slabs</div>
            {regimeSlabs.map((slab, i) => (
                <div key={i} className={styles.slabMiniRow}>
                    <span>
                        {slab.max === Infinity
                            ? `Above ₹${formatSlabAmount(slab.min)}L`
                            : `₹${formatSlabAmount(slab.min)}L – ₹${formatSlabAmount(slab.max)}L`}
                    </span>
                    <span className={`${styles.slabRate} ${slab.rate === 0 ? styles.slabRateNil : ""}`}>
                        {slab.rate === 0 ? "Nil" : `${slab.rate}%`}
                    </span>
                </div>
            ))}
        </div>
    )
})
SlabMini.displayName = "SlabMini"

interface ContentSectionProps {
    id: string
    title: string
    description?: string | React.ReactNode
    items?: Array<[string, string]>
    listType?: "ol" | "ul"
    note?: string
    customClassName?: string
}

export const ContentSection = ({ id, title, description, items, listType = "ol", note, customClassName = "" }: ContentSectionProps) => {
    const ListTag = listType
    return (
        <>
            <div id={id}>
                <DynamicHeading content={[{ title, color: "color-main-black", className: "fs-28 my-4" }]} headingTag="h4" />
            </div>
            {description && (typeof description === "string" ? <p className={styles.contentP}>{description}</p> : description)}
            {items && (
                <ListTag className={`${styles.contentList} ${customClassName}`}>
                    {items.map((item, idx) => (
                        <li key={idx}>
                            <strong>{item[0]}</strong>: {item[1]}
                        </li>
                    ))}
                </ListTag>
            )}
            {note && <p className={styles.slabFootnote}>{note}</p>}
        </>
    )
}
