"use client";

import styles from "@/app/page.module.scss";
import { useState } from "react";
import MenuButton from "../buttons/menu-button/menu-button";
import LottieDynamicLoadComponent from "../lottie-client/lottie-dynamic-load-client";

const DashBoardAnimation = () => {
  const [activeAnimation, setActiveAnimation] = useState("manage");

  return (
    <>
      <div className={`col-md-12 col-3  ${styles.action_container}`}>
        <div className="d-flex flex-column flex-md-row justify-content-center w-100">
          <div className="me-2" onClick={() => setActiveAnimation("manage")}>
            <MenuButton
              title="Manage"
              theme={activeAnimation === "manage" ? "dark" : "disabled"}
            />
          </div>
          <div className={styles.space}></div>
          <div className="me-2" onClick={() => setActiveAnimation("track")}>
            <MenuButton
              title="Track"
              theme={activeAnimation === "track" ? "dark" : "disabled"}
            />
          </div>
          <div className={styles.space}></div>
          <div className="me-2" onClick={() => setActiveAnimation("optimize")}>
            <MenuButton
              title="Optimize"
              theme={activeAnimation === "optimize" ? "dark" : "disabled"}
            />
          </div>
          <div className={styles.space}></div>
          <div className="me-2" onClick={() => setActiveAnimation("automate")}>
            <MenuButton
              title="Automate"
              theme={activeAnimation === "automate" ? "dark" : "disabled"}
            />
          </div>
        </div>
      </div>
      <div className={`col-md-12 col-9 ${styles.image_container}`}>
        <LottieDynamicLoadComponent
          animationName={activeAnimation}
          loop={true}
        />
      </div>
    </>
  );
};

export default DashBoardAnimation;
