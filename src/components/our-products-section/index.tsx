import Image from "next/image"
import styles from "./style.module.scss"
import { CommanButton, DynamicHeading } from ".."
import { JSX } from "react"

interface Product {
  id: number
  title: string
  description: string
  image: string
  alt: string
  align?: string
  button?: {
    connectUrl: string
    connectText: string
    blueArrow: string
  }
}

interface ProductsSectionProps {
  sectionTitle: string
  preTitle?: {
    content: {
      title: string
      color: string
    }[]
    headingTag: keyof JSX.IntrinsicElements
    className: string
  }
  products: Product[]
}

export default function ProductsSection({
  sectionTitle,
  preTitle,
  products,
}: ProductsSectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {preTitle && (
          <DynamicHeading
            content={preTitle.content}
            headingTag={preTitle.headingTag}
            className={preTitle.className}
          />
        )}
        <DynamicHeading
          content={[{ title: sectionTitle, color: "color-black" }]}
          headingTag="h2"
          className="f-5 text-center"
        />

        <div className={styles.grid}>
          {products.map((product) => (
            <div key={product.id} className={styles.card}>
              <div
                className={styles.imageContainer}
                style={{
                  alignSelf: product.align ? product.align : "flex-end",
                }}
              >
                <Image
                  src={product.image}
                  alt={product.alt}
                  className={styles.cardImage}
                  width={200}
                  height={300}
                />
              </div>

              <div className={styles.content}>
                <div className={styles.titleSection}>
                  <div className={styles.accent}></div>
                  <h4 className={styles.cardTitle}>{product.title}</h4>
                </div>
                <p className={styles.description}>{product.description}</p>
                {product.button && (
                  <div className={styles.buttonContainer}>
                    <div className="d-md-block">
                      <div className={`connectWithUs ${styles.connectWithUs}`}>

                        <CommanButton title={product.button.connectText} theme="white" url={product.button.connectUrl} arrow />
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
