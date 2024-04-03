import Image from "next/image";
import { Metadata } from "next";
import styles from "./page.module.scss";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import CategoryMenu from "@/components/voucher-page/category-menu";
import VoucherData from "../../data/voucher-data";
import Link from "next/link";

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

const fetchVoucher = async (voucherId: string) => {
  // local voucher
  let localVoucher: Voucher = VoucherData[voucherId];
  let isActive: boolean = false;

  if (!localVoucher) {
    return null;
  }

  try {
    // bolt open api
    const apiResponse = await fetch(
      "https://marketplaceuat.enkash.in/api/v0/bolt/searchProducts?product=VOUCHER",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
        cache: `no-cache`,
      }
    );
    const apiData = await apiResponse.json();

    //map for discount update
    apiData.payload.data.forEach((product: any) => {
      if (
        product.productCatalogId === localVoucher.voucherId &&
        product.active
      ) {
        isActive = true;
        localVoucher.discount = parseFloat(product.discount);
      }
    });

    return isActive ? localVoucher : null;
  } catch (error) {
    console.error("Error fetching vouchers:", error);
    return null;
  }
};

const voucherPage = async ({ params }: { params: { voucherId: string } }) => {
  const voucherId = params.voucherId;
  const localVoucherData = VoucherData[voucherId];
  const voucherData = await fetchVoucher(localVoucherData?.voucherId);

  if (!voucherData) {
    console.log("No voucher present");
  }
  //   const voucherData = VoucherData[voucherId];
  return (
    <>
      <Header utmSource="voucher-category" />

      {voucherData ? (
        <div className={`color-white ${styles.home_container}`}>
          <div className={`color-white ${styles.first_row}`}>
            <CategoryMenu
              currentPageCategory={voucherData?.category || "e-commerce"}
            />
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
        </div>
      ) : (
        <div className={`color-white ${styles.error_container}`}>
          <div className={`color-white ${styles.error_message}`}>
            <h2>Sorry, this voucher is not available.</h2>
            <p>Please try again later or explore other vouchers.</p>
            <Link href="/bolt/" className={styles.explore_button}>
              Explore More
            </Link>
          </div>
        </div>
      )}

      <Footer utmSource="Loyalty_lounge" />
    </>
  );
};

export default voucherPage;
