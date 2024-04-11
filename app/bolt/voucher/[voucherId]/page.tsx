import Image from "next/image";
import { Metadata } from "next";
import styles from "./page.module.scss";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import CategoryMenu from "@/components/voucher-page/category-menu";
import VoucherData from "../../data/voucher-data";
import Link from "next/link";
import { backArrow, zigZagBottom, zigZagTop } from "../..";
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
  brandName?: string;
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

  return localVoucher;
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

  if (!localVoucherData) {
    console.log("No voucher present");
  }
  const voucherData = await fetchVoucher(localVoucherData?.voucherId);
  //   const voucherData = VoucherData[voucherId];

  let categoryNameMap = new Map<string, string>([
    ["e-commerce", "E-Commerce"],
    ["food-and-beverages", "Food & Beverages"],
    ["health-and-wellness", "Health & Wellness"],
    ["apparels", "Apparels"],
    ["movies-and-music", "Movies & Music"],
  ]);
  const voucherImage = voucherData
    ? require(`./../../data/voucher-bg/${voucherData.backgroundImg}`)
    : null;
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

          <div className={`mx-auto ${styles.voucher_detail_container}`}>
            <div className={`mt-3 ${styles.top_container}`}>
              <div className={`my-3 ${styles.back_button}`}>
                <Link href={`/bolt/category/${voucherData.category}`}>
                  <Image src={backArrow} alt="back" />
                  <div className={`mx-3`}>
                    {categoryNameMap.get(voucherData.category)}
                  </div>
                </Link>
              </div>

              <div className={styles.web_only}>
                <div className={`${styles.voucher_image_section}`}>
                  <div className={styles.discount_bar}>
                    <div className={styles.discount_}>
                      Up to <span>{voucherData.discount}%</span> OFF
                    </div>
                    <div className={styles.brand_name}>
                      {voucherData.brandName}
                    </div>
                  </div>

                  <div className={styles.voucher_name}>{voucherData.name}</div>
                  <div className={styles.voucher_image}>
                    <Image src={voucherImage} alt={voucherData.name} />
                  </div>
                  <div className={styles.buy_now_button}>
                    <Link href="https://bolt.enkash.com/" target="_blank">
                      BUY NOW
                    </Link>
                  </div>
                </div>
              </div>
              <div className={styles.mobile_only}>
                <VoucherCard voucher={voucherData} />
              </div>

              <div className={styles.detail_section}>
                <div className={`mb-1 ${styles.description_title}`}>
                  Description: {voucherData.name}{" "}
                </div>
                <div className={`mb-4 ${styles.description}`}>
                  {voucherData.description}
                </div>

                <div className={`mb-1 ${styles.description_title}`}>
                  How to redeem{" "}
                </div>
                <div className={`mb-4 ${styles.description}`}>
                  <ul>
                    {voucherData.howToRedeem.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={styles.bottom_zigzag}>
                <Image src={zigZagTop} alt="zig-zag" />
              </div>
            </div>

            <div className={`mt-4 mb-5 ${styles.bottom_container}`}>
              <div className={styles.detail_section}>
                <div className={`mb-1 ${styles.description_title}`}>
                  About {voucherData.name}
                </div>
                <div className={`mb-1 ${styles.description}`}>
                  {voucherData.aboutCompany}
                </div>
              </div>
              <div className={styles.bottom_zigzag}>
                <Image src={zigZagBottom} alt="zig-zag" />
              </div>
            </div>
          </div>

          {/* <div className={`color-white ${styles.second_row}`}>
            <div className={styles.voucher_card}>
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
          </div> */}
        </div>
      ) : (
        <div className={`color-white ${styles.error_container}`}>
          <div className={`color-white ${styles.error_message}`}>
            <h2>Sorry, this voucher is not available.</h2>
            <p>Please try again later or explore other vouchers.</p>
            <Link href="/bolt" className={styles.explore_button}>
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
