import Image from "next/image";
import { Metadata } from "next";
import { space } from "@/common/constant";
import styles from "./page.module.scss";
import LottieDynamicLoadComponent from "@/components/lottie-client/lottie-dynamic-load-client";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Heading from "@/components/heading/heading";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import { CategoryData } from "../../data/category-data";
import { whiteArrow } from "../..";
import Link from "next/link";
import CategoryMenu from "@/components/voucher-page/category-menu";
import VoucherData from "../../data/voucher-data";
import VoucherCard from "@/components/voucher-page/voucher-card";

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

const categoryPage = ({ params }: { params: { category: string } }) => {
  const categoryName = params.category;
  const categoryData = CategoryData[categoryName];
  const voucherIds = categoryData?.voucherIds ?? [];

  return (
    <div className={`color-white ${styles.home_container}`}>
      <Header utmSource="voucher-category" />

      {/* category Head Page */}
      {categoryData && (
        <div className={`${styles.first_row} row color-white`}>
          <div className="col-md-6 col-12 d-flex flex-column">
            <div className="d-flex mb-4">
              <Heading
                title={categoryData.name}
                color="rainy-blue"
                size="h1"
                weight="7"
              />
              {/* <Heading title="B" color="rainy-blue" size="h1" weight="7" />
            <Heading title="olt" size="h1" weight="7" /> */}
            </div>
            <div className="d-flex flex-column">
              <Heading
                title={categoryData.title}
                color="white"
                size="h2"
                weight="7"
              />
              <div className={styles.discount_text}>
                {categoryData.discount}%
              </div>
            </div>
            <div className="mt-4 mobile-only">
              <Heading
                title={categoryData.description}
                color="white"
                size="h6"
                weight="4"
              />
            </div>
            <div className="mt-4 desktop-only">
              <Heading
                title={categoryData.description}
                color="white"
                size="h5"
                weight="5"
              />
            </div>
            <div className="mt-5">
              <PrimaryButton title="Explore More" theme="blue" url="/bolt" />
              <span className="mx-2"></span>
              <SecondryButton
                title="Redeem Now"
                actionImage={whiteArrow}
                iconSize={15}
                url="https://bolt.enkash.com/"
              />
            </div>
          </div>
          <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
            <div className={styles.lottie_container}>
              <LottieDynamicLoadComponent
                animationName={"LoyaltyBannerAnimation"}
                loop={true}
              />
            </div>
          </div>
        </div>
      )}

      {/* show all vouchers menu*/}
      <CategoryMenu currentPageCategory={categoryName} />

      {/* render each voucher */}
      <div className="vouchers m-4 d-flex flex-wrap justify-content-around">
        {voucherIds &&
          voucherIds.map((id, index) => (
            <div>
              {VoucherData[id] && <VoucherCard voucher={VoucherData[id]} />}
              <Heading title={id} size="h3" color="black" />
            </div>
          ))}
      </div>

      <Footer utmSource="Loyalty_lounge" />
    </div>
  );
};

export default categoryPage;
