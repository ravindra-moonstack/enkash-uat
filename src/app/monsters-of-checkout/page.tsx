import React from "react"
import MonstersHeroSection from "../../components/sections/monsters-hero-section"
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
    <main className={styles.monsters_page_wrapper}>
      <BodyOverflowClip />
      <MonstersHeroSection />

      <div className={styles.monster_section}>
        <div className="max-w-auto">
          <div className={styles.section_header}>
            <span>The Monsters</span>
            <h2>The Wanted List</h2>
            <p>
              Every failure in checkout has a face, a voice, and a rap sheet.
              These four are responsible for the revenue you never got.
            </p>
          </div>
          <MonstersCardsSection monsters={monsters} />
        </div>
      </div>

      <MonstersSliderSection />

      <div className={styles.cta_section}>
        <div className="max-w-auto">
          <div className="d-flex flex-column align-items-center">
            <h2>
              Four monsters.One gateway. <span>Every moment protected.</span>
            </h2>
            <p>Your customer is ready to pay.Don’t let a monster stop them.</p>
            <Link href="/sales" className={styles.secondary_cta}>
              Book your Demo
            </Link>
          </div>
        </div>
      </div>

      <div id="monsters-form" className={styles.monsters_form}>
        <MonstersPartnerShipForm
          features={[
            { id: 1, text: "Industry-best earnings" },
            { id: 2, text: "Fast activation for your clients" },
            { id: 3, text: "Support for accelerated growth" },
          ]}
          formComponent={<MonstersFormClient />}
        />
      </div>
    </main>
  )
}

export default MonstersOfCheckout
