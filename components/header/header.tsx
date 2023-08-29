"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "./header.module.scss";
import navBarTopTtitle from "../../constant/nav-bar";
import utmSources from "@/constant/utm-source";
import PrimaryButton from "../buttons/primary-button/primary-button";
import {
  enkashWhiteLogo,
  enkashBlueLogo,
  arrowDownBlack,
  arrowDownWhite,
  arrowUpBlue,
} from ".";
import ProductModal from "./modal/product-modal";
import SolutionsModal from "./modal/solutions-modal";
import ResourcesModal from "./modal/resources-modal";

const singupUrl = `https://home.enkash.com/signup?utm_source=${utmSources["nav_bar"]}`;
const loginUrl = "https://home.enkash.com/login";

const Header = () => {
  const getArrowImageSource = (index: number) => {
    if (hoveredIndex === index) {
      //replace blue logo
      return arrowDownBlack;
    }

    return isHeaderBgWhite ? arrowDownBlack : arrowDownWhite;
  };

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isHeaderBgWhite, setIsHeaderBgWhite] = useState(false);

  return (
    <header
      className={`w-full absolute z-10 d-flex flex-column ${styles.header} ${
        isHeaderBgWhite ? "bg-white color-indi-volt" : ""
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
            {navBarTopTtitle.map((item, index) => (
              <li
                key={item.name}
                className={`px-3 d-flex justify-content-center align-items-center ${
                  hoveredIndex === index ? styles.selected_border : ""
                }`}
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
          <PrimaryButton title="Sign Up" url={singupUrl} theme="theme-blue"/>
          <span className="mx-2"></span>
          <PrimaryButton title="Log In" url={loginUrl} theme="theme-blue"/>
        </div>
      </nav>

      {hoveredIndex === 0 && <ProductModal />}
      {hoveredIndex === 1 && <SolutionsModal />}
      {hoveredIndex === 3 && <ResourcesModal />}
    </header>
  );
};

export default Header;
