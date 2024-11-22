import Image from "next/image";
import { Metadata } from "next";
import styles from "./page.module.scss";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import CategoryMenu from "@/components/voucher-page/category-menu";
import VoucherData, { Voucher } from "../../bolt/data/voucher-data";
import Link from "next/link";
import {
  ajioPopular,
  amazonPopular,
  backArrow,
  blueStepTick,
  corporateNeed,
  faqBg,
  individualNeed,
  myntraPopular,
  popularArrow,
  zigZagBottom,
  zigZagGrey,
  zigZagTop,
  zomatoPopular,
} from "../../bolt";
import VoucherCard from "@/components/voucher-page/voucher-card";
import Heading from "@/components/heading/heading";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SavingsCalculator from "@/components/voucher-page/voucher-calculator/voucher-calculator";
import OccasionVoucher from "@/components/voucher-page/occasion-voucher/occasion-voucher";
import CustomBreadcrumb from "@/components/breadcrumb/breadbrumb";
import { nameToUrl } from "@/common/utils/stringUtils";
import VoucherFaqComponent from "@/components/voucher-page/voucher-faq";
import { VoucherFaqData } from "@/app/bolt/data/voucher-faq-data";
import { generateVoucherSchema } from "@/common/utils/metaData";
import Head from "next/head";
import StructuredData from "@/components/head/structuredData";

export function generateMetadata({
  params,
}: {
  params: { voucherName?: string };
}): Metadata {
  const voucherName = nameToUrl(params.voucherName ?? "");
  const voucher: Voucher = VoucherData[voucherName];
  if (!voucher) {
    return {
      title: `Voucher not found - EnKash`,
      description:
        "The voucher you are looking for is not available, explore more in Bolt section.",
      alternates: {
        canonical: `https://www.enkash.com/bolt/voucher/404`,
      },
    };
  }
  const imageUrl = `https://www.enkash.com/images/voucher-bg/${voucher.urlName}.png`;
  return {
    title: `${voucher.brandName} Gift Card Vouchers - How to Use, Redeem and Check ${voucher.brandName} Gift Card Balance`,
    description: `Get the best {Brand Name} gift card offers! Learn how to buy a ${voucher.brandName} gift card, check your ${voucher.brandName} gift card balance, and redeem your gift card easily.`,
    alternates: {
      canonical: `https://www.enkash.com/voucher/${voucher.urlName}`,
    },
    openGraph: {
      title: `${voucher.brandName} Gift Card Vouchers - How to Use, Redeem and Check ${voucher.brandName} Gift Card Balance`,
      description: `Get the best {Brand Name} gift card offers! Learn how to buy a ${voucher.brandName} gift card, check your ${voucher.brandName} gift card balance, and redeem your gift card easily.`,
      images: [
        {
          url: imageUrl,
          width: 1200, // Recommended width for Open Graph
          height: 630, // Recommended height for Open Graph
          alt: `${voucher.name} image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${voucher.brandName} Gift Card Vouchers - How to Use, Redeem and Check ${voucher.brandName} Gift Card Balance`,
      description: `Get the best {Brand Name} gift card offers! Learn how to buy a ${voucher.brandName} gift card, check your ${voucher.brandName} gift card balance, and redeem your gift card easily.`,
      images: [imageUrl],
    },
  };
}

const sanitizeStep = (step: string): string => {
  const containsOnlyLetters = /^[a-zA-Z]+$/;
  let myStep = step;
  //removing any special character from front (current data is not formatted)
  while (!containsOnlyLetters.test(myStep[0]) && myStep) {
    myStep = myStep.slice(1);
  }
  return myStep;
};

const linkifyText = (text: string): string => {
  const urlRegex =
    /(?:https?:\/\/)?(?:www\.)?[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})+(?:\/\S*)?/g;

  return text.replace(urlRegex, (url) => {
    // Check if the URL has a protocol, if not, prepend it with http://
    if (!url.match(/^https?:\/\//i)) {
      url = "http://" + url;
    }
    return `<a href="${url}" target="_blank">${url}</a>`;
  });
};

const sanitizeUTM = (utm: string): string => {
  utm = utm.toLowerCase();
  utm = utm.replace(/ /g, "_");
  return utm;
};

const fetchVoucher = async (voucherName: string): Promise<Voucher | null> => {
  // local voucher
  let localVoucher: Voucher | any = VoucherData[voucherName];
  let isActive: boolean = false;

  if (!localVoucher) {
    console.log("local voucher not found");
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
    //discount update
    apiData.payload.data.forEach((product: any) => {
      if (
        nameToUrl(product.brand) === localVoucher.urlName &&
        product.active &&
        product.enabled
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

const voucherPage = async ({ params }: { params: { voucherName: string } }) => {
  const voucherName = params.voucherName;

  const localVoucherData = Object.values(VoucherData).find(
    (voucher) => voucher.urlName === voucherName
  );

  if (!localVoucherData) {
    console.log("No voucher present");
  }

  const voucherData = await fetchVoucher(voucherName);
  const voucherCategory = voucherData?.category || "";
  const voucherImage = voucherData
    ? `/images/voucher-bg/${voucherData.urlName}.png`
    : null;
  // const voucherData = VoucherDataV2[voucherName];

  let categoryNameMap = new Map<string, string>([
    ["e-commerce", "E-Commerce"],
    ["food-and-beverages", "Food & Beverages"],
    ["health-and-wellness", "Health & Wellness"],
    ["apparels", "Apparels"],
    ["movies-and-music", "Movies & Music"],
  ]);

  const boltUTM = voucherData
    ? `https://bolt.enkash.com/signup?utm_source=bolt&utm_medium=enkash_website&utm_campaign=redeem_${sanitizeUTM(
        voucherData.name.toLowerCase()
      )}`
    : "https://bolt.enkash.com/";

  const halfBoltUTM = voucherData
    ? `bolt&utm_medium=enkash_website&utm_campaign=redeem_${sanitizeUTM(
        voucherData.name.toLowerCase()
      )}`
    : "https://bolt.enkash.com/";

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Voucher", url: "/bolt" },
    {
      name: `${categoryNameMap.get(voucherCategory)}`,
      url: `/voucher/category/${voucherData?.category}`,
    },
    { name: voucherData?.name || "Voucher", url: `/voucher/${voucherName}` },
  ];
  const faqData = VoucherFaqData[voucherName].faqData;

  return (
    <>
      <StructuredData
        url={`https://www.enkash.com/voucher/${voucherData?.urlName}`}
        faqData={faqData}
      />

      <Header utmSource={halfBoltUTM} />

      {voucherData ? (
        <div className={`color-white ${styles.home_container}`}>
          {/* METADATA for voucher */}
          <div
            dangerouslySetInnerHTML={{
              __html: generateVoucherSchema(voucherData),
            }}
          />

          <div className={`color-white ${styles.first_row_category}`}>
            <CategoryMenu
              currentPageCategory={voucherData?.category || "e-commerce"}
            />
          </div>
          <div></div>

          <div className={`mx-auto ${styles.voucher_detail_container}`}>
            <div className={`mt-3 ${styles.top_container}`}>
              <div className={`${styles.breadcrumb}`}>
                <CustomBreadcrumb items={breadcrumbItems} />
              </div>

              <div className={styles.web_only}>
                <div className={`${styles.voucher_image_section}`}>
                  <div className={styles.discount_bar}>
                    <div className={styles.discount_}>
                      Up to <span>{voucherData.discount}%</span> OFF
                    </div>
                    {/* <div className={`${styles.brand_name}`}>
                      {voucherData.brandName}
                    </div> */}
                  </div>

                  <div
                    className={`${styles.voucher_name} ${
                      voucherData.name.length > 30
                        ? voucherData.name.length > 33
                          ? styles.voucher_name_widest
                          : styles.voucher_name_wide
                        : ""
                    }`}
                  >
                    {voucherData.name.replace("-", "\u2011")}
                  </div>
                  <div className={styles.voucher_image}>
                    {voucherImage && (
                      <Image
                        src={voucherImage}
                        alt={voucherData.name}
                        width={330}
                        height={300}
                      />
                    )}
                  </div>
                  <div className={styles.buy_now_button}>
                    <Link href={boltUTM} target="_blank">
                      BUY NOW
                    </Link>
                  </div>
                </div>
              </div>
              <div className={styles.mobile_only}>
                <VoucherCard voucher={voucherData} routeToBolt={true} />
              </div>

              <div className={styles.detail_section}>
                {/* Gift card main title */}
                <div className={`my-4`}>
                  <div className={`mb-1 ${styles.description_title}`}>
                    <Heading
                      title={voucherData.name}
                      color="secondry-black"
                      size="h3"
                      weight="7"
                      useH1TagInHtml={true}
                    />
                  </div>
                  <div className={`mb-4 ${styles.description}`}>
                    {voucherData.description}
                  </div>
                </div>

                {/* About company section */}
                <div className={`my-4`}>
                  <div className={`mb-1 ${styles.description_title}`}>
                    <Heading
                      title="About "
                      color="secondry-black"
                      size="h3"
                      weight="7"
                      useH2TagInHtml={true}
                    />
                    <Heading
                      title={voucherData.brandName}
                      color="secondry-black"
                      size="h3"
                      weight="7"
                      useH2TagInHtml={true}
                    />
                  </div>
                  <div className={`mb-1 ${styles.description}`}>
                    {voucherData.aboutCompany}
                  </div>
                </div>

                {/* Savings Calculator section */}
                <div className={`my-4`}>
                  <div className={`mb-1 ${styles.description_title}`}>
                    <Heading
                      title={voucherData.calculatorTitle}
                      color="secondry-black"
                      size="h3"
                      weight="7"
                      useH2TagInHtml={true}
                    />
                  </div>
                  <div className={`mb-1 ${styles.description}`}>
                    {voucherData.calculatorDescription}
                  </div>
                  <div className={`my-5`}>
                    <SavingsCalculator
                      voucherName={voucherData.name}
                      category={voucherData.category}
                      savingsPercentage={voucherData.discount}
                      voucherImg={`/images/voucher-bg/${voucherData.urlName}.png`}
                    />
                  </div>
                </div>
              </div>
              {/* <div className={styles.bottom_zigzag}>
                <Image src={zigZagTop} alt="zig-zag" />
              </div> */}
            </div>

            <div className={`mt-4 mb-5 ${styles.mid_container}`}>
              <div className={styles.detail_section}>
                {/* How to Buy Section */}
                <div className={`my-4`}>
                  <div className={`mb-1 ${styles.description_title}`}>
                    <Heading
                      title={voucherData.howToBuyTitle}
                      color="secondry-black"
                      size="h3"
                      weight="7"
                      useH2TagInHtml={true}
                    />
                  </div>
                  <div className={`mb-4 ${styles.description}`}>
                    <div className={`mb-3`}>
                      Purchasing a {voucherData.name} from the EnKash platform
                      is straightforward and can help you save money. Here's a
                      detailed guide on how to do it:
                    </div>

                    <div className={styles.progressSteps}>
                      <div className={styles.step}>
                        <div className={styles.iconContainer}>
                          <Image src={blueStepTick} alt="tick" />
                        </div>
                        <div className={styles.content}>
                          <h3 className={styles.title}>Login</h3>
                          <p className={styles.description}>
                            Login to
                            <br />
                            bolt.enkash.com
                          </p>
                        </div>
                        <div className={styles.line} />
                      </div>
                      <div className={styles.step}>
                        <div className={styles.iconContainer}>
                          <Image src={blueStepTick} alt="tick" />
                        </div>
                        <div className={styles.content}>
                          <h3 className={styles.title}>Select</h3>
                          <p className={styles.description}>
                            Select brand voucher, denomination & quantity
                          </p>
                        </div>
                        <div className={styles.line} />
                      </div>
                      <div className={styles.step}>
                        <div className={styles.iconContainer}>
                          <Image src={blueStepTick} alt="tick" />
                        </div>
                        <div className={styles.content}>
                          <h3 className={styles.title}>Checkout</h3>
                          <p className={styles.description}>Checkout and pay</p>
                        </div>
                      </div>
                    </div>
                    <ul>
                      <li>
                        <div>
                          Go to bolt.enkash.com or{" "}
                          <a href="https://bolt.enkash.com/" target="_blank">
                            click here
                          </a>
                        </div>
                      </li>
                      <li>
                        <div>Login with your mobile number</div>
                      </li>
                      <li>
                        <div>
                          Explore a wide selection of vouchers or select your
                          preferred category.
                        </div>
                      </li>
                      <li>
                        <div>Select the brand voucher</div>
                      </li>
                      <li>
                        <div>
                          Choose the {voucherData.name} voucher denomination and
                          quantity you wish to purchase.
                        </div>
                      </li>
                      <li>
                        <div>
                          Once ready, head to your cart and click "Buy Now" to
                          proceed with the purchase
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className={`mt-4 mb-5 ${styles.mid_container}`}>
              <div className={styles.detail_section}>
                {/* Use and Redeem section */}
                <div className={`mt-4 mb-5`}>
                  <div className={`mb-1 ${styles.description_title}`}>
                    <Heading
                      title={voucherData.howToRedeemTitle}
                      color="secondry-black"
                      size="h3"
                      weight="7"
                      useH2TagInHtml={true}
                    />
                  </div>
                  <div className={`mb-4 ${styles.description}`}>
                    <div className={`mb-3`}>{voucherData.howToRedeemDesc}</div>
                    <ul>
                      {voucherData.howToRedeemSteps.map((step, index) => (
                        <li key={index}>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: linkifyText(sanitizeStep(step)),
                            }}
                          ></div>
                          {}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Check Balance section */}
                <div className={`my-4`}>
                  <div className={`mb-1 ${styles.description_title}`}>
                    <Heading
                      title={voucherData.checkBalanceTitle}
                      color="secondry-black"
                      size="h3"
                      weight="7"
                      useH2TagInHtml={true}
                    />
                  </div>
                  <div className={`mb-4 ${styles.description}`}>
                    <div className={`mb-3`}>{voucherData.checkBalanceDesc}</div>
                    <ul>
                      {voucherData.checkBalanceSteps.map((step, index) => (
                        <li key={index}>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: linkifyText(sanitizeStep(step)),
                            }}
                          ></div>
                          {}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.bottom_zigzag}>
                <Image src={zigZagTop} alt="zig-zag" />
              </div>
            </div>

            <div className={`mb-4 ${styles.mid_container}`}>
              <div className={styles.detail_section}>
                <div className={`my-4`}>
                  <div className={`mb-1 ${styles.description_title}`}>
                    <Heading
                      title="Who can use "
                      color="secondry-black"
                      size="h3"
                      weight="7"
                      useH2TagInHtml={true}
                    />
                    <Heading
                      title={voucherData.name}
                      color="secondry-black"
                      size="h3"
                      weight="7"
                      useH2TagInHtml={true}
                    />
                  </div>
                </div>
              </div>
              <div className={`mb-4 ${styles.description}`}>
                <div className={styles.need_container}>
                  <div className={styles.need_img}>
                    <Image src={individualNeed} alt="Individuals" />
                  </div>
                  <div className={`${styles.need_content}`}>
                    <Heading
                      title="Individuals"
                      color="secondry-black"
                      size="h4"
                      weight="7"
                      useH2TagInHtml={true}
                    />
                    <div className={`mb-4 ml-2 ${styles.description}`}>
                      Getting your hands on {voucherData.name}s will enable you
                      to get exclusive discounts.
                    </div>
                  </div>
                </div>

                <div className={styles.need_container}>
                  <div className={styles.need_img}>
                    <Image src={corporateNeed} alt="Companies" />
                  </div>
                  <div className={`${styles.need_content}`}>
                    <Heading
                      title="Companies"
                      color="secondry-black"
                      size="h4"
                      weight="7"
                      useH2TagInHtml={true}
                    />
                    <div className={`mb-4 ml-2 ${styles.description}`}>
                      Enterprises can save big annually with an exclusive 
                      {voucherData.name}s for their employees.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`mt-4 mb-5 ${styles.bottom_container}`}>
              <div className={styles.detail_section}>
                {/* Terms and Conditions section */}
                <div className={`my-4`}>
                  <div className={`mb-1 ${styles.description_title}`}>
                    <Heading
                      title={voucherData.termsAndConditionsTitle}
                      color="secondry-black"
                      size="h3"
                      weight="7"
                      useH2TagInHtml={true}
                    />
                  </div>
                  <div className={`mb-4 ${styles.description}`}>
                    <ul>
                      {voucherData.termsAndConditionSteps.map((step, index) => (
                        <li key={index}>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: linkifyText(sanitizeStep(step)),
                            }}
                          ></div>
                          {}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.bottom_zigzag}>
                <Image src={zigZagGrey} alt="zig-zag" />
              </div>
            </div>

            <div className={`${styles.mid_container}`}>
              <OccasionVoucher
                voucherName={voucherData.name}
                festivals={voucherData.festivals}
                anniversary={voucherData.anniversary}
                birthdays={voucherData.birthdays}
              />
            </div>

            <div className={`mt-4 mb-5 desktop-only ${styles.mid_container}`}>
              <div className={styles.popularVouchers}>
                <h2 className={styles.title}>
                  Explore Our Most Popular Gift Vouchers
                </h2>
                <div className={styles.list}>
                  <Link
                    href="/voucher/myntra-e-gift-card"
                    title="Myntra E-Gift Card"
                  >
                    <div className={styles.voucherCard}>
                      <div className={styles.logoImg}>
                        <Image src={myntraPopular} alt="Myntra" />
                      </div>
                      <span className={styles.arrow}>
                        <Image src={popularArrow} alt="arrow" />
                      </span>
                    </div>
                  </Link>

                  <Link
                    href="/voucher/amazon-shopping-vouchers"
                    title="Amazon Pay E-Gift Card"
                  >
                    <div className={styles.voucherCard}>
                      <div className={styles.logoImg}>
                        <Image src={amazonPopular} alt="Amazon Pay" />
                      </div>
                      <span className={styles.arrow}>
                        <Image src={popularArrow} alt="arrow" />
                      </span>
                    </div>
                  </Link>

                  <Link
                    href="/voucher/zomato-e-gift-voucher"
                    title="Zomato E-Gift Card"
                  >
                    <div className={styles.voucherCard}>
                      <div className={styles.logoImg}>
                        <Image src={zomatoPopular} alt="Zomato" />
                      </div>
                      <span className={styles.arrow}>
                        <Image src={popularArrow} alt="arrow" />
                      </span>
                    </div>
                  </Link>

                  <Link
                    href="/voucher/ajio-e-gift-card"
                    title="Ajio E-Gift Card"
                  >
                    <div className={styles.voucherCard}>
                      <div className={styles.logoImg}>
                        <Image src={ajioPopular} alt="Ajio" />
                      </div>
                      <span className={styles.arrow}>
                        <Image src={popularArrow} alt="arrow" />
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div
            className={`${styles.fifth_row} row row-padding-bottom-none bg-white`}
          >
            <div className="mb-5">
              <Heading
                title="Got Questions?"
                color="equity-blue"
                size="h1"
                useH2TagInHtml={true}
              />
            </div>
            <div className="mb-5">
              <Heading
                title="Don’t worry! Our FAQs section will help you learn more about Brand Gift Vouchers in detail"
                color="secondry-black"
                size="h4"
                useH2TagInHtml={true}
              />
            </div>

            <div>
              <VoucherFaqComponent voucherName={voucherName} />
            </div>

            <div className={styles.faq_bg}>
              <Image src={faqBg} alt="background image" />x
            </div>
          </div>
        </div>
      ) : (
        <div className={` py-5 ${styles.error_container}`}>
          <div className={`${styles.first_row} row color-white`}>
            <div className="col-md-10 mx-auto col-12 d-flex flex-column align-items-center py-5">
              <div className="d-flex mb-4 text-center">
                <Heading
                  title="The Voucher you are looking for is currently not available"
                  color="secondry-black"
                  size="h2"
                  weight="7"
                  useH1TagInHtml={true}
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
                  useH2TagInHtml={true}
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

      <Footer utmSource={halfBoltUTM} />
    </>
  );
};

export default voucherPage;
