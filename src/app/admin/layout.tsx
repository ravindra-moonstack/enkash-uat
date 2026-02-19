"use client"

import React, { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import styles from "./admin-layout.module.scss"

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()
    const router = useRouter()
    const isLoginPage = pathname === "/admin"
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const checkAuth = () => {
            const token = document.cookie
                .split('; ')
                .find(row => row.startsWith('token='))
                ?.split('=')[1];

            if (token) {
                setIsAuthenticated(true)
                if (isLoginPage) {
                    router.push("/admin/glossary")
                }
            } else {
                setIsAuthenticated(false)
                if (!isLoginPage) {
                    router.push("/admin")
                }
            }
            setIsLoading(false)
        };

        checkAuth();
    }, [isLoginPage, router]);

    const handleLogout = () => {
        document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Strict";
        router.push("/admin")
    }

    if (isLoading) {
        return (
            <div className={styles.fullScreenWrapper}>
                <Image
                    src="/images/loader.gif"
                    alt="Loading..."
                    width={75}
                    height={75}
                    priority
                />
            </div>
        )
    }

    if (isLoginPage && !isAuthenticated) {
        return <div className={styles.fullScreenWrapper}>{children}</div>
    }

    return (
        <div className={styles.adminWrapper}>
            {/* Sidebar */}
            <aside className={styles.sidebar}>
                <div className={styles.logoSection}>
                    <Image src="/images/logo.svg" alt="EnKash" width={120} height={40} />
                    {/* <span className={styles.logoText}>Admin Panel</span> */}
                </div>

                <nav className={styles.navSection}>
                    <Link
                        href="/admin/glossary"
                        className={`${styles.navItem} ${pathname === '/admin/glossary' ? styles.active : ''}`}
                    >
                        <i className="bi bi-journal-text"></i>
                        Glossary
                    </Link>
                    <Link
                        href="/admin/glossary/categories"
                        className={`${styles.navItem} ${pathname.includes('/glossary/categories') ? styles.active : ''}`}
                    >
                        <i className="bi bi-layout-text-window-reverse"></i>
                        Glossary Home Sections
                    </Link>
                </nav>

                <div className={styles.footerSection}>
                    <button className={styles.logoutBtn} onClick={handleLogout}>
                        <i className="bi bi-box-arrow-right"></i>
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className={styles.mainContent}>
                <header className={styles.topBar}>
                    <div className={styles.breadcrumb}>
                        Admin / {pathname.split('/').slice(2).map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(' / ')}
                    </div>

                    <div className={styles.userInfo}>
                        <span className={styles.userName}>Admin User</span>
                        <div className={styles.userAvatar}>A</div>
                    </div>
                </header>

                <div className={styles.pageContainer}>
                    {children}
                </div>
            </main>
        </div>
    )
}
