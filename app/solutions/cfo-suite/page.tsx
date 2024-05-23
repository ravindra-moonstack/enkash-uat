"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "CFO Suite: Empowers CFOs with Approval Workflows & Admin Controls - EnKash",
  description:
    "EnKash - The Freedom platform enables CFOs to automate tasks and make data-backed, controlled, and informed decisions through curated information.",
  alternates: {
    canonical: "https://www.enkash.com/solutions/cfo-suite/",
  },
};

const CfoSuite = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/solutions/cfo-insights");
  }, [router]);

  return <div>Redirecting...</div>;
};

export default CfoSuite;
