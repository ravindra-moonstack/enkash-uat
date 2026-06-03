"use client"

import React, { createContext, useContext, useState, useCallback } from "react"
import styles from "./toast.module.scss"

type ToastType = "success" | "error" | "info" | "warning"

interface Toast {
  id: number
  message: string
  type: ToastType
}

interface ToastContextType {
  showToast: (message: string, type: ToastType) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<Toast[]>([])

  const showToast = useCallback(
    (message: string, type: ToastType = "success") => {
      const id = Date.now()
      setToasts((prev) => [...prev, { id, message, type }])
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id))
      }, 3000)
    },
    []
  )

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className={styles.toastContainer}>
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`${styles.toast} ${styles[toast.type]}`}
          >
            <div className={styles.icon}>
              {toast.type === "success" && (
                <i className="bi bi-check-circle-fill"></i>
              )}
              {toast.type === "error" && (
                <i className="bi bi-exclamation-circle-fill"></i>
              )}
              {toast.type === "info" && (
                <i className="bi bi-info-circle-fill"></i>
              )}
              {toast.type === "warning" && (
                <i className="bi bi-exclamation-triangle-fill"></i>
              )}
            </div>
            <div className={styles.message}>{toast.message}</div>
            <button
              className={styles.closeBtn}
              onClick={() =>
                setToasts((prev) => prev.filter((t) => t.id !== toast.id))
              }
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export const useToast = () => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return context
}
