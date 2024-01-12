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
  bannerStack,
} from ".";
import ProductModal from "./modal/product-modal";
import ResourcesModal from "./modal/resources-modal";
import SolutionsModal from "./modal/solutions-modal";

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
  const [showBanner, setShowBanner] = useState(true);

  const signupUrl = utmSource
    ? `https://home.enkash.com/signup?utm_source=${utmSource}`
    : "https://home.enkash.com/get-started";

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
      {showBanner && (
        <div className={styles.desktop_banner}>
          <div className={styles.text}>
            <Image
              src={confetti}
              alt="graffeti icon"
              width={20}
              className="me-2"
            />
            Olympus<sup>TM</sup>, an EnKash** product, is a licensed online
            payment aggregator authorized by the RBI
          </div>
          <Link className={styles.button} href={"/sales"}>
            Join the waitlist
          </Link>
          <Image
            className={styles.cross_image}
            src={crossIcon}
            alt="cross icon"
            onClick={() => {
              setShowBanner(false);
            }}
          />
          <Image
            className={styles.banner_stack}
            src={bannerStack}
            alt="stack image"
          />
        </div>
      )}

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
                  className={styles.background_slide}
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

                  {index !== 2 && (
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
