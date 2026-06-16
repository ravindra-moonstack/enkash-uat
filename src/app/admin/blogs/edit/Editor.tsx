"use client"

import React, { useEffect, useRef, useState } from "react"

interface EditorProps {
  value: string
  onChange: (value: string) => void
  disabled?: boolean
  placeholder?: string
}

declare global {
  interface Window {
    CKEDITOR: any
  }
}

export default function Editor({
  value,
  onChange,
  disabled,
  placeholder,
}: EditorProps) {
  const editorRef = useRef<any>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const valueRef = useRef(value)
  const isInternalChange = useRef(false)

  // Keep valueRef updated with the latest prop
  useEffect(() => {
    valueRef.current = value
  }, [value])

  useEffect(() => {
    // Load CKEditor script if not already present
    if (window.CKEDITOR) {
      setIsLoaded(true)
      return
    }

    const script = document.createElement("script")
    script.src = "/ckeditor/ckeditor.js"
    script.async = true
    script.onload = () => {
      setIsLoaded(true)
    }
    script.onerror = () => {
      console.error("Failed to load CKEditor 4 script from /public/ckeditor/")
    }
    document.head.appendChild(script)
  }, [])

  useEffect(() => {
    if (isLoaded && textareaRef.current && !editorRef.current) {
      // Initialize CKEditor
      const editor = window.CKEDITOR.replace(textareaRef.current)

      editor.on("instanceReady", () => {
        setIsReady(true)
        editor.setData(valueRef.current || "")
        if (disabled) {
          editor.setReadOnly(true)
        }
      })

      editor.on("change", () => {
        const data = editor.getData()
        isInternalChange.current = true
        onChange(data)
      })

      editorRef.current = editor
    }

    return () => {
      if (editorRef.current) {
        editorRef.current.destroy()
        editorRef.current = null
        setIsReady(false)
      }
    }
  }, [isLoaded, placeholder])

  // Synchronize value from props to editor (one-way from state if needed)
  useEffect(() => {
    if (editorRef.current && isReady) {
      if (isInternalChange.current) {
        isInternalChange.current = false
        return
      }
      const currentData = editorRef.current.getData()
      if (currentData !== value) {
        editorRef.current.setData(value || "")
      }
    }
  }, [value, isReady])

  // Handle read-only state dynamically
  useEffect(() => {
    if (editorRef.current && isReady) {
      editorRef.current.setReadOnly(!!disabled)
    }
  }, [disabled, isReady])

  // Expose tinymce bridge for Add Media modal cursor insertions
  useEffect(() => {
    if (editorRef.current && isReady) {
      ;(window as any).tinymce = {
        activeEditor: {
          insertContent: (contentHtml: string) => {
            if (editorRef.current) {
              editorRef.current.insertHtml(contentHtml)
            }
          },
        },
      }
    }
  }, [isReady])

  return (
    <div className="ckeditor-container w-full rounded-xl border border-gray-200 overflow-hidden shadow-sm">
      {!isLoaded && (
        <div className="flex items-center justify-center p-8 bg-gray-50 text-gray-500 italic">
          <div className="animate-spin rounded-full h-5 w-5 border-2 border-purple-600 border-t-transparent mr-3"></div>
          Loading Editor...
        </div>
      )}

      <textarea
        ref={textareaRef}
        defaultValue={value}
        className="invisible h-0 w-0"
      />
      <style jsx global>{`
        /* Minimalist customization for CKEditor 4 UI */
        .cke_chrome {
          border: none !important;
          box-shadow: none !important;
        }
        .cke_top {
          background: #f9fafb !important;
          border-bottom: 1px solid #f3f4f6 !important;
          padding: 8px !important;
        }
        .cke_bottom {
          background: #f9fafb !important;
          border-top: 1px solid #f3f4f6 !important;
        }
        .cke_contents {
          padding: 0 !important;
        }
        .cke_notification_warning {
          display: none !important;
        }
      `}</style>
    </div>
  )
}
