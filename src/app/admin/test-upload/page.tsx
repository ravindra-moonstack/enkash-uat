"use client"

import React, { useState, useEffect } from "react"
import styles from "./test-upload.module.scss"

export default function TestUploadPage() {
    const [testFileInfo, setTestFileInfo] = useState<any>(null)
    const [allTestFiles, setAllTestFiles] = useState<string[]>([])
    const [isLoading, setIsLoading] = useState(false)

    const fetchFiles = async () => {
        try {
            const res = await fetch("/api/admin/test-upload")
            const data = await res.json()
            if (data.success) {
                setAllTestFiles(data.files)
            }
        } catch (err) {
            console.error("Failed to fetch test files", err)
        }
    }

    useEffect(() => {
        fetchFiles()
    }, [])

    const handleCreateFile = async () => {
        setIsLoading(true)
        try {
            const res = await fetch("/api/admin/test-upload", { method: "POST" });
            const data = await res.json();
            if (data.success) {
                setTestFileInfo(data);
                setAllTestFiles(data.allFiles);
            }
        } catch (err) {
            console.error("Failed to create test file", err)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className={styles.testUploadContainer}>
            <div className={styles.header}>
                <h1>Test HTML File Generator</h1>
                <p>Generate random HTML files in the public/uploads directory for testing purposes.</p>
            </div>

            <div className={styles.actionSection}>
                <div className={styles.createCard}>
                    <button 
                        className={styles.createBtn} 
                        onClick={handleCreateFile}
                        disabled={isLoading}
                    >
                        <i className={`bi ${isLoading ? 'bi-hourglass-split' : 'bi-file-earmark-plus'}`}></i>
                        {isLoading ? 'Generating...' : 'Create New Test File'}
                    </button>

                    {testFileInfo && (
                        <div className={styles.detailsCard}>
                            <h3>Last Created File Details</h3>
                            <div className={styles.grid}>
                                <div className={styles.detailItem}>
                                    <label>File Name</label>
                                    <span>{testFileInfo.fileName}</span>
                                </div>
                                <div className={styles.detailItem}>
                                    <label>Relative Path</label>
                                    <span>{testFileInfo.relativePath}</span>
                                </div>
                                <div className={styles.detailItem}>
                                    <label>Size</label>
                                    <span>{testFileInfo.size} Bytes</span>
                                </div>
                                <div className={styles.detailItem}>
                                    <label>Absolute Path</label>
                                    <span>{testFileInfo.absolutePath}</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className={styles.listCard}>
                    <div className={styles.listHeader}>
                        <h2>Existing Files in Uploads</h2>
                        <span className={styles.count}>{allTestFiles.length} files</span>
                    </div>
                    
                    <div className={styles.tableWrapper}>
                        <table className={styles.fileTable}>
                            <thead>
                                <tr>
                                    <th>File Name</th>
                                    <th>Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allTestFiles.length > 0 ? (
                                    allTestFiles.map(f => (
                                        <tr key={f}>
                                            <td>
                                                <div className={styles.fileName}>
                                                    <i className="bi bi-filetype-html"></i>
                                                    {f}
                                                </div>
                                            </td>
                                            <td>
                                                <a href={`/uploads/${f}`} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                                    View File <i className="bi bi-box-arrow-up-right"></i>
                                                </a>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={2} style={{ textAlign: 'center', padding: '40px', color: '#94a3b8' }}>
                                            No test files found in uploads folder.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
