"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const HeaderWrapper = () => {
  const [isWeb, setIsWeb] = useState(false);

  useEffect(() => {
    const checkWindowSize = () => {
      setIsWeb(window.innerWidth >= 768);
    };

    checkWindowSize();

    window.addEventListener("resize", checkWindowSize);

    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  const MobileHeader = dynamic(
    () => import("@/components/header/mobile-header/mobile-header")
  );
  const WebHeader = dynamic(() => import("@/components/header/web-header"));

  return (
    <div>
      {!isWeb && <MobileHeader />}
      {isWeb && <WebHeader />}
    </div>
  );
};
export default HeaderWrapper;
