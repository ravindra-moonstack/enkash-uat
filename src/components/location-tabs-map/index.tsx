"use client"

import { useState } from "react"
import styles from "./LocationTabsMap.module.scss"
import DynamicHeading from "../dynamic-heading"
import LocationIcon from "@/src/assets/icons/locationIcon"

interface Location {
  name: string
  subtitle: string
  address: string
  mapSrc: string
}

const locations: Location[] = [
  {
    name: "Mumbai",
    subtitle: "(Registered Office)",
    address: `91 Springboard BKC Kalina, 1st Floor & 2nd Floor, Kagalwala House,
              Plot No. 175, Behind Metro House CST Road, Kalina, Bandra Kurla Complex,
              Santacruz East, Mumbai, Maharashtra 400098`,
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.79077949862!2d72.86698157594356!3d19.072934282131033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8f21a283513%3A0x45c6ad9e5e90e6f6!2s91Springboard%20BKC%20Kalina!5e0!3m2!1sen!2sin!4v1755258008527!5m2!1sen!2sin",
  },
  {
    name: "Gurugram",
    subtitle: "",
    address: "Some address for Gurugram office",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.3132373545586!2d77.07047667618244!3d28.50022207573721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19fee33dbcd7%3A0x38cd25456ca6a4e1!2sBeyond%20Just%20Work%20-%20Coworking%20Space%20Udyog%20Vihar%20%7C%20Shared%20Office%20%7C%20Private%20Cabin%20%7C%20Dedicated%20Seats%20%26%20Desk%2C%20At%20Udyog%20Vihar!5e0!3m2!1sen!2sin!4v1755258078740!5m2!1sen!2sin",
  },
  {
    name: "Pune",
    subtitle: "",
    address: "Some address for Pune office",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.1697650244723!2d73.76360877593322!3d18.56638358253613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf89c2860c05%3A0x94c06341589069a6!2s91Springboard%20Baner!5e0!3m2!1sen!2sin!4v1755258129003!5m2!1sen!2sin",
  },
]

export default function LocationTabsMap() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeLocation = locations[activeIndex]

  return (
    <div className={`${styles.LocationTabsMapOuter}`}>
      <div className={`${styles.tabs}`}>
        <div className={`${styles.Heading}`}>
          <DynamicHeading
            content={[
              {
                title: "Where You Will Find Us",
                color: "",
              },
            ]}
            headingTag="h2"
            className="f-6"
          />
        </div>
        {locations.map((loc, idx) => (
          <div
            key={idx}
            className={`${styles.tab} ${
              idx === activeIndex ? styles.active : ""
            }`}
            onClick={() => setActiveIndex(idx)}
          >
            <span className={styles.icon}>
              <LocationIcon />
            </span>
            <div>
              <p className={styles.tabTitle}>{loc.name}</p>
              {loc.subtitle && (
                <p className={styles.tabSubtitle}>{loc.subtitle}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.mapWrapper}>
        <iframe
          src={activeLocation.mapSrc}
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  )
}
