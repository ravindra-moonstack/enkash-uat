import Link from "next/link";
import Image from "next/image";
import PrimaryButton from "../primary-button/primary-button";
import { enkashWhiteLogo, enkashBlueLogo,arrowDownBlack ,arrowDownWhite,arrowUpBlue } from ".";
import navBarTopTtitle from "../../constant/nav-bar";
import styles from './header.module.scss'
import utmSources from "@/constant/utm-source";

const singupUrl = `https://home.enkash.com/signup?utm_source=${utmSources["nav_bar"]}`;
const loginUrl = "https://home.enkash.com/login";

const Header = () => (
  <header
    className={`w-full absolute z-10 bg-indi-volt d-flex justify-content-between ${styles.header}`}
  >
    <nav>
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
          {navBarTopTtitle.map((item) => (
            <li className="px-3"> 
              {item.name}
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
            </li>
          ))}
        </ul>
      </div>
    </nav>
    <div className={styles.buttons_container}>
      <PrimaryButton title="Sign Up" url={singupUrl} />
      <span className="mx-2"></span>
      <PrimaryButton title="Log In" url={loginUrl} />
    </div>
  </header>
);

export default Header;
