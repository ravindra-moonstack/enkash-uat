import React from "react"
import { SlabRow } from "@/src/types/income-tax"
import styles from "@/src/app/income-tax-calculator/income-tax-calculator.module.scss"

interface IncomeTaxSlabTableProps {
    rows: SlabRow[]
}

const rateChipClass = (rate: string) => {
    if (rate === "NIL") return styles.chipNil
    if (rate === "5%") return styles.chip5
    if (rate === "10%") return styles.chip10
    if (rate === "15%") return styles.chip15
    if (rate === "20%") return styles.chip20
    if (rate === "25%") return styles.chip25
    return styles.chip30
}

const IncomeTaxSlabTable: React.FC<IncomeTaxSlabTableProps> = ({ rows }) => {
    return (
        <div className={styles.tblWrap}>
            <table>
                <thead>
                    <tr>
                        <th>Annual Income Slab</th>
                        <th>Below 60 years</th>
                        <th>60-80 years (Senior)</th>
                        <th>Above 80 years (Super Senior)</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, i) => (
                        <tr key={i}>
                            <td>{row.range}</td>
                            <td><span className={`${styles.chip} ${rateChipClass(row.col1)}`}>{row.col1}</span></td>
                            <td><span className={`${styles.chip} ${rateChipClass(row.col2)}`}>{row.col2}</span></td>
                            <td><span className={`${styles.chip} ${rateChipClass(row.col3)}`}>{row.col3}</span></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default IncomeTaxSlabTable
