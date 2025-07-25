'use client'
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const ScrollToTop = () => {
  const  pathname  = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  window.onbeforeunload=function(){
    window.scrollTo(0, 0);
  }

  return null;
};

export default ScrollToTop;