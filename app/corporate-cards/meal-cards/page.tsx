import Image from "next/image";
import styles from "./page.module.scss";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import { space } from "../../../common/constant";
import { blogData, faqData, carouselData, productData } from "./data";
import { Header, Footer, BlogWrapper } from "@/components";
import { bannerLottie, caraouselBg, faqBg } from ".";
import ContactUsCard from "@/components/contact-us-card/contact-us-card";
import Heading from "@/components/heading/heading";
import ThreeSteps from "@/components/three-steps/three-steps";
import HowDoesCarousel from "@/components/carousel/how-does-carousel";
import { Metadata } from "next";
import LottieClientComponent from "@/components/lottie-client/lottie-client";
import ComprehensiveView from "@/components/comprehensive-view/comprehensive-view";
import { FAQHtml } from "@/components/faq";
import generateMetaData from "@/common/utils/metaData";
import { userPlus, numberOne, stack } from "@/components/three-steps/";
import AllProducts from "@/components/all-products/all-products";

export const metadata: Metadata = generateMetaData({
  title: "Corporate Meal Card Online: Effortless Dining Solutions for Business",
  description:
    "Unlock the convenience of corporate meal cards online. Streamline employee benefits and expense management effortlessly with our secure and efficient solution.",
  alternates: {
    canonical: "https://www.enkash.com/corporate-cards/meal-cards/",
  },
  faqData: faqData,
});

const mealCard = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <Header utmSource="corporate_cards" />

      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <Heading
              title={`Meal Cards`}
              color="rainy-blue"
              size="h4"
              weight="7"
            />
          </div>
          <Heading
            title={`Empower Your Employees with Tax-Free EnKash ${space}`}
            color="white"
            size="h2"
            weight="7"
          />
          <Heading title="Meal Cards" color="rainy-blue" size="h2" weight="7" />

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Provide tax-free food card while enhancing employee satisfaction. Widely accepted across platforms, these cards simplify meal allowances and provide a seamless, paperless solution."
              color="white"
              size="h6"
              weight="5"
            />
          </div>
          <div className="my-5 d-flex flex-row justify-content-start align-items-center">
            <div className="me-2">
              <PrimaryButton
                title="Get Started "
                theme="blue"
                url="/sales/?source=corporate_cards"
              />
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 d-flex justify-content-center">
          <div className={styles.lottie_container}>
            <LottieClientComponent animationData={bannerLottie} loop={true} />
          </div>
        </div>

        <div className={styles.three_step_container}>
          <ThreeSteps
            title="Maximize Tax Savings While Supporting Employee Well-Being"
            steps={[
              {
                icon: userPlus,
                text: "Digital Convenience",
              },
              {
                icon: stack,
                text: "Real-Time Visibility",
              },
              {
                icon: numberOne,
                text: "Wide Acceptance",
              },
            ]}
          />
        </div>
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center mb-5">
          <Heading
            title="Meal Cards that your "
            color="black"
            size="h1"
            weight="6"
          />
          <Heading
            title={`${space}Employees Deserve`}
            color="equity-blue"
            size="h1"
            weight="6"
          />
        </div>
        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <>
                  <Heading
                    title="Tax Savings"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Made Simple"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </>
              }
              description="EnKash Meal Cards help employees save up to ₹50,000 annually under Section 17(2)(viii) of the Income Tax Act. This boosts take-home pay while enhancing employee satisfaction and retention with financial benefits."
              source="corporate_cards"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Wide Acceptance"
              description="EnKash Meal Cards are accepted nationwide at supermarkets, food delivery platforms like Swiggy and Zomato, restaurants, cafes, and food courts, offering employees seamless transactions for their daily needs."
              source="corporate_cards"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Secure and Hassle-Free"
              description="EnKash Meal Cards prioritize security with instant blocking and replacements for lost cards, zero liability on reported losses, and a paperless, trackable system that reduces risks and ensures transparency."
              source="corporate_cards"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Easily Trackable"
              description="Both employees and employers can easily track meal card expenses. This real-time visibility enables to get details like balance and usage with spending insights."
              source="corporate_cards"
            />
          </div>
        </div>
      </div>

      <div className={`${styles.second_row}  bg-white`}>
        <AllProducts
          title="An Array of Corporate Cards by"
          subtitle="EnKash"
          data={productData}
        />
      </div>

      <div className={`${styles.fourth_row} row`}>
        <HowDoesCarousel
          titleContent={
            <>
              <div className="text-center">
                <div className="d-flex flex-column">
                  <div>
                    <Heading
                      title={`How To Get Started with ${space}`}
                      color="white"
                      size="h1"
                      weight="6"
                    />
                    <Heading
                      title={`EnKash Meal Cards${space}`}
                      color="rainy-blue"
                      size="h1"
                      weight="6"
                    />
                  </div>
                </div>
              </div>
            </>
          }
          mainTitle="How does it work?"
          carouselData={carouselData}
          carouselBg={caraouselBg}
        />
      </div>

      <div className="bg-white row-padding text-center d-flex flex-column">
        <BlogWrapper
          blogData={blogData}
          title="Learn how meal cards can benefit your business and employees!"
        />
      </div>

      <div
        className={`${styles.fifth_row} row row-padding-bottom-none bg-white`}
      >
        <div className="mb-5">
          <Heading title="Got Questions?" color="equity-blue" size="h1" />
        </div>
        <div className="mb-5">
          <Heading
            title="Don't worry! Our FAQs section will help you learn about meal cards in detail"
            color="black"
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

      <div className={`${styles.sixth_row} row`}>
        <ContactUsCard
          title="Seeking further understanding of meal cards?"
          description="Meal cards are prepaid cards provided by employers to enhance employees' morale. These cards are used for food-related purchases on various retail outlets or apps and help in tax redemption for employees."
          source="corporate_cards"
        />
      </div>
      <div className={`${styles.seventh_row} row`}>
        <ComprehensiveView
          title="Explore our comprehensive guide"
          innerHtml={
            <>
              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How do meal cards work?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Meal cards are often used to purchase food and groceries from a network of authorized restaurants, cafes, or food outlets. Here's how meal cards typically work:"
                />
              </div>
              <div className="mb-5">
                <ul>
                  <li>
                    Employers issue meal cards to their employees as a part of
                    their remuneration package. These cards are preloaded with a
                    specific amount of money
                  </li>
                  <li>
                    Employees will be informed via SMS/mail regarding their meal
                    card activation after issuance
                  </li>
                  <li>
                    Employees must log in to the EnKash portal to do their KYC
                    to activate their meal card
                  </li>
                  <li>
                    A request can be raised for a physical meal card as well
                  </li>
                  <li>
                    These cards can be used across multiple food retail outlets,
                    food chains, and food delivery apps
                  </li>
                </ul>
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What are the different types of meal cards?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="There are three different types of meal cards:"
                />
              </div>
              <div className="mb-5">
                <ul>
                  <li>
                    Prepaid meal cards: These are generic meal cards that can be
                    used at multiple restaurants, convenience stores, and food
                    outlets. They allow employees to choose from various options
                  </li>
                  <li>
                    Employer-provided meal cards: Employers partner with
                    specific restaurants or food providers to offer meal cards
                    exclusively for their employees. These cards can only be
                    used at specific locations
                  </li>
                  <li>
                    Restaurant-specific meal cards: Some companies issue meal
                    cards to be used at in-house cafeterias or dining
                    facilities. These cards can be used only inside the
                    company's premises
                  </li>
                </ul>
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What are the advantages of meal cards for employees?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Meal cards have many benefits for employees:"
                />
              </div>
              <div className="mb-5">
                <ul>
                  <li>
                    Tax Benefits: Meal cards are often exempt from income tax up
                    to a specified limit, reducing the taxable income of
                    employees
                  </li>
                  <li>
                    Convenience: Meal cards can easily replace debit cards for
                    food-related purchases, eliminating the cash quotient
                  </li>
                  <li>
                    Freedom of choice: Meal cards give access to a network of
                    approved restaurants, food chains, and retail outlets
                    offering various food options
                  </li>
                  <li>
                    No more lunch stress: Employees can save time and effort
                    spent preparing meals at home and order food at their
                    workplace as per their preference
                  </li>
                  <li>
                    Food expense management: Employees can manage their food
                    expenses with meal cards as they have preset limits
                  </li>
                  <li>
                    Food reimbursement not required: Employees don't have to
                    complete the reimbursement process with meal cards
                  </li>
                  <li>
                    Easy management: Employees can easily manage their meal
                    cards online and check their balance and expiration date
                  </li>
                </ul>
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What are the benefits of meal cards for employers?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Meal cards can benefit employers in the following ways:"
                />
              </div>
              <div className="mb-5">
                <ul>
                  <li>
                    Employee Retention: Employers can increase employee
                    retention by providing meal cards to employees and making
                    their salary package more attractive
                  </li>
                  <li>
                    Increased Productivity: Employees with meal cards can focus
                    more on work without worrying about lunch preparations and
                    breaks
                  </li>
                  <li>
                    Easy Management: Employers can streamline the process of
                    meal cards and reduce the hassle of food coupons and
                    reimbursements
                  </li>
                  <li>
                    Competitive Edge: Employers with meal cards have the edge
                    over other companies hiring, setting them apart in the
                    market
                  </li>
                </ul>
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What are the best practices when implementing meal cards in the workplace?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="While implementing meal cards at the workplace, employees should keep the following things in mind:"
                />
              </div>
              <div className="mb-5">
                <ul>
                  <li>
                    Choose the right provider: Decide a reputable meal card
                    provider with a user-friendly platform and a vast network of
                    partnership across food restaurants, apps, and retail
                    outlets
                  </li>
                  <li>
                    Efficient communication: Educate your employees about meal
                    cards in detail including where and how to use them
                  </li>
                  <li>
                    Employee training: Conduct training sessions for employees
                    to understand and use the meal card and acknowledge their
                    doubts during these sessions
                  </li>
                  <li>
                    Feedback: Ensure collection of feedback from employees about
                    their experience
                  </li>
                  <li>
                    Compliance management: Stay updated on local tax regulations
                    and compliance requirements to ensure meal cards align with
                    the tax implications to employees and the company’s finance
                    department
                  </li>
                </ul>
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What is meal allowance?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Meal allowance is the money the employer provides to employees to cover their meal costs. Meal allowance can be provided as prepaid cards, which can be used at food outlets, restaurants, convenience stores, and supermarkets. Employees can use these prepaid cards to cover their food expenses and save their taxes, as these cards are exempted from taxes up to a certain limit."
                />
              </div>
            </>
          }
        />
      </div>
      <Footer utmSource="corporate_cards" />
    </div>
  );
};

export default mealCard;
