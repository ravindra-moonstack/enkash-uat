"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "./header.module.scss";
import navBarTopTtitle from "../../constant/nav-bar";
import utmSources from "@/constant/utm-source";
import PrimaryButton from "../primary-button/primary-button";
import {
  enkashWhiteLogo,
  enkashBlueLogo,
  arrowDownBlack,
  arrowDownWhite,
  arrowUpBlue,
} from ".";
import ProductModal from "./modal/product-modal";

const singupUrl = `https://home.enkash.com/signup?utm_source=${utmSources["nav_bar"]}`;
const loginUrl = "https://home.enkash.com/login";

const Header = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isHeaderBgWhite, setIsHeaderBgWhite] = useState(false);
  const [isHeaderColor, setIsHeaderColor] = useState(false);
  const [isHeaderLogoWhite, setIsHeaderLogoWhite] = useState(false);
  const [isHeaderArrowWhite, setIsHeaderArrowWhite] = useState(false);

  return (
    <header
      className={`w-full absolute z-10 d-flex flex-column ${styles.header} ${
        isHeaderBgWhite ? "bg-white" : ""
      }  ${isHeaderColor ? "color-indi-volt" : ""}`}
      onMouseLeave={() => {
        //setHoveredIndex(null);
        //setIsHeaderBgWhite(false);
        //setIsHeaderColor(false);
        //setIsHeaderLogoWhite(false);
        //setIsHeaderArrowWhite(false);
      }}
    >
      <nav className="d-flex justify-content-between">
        <div className="d-flex">
          <Link href="/" className={styles.logo_container}>
            <Image
              src={enkashBlueLogo}
              alt="logo"
              width={120}
              className={`object-contain ${
                isHeaderLogoWhite ? "d-block" : "d-none"
              }`}
            />
            <Image
              src={enkashWhiteLogo}
              alt="logo"
              width={120}
              className={`object-contain ${
                isHeaderLogoWhite ? "d-none" : "d-block"
              }`}
            />
          </Link>
          <ul>
            {navBarTopTtitle.map((item, index) => (
              <li
                key={item.name}
                className="px-3 d-flex justify-content-center align-items-center"
                onMouseEnter={() => {
                  if ([0, 1, 3].includes(index)) {
                    setHoveredIndex(index);
                    setIsHeaderBgWhite(true);
                    setIsHeaderColor(true);
                    setIsHeaderLogoWhite(true);
                    setIsHeaderArrowWhite(true);
                  }
                }}
              >
                {item.name}
                {index !== 2 && (
                  <>
                    <Image
                      src={arrowDownWhite}
                      className={isHeaderArrowWhite ? "d-none" : "d-block"}
                      alt="arrow down icon"
                    />
                    <Image
                      src={arrowDownBlack}
                      className={isHeaderArrowWhite ? "d-block" : "d-none"}
                      alt="arrow down icon"
                    />
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.buttons_container}>
          <PrimaryButton title="Sign Up" url={singupUrl} />
          <span className="mx-2"></span>
          <PrimaryButton title="Log In" url={loginUrl} />
        </div>
      </nav>

      {hoveredIndex === 0 && <ProductModal />}
      {hoveredIndex === 1 && <ProductModal />}
      {hoveredIndex === 3 && <ProductModal />}
    </header>
  );
};

export default Header;
