"use client"

import React, { useState, useEffect, useCallback, Suspense } from "react"
import styles from "./audit-logs.module.scss"
import moment from "moment"

interface AuditLog {
    id: number
    table_name: string
    row_id: number
    action_type: string
    old_data: any
    new_data: any
    updated_by: number
    user_email: string
    user_ip: string
    updated_at: string
}

const AuditLogsPage = () => {
    const [logs, setLogs] = useState<AuditLog[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [totalItems, setTotalItems] = useState(0)
    const [selectedLog, setSelectedLog] = useState<AuditLog | null>(null)
    const [sortBy, setSortBy] = useState("updated_at")
    const [sortOrder, setSortOrder] = useState("DESC")

    const fetchLogs = useCallback(async (page: number = 1, sort: string = "updated_at", order: string = "DESC") => {
        setIsLoading(true)
        try {
            const response = await fetch(`/api/admin/audit-logs?page=${page}&limit=15&sortBy=${sort}&sortOrder=${order}`)
            if (response.status === 401) {
                window.location.href = "/admin"
                return
            }
            const data = await response.json()
            if (data.success) {
                setLogs(data.data)
                setTotalPages(data.pagination.totalPages)
                setTotalItems(data.pagination.totalItems)
            }
        } catch (error) {
            console.error("Failed to fetch audit logs:", error)
        } finally {
            setIsLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchLogs(currentPage, sortBy, sortOrder)
    }, [currentPage, sortBy, sortOrder, fetchLogs])

    const handleSort = (column: string) => {
        if (sortBy === column) {
            setSortOrder(prev => prev === "ASC" ? "DESC" : "ASC")
        } else {
            setSortBy(column)
            setSortOrder("DESC")
        }
        setCurrentPage(1)
    }


    return (
        <div className={styles.adminContainer}>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h1 className={styles.title}>Audit Logs</h1>
                    <p className={styles.subtitle} style={{ marginBottom: 0 }}>Track all changes made to the Glossary system.</p>
                </div>
                <div className="d-flex gap-2">
                    <select
                        className={styles.sortSelect}
                        value={sortBy}
                        onChange={(e) => {
                            setSortBy(e.target.value)
                            setCurrentPage(1)
                        }}
                    >
                        <option value="updated_at">Sort by: Timestamp</option>
                        <option value="action_type">Sort by: Action</option>
                        <option value="table_name">Sort by: Table</option>
                        <option value="row_id">Sort by: Row ID</option>
                        <option value="updated_by">Sort by: User</option>
                    </select>
                    <button
                        className={styles.orderBtn}
                        onClick={() => setSortOrder(prev => prev === "ASC" ? "DESC" : "ASC")}
                        title={sortOrder === "ASC" ? "Sort Descending" : "Sort Ascending"}
                    >
                        {sortOrder === "ASC" ? "↑" : "↓"}
                    </button>
                </div>
            </div>

            <div className={styles.tableCard}>
                <div className={styles.tableContainer}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th onClick={() => handleSort("updated_at")} className={styles.sortable}>
                                    Timestamp {sortBy === "updated_at" && (sortOrder === "ASC" ? "🔼" : "🔽")}
                                </th>
                                <th onClick={() => handleSort("action_type")} className={styles.sortable}>
                                    Action {sortBy === "action_type" && (sortOrder === "ASC" ? "🔼" : "🔽")}
                                </th>
                                <th onClick={() => handleSort("table_name")} className={styles.sortable}>
                                    Table {sortBy === "table_name" && (sortOrder === "ASC" ? "🔼" : "🔽")}
                                </th>
                                <th onClick={() => handleSort("row_id")} className={styles.sortable}>
                                    ID {sortBy === "row_id" && (sortOrder === "ASC" ? "🔼" : "🔽")}
                                </th>
                                <th onClick={() => handleSort("updated_by")} className={styles.sortable}>
                                    User {sortBy === "updated_by" && (sortOrder === "ASC" ? "🔼" : "🔽")}
                                </th>
                                <th>IP Address</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {isLoading ? (
                                <tr>
                                    <td colSpan={7}>
                                        <div className={styles.spinner}></div>
                                    </td>
                                </tr>
                            ) : logs.length === 0 ? (
                                <tr>
                                    <td colSpan={7} style={{ textAlign: 'center', padding: '40px' }}>
                                        No logs found
                                    </td>
                                </tr>
                            ) : (
                                logs.map((log) => (
                                    <tr key={log.id}>
                                        <td>{moment(log.updated_at).format('DD-MMM-YYYY hh:mm A')}</td>
                                        <td>
                                            <span className={`${styles.badge} ${styles[log.action_type.toLowerCase()]}`}>
                                                {log.action_type}
                                            </span>
                                        </td>
                                        <td>{log.table_name}</td>
                                        <td>{log.row_id}</td>
                                        <td>
                                            <div>ID: {log.updated_by}</div>
                                            <div style={{ fontSize: '11px', color: '#666' }}>{log.user_email}</div>
                                        </td>
                                        <td>{log.user_ip}</td>
                                        <td>
                                            <button
                                                className={styles.viewBtn}
                                                onClick={() => setSelectedLog(log)}
                                            >
                                                View Diff
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                {totalPages > 1 && (
                    <div className={styles.pagination}>
                        <div className={styles.paginationInfo}>
                            Showing {logs.length} of {totalItems} logs
                        </div>
                        <div className={styles.paginationControls}>
                            <button
                                className={styles.pageBtn}
                                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                                disabled={currentPage === 1}
                            >
                                Previous
                            </button>
                            {[...Array(totalPages)].map((_, i) => (
                                <button
                                    key={i + 1}
                                    className={`${styles.pageBtn} ${currentPage === i + 1 ? styles.active : ''}`}
                                    onClick={() => setCurrentPage(i + 1)}
                                >
                                    {i + 1}
                                </button>
                            ))}
                            <button
                                className={styles.pageBtn}
                                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                                disabled={currentPage === totalPages}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {selectedLog && (
                <div className={styles.modalOverlay} onClick={() => setSelectedLog(null)}>
                    <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                        <button className={styles.closeBtn} onClick={() => setSelectedLog(null)}>×</button>
                        <h2 className={styles.modalTitle}>Change Details</h2>

                        <div style={{ marginBottom: '16px' }}>
                            <strong>Table:</strong> {selectedLog.table_name} |
                            <strong> ID:</strong> {selectedLog.row_id} |
                            <strong> Action:</strong> {selectedLog.action_type}
                        </div>

                        <div className={styles.diffContainer}>
                            <div className={styles.diffBox}>
                                <h4>Old Data (Before)</h4>
                                <pre>
                                    {renderDiff(selectedLog.old_data, selectedLog.new_data, 'old')}
                                </pre>
                            </div>
                            <div className={styles.diffBox}>
                                <h4>New Data (After)</h4>
                                <pre>
                                    {renderDiff(selectedLog.old_data, selectedLog.new_data, 'new')}
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

// Helper to render highlighted diffs
const renderDiff = (oldData: any, newData: any, type: 'old' | 'new') => {
    try {
        const oldObj = typeof oldData === 'string' ? JSON.parse(oldData) : oldData
        const newObj = typeof newData === 'string' ? JSON.parse(newData) : newData

        if (!oldObj && type === 'old') return "N/A"
        if (!newObj && type === 'new') return "N/A"

        const allKeys = Array.from(new Set([...Object.keys(oldObj || {}), ...Object.keys(newObj || {})]))

        return allKeys.map(key => {
            const valOld = oldObj?.[key]
            const valNew = newObj?.[key]
            const isChanged = JSON.stringify(valOld) !== JSON.stringify(valNew)
            const isRemoved = oldObj && key in oldObj && (!newObj || !(key in newObj))
            const isAdded = newObj && key in newObj && (!oldObj || !(key in oldObj))

            let className = ""
            if (type === 'old') {
                if (isRemoved || (isChanged && !isAdded)) className = styles.removed
            } else {
                if (isAdded || (isChanged && !isRemoved)) className = styles.added
            }

            const displayVal = type === 'old' ? valOld : valNew

            // Skip rendering if value doesn't exist for this side
            if (type === 'old' && !(key in (oldObj || {}))) return null
            if (type === 'new' && !(key in (newObj || {}))) return null

            return (
                <div key={key} className={className}>
                    {key}: {typeof displayVal === 'object' ? JSON.stringify(displayVal) : String(displayVal)}
                </div>
            )
        })
    } catch {
        return "Error parsing data"
    }
}

export default function AuditLogs() {
    return (
        <Suspense fallback={null}>
            <AuditLogsPage />
        </Suspense>
    )
}
