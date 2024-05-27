"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./header.module.scss";
import navBarTopTtitle from "./data/nav-bar";
import {
  enkashWhiteLogo,
  enkashBlueLogo,
  arrowDownBlack,
  arrowDownWhite,
  crossIcon,
  confetti,
  bannerStackBlue,
  bannerBrands,
} from ".";
import ProductModal from "./modal/product-modal";
import ResourcesModal from "./modal/resources-modal";
import SolutionsModal from "./modal/solutions-modal";
import TopBannerWeb from "../top-banner/top-banner-web";

interface props {
  utmSource?: string;
}

const WebHeader = ({ utmSource }: props) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isHeaderBgWhite, setIsHeaderBgWhite] = useState(false);
  const [itemWidth, setItemWidth] = useState(0);
  const itemRef = useRef<HTMLLIElement | null>(null);
  const [slidePosition, setSlidePosition] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  // const signupUrl = utmSource
  //   ? `https://home.enkash.com/signup?utm_source=${utmSource}`
  //   : "https://home.enkash.com/get-started";

  const signupUrl = utmSource
    ? `/sales/?source=home_page?utm_source=${utmSource}`
    : "/sales/?source=home_page";

  useEffect(() => {
    if (itemRef.current) {
      setItemWidth(itemRef.current.offsetWidth);
    }
  }, []);

  const getArrowImageSource = (index: number) => {
    if (hoveredIndex === index) {
      return arrowDownBlack;
    }
    return isHeaderBgWhite ? arrowDownBlack : arrowDownWhite;
  };

  const handleLinkClick = () => {
    setHoveredIndex(null);
    setIsHeaderBgWhite(false);
  };

  return (
    <div className={styles.header_wrapper}>
      <TopBannerWeb />

      <header
        className={`w-full absolute z-10 d-flex flex-column ${styles.header}
       ${isHeaderBgWhite ? styles.bg_white : styles.bg_blue}`}
        onMouseLeave={() => {
          setHoveredIndex(null);
          setIsHeaderBgWhite(false);
        }}
      >
        <nav className="d-flex justify-content-between mb-2 pe-5">
          <div className="d-flex">
            <Link href="/" className={styles.logo_container}>
              <Image
                src={isHeaderBgWhite ? enkashBlueLogo : enkashWhiteLogo}
                alt="logo"
                width={120}
                className="me-3"
              />
            </Link>
            <ul>
              {hoveredIndex !== null && (
                <div
                  className={styles.nav_background_slide}
                  style={{
                    transform: `translateX(${slidePosition}px)`,
                    width: `${itemWidth}px`,
                  }}
                ></div>
              )}

              {navBarTopTtitle.map((item, index) => (
                <li
                  ref={(el) => (itemRefs.current[index] = el)}
                  key={item.name}
                  className={`px-3 d-flex justify-content-center align-items-center cursor-pointer`}
                  onMouseEnter={() => {
                    const position =
                      itemRefs.current[index]?.getBoundingClientRect().left ||
                      0;
                    const width = itemRefs.current[index]?.offsetWidth || 0;

                    setSlidePosition(
                      position -
                        (itemRefs.current[
                          index
                        ]?.parentElement?.getBoundingClientRect().left || 0)
                    );
                    setItemWidth(width);
                    setHoveredIndex(index);
                    setIsHeaderBgWhite(true);

                    if (index === 3) {
                      setIsHeaderBgWhite(false);
                    }
                  }}
                >
                  {index === 3 ? (
                    <Link className={styles.link} href={item.link}>
                      {item.name}
                    </Link>
                  ) : (
                    item.name
                  )}

                  {index !== 3 && (
                    <>
                      <Image
                        src={getArrowImageSource(index)}
                        alt="arrow down icon"
                      />
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.buttons_container}>
            <Link href={signupUrl} target="_blank">
              <div>
                <button className={styles.primary_button}>Sign Up</button>
              </div>
            </Link>

            <div>
              <Link href="https://home.enkash.com/login" target="_blank">
                <button
                  className={`${styles.secondary_button} ${
                    isHeaderBgWhite ? styles.active : ""
                  }`}
                >
                  Login
                </button>
              </Link>
            </div>
          </div>
        </nav>

        {hoveredIndex === 0 && <ProductModal onLinkClick={handleLinkClick} />}
        {hoveredIndex === 1 && <SolutionsModal />}
        {hoveredIndex === 2 && <ResourcesModal />}
      </header>
    </div>
  );
};

export default WebHeader;
