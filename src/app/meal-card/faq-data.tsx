import { FAQProps } from "../../components/faq-new/faq"

// ✅ Create a type that excludes `index` & `answerVisible` & `onToggleAnswerVisibility`
type FAQDataItem = Omit<
  FAQProps,
  "index" | "answerVisible" | "onToggleAnswerVisibility"
>

const faqData: FAQDataItem[] = [
  {
    question: "What are meal cards?",
    answer: [
      {
        heading:
          "Meal cards are employer-provided prepaid cards that work similarly to debit cards. Employees can use these meal cards for food and grocery-related purchases across multiple retail outlets, convenience stores, food chains, and food delivery apps like Zomato, Swiggy, Blinkit, etc.",
      },
    ],
  },
  {
    question: "Why meal cards are important for any business?",
    answer: [
      {
        heading:
          "Meal cards help boost employee satisfaction by providing tax benefits and streamlining food-related expenses. Instead of using their debit cards, employees can use their prepaid meal cards to make all grocery-related purchases. Providing a food card to employees also makes an attractive remuneration package, making them believe that the company is considerate towards them.",
      },
    ],
  },
  {
    question:
      "Does the meal card module help improve the finance team’s performance? If yes, how?",
    answer: [
      {
        heading:
          "Meal card is an effective replacement for paper-based food coupons. The easy management and tracking of meal cards help the finance/admin team to refill them instead of issuing monthly food coupons while tracking their balance. The finance team can easily activate, block, unblock, or deactivate the card in case of misuse.",
      },
    ],
  },
  {
    question: "Why should a startup consider offering meal cards to employees?",
    answer: [
      {
        heading:
          "Startups need to consider offering meal cards to employees for the following reasons:",
        bullets: [
          "They have a wider usage and can be used across shops and eateries",
          "Refilling at regular intervals is a matter of a few clicks based on a list of employees",
          "Onboarding new employees and offering them meal cards is easy",
          "It is easy to track and control usage for the employees as well as the finance team",
          "Meal cards motivate employees as they believe that the organization is considerate towards their food expenses",
        ],
      },
    ],
  },
  {
    question: "How meal cards reduce fraud instances in business?",
    answer: [
      {
        heading:
          "Meal cards function pretty much like debit cards but specifically for purchasing food, which means they are operated on a one-time or preset PIN. This means that even if the food card is misplaced and discovered by another person, it would be difficult to misuse. If reported lost, the finance team can easily block the card and restrict any fraud from occurring.",
      },
    ],
  },
  {
    question: "Are meal cards taxable?",
    answer: [
      {
        heading:
          "Meal cards are not taxable. However, if the amount spent on a meal exceeds the non-taxable limit of 2200 INR per month, then they are taxable as per Section 17(2)(viii) of the Income Tax Act.",
      },
    ],
  },
  {
    question: "How to claim meal allowance?",
    answer: [
      {
        heading:
          "Employee’s food allowance is a part of the remuneration. Meal allowance can be availed using tax-free meal cards. Employees can complete their KYC on the EnKash portal, activate their meal card, and use it monthly at their convenience and requirement.",
      },
    ],
  },
  {
    question: "How to implement meal cards in the workplace?",
    answer: [
      {
        heading:
          "In order to implement meal cards at the workplace, follow these easy steps:",
        bullets: [
          "Register on EnKash, your meal card provider",
          "Define the value of the card according to your organization’s budget",
          "Create a network of authorized food chains, apps, outlets where all card will be valid",
          "Educate your employees about the KYC and usage of the meal card",
          "Distribute the cards among your employees and encourage them to use it for food purchases and tax-redemption",
        ],
      },
    ],
  },
]

export default faqData
