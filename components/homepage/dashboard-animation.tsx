"use client";
import {
  automateAnimation,
  manageAnimation,
  trackAnimation,
  optimizeAnimation,
} from "@/app/index";
import styles from "@/app/page.module.scss";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import MenuButton from "../buttons/menu-button/menu-button";

const DashBoardAnimation = () => {
  const [activeAnimation, setActiveAnimation] = useState("manage");

  type LottieAnimationData = any;
  const [dashBoardAnimationData, setDashBoardAnimationData] =
    useState<LottieAnimationData | null>(null);

  const ANIMATION_MAP: any = {
    automate: automateAnimation,
    manage: manageAnimation,
    track: trackAnimation,
    optimize: optimizeAnimation,
  };

  useEffect(() => {
    const loadAnimation = async () => {
      const dashboardAnimationModule = await ANIMATION_MAP[activeAnimation]();
      setDashBoardAnimationData(dashboardAnimationModule.default);
    };
    loadAnimation();
  }, [activeAnimation]);
  return (
    <>
      <div className={`col-md-12 col-4  ${styles.action_container}`}>
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
          <div onClick={() => setActiveAnimation("automate")}>
            <MenuButton
              title="Automate"
              theme={activeAnimation === "automate" ? "dark" : "disabled"}
            />
          </div>
        </div>
      </div>
      <div className={`col-md-12 col-8 ${styles.image_container}`}>
        <Lottie
          animationData={dashBoardAnimationData}
          loop={true}
          autoplay={true}
        />
      </div>
    </>
  );
};

export default DashBoardAnimation;
