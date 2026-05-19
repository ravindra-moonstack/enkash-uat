
"use client"

import React, { useState, useEffect, useRef, useMemo } from "react"
import { CommanButton } from "@/src/components"
import styles from "../glossary-admin.module.scss"
import { FaEdit, FaTrash, FaArrowLeft, FaList } from "react-icons/fa"
import ConfirmationModal from "../../blogs/ConfirmationModal"


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
    const [initialData, setInitialData] = useState<any>({})
    const [showModal, setShowModal] = useState(false)
    const [isSaving, setIsSaving] = useState(false)
    const isSavingRef = useRef(false)

    // Confirmation Modal State
    const [showConfirm, setShowConfirm] = useState(false)
    const [confirmConfig, setConfirmConfig] = useState<{
        title: string;
        message: string;
        onConfirm: () => void;
        type: "primary" | "danger";
    } | null>(null)

    const isDirty = useMemo(() => {
        return JSON.stringify(formData) !== JSON.stringify(initialData);
    }, [formData, initialData]);

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
        const defaultData = { heading: "", sort_order: categories.length + 1 };
        setFormData(defaultData)
        setInitialData(defaultData)
        setIsEditing(false)
        setEditId(null)
        setShowModal(true)
    }

    const handleEditCategory = (cat: Category) => {
        const data = { heading: cat.heading, sort_order: cat.sort_order };
        setFormData(data)
        setInitialData(data)
        setIsEditing(true)
        setEditId(cat.id)
        setShowModal(true)
    }

    const handleDeleteCategory = async (id: number) => {
        setConfirmConfig({
            title: "Delete Category",
            message: "Are you sure? This will delete the category and all its cards.",
            type: "danger",
            onConfirm: async () => {
                try {
                    const res = await fetch(`/api/admin/glossary/categories/${id}`, { method: "DELETE" })
                    if (res.ok) fetchData()
                } catch (e) {
                    console.error(e)
                }
            }
        })
        setShowConfirm(true)
    }

    const saveCategory = async () => {
        if (isSavingRef.current || !isDirty) return
        isSavingRef.current = true
        setIsSaving(true)
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
        } finally {
            isSavingRef.current = false
            setIsSaving(false)
        }
    }

    // --- Card Actions ---

    const handleManageCards = (cat: Category) => {
        setSelectedCategory(cat)
        setView("cards")
    }

    const handleAddCard = () => {
        if (!selectedCategory) return
        const defaultData = {
            heading: "",
            description: "",
            link: "",
            sort_order: (selectedCategory.cards?.length || 0) + 1
        };
        setFormData(defaultData)
        setInitialData(defaultData)
        setIsEditing(false)
        setEditId(null)
        setShowModal(true)
    }

    const handleEditCard = (card: Card) => {
        const data = { ...card };
        setFormData(data)
        setInitialData(data)
        setIsEditing(true)
        setEditId(card.id)
        setShowModal(true)
    }

    const handleDeleteCard = async (id: number) => {
        setConfirmConfig({
            title: "Delete Card",
            message: "Are you sure you want to delete this card?",
            type: "danger",
            onConfirm: async () => {
                try {
                    const res = await fetch(`/api/admin/glossary/category-cards/${id}`, { method: "DELETE" })
                    if (res.ok) fetchData()
                } catch (e) {
                    console.error(e)
                }
            }
        })
        setShowConfirm(true)
    }

    const saveCard = async () => {
        if (!selectedCategory || isSavingRef.current || !isDirty) return
        isSavingRef.current = true
        setIsSaving(true)
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
        } finally {
            isSavingRef.current = false
            setIsSaving(false)
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
                                min="1"
                                value={formData.sort_order || 1}
                                onChange={e => {
                                    const val = parseInt(e.target.value);
                                    setFormData({ ...formData, sort_order: isNaN(val) || val < 1 ? 1 : val });
                                }}
                            />
                        </div>

                        <div className={styles.actionButtons}>
                            <CommanButton
                                title="Cancel"
                                theme="outline-blue"
                                url={() => setShowModal(false)}
                            />
                            <CommanButton
                                title={isSaving ? "Saving..." : "Save"}
                                theme="blue"
                                url={view === "list" ? saveCategory : saveCard}
                                isDisabled={isSaving || !isDirty}
                            />
                        </div>
                    </div>
                </div>
            )}

            {confirmConfig && (
                <ConfirmationModal
                    show={showConfirm}
                    onClose={() => setShowConfirm(false)}
                    onConfirm={confirmConfig.onConfirm}
                    title={confirmConfig.title}
                    message={confirmConfig.message}
                    type={confirmConfig.type}
                    confirmLabel="Confirm"
                />
            )}
        </div>
    )
}
