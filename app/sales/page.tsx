import React from "react";
import SalesPage from "./sales-page";
import { Metadata } from "next";
import generateMetaData from "@/common/utils/metaData";

export const metadata: Metadata = generateMetaData({
  title: "Sales | EnKash - The Ultimate Platform for Businesses",
  description:
    "EnKash is the ultimate platform for businesses that offer services like Account Payable, Accounts Receivable, Expense Management, Corporate Cards, Employee Rewards, Channel Incentive, automation solutions & many more.",
  alternates: {
    canonical: "https://www.enkash.com/sales/",
  },
});

const page = () => {
  return (
    <div>
      {/* Note: This page uses a client-side component for rendering content.
      Since client components cannot directly export metadata, metadata logic is defined and handled in this server component (page.tsx)
      to ensure proper SEO and SSR support. */}
      <SalesPage />
    </div>
  );
};

export default page;
