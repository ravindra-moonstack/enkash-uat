"use client"

import Link from "next/link"
import Image from "next/image"
import styles from "./style.module.scss"
import { DynamicHeading } from ".."

interface Product {
    id: number
    title: string
    description: string
    image: string
    alt: string
    linkText: string
    linkUrl: string
    align?: string
    button?: {
        connectUrl: string
        connectText: string
        blueArrow: string
    }
}

interface ProductsSectionProps {
    sectionTitle: string
    products: Product[]
}

export default function ProductsSection({ sectionTitle, products }: ProductsSectionProps) {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Section Title */}
                <DynamicHeading
                    content={[{ title: sectionTitle, color: "color-black" }]}
                    headingTag="h2"
                    className="f-5 text-center"
                />

                {/* Products Grid */}
                <div className={styles.grid}>
                    {products.map((product) => (
                        <div key={product.id} className={styles.card}>
                            {/* Image */}
                            <div className={styles.imageContainer} style={{ alignSelf: product.align ? product.align : "flex-end" }}>
                                <img
                                    src={product.image}
                                    alt={product.alt}
                                    className={styles.cardImage}
                                />
                            </div>
                            {/* Content */}
                            <div className={styles.content}>
                                <div className={styles.titleSection}>
                                    <div className={styles.accent}></div>
                                    <h4 className={styles.cardTitle}>
                                        {product.title}
                                    </h4>
                                </div>
                                <p className={styles.description}>{product.description}</p>
                                {product.button && (
                                    <div className={styles.buttonContainer}>
                                        <div>
                                            <div className="d-md-block">
                                                <div className={`connectWithUs ${styles.connectWithUs}`}>
                                                    <Link href={product.button.connectUrl}>
                                                        <DynamicHeading
                                                            content={[
                                                                { title: product.button.connectText, color: "color-equity-blue" },
                                                            ]}
                                                            headingTag="p"
                                                            className="mb-0 f-5"
                                                        />
                                                        <Image
                                                            src={product.button.blueArrow}
                                                            alt="blue Arrow"
                                                            width={15}
                                                            height={15}
                                                            className="ms-2"
                                                        />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
