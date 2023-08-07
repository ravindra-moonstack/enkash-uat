"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./header.module.scss";
import navBarTopTtitle from "../../constant/nav-bar";
import modalData from "../../constant/modal-data";
import utmSources from "@/constant/utm-source";
import PrimaryButton from "../primary-button/primary-button";
import Modal from "./modal/modal";
import {
  enkashWhiteLogo,
  enkashBlueLogo,
  arrowDownBlack,
  arrowDownWhite,
  arrowUpBlue,
} from ".";

const singupUrl = `https://home.enkash.com/signup?utm_source=${utmSources["nav_bar"]}`;
const loginUrl = "https://home.enkash.com/login";

const Header = () => {
  const [showModal, setShowModal] = useState(true);
  const [modalContent, setModalContent] = useState(modalData[0]);

  const handleMouseEnter = (index: any) => {
    setShowModal(true);
    setModalContent(modalData[index]);
  };

  return (
    <header
      className={`w-full absolute z-10 d-flex flex-column ${styles.header}`}
    >
      <nav className="d-flex justify-content-between">
        <div className="d-flex">
          <Link href="/" className={styles.logo_container}>
            <Image
              src={enkashWhiteLogo}
              alt="logo"
              width={120}
              className={`object-contain ${styles.whitelogo}`}
            />
            <Image
              src={enkashBlueLogo}
              alt="logo"
              width={120}
              className={`object-contain ${styles.bluelogo}`}
            />
          </Link>
          <ul>
            {navBarTopTtitle.map((item, index) => (
              <li
                key={index}
                className="px-3"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => setShowModal(false)}
              >
                {item.name}
                {index !== 3 && (
                  <>
                    <Image
                      src={arrowDownBlack}
                      className={styles.arrow_down_black}
                      alt="arrow down icon"
                    />
                    <Image
                      src={arrowDownWhite}
                      className={styles.arrow_down_white}
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
      <Modal showModal={showModal} content={modalContent} />
    </header>
  );
};

export default Header;
