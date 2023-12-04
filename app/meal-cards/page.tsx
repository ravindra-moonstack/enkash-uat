import Image from "next/image";
import styles from "./page.module.scss";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import { space } from "../../constant/common";
import faqData from "./faq-data";
import blogData from "./blog-data";
import carouselData from "./carousel-data";
import { bannerLottie, caraouselBg, faqBg, whiteArrow } from ".";
import ContactUsCard from "@/components/contact-us-card/contact-us-card";
import Heading from "@/components/heading/heading";
import EnkashWay from "@/components/enkash-way/enkash-way";
import ThreeSteps from "@/components/three-steps/three-steps";
import HowDoesCarousel from "@/components/carousel/how-does-carousel";
import FAQ from "@/components/faq/faq";
import MobileHeader from "@/components/header/mobile-header/mobile-header";
import WebHeader from "@/components/header/web-header";
import BlogWrapper from "@/components/blog/blog-wrapper/blog-wrapper";
import { Metadata } from "next";
import LottieClientComponent from "@/components/lottie-client/lottie-client";
import ComprehensiveView from "@/components/comprehensive-view/comprehensive-view";
import FAQHtml from "./faq-html";

export const metadata: Metadata = {
  title: "Corporate Meal Card Online: Effortless Dining Solutions for Business",
  description:
    "Unlock the convenience of corporate meal cards online. Streamline employee benefits and expense management effortlessly with our secure and efficient solution.",
};

const mealCard = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <div className="mobile-header">
        <MobileHeader />
      </div>
      <div className="desktop-header">{<WebHeader />}</div>
      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <div className="d-flex">
              <Heading
                title={`Freedom |${space}`}
                color="rainy-blue"
                size="h4"
                weight="7"
              />
            </div>
            <Heading title="Meal Cards" size="h4" weight="4" />
          </div>
          <Heading
            title={`Enhance Employee${space}`}
            color="rainy-blue"
            size="h2"
            weight="7"
          />
          <Heading
            title="Experience with Meal Cards"
            color="white"
            size="h2"
            weight="7"
          />

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Provide your employees with tax-free meal cards to purchase food and grocery-related items across multiple food chains, retail outlets, and supermarkets"
              color="white"
              size="h6"
              weight="5"
            />
          </div>
          <div className="my-5 d-flex flex-row justify-content-start align-items-center">
            <div className="me-2">
              <PrimaryButton title="EnKash Now" theme="theme-blue" />
            </div>
            <div>
              <SecondryButton
                title="Book a Demo"
                actionImage={whiteArrow}
                iconSize={15}
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
          <ThreeSteps />
        </div>
      </div>

      <div className={`${styles.second_row} row d-flex bg-white row-padding`}>
        <EnkashWay
          progressData={[
            {
              itemArray: ["Management"],
              oldWayDescription:
                "Paper-based coupons are challenging to manage and carry everywhere.",
              newWayDescription:
                "Prepaid digital cards are preloaded with a particular amount and can be easily managed.",
            },
            {
              itemArray: ["Security"],
              oldWayDescription:
                "Paper coupons are always at risk of loss or expiry, with the balance remaining discarded.",
              newWayDescription:
                "Secure and easy-to-track cards to prevent loss or misuse by others. The balance remaining can be carried forward.",
            },
            {
              itemArray: ["Accessibility"],
              oldWayDescription:
                "Food vouchers are allocated manually, making it a time-consuming process.",
              newWayDescription:
                "EnKash meal card can be accessed on the platform after KYC.",
            },
            {
              itemArray: ["Limitations"],
              oldWayDescription:
                "Face limitations due to restrictions of certain food shops.",
              newWayDescription:
                "Fewer restrictions due to the broader acceptability of meal cards across outlets.",
            },
            {
              itemArray: ["Tracking"],
              oldWayDescription:
                "Difficult to keep track of the balance remaining due to paper coupons.",
              newWayDescription:
                "Automatic updates from the card-issuing entities on balance available.",
            },
            {
              itemArray: ["Allocation of", "Funds"],
              oldWayDescription:
                "Limitations to dynamically allocate funds or control the transactions.",
              newWayDescription:
                "Seamless transfer of funds online and complete control over all transactions.",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center mb-5">
          <Heading
            title="Meal cards from EnKash are"
            color="black"
            size="h1"
            weight="6"
          />
          <Heading
            title={`${space}hassle-free, widely accepted & trackable`}
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
                    title="Issue and"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Refill"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </>
              }
              description="Meal cards are easy to issue with a specific limit towards food purchases and easier to refill"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Easy Management"
              description="In case of loss or misuse, it is easy to manage the card from the platform to restrict or block usage"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle=" Track and Control"
              description="Due to the features that mimic debit cards, the meal card is easy to keep track of and control for the end user"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Wider Acceptance"
              description="Various supermarkets, food delivery apps, and other eating establishments widely accept meal cards"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Complete Overview"
              description="Meal cards offer a complete overview of what is spent and what remains in balance"
            />
          </div>
        </div>
      </div>

      <div className={`${styles.fourth_row} row`}>
        <HowDoesCarousel
          titleContent={
            <>
              <div className="text-center">
                <div className="text-center d-inline flex-column">
                  <Heading
                    title={`Explore${space}`}
                    color="white"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title={`secure, convenient${space}`}
                    color="rainy-blue"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title={`and${space}`}
                    color="white"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title={`widely accepted${space}`}
                    color="rainy-blue"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title="EnKash meal cards"
                    color="white"
                    size="h1"
                    weight="6"
                  />
                </div>
                <div></div>
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
          title="Learn how meal cards offer a host of benefits for your business and employees!"
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
          description="Meal cards are prepaid cards provided by employers to enhance employees' morale. These cards are used for food-related purchases on various retail outlets or apps and help in tax redemption for employees"
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
                    specific amount of money.
                  </li>
                  <li>
                    Employees will be informed via SMS/mail regarding their meal
                    card activation after issuance.
                  </li>
                  <li>
                    Employees must log in to the EnKash portal to do their KYC
                    to activate their meal card.
                  </li>
                  <li>
                    A request can be raised for a physical meal card as well.
                  </li>
                  <li>
                    These cards can be used across multiple food retail outlets,
                    food chains, and food delivery apps.
                  </li>
                </ul>
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What are the different types of meal cards"
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
                    outlets. They allow employees to choose from various
                    options.
                  </li>
                  <li>
                    Employer-provided meal cards: Employers partner with
                    specific restaurants or food providers to offer meal cards
                    exclusively for their employees. These cards can only be
                    used at specific locations.
                  </li>
                  <li>
                    Restaurant-specific meal cards: Some companies issue meal
                    cards to be used at in-house cafeterias or dining
                    facilities. These cards can be used only inside the
                    company's premises.
                  </li>
                </ul>
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Advantages of meal cards for employees"
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
                    employees.
                  </li>
                  <li>
                    Convenience: Meal cards can easily replace debit cards for
                    food-related purchases, eliminating the cash quotient.
                  </li>
                  <li>
                    Freedom of choice: Meal cards give access to a network of
                    approved restaurants, food chains, and retail outlets
                    offering various food options.
                  </li>
                  <li>
                    No more lunch stress: Employees can save time and effort
                    spent preparing meals at home and order food at their
                    workplace as per their preference.
                  </li>
                  <li>
                    Food expense management: Employees can manage their food
                    expenses with meal cards as they have preset limits.
                  </li>
                  <li>
                    Food reimbursement not required: Employees don't have to
                    complete the reimbursement process with meal cards.
                  </li>
                  <li>
                    Easy management: Employees can easily manage their meal
                    cards online and check their balance and expiration date.
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
                    their salary package more attractive.
                  </li>
                  <li>
                    Increased Productivity: Employees with meal cards can focus
                    more on work without worrying about lunch preparations and
                    breaks.
                  </li>
                  <li>
                    Easy Management: Employers can streamline the process of
                    meal cards and reduce the hassle of food coupons and
                    reimbursements.
                  </li>
                  <li>
                    Competitive Edge: Employers with meal cards have the edge
                    over other companies hiring, setting them apart in the
                    market.
                  </li>
                </ul>
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What are the best practices when implementing meal cards in the workplace"
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
                    outlets.
                  </li>
                  <li>
                    Efficient communication: Educate your employees about meal
                    cards in detail including where and how to use them.
                  </li>
                  <li>
                    Employee training: Conduct training sessions for employees
                    to understand and use the meal card and acknowledge their
                    doubts during these sessions.
                  </li>
                  <li>
                    Feedback: Ensure collection of feedback from employees about
                    their experience.
                  </li>
                  <li>
                    Compliance management: Stay updated on local tax regulations
                    and compliance requirements to ensure meal cards align with
                    the tax implications to employees and the company’s finance
                    department.
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
    </div>
  );
};

export default mealCard;
