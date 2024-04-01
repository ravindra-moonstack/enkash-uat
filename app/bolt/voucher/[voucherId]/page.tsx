import Image from "next/image";
import { Metadata } from "next";
import styles from "./page.module.scss";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import CategoryMenu from "@/components/voucher-page/category-menu";
import VoucherData from "../../data/voucher-data";

export const metadata: Metadata = {
  title:
    "All-in-one Rewards, Corporate Gifting & incentives Management Platform - EnKash",
  description:
    "Get a seamless solution for rewards, corporate gifting &  incentives management platform designed to engage and motivate employees, channel partners, and stakeholders. Book a Demo Now !!",
  alternates: {
    canonical: "https://www.enkash.com/loyalty-lounge/",
  },
};

type Voucher = {
  voucherId: string;
  name: string;
  category: string;
  discount: number;
  description: string;
  aboutCompany: string;
  backgroundImg: string;
  howToRedeem: string[];
};

const voucherPage = ({ params }: { params: { voucherId: string } }) => {
  const voucherId = params.voucherId;
  const voucherData = VoucherData[voucherId];
  //   const voucherData = VoucherData[voucherId];
  return (
    <div className={`color-white ${styles.home_container}`}>
      <Header utmSource="voucher-category" />
      <div className={`color-white ${styles.first_row}`}>
        <CategoryMenu currentPageCategory={voucherData.category} />
      </div>
      <div className={`color-white ${styles.second_row}`}>
        <h2>{voucherData.name}</h2>
        <p>Category: {voucherData.category}</p>
        <p>Discount: {voucherData.discount}%</p>
        <p>Description: {voucherData.description}</p>
        <p>About Company: {voucherData.aboutCompany}</p>
        <h3>How to Redeem:</h3>
        <ul>
          {voucherData.howToRedeem.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>

      <Footer utmSource="Loyalty_lounge" />
    </div>
  );
};

export default voucherPage;
