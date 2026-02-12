"use client"

import React, { useState } from "react"
import styles from "./admin.module.scss"
import Image from "next/image"
import { CommanButton } from "@/src/components"

const LoginClient = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const handleSubmit = async (e?: React.FormEvent) => {
        if (e) e.preventDefault()
        setLoading(true)
        setError("")

        try {
            const response = await fetch('/api/admin/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            })

            const data = await response.json()

            if (data.success) {
                // Store token in cookie with 1 hour expiry (matching JWT)
                document.cookie = `token=${data.token}; path=/; max-age=3600; SameSite=Strict`;
                window.location.href = "/admin/glossary"
            } else {
                setError(data.message || "Login failed")
            }
        } catch (err) {
            setError("Something went wrong. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className={styles.adminContainer}>
            <div className={styles.loginCard}>
                <div className={styles.logoSection}>
                    <Image src="/images/logo.svg" alt="EnKash" width={150} height={75} />
                </div>

                <h1 className={styles.title}>Welcome Back</h1>
                <p className={styles.subtitle}>Please enter your details to sign in</p>

                {error && <p className={styles.errorText}>{error}</p>}

                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="email">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            className={styles.input}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            className={styles.input}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="w-100 d-flex justify-content-center">
                        <CommanButton
                            title={loading ? "Signing In..." : "Sign In"}
                            isDisabled={loading}
                            url={() => handleSubmit()}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginClient
