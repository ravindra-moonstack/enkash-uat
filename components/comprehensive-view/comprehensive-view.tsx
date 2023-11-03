"use client";

import React, { useState } from "react";
import styles from "./comprehensive-veiw.module.scss";
import Image from "next/image";
import arrowDown from "./arrow.png";

interface comprehensiveViewProp {
  innerHtml: any;
  maxHeight: string;
  title: string;
}

const ComprehensiveView = ({
  innerHtml,
  maxHeight,
  title,
}: comprehensiveViewProp) => {
  const [expanded, setExpanded] = useState(false);

  const handleButtonClick = () => {
    if (expanded) {
      setTimeout(() => {
        setExpanded(false);
      }, 300);
    } else {
      setExpanded(true);
    }
  };

  const expandedStyle = {
    maxHeight: expanded ? maxHeight : "0",
    overflow: "hidden",
    transition: "max-height 0.5s ease-in-out",
  };

  return (
    <>
      <div
        className={` ${styles.action_container} d-flex bg-indi-volt justify-content-between align-items-start color-white`}
      >
        <h1 className={styles.explore_text}>{title}</h1>
        <Image
          onClick={handleButtonClick}
          src={arrowDown}
          alt="faq arrow icon"
          className={`${expanded ? styles.rotated : styles.normal} ${
            styles.arrow
          }`}
        />
      </div>

      <div
        className={`${styles.more_text} ${styles.padding} ${
          expanded ? styles.expanded : ""
        }`}
        style={expandedStyle}
      >
        {innerHtml}
      </div>
    </>
  );
};

export default ComprehensiveView;
