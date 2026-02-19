
"use client"

import React, { useState, useEffect } from "react"
import { CommanButton } from "@/src/components"
import styles from "../glossary-admin.module.scss"
import { FaPlus, FaEdit, FaTrash, FaArrowLeft, FaList } from "react-icons/fa"

interface Card {
    id: number
    heading: string
    description: string
    link: string
    sort_order: number
}

interface Category {
    id: number
    heading: string
    sort_order: number
    cards: Card[]
}

export default function GlossaryCategoriesAdmin() {
    const [categories, setCategories] = useState<Category[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [view, setView] = useState<"list" | "cards">("list")
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)

    // Form states
    const [isEditing, setIsEditing] = useState(false)
    const [editId, setEditId] = useState<number | null>(null)
    const [formData, setFormData] = useState<any>({})
    const [showModal, setShowModal] = useState(false)

    // Fetch all data
    const fetchData = async () => {
        setIsLoading(true)
        try {
            const res = await fetch("/api/glossary/categories")
            if (res.ok) {
                const data = await res.json()
                setCategories(data)
                // If we are in cards view, update the selected category
                if (selectedCategory) {
                    const updated = data.find((c: Category) => c.id === selectedCategory.id)
                    if (updated) setSelectedCategory(updated)
                }
            }
        } catch (error) {
            console.error("Error fetching categories:", error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    // --- Category Actions ---

    const handleAddCategory = () => {
        setFormData({ heading: "", sort_order: categories.length })
        setIsEditing(false)
        setEditId(null)
        setShowModal(true)
    }

    const handleEditCategory = (cat: Category) => {
        setFormData({ heading: cat.heading, sort_order: cat.sort_order })
        setIsEditing(true)
        setEditId(cat.id)
        setShowModal(true)
    }

    const handleDeleteCategory = async (id: number) => {
        if (!confirm("Are you sure? This will delete the category and all its cards.")) return
        try {
            const res = await fetch(`/api/admin/glossary/categories/${id}`, { method: "DELETE" })
            if (res.ok) fetchData()
        } catch (e) {
            console.error(e)
        }
    }

    const saveCategory = async () => {
        try {
            const url = isEditing && editId
                ? `/api/admin/glossary/categories/${editId}`
                : "/api/admin/glossary/categories"
            const method = isEditing && editId ? "PUT" : "POST"

            const res = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            })

            if (res.ok) {
                setShowModal(false)
                fetchData()
            }
        } catch (e) {
            console.error(e)
        }
    }

    // --- Card Actions ---

    const handleManageCards = (cat: Category) => {
        setSelectedCategory(cat)
        setView("cards")
    }

    const handleAddCard = () => {
        if (!selectedCategory) return
        setFormData({
            heading: "",
            description: "",
            link: "",
            sort_order: selectedCategory.cards ? selectedCategory.cards.length : 0
        })
        setIsEditing(false)
        setEditId(null)
        setShowModal(true)
    }

    const handleEditCard = (card: Card) => {
        setFormData({ ...card })
        setIsEditing(true)
        setEditId(card.id)
        setShowModal(true)
    }

    const handleDeleteCard = async (id: number) => {
        if (!confirm("Are you sure?")) return
        try {
            const res = await fetch(`/api/admin/glossary/category-cards/${id}`, { method: "DELETE" })
            if (res.ok) fetchData()
        } catch (e) {
            console.error(e)
        }
    }

    const saveCard = async () => {
        if (!selectedCategory) return
        try {
            const url = isEditing && editId
                ? `/api/admin/glossary/category-cards/${editId}`
                : "/api/admin/glossary/category-cards"
            const method = isEditing && editId ? "PUT" : "POST"

            const body = {
                ...formData,
                category_id: selectedCategory.id
            }

            const res = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })

            if (res.ok) {
                setShowModal(false)
                fetchData()
            }
        } catch (e) {
            console.error(e)
        }
    }

    // --- Render ---

    return (
        <div className={styles.adminContainer} style={{ padding: "20px" }}>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="d-flex align-items-center gap-3">
                    {view === "cards" && (
                        <button onClick={() => setView("list")} className={styles.backBtn}>
                            <FaArrowLeft />
                        </button>
                    )}
                    <h1 className={styles.title}>
                        {view === "list" ? "Glossary Home Sections" : `Managing: ${selectedCategory?.heading}`}
                    </h1>
                </div>
                <CommanButton
                    title={view === "list" ? "Add Section" : "Add Card"}
                    theme="blue"
                    url={view === "list" ? handleAddCategory : handleAddCard}
                />
            </div>

            {isLoading ? (
                <div className={styles.spinner}></div>
            ) : view === "list" ? (
                <div className={styles.tableCard}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Heading</th>
                                <th>Order</th>
                                <th>Cards</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map(cat => (
                                <tr key={cat.id}>
                                    <td className={styles.wordCell}>{cat.heading}</td>
                                    <td>{cat.sort_order}</td>
                                    <td>
                                        <span className="badge bg-secondary text-white px-2 py-1 rounded">
                                            {cat.cards?.length || 0} cards
                                        </span>
                                    </td>
                                    <td className={styles.actionsCell}>
                                        <button
                                            className={`${styles.iconBtn}`}
                                            title="Manage Cards"
                                            onClick={() => handleManageCards(cat)}
                                            style={{ color: "#2563eb", background: "rgba(37,99,235,0.1)" }}
                                        >
                                            <FaList />
                                        </button>
                                        <button
                                            className={`${styles.iconBtn} ${styles.edit}`}
                                            onClick={() => handleEditCategory(cat)}
                                        >
                                            <FaEdit />
                                        </button>
                                        <button
                                            className={`${styles.iconBtn} ${styles.delete}`}
                                            onClick={() => handleDeleteCategory(cat.id)}
                                        >
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className={styles.tableCard}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Heading</th>
                                <th>Description</th>
                                <th>Link</th>
                                <th>Order</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {selectedCategory?.cards?.map(card => (
                                <tr key={card.id}>
                                    <td className={styles.wordCell}>{card.heading}</td>
                                    <td style={{ maxWidth: "300px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                        {card.description}
                                    </td>
                                    <td className={styles.slugCell}>{card.link}</td>
                                    <td>{card.sort_order}</td>
                                    <td className={styles.actionsCell}>
                                        <button
                                            className={`${styles.iconBtn} ${styles.edit}`}
                                            onClick={() => handleEditCard(card)}
                                        >
                                            <FaEdit />
                                        </button>
                                        <button
                                            className={`${styles.iconBtn} ${styles.delete}`}
                                            onClick={() => handleDeleteCard(card.id)}
                                        >
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {(!selectedCategory?.cards || selectedCategory.cards.length === 0) && (
                                <tr>
                                    <td colSpan={5} className="text-center py-5 text-muted">No cards in this section</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Modal */}
            {showModal && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <h2 className={styles.modalTitle}>
                            {isEditing ? "Edit" : "Add"} {view === "list" ? "Section" : "Card"}
                        </h2>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Heading</label>
                            <input
                                className={styles.input}
                                value={formData.heading || ""}
                                onChange={e => setFormData({ ...formData, heading: e.target.value })}
                                placeholder="Heading text"
                            />
                        </div>

                        {view === "cards" && (
                            <>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Description</label>
                                    <textarea
                                        className={styles.input}
                                        value={formData.description || ""}
                                        onChange={e => setFormData({ ...formData, description: e.target.value })}
                                        placeholder="Short description"
                                        rows={3}
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Link (Slug)</label>
                                    <input
                                        className={styles.input}
                                        value={formData.link || ""}
                                        onChange={e => setFormData({ ...formData, link: e.target.value })}
                                        placeholder="/glossary/term-slug"
                                    />
                                </div>
                            </>
                        )}

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Sort Order</label>
                            <input
                                type="number"
                                className={styles.input}
                                value={formData.sort_order || 0}
                                onChange={e => setFormData({ ...formData, sort_order: parseInt(e.target.value) })}
                            />
                        </div>

                        <div className={styles.actionButtons}>
                            <CommanButton
                                title="Cancel"
                                theme="outline-blue"
                                url={() => setShowModal(false)}
                            />
                            <CommanButton
                                title="Save"
                                theme="blue"
                                url={view === "list" ? saveCategory : saveCard}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
