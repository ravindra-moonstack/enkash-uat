"use client";
import styles from "./page.module.scss";
import { useEffect, useRef } from "react";
import { useScroll, MotionValue } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { projects } from "./data";
import Card from "./card/card";

interface Project {
  title: string;
  description: string;
  src: string;
  link: string;
  color: string;
}

export default function CardAnimation() {
  // const container = useRef<HTMLDivElement>(null);
  // const { scrollYProgress } = useScroll({
  //   target: container,
  //   offset: ["start start", "end end"],
  // });

  // useEffect(() => {
  //   const lenis = new Lenis();

  //   function raf(time: number) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);
  // }, []);

  return (
    <main className={styles.main}>
      {projects.map((project: Project, i: number) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        const range: [number, number] = [i * 0.25, 1];

        return <Card url={""} key={`p_${i}`} i={i} {...project} />;
      })}
    </main>
  );
}
