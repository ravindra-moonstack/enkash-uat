import React from "react"
import MonstersHeroSection from "../../components/sections/monsters-hero-section"
import MonstersStorySection from "../../components/sections/monsters-story-section"
import BodyOverflowClip from "./BodyOverflowClip"
import styles from "./page.module.scss"
import MonstersPartnerShipForm from "../../components/forms/monsters-partnership-form"
import MonstersFormClient from "@/src/components/form-wrapper/MonstersFormWrapper"
import MonstersSliderSection from "../../components/sections/monsters-slider-section"
import Link from "next/link"
import Image from "next/image"
import MonstersCardsSection from "@/src/components/sections/monsters-section/page"
import { monsters } from "./data"

const generateMetaData = () => {
  return {
    title: "Enkash - Monsters of Checkout",
    description: "Enkash - Monsters of Checkout",
    openGraph: {
      title: "Enkash - Monsters of Checkout",
      description: "Enkash - Monsters of Checkout",
      url: "https://enkash.com/monsters-of-checkout",
      siteName: "Enkash",
      images: [
        {
          url: "https://enkash.com/monsters-of-checkout/og-image.png",
          width: 1200,
          height: 630,
          alt: "Enkash - Monsters of Checkout",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Enkash - Monsters of Checkout",
      description: "Enkash - Monsters of Checkout",
      images: ["https://enkash.com/monsters-of-checkout/og-image.png"],
    },
  }
}

const MonstersOfCheckout = () => {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        html, body {
          scroll-behavior: smooth !important;
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
        ::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
          background: transparent !important;
        }
      `,
        }}
      />
      <main className={styles.monsters_page_wrapper}>
        <BodyOverflowClip />
        <MonstersHeroSection />

        <MonstersStorySection />

        <div className={styles.monster_section}>
          <div className="max-w-auto">
            <div className={styles.section_header}>
              <h2>The Wanted List</h2>
              <p>
                Every failure in checkout has a face, a voice, and a rap sheet.
                These four are responsible for the revenue you never got.
              </p>
            </div>
            <MonstersCardsSection monsters={monsters} />
          </div>
          <div className={styles.monster_section_overlay} />
        </div>

        <div className="bg-white">
          <MonstersSliderSection />

          <div id="monsters-form" className={styles.monsters_form}>
            <MonstersPartnerShipForm formComponent={<MonstersFormClient />} />
          </div>
        </div>
      </main>
    </>
  )
}

export default MonstersOfCheckout
