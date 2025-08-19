"use client"

import { useState } from "react"
import styles from "./LocationTabsMap.module.scss"
import DynamicHeading from "../dynamicHeading/dynamic-heading"

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
              <svg
                width="65"
                height="65"
                viewBox="0 0 65 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33 10.25C28.261 10.2556 23.7177 12.1406 20.3667 15.4916C17.0157 18.8426 15.1306 23.386 15.125 28.125C15.1207 31.9975 16.3855 35.7648 18.726 38.85C18.726 38.85 19.2135 39.4919 19.2931 39.5845L33 55.75L46.7134 39.5764C46.7849 39.4903 47.274 38.85 47.274 38.85L47.2756 38.8451C49.6145 35.761 50.8788 31.9957 50.875 28.125C50.8694 23.386 48.9844 18.8426 45.6334 15.4916C42.2824 12.1406 37.739 10.2556 33 10.25ZM33 34.625C31.7144 34.625 30.4577 34.2438 29.3888 33.5296C28.3199 32.8153 27.4868 31.8002 26.9948 30.6124C26.5028 29.4247 26.3741 28.1178 26.6249 26.8569C26.8757 25.596 27.4948 24.4378 28.4038 23.5288C29.3129 22.6198 30.471 22.0007 31.7319 21.7499C32.9928 21.4991 34.2997 21.6278 35.4875 22.1198C36.6752 22.6118 37.6903 23.4449 38.4046 24.5138C39.1188 25.5827 39.5 26.8394 39.5 28.125C39.4979 29.8482 38.8123 31.5003 37.5938 32.7188C36.3753 33.9373 34.7233 34.6229 33 34.625Z"
                  fill="#5B5B5B"
                />
              </svg>
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
