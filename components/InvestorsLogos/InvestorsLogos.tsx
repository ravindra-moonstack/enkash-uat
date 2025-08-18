import React from "react";
import Image from "next/image";
import { investerLogo, investerLogo2, investerLogo3, investerLogo4, investerLogo5 } from ".";

import styles from "./InvestorsLogos.module.scss"

const investors = [
  { src: investerLogo, alt: "Mayfield" },
  { src: investerLogo2, alt: "Axilor" },
  { src: investerLogo3, alt: "White Venture Capital" },
  { src: investerLogo4, alt: "Ascent Capital" },
  { src: investerLogo5, alt: "Baring Private Equity Partners India" },
];

const InvestorsLogos: React.FC = () => {
  return (
    <div className={`${styles.investerLogosOuter}`}>
      {investors.map((investor, i) => (
        <div key={i} className={`${styles.investerLogos}`}>
          <Image
            src={investor.src}
            alt={investor.alt}
            className="object-contain"
            width={250}
            height={150}
            priority
          />
        </div>
      ))}
    </div>
  );
};

export default InvestorsLogos;
