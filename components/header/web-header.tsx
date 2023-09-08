"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./header.module.scss";
import navBarTopTtitle from "../../constant/nav-bar";
import utmSources from "@/constant/utm-source";
import PrimaryButton from "../buttons/primary-button/primary-button";
import {
  enkashWhiteLogo,
  enkashBlueLogo,
  arrowDownBlack,
  arrowDownWhite,
} from ".";
import ProductModal from "./modal/product-modal";
import SolutionsModal from "./modal/solutions-modal";
import ResourcesModal from "./modal/resources-modal";

const singupUrl = `https://home.enkash.com/signup?utm_source=${utmSources["nav_bar"]}`;
const loginUrl = "https://home.enkash.com/login";

const WebHeader = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isHeaderBgWhite, setIsHeaderBgWhite] = useState(false);
  const [itemWidth, setItemWidth] = useState(0);
  const itemRef = useRef<HTMLLIElement | null>(null);

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

  return (
    <header
      className={`w-full absolute z-10 d-flex flex-column ${styles.header} ${
        isHeaderBgWhite
          ? "bg-white color-indi-volt"
          : "bg-indi-volt color-white"
      }`}
      onMouseLeave={() => {
        setHoveredIndex(null);
        setIsHeaderBgWhite(false);
      }}
    >
      <nav className="d-flex justify-content-between">
        <div className="d-flex">
          <Link href="/" className={styles.logo_container}>
            <Image
              src={isHeaderBgWhite ? enkashBlueLogo : enkashWhiteLogo}
              alt="logo"
              width={120}
            />
          </Link>
          <ul>
            {hoveredIndex !== null && (
              <div
                className={styles.background_slide}
                style={{
                  transform: `translateX(${hoveredIndex * (itemWidth + 10)}px)`, // If you have padding/margin, add its value multiplied by hoveredIndex
                  width: `${itemWidth}px`,
                }}
              ></div>
            )}
            {navBarTopTtitle.map((item, index) => (
              <li
                ref={index === 0 ? itemRef : null}
                key={item.name}
                className={`px-3 d-flex justify-content-center align-items-center`}
                onMouseEnter={() => {
                  if (index !== 2) {
                    setHoveredIndex(index);
                    setIsHeaderBgWhite(true);
                  }
                }}
              >
                {item.name}
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
          <PrimaryButton
            title="Sign Up"
            url={singupUrl}
            theme="theme-blue"
            size="small"
          />
          <span className="mx-2"></span>
          <PrimaryButton
            title="Log In"
            url={loginUrl}
            theme="theme-blue"
            size="small"
          />
        </div>
      </nav>

      {hoveredIndex === 0 && <ProductModal />}
      {hoveredIndex === 1 && <SolutionsModal />}
      {hoveredIndex === 3 && <ResourcesModal />}
    </header>
  );
};

export default WebHeader;
