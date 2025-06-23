"use client"
import styles from "./page.module.scss"
import { projects } from "./data"
import Card from "./card/card"

interface Project {
  title: string
  description: string
  src: string
  link: string
  color: string
}

export default function CardAnimation() {
  return (
    <main className={styles.main}>
      {projects.map((project: Project, i: number) => {
        return <Card key={`p_${i}`} i={i} {...project} />
      })}
    </main>
  )
}
