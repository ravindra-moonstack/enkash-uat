"use client"

import React, { useEffect, useState, useRef } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import styles from "./admin-layout.module.scss"
import { ToastProvider } from "@/src/context/ToastContext"

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()
    const router = useRouter()
    const searchParams = useSearchParams()
    const isAddMediaActive = pathname === '/admin/media' && searchParams.get('add') === 'true'
    const isLibraryActive = pathname === '/admin/media' && !searchParams.get('add')
    const isLoginPage = pathname === "/admin"
    const [currentUser, setCurrentUser] = useState<any>(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [showUserDropdown, setShowUserDropdown] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setShowUserDropdown(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    useEffect(() => {
        const checkAuth = async () => {
            const token = document.cookie
                .split('; ')
                .find(row => row.startsWith('token='))
                ?.split('=')[1];

            if (token) {
                setIsAuthenticated(true)
                if (isLoginPage) {
                    router.push("/admin/dashboard")
                }
                // Fetch user info
                try {
                    const res = await fetch("/api/admin/me")
                    const data = await res.json()
                    if (data.success) {
                        setCurrentUser(data.user)
                    }
                } catch (err) {
                    console.error("Failed to fetch user info", err)
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
        <ToastProvider>
            <div className={styles.adminWrapper}>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
                    media="print"
                    onLoad={(e: any) => (e.currentTarget.media = "all")}
                />
                {/* Sidebar */}
                <aside className={styles.sidebar}>
                    <div className={styles.logoSection}>
                        <Image src="/images/logo.svg" alt="EnKash" width={120} height={40} />
                    </div>

                    <nav className={styles.navSection}>
                        <Link
                            href="/admin/dashboard"
                            className={`${styles.navItem} ${pathname === '/admin/dashboard' ? styles.active : ''}`}
                        >
                            <i className="bi bi-journal-text"></i>
                            Glossary
                        </Link>
                        <Link
                            href="/admin/dashboard/categories"
                            className={`${styles.navItem} ${pathname.includes('/dashboard/categories') ? styles.active : ''}`}
                        >
                            <i className="bi bi-layout-text-window-reverse"></i>
                            Glossary Home Sections
                        </Link>
                        <div className={`${styles.navItemWrapper} ${pathname.includes('/admin/blogs') ? styles.activeWrapper : ''}`}>
                            <Link href="/admin/blogs" className={`${styles.navItem} ${pathname.includes('/admin/blogs') ? styles.active : ''}`}>
                                <i className="bi bi-pencil-square"></i>
                                Blogs
                            </Link>
                            <div className={styles.subMenu}>
                                <Link href="/admin/blogs" className={`${styles.subMenuItem} ${pathname === '/admin/blogs' ? styles.activeSubItem : ''}`}>All Posts</Link>
                                <Link href="/admin/blogs/add" className={`${styles.subMenuItem} ${pathname === '/admin/blogs/add' ? styles.activeSubItem : ''}`}>Add Post</Link>
                                <Link href="/admin/blogs/categories" className={`${styles.subMenuItem} ${pathname === '/admin/blogs/categories' ? styles.activeSubItem : ''}`}>Categories</Link>
                                <Link href="/admin/blogs/tags" className={`${styles.subMenuItem} ${pathname === '/admin/blogs/tags' ? styles.activeSubItem : ''}`}>Tags</Link>
                            </div>
                        </div>
                        <div className={`${styles.navItemWrapper} ${pathname.includes('/admin/media') && !pathname.includes('/admin/media-coverage') ? styles.activeWrapper : ''}`}>
                            <Link href="/admin/media" className={`${styles.navItem} ${pathname.includes('/admin/media') && !pathname.includes('/admin/media-coverage') ? styles.active : ''}`}>
                                <i className="bi bi-images"></i>
                                Media
                            </Link>
                            <div className={styles.subMenu}>
                                <Link href="/admin/media" className={`${styles.subMenuItem} ${isLibraryActive ? styles.activeSubItem : ''}`}>Library</Link>
                                <Link href="/admin/media?add=true" className={`${styles.subMenuItem} ${isAddMediaActive ? styles.activeSubItem : ''}`}>Add Media File</Link>
                            </div>
                        </div>
                        <div className={`${styles.navItemWrapper} ${pathname.includes('/admin/videos') ? styles.activeWrapper : ''}`}>
                            <Link href="/admin/videos" className={`${styles.navItem} ${pathname.includes('/admin/videos') ? styles.active : ''}`}>
                                <i className="bi bi-play-circle"></i>
                                Videos
                            </Link>
                            <div className={styles.subMenu}>
                                <Link href="/admin/videos" className={`${styles.subMenuItem} ${pathname === '/admin/videos' ? styles.activeSubItem : ''}`}>All Videos</Link>
                                <Link href="/admin/videos/add" className={`${styles.subMenuItem} ${pathname === '/admin/videos/add' ? styles.activeSubItem : ''}`}>Add New Video</Link>
                                <Link href="/admin/videos/categories" className={`${styles.subMenuItem} ${pathname === '/admin/videos/categories' ? styles.activeSubItem : ''}`}>Video Categories</Link>
                            </div>
                        </div>
                        <div className={`${styles.navItemWrapper} ${pathname.includes('/admin/media-coverage') ? styles.activeWrapper : ''}`}>
                            <Link href="/admin/media-coverage" className={`${styles.navItem} ${pathname.includes('/admin/media-coverage') ? styles.active : ''}`}>
                                <i className="bi bi-newspaper"></i>
                                Media Coverage
                            </Link>
                            <div className={styles.subMenu}>
                                <Link href="/admin/media-coverage" className={`${styles.subMenuItem} ${pathname === '/admin/media-coverage' ? styles.activeSubItem : ''}`}>All Coverage</Link>
                                <Link href="/admin/media-coverage/add" className={`${styles.subMenuItem} ${pathname === '/admin/media-coverage/add' ? styles.activeSubItem : ''}`}>Add New</Link>
                            </div>
                        </div>
                        <Link
                            href="/admin/audit-logs"
                            className={`${styles.navItem} ${pathname === '/admin/audit-logs' ? styles.active : ''}`}
                        >
                            <i className="bi bi-clipboard-data"></i>
                            Audit Logs
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

                        <div
                            ref={dropdownRef}
                            className={styles.userInfo}
                            onClick={() => setShowUserDropdown(!showUserDropdown)}
                        >
                            <span className={styles.userName}>{currentUser?.name || "Admin User"}</span>
                            <div className={styles.userAvatar}>{currentUser?.name?.[0] || "A"}</div>

                            {showUserDropdown && (
                                <div className={styles.userDropdown}>
                                    <div className={styles.dropdownItem} onClick={() => router.push("/admin/profile")}>
                                        <i className="bi bi-person"></i>
                                        Profile
                                    </div>
                                    <div className={`${styles.dropdownItem} ${styles.logout}`} onClick={handleLogout}>
                                        <i className="bi bi-box-arrow-right"></i>
                                        Logout
                                    </div>
                                </div>
                            )}
                        </div>
                    </header>

                    <div className={styles.pageContainer}>
                        {children}
                    </div>
                </main>

            </div>
        </ToastProvider>
    )
}
