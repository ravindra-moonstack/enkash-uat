import Image from "next/image";
import { Metadata } from "next";
import styles from "./page.module.scss";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import CategoryMenu from "@/components/voucher-page/category-menu";
import VoucherData, { Voucher } from "../../bolt/data/voucher-data-V2";
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
import { voucherUrlGenerate } from "../category/[category]/page";
import SavingsCalculator from "@/components/voucher-page/voucher-calculator/voucher-calculator";
import FAQHtml from "@/app/ofex/faq-html";
import faqData from "@/app/ofex/insights/faq-data";
import OccasionVoucher from "@/components/voucher-page/occasion-voucher/occasion-voucher";
import CustomBreadcrumb from "@/components/breadcrumb/breadbrumb";
import { nameToUrl, titleCae, toCamelCase } from "@/common/utils/stringUtils";

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
  const imageUrl = `https://www.enkash.com/images/voucher-bg/${voucher.voucherId}.png`;
  return {
    title: `${voucher.name} - EnKash`,
    description: `${voucher.description}`,
    alternates: {
      canonical: `https://www.enkash.com/${voucherUrlGenerate(
        voucher.voucherId
      )}`,
    },
    openGraph: {
      title: `${voucher.name} - EnKash`,
      description: `${voucher.description}`,
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
      title: `${voucher.name} - EnKash`,
      description: `${voucher.description}`,
      images: [imageUrl],
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
    url: `https://www.enkash.com/${voucherUrlGenerate(voucher.voucherId)}`,
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
  console.log("voucherName", voucherName);
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
        nameToUrl(product.brand) === nameToUrl(localVoucher.name) &&
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
    (voucher) => nameToUrl(voucher.name) === voucherName
  );

  if (!localVoucherData) {
    console.log("No voucher present");
  }
  const voucherData = await fetchVoucher(voucherName);
  const voucherCategory = voucherData?.category || "";
  // const voucherData = VoucherData[voucherId];
  // const voucherData = VoucherDataV2[voucherName];

  let categoryNameMap = new Map<string, string>([
    ["e-commerce", "E-Commerce"],
    ["food-and-beverages", "Food & Beverages"],
    ["health-and-wellness", "Health & Wellness"],
    ["apparels", "Apparels"],
    ["movies-and-music", "Movies & Music"],
  ]);
  const voucherImage = voucherData
    ? `/images/voucher-bg/${voucherData.backgroundImg}`
    : null;

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

  return (
    <>
      <Header utmSource={halfBoltUTM} />

      {voucherData ? (
        <div className={`color-white ${styles.home_container}`}>
          <div className={`color-white ${styles.first_row_category}`}>
            <CategoryMenu
              currentPageCategory={voucherData?.category || "e-commerce"}
            />
          </div>

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
                    />
                    <Heading
                      title={voucherData.brandName}
                      color="secondry-black"
                      size="h3"
                      weight="7"
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
                      voucherImg={`/images/voucher-bg/${voucherData.backgroundImg}`}
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

            <div className={`mb-4 ${styles.mid_container}`}>
              <div className={styles.detail_section}>
                <div className={`my-4`}>
                  <div className={`mb-1 ${styles.description_title}`}>
                    <Heading
                      title="Who can use "
                      color="secondry-black"
                      size="h3"
                      weight="7"
                    />
                    <Heading
                      title={voucherData.name}
                      color="secondry-black"
                      size="h3"
                      weight="7"
                    />
                  </div>
                </div>
              </div>
              <div className={`mb-4 ${styles.description}`}>
                <div className={styles.need_container}>
                  <div className={styles.need_img}>
                    <Image src={individualNeed} alt="Individual Need" />
                  </div>
                  <div className={`${styles.need_content}`}>
                    <Heading
                      title="Individual Need"
                      color="secondry-black"
                      size="h4"
                      weight="7"
                    />
                    <div className={`mb-4 ml-2 ${styles.description}`}>
                      Getting your hands on {voucherData.name}s will enable you
                      to get exclusive discounts.
                    </div>
                  </div>
                </div>

                <div className={styles.need_container}>
                  <div className={styles.need_img}>
                    <Image src={corporateNeed} alt="Corporate Need" />
                  </div>
                  <div className={`${styles.need_content}`}>
                    <Heading
                      title="Corporate Need"
                      color="secondry-black"
                      size="h4"
                      weight="7"
                    />
                    <div className={`mb-4 ml-2 ${styles.description}`}>
                      Enterprises can save big annually with an exclusive 
                      {voucherData.name}s for their employees.
                    </div>
                  </div>
                </div>
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
                  <Link href="/bolt/voucher/Nykaa-Fashion-E-Gift-Card/?voucherId=PC272920797HGB6I">
                    <div className={styles.voucherCard}>
                      <div className={styles.logoImg}>
                        <Image src={myntraPopular} alt="Myntra" />
                      </div>
                      <span className={styles.arrow}>
                        <Image src={popularArrow} alt="arrow" />
                      </span>
                    </div>
                  </Link>

                  <Link href="/bolt/voucher/Nykaa-Fashion-E-Gift-Card/?voucherId=PC272920797HGB6I">
                    <div className={styles.voucherCard}>
                      <div className={styles.logoImg}>
                        <Image src={amazonPopular} alt="Amazon Pay" />
                      </div>
                      <span className={styles.arrow}>
                        <Image src={popularArrow} alt="arrow" />
                      </span>
                    </div>
                  </Link>

                  <Link href="/bolt/voucher/Nykaa-Fashion-E-Gift-Card/?voucherId=PC272920797HGB6I">
                    <div className={styles.voucherCard}>
                      <div className={styles.logoImg}>
                        <Image src={zomatoPopular} alt="Zomato" />
                      </div>
                      <span className={styles.arrow}>
                        <Image src={popularArrow} alt="arrow" />
                      </span>
                    </div>
                  </Link>

                  <Link href="/bolt/voucher/Nykaa-Fashion-E-Gift-Card/?voucherId=PC272920797HGB6I">
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
              <Heading title="Got Questions?" color="equity-blue" size="h1" />
            </div>
            <div className="mb-5">
              <Heading
                title="Don't worry! Our FAQs section will help you learn about QR Codes in detail"
                color="secondry-black"
                size="h4"
              />
            </div>

            <div>
              <FAQHtml faqData={faqData} />
            </div>

            <div className={styles.faq_bg}>
              <Image src={faqBg} alt="background image" />x
            </div>
          </div>

          {/* METADATA for voucher */}
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
                  color="secondry-black"
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

      <Footer utmSource={halfBoltUTM} />
    </>
  );
};

export default voucherPage;
