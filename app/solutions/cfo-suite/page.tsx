"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Metadata } from "next";

const CfoSuite = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/solutions/cfo-insights");
  }, [router]);

  return <div>Redirecting...</div>;
};

export default CfoSuite;
