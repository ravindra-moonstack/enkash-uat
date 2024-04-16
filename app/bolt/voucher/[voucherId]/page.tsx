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
import Heading from "@/components/heading/heading";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";

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

export function generateMetadata({
  params,
}: {
  params: { voucherId: string };
}): Metadata {
  const voucherId: string = params.voucherId;

  if (!VoucherData[voucherId]) {
    return {
      title: `Voucher not found - EnKash`,
      description:
        "The voucher you are looking for is not available, explore more in Bolt section.",
      alternates: {
        canonical: `https://www.enkash.com/bolt/voucher/404`,
      },
    };
  }

  const voucher: Voucher = VoucherData[voucherId];

  return {
    title: `${voucher.name} - EnKash`,
    description: `${voucher.description}`,
    alternates: {
      canonical: `https://www.enkash.com/bolt/voucher/${voucher.voucherId}`,
    },
  };
}

const generateVoucherSchema = (voucher: Voucher): string => {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "Offer",
    name: voucher.name,
    description: voucher.description,
    category: voucher.category,
    discount: `${voucher.discount}%`,
    image: `https://www.enkash.com/images/vouchers/${voucher.backgroundImg}`,
    seller: {
      "@type": "Organization",
      name: voucher.brandName || "",
    },
    sku: voucher.voucherId,
    url: `https://www.enkash.com/bolt/voucher/${voucher.voucherId}`,
  };

  return `<script type="application/ld+json">${JSON.stringify(
    schema
  )}</script>`;
};

const sanitizeStep = (step: string): string => {
  const containsOnlyLetters = /^[a-zA-Z]+$/;
  let myStep = step;
  //removing any special character from front (current data is not formatted)
  while (!containsOnlyLetters.test(myStep[0]) && myStep) {
    myStep = myStep.slice(1);
  }
  return myStep;
};

const fetchVoucher = async (voucherId: string) => {
  // local voucher
  let localVoucher: Voucher = VoucherData[voucherId];
  let isActive: boolean = false;

  // return localVoucher;
  if (!localVoucher) {
    return null;
  }

  try {
    // bolt open api
    const apiResponse = await fetch(
      "https://marketplaces.enkash.in/api/v0/bolt/searchProducts?product=VOUCHER",
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
    ? require(`./../../../../public/images/voucher-bg/${voucherData.backgroundImg}`)
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
                  {voucherData.name}{" "}
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
                      <li key={index}>{sanitizeStep(step)}</li>
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
                  About {voucherData.brandName}
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
          <div
            dangerouslySetInnerHTML={{
              __html: generateVoucherSchema(voucherData),
            }}
          />
        </div>
      ) : (
        <div className={` py-5 ${styles.error_container}`}>
          <div className={`${styles.first_row} row color-white`}>
            <div className="col-md-10 mx-auto col-12 d-flex flex-column align-items-center py-5">
              <div className="d-flex mb-4 text-center">
                <Heading
                  title="The Voucher you are looking for is currently not available"
                  color="black"
                  size="h2"
                  weight="7"
                />
                {/* <Heading title="B" color="rainy-blue" size="h1" weight="7" />
            <Heading title="olt" size="h1" weight="7" /> */}
              </div>
              <div className="d-flex">
                <Heading
                  title="Explore more on Bolt"
                  color="equity-blue"
                  size="h2"
                  weight="7"
                />
              </div>

              <div className="mt-4 desktop-only"></div>
              <div className="mt-5">
                <PrimaryButton title="Explore Bolt" theme="blue" url="/bolt" />
                <span className="mx-2"></span>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer utmSource="Bolt" />
    </>
  );
};

export default voucherPage;
