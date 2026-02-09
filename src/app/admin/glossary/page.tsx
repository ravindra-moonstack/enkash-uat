"use client"

import React, { useState, useEffect, useRef } from "react"
import styles from "./glossary-admin.module.scss"
import { CommanButton } from "@/src/components"
import { nameToUrl } from "@/src/utils/stringUtils"


interface GlossaryItem {
    word: string
    slug: string
    content: string
    showRelatedBlogs: boolean
    blogWord: string
}

const GlossaryAdmin = () => {
    // Auth Check
    useEffect(() => {
        const checkAuth = () => {
            if (typeof window !== "undefined") {
                const token = document.cookie
                    .split('; ')
                    .find(row => row.startsWith('token='))
                    ?.split('=')[1];

                if (!token) {
                    window.location.href = "/admin";
                }
            }
        };

        checkAuth();

        // Optional: Add an interval to check for token expiration if needed
        const interval = setInterval(checkAuth, 10000); // Check every 10 seconds
        return () => clearInterval(interval);
    }, []);

    const [word, setWord] = useState("")
    const [slug, setSlug] = useState("")
    const [isSlugModified, setIsSlugModified] = useState(false)
    const [content, setContent] = useState("")
    const [showRelatedBlogs, setShowRelatedBlogs] = useState(false)
    const [blogWord, setBlogWord] = useState("")
    const [showHtmlView, setShowHtmlView] = useState(false)
    const [htmlContent, setHtmlContent] = useState("")

    const editorRef = useRef<HTMLDivElement>(null)
    const quillInstance = useRef<any>(null)

    useEffect(() => {
        if (typeof window !== "undefined" && editorRef.current && !quillInstance.current) {
            import("quill").then((Quill) => {
                const QuillNamespace = Quill.default || Quill

                const Toolbar = QuillNamespace.import("modules/toolbar")

                const emailVarsHandler = function (this: any, value: string) {
                    const quill = this.quill
                    const cursorPosition = quill.getSelection()?.index || 0
                    let textToInsert = ""

                    switch (value) {
                        case "1":
                            textToInsert = "{AccountURL}"
                            break
                        case "2":
                            textToInsert = "{FirstName}"
                            break
                        case "3":
                            textToInsert = "{Login}"
                            break
                        case "4":
                            textToInsert = "{OrganizationName}"
                            break
                        case "5":
                            textToInsert = "{SupportEmail}"
                            break
                        default:
                            textToInsert = "Please add an email variable."
                    }

                    quill.insertText(cursorPosition, textToInsert)
                    quill.setSelection(cursorPosition + textToInsert.length)
                }

                const showHtmlHandler = function (this: any) {
                    toggleHtmlView()
                }
                //@ts-ignore
                const quill = new QuillNamespace(editorRef.current, {
                    modules: {
                        toolbar: {
                            container: [
                                [{ emailVars: ["1", "2", "3", "4", "5"] }],
                                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                                [{ color: [] }, { background: [] }],
                                ["bold", "italic", "underline", "strike"],
                                [{ indent: "-1" }, { indent: "+1" }],
                                [{ align: [] }],
                                ["clean"],
                                ["link", "image"],
                                ["showHtml"],
                            ],
                            handlers: {
                                emailVars: emailVarsHandler,
                                showHtml: showHtmlHandler,
                            },
                        },
                    },
                    theme: "snow",
                    placeholder: "Write the definition or content here...",
                })

                quillInstance.current = quill

                quill.on("text-change", () => {
                    const html = quill.root.innerHTML
                    setContent(html)
                })
            })
        }
    }, [])

    const toggleHtmlView = () => {
        if (!showHtmlView) {
            setHtmlContent(content)
        } else {
            if (quillInstance.current) {
                quillInstance.current.root.innerHTML = htmlContent
                setContent(htmlContent)
            }
        }
        setShowHtmlView(!showHtmlView)
    }

    const handleHtmlChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setHtmlContent(e.target.value)
    }

    const applyHtmlChanges = () => {
        if (quillInstance.current) {
            quillInstance.current.root.innerHTML = htmlContent
            setContent(htmlContent)
        }
        setShowHtmlView(false)
    }

    const handleWordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setWord(e.target.value)
    }

    useEffect(() => {
        if (isSlugModified) return

        const handler = setTimeout(() => {
            setSlug(nameToUrl(word))
        }, 3000)

        return () => clearTimeout(handler)
    }, [word, isSlugModified])

    const handleSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value
        setSlug(val)
        if (val === "") {
            setIsSlugModified(false)
        } else {
            setIsSlugModified(true)
        }
    }

    const handleSubmit = (e?: React.FormEvent) => {
        if (e) e.preventDefault()

        const glossaryData: GlossaryItem = {
            word,
            slug,
            content, // This is in HTML format from Quill
            showRelatedBlogs,
            blogWord: showRelatedBlogs ? blogWord : "",
        }

        console.log("Glossary Item Data:", glossaryData)
        console.log("Content HTML:", content)
        console.log("Content Text:", quillInstance.current?.getText())
    }

    const handleReset = () => {
        setWord("")
        setSlug("")
        setIsSlugModified(false)
        setContent("")
        setHtmlContent("")
        setShowRelatedBlogs(false)
        setShowHtmlView(false)
        setBlogWord("")

        if (quillInstance.current) {
            quillInstance.current.setText("")
        }
    }

    return (
        <div className={styles.adminContainer}>
            <div className={styles.contentWrapper}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Glossary Management</h1>
                    <p className={styles.subtitle}>Create and manage glossary items</p>
                </div>

                <form onSubmit={handleSubmit} className={styles.glossaryForm}>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="word">
                            Word <span className={styles.required}>*</span>
                        </label>
                        <input
                            id="word"
                            type="text"
                            className={styles.input}
                            placeholder="Enter the word or term"
                            value={word}
                            onChange={handleWordChange}
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="slug">
                            Slug <span className={styles.required}>*</span>
                        </label>
                        <input
                            id="slug"
                            type="text"
                            className={styles.input}
                            placeholder="url-friendly-slug"
                            value={slug}
                            onChange={handleSlugChange}
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="content">
                            Definition/Content <span className={styles.required}>*</span>
                        </label>

                        {!showHtmlView ? (
                            <div className={styles.editorWrapper}>
                                <div ref={editorRef} className={styles.quillEditor} />
                            </div>
                        ) : (
                            <div className={styles.htmlEditorWrapper}>
                                <div className={styles.htmlEditorHeader}>
                                    <span className={styles.htmlEditorTitle}>HTML Editor</span>
                                    <button
                                        type="button"
                                        onClick={applyHtmlChanges}
                                        className={styles.applyHtmlButton}
                                    >
                                        Apply Changes
                                    </button>
                                </div>
                                <textarea
                                    className={styles.htmlEditor}
                                    value={htmlContent}
                                    onChange={handleHtmlChange}
                                    placeholder="Edit HTML here..."
                                />
                            </div>
                        )}
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.checkboxLabel}>
                            <input
                                type="checkbox"
                                checked={showRelatedBlogs}
                                onChange={(e) => setShowRelatedBlogs(e.target.checked)}
                                className={styles.checkbox}
                            />
                            <span className={styles.checkboxText}>
                                Show related blogs for this glossary item
                            </span>
                        </label>
                    </div>

                    {showRelatedBlogs && (
                        <div className={styles.blogLinksSection}>
                            <h3 className={styles.sectionTitle}>Related Blog</h3>
                            <div className={styles.formGroup}>
                                <label className={styles.label} htmlFor="blogWord">
                                    Blog Related Word
                                </label>
                                <input
                                    id="blogWord"
                                    type="text"
                                    className={styles.input}
                                    placeholder="Enter one related blog word"
                                    value={blogWord}
                                    onChange={(e) => setBlogWord(e.target.value)}
                                />
                            </div>
                        </div>
                    )}

                    <div className={styles.actionButtons}>
                        <CommanButton title="Reset Form" theme="outline-blue" url={() => { handleReset() }} />
                        <CommanButton title="Save Glossary Item" theme="blue" url={() => { handleSubmit() }} />
                    </div>
                </form>

            </div>
        </div>
    )
}

export default GlossaryAdmin