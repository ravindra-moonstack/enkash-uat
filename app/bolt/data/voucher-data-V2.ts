type FAQ = {
  question: string;
  answer: {
    heading: string;
    bullets: string[];
  }[];
};

export type Voucher = {
  name: string;
  urlName: string;
  brandName: string;
  category: string;
  discount: number;
  backgroundImg: string;
  descriptionTitle: string;
  description: string;
  aboutCompany: string;
  calculatorTitle: string;
  calculatorDescription?: string;
  howToBuyTitle: string;
  howToRedeemTitle: string;
  howToRedeemDesc: string;
  howToRedeemSteps: string[];
  checkBalanceTitle: string;
  checkBalanceDesc: string;
  checkBalanceSteps: string[];
  termsAndConditionsTitle: string;
  termsAndConditionSteps: string[];
  occasionsTitle: string;
  festivals: string;
  anniversary: string;
  birthdays: string;
};

const VoucherData: Record<string, Voucher> = {
  "nykaa-fashion-e-gift-card": {
    name: "Nykaa Fashion E-Gift Card",
    urlName: "nykaa-fashion-e-gift-card",
    brandName: "Nykaa",
    category: "e-commerce",
    discount: 7.0,
    backgroundImg: "PC272920797HGB6I.png",
    descriptionTitle: "Nykaa Fashion E-Gift Card",
    description:
      "The best way to pamper someone who loves fashion, beauty, and self-care is with a Nykaa Fashion E-Gift Card. The recipient can explore a wide range of products across fashion apparel, accessories, beauty products, personal care items, and even homeware. This Gift Card is the perfect gift for someone who likes their fashion game strong!",
    aboutCompany:
      "A one-stop online fashion and lifestyle platform tailored for the Indian market. With a curated selection of fashion and lifestyle products along with a convenient online shopping experience, Nykaa has become the talk of the town within no time.   ",
    calculatorTitle: "Best Nykaa Gift Cards",
    calculatorDescription:
      "Nykaa Gift Cards are a popular choice for presents, whether for a special occasion or a thoughtful gesture. These gift cards are a convenient and appreciated option that suits any budget and preference.\n",
    howToBuyTitle: "How to Buy a Nykaa Fashion E-Gift Card?",
    howToRedeemTitle: "How to Use or Redeem Nykaa Fashion E-Gift Card?",
    howToRedeemDesc:
      "Nykaa Gift Cards are preactivated cards and remain valid for 6 months from purchase. The balance of the Nykaa Gift Card Voucher can be checked on the mobile app or website.\xa0",
    howToRedeemSteps: [
      "1. This E-Gift Card can be redeemed both online and offline.",
      "2. For online redemption, visit Nykaa, Nykaa Man, Nykaa Fashion.",
      "3. Add the Gift Card amount to the payment page.",
      "4. Use it to pay for the item purchased.",
      "5. For offline redemption, visit any Nykaa retail store.",
      "6. Present the 16-digit code and PIN during billing.",
      "7. Use the Gift Card amount to pay for the purchase.",
    ],
    checkBalanceTitle: "How to Check Nykaa Fashion E-Gift Card Balance?",
    checkBalanceDesc:
      "Nykaa Gift Cards are preactivated cards and remain valid for 6 months from purchase. The balance of the Nykaa Gift Card Voucher can be checked on the mobile app or website.\xa0",
    checkBalanceSteps: [
      "1. This E-Gift Card can be redeemed both online and offline.",
      "2. For online redemption, visit Nykaa, Nykaa Man, Nykaa Fashion.",
      "3. Add the Gift Card amount to the payment page.",
      "4. Use it to pay for the item purchased.",
      "5. For offline redemption, visit any Nykaa retail store.",
      "6. Present the 16-digit code and PIN during billing.",
      "7. Use the Gift Card amount to pay for the purchase.",
    ],
    termsAndConditionsTitle: "Terms & Conditions for Nykaa Fashion E-Gift Card",
    termsAndConditionSteps: [
      "1. This E-Gift Card can be redeemed both online and offline.",
      "2. For online redemption, visit Nykaa, Nykaa Man, Nykaa Fashion.",
      "3. Add the Gift Card amount to the payment page.",
      "4. Use it to pay for the item purchased.",
      "5. For offline redemption, visit any Nykaa retail store.",
      "6. Present the 16-digit code and PIN during billing.",
      "7. Use the Gift Card amount to pay for the purchase.",
    ],
    occasionsTitle: "Nykaa Fashion E-Gift Cards for different Occasions",
    festivals:
      "Consider gifting your employees Nykaa gift cards to help them relax & enjoy their holidays. It's a thoughtful way to show appreciation and ensure they have a pleasant break.",
    anniversary:
      "Consider gifting your employees Nykkaa gift cards to help them relax & enjoy their holidays. It's a thoughtful way to show appreciation and ensure they have a pleasant break.",
    birthdays:
      "Consider gifting your employees Nykaa gift cards to help them relax & enjoy their holidays. It's a thoughtful way to show appreciation and ensure they have a pleasant break.",
  },
  "ajio-e-gift-card": {
    name: "AJIO E-Gift Card",
    urlName: "ajio-e-gift-card",
    brandName: "AJIO",
    category: "e-commerce ",
    discount: 0,
    backgroundImg: "hehe",
    descriptionTitle: "AJIO E- Gift Card ",
    description:
      "Online shopping is all about comfort and variety, which is why AJIO Gift Cards make the perfect gifting option for all fashion enthusiasts. AJIO Gift Cards allow the receiver to explore and shop for trendy and classy clothes, footwear, accessories and much more at discounted prices. So, let’s explore these trendy E Gift-Cards in a little more detail as well as the reasons why they are a good gifting option.",
    aboutCompany:
      "AJIO is an Indian e-commerce fashion and lifestyle store that boasts a diverse range of products and items., AJIO has trendy apparel, footwear, fancy bags and other types of goods catering to various age groups and genders. One of AJIO's benefits is the exclusive products from global labels and AJIO's brands. AJIO is for fashionistas who understand just how much clothes can talk.\n",
    calculatorTitle: "Best AJIO Gift Cards",
    calculatorDescription:
      "AJIO Gift Cards are a popular choice for presents, whether it's for a special occasion or a thoughtful gesture. These gift cards are a convenient and appreciated option that suits any budget and preference.",
    howToBuyTitle: "How to Buy AJIO Gift Cards",
    howToRedeemTitle: "How to Redeem an AJIO Gift Card",
    howToRedeemDesc:
      "AJIO  E-Gift Voucher can be redeemed using the following steps on the app:",
    howToRedeemSteps: [
      "1. Visit AJIO.com or download the AJIO application.",
      "2. Sign in or register if you are a first time user.",
      "3. Browse through the AJIO collection and select your best items in the cart.",
      "4. Proceed to the checkout page and enter the Gift Card voucher code in the relevant section.",
      "5. After you have entered the voucher code, your total amount will be reduced automatically",
    ],
    checkBalanceTitle: "How to Check Your AJIO Gift Card Balance",
    checkBalanceDesc:
      "It is important to know the balance of your AJIO Gift Card that is left to you to utilize it effectively. You can check your balance by two processes:",
    checkBalanceSteps: [
      "Online:",
      "Visit AJIO’s website or app.",
      'Log into your account and go to the "Gift Cards" section.',
      "Enter your Gift Card details to view the remaining balance.",
      "Customer Support:",
      "For another option, you could also reach out to their customer support and ask for the balance left on your Gift Card.",
    ],
    termsAndConditionsTitle: "Terms and Conditions for AJIO Gift Cards",
    termsAndConditionSteps: [
      "The promotional codes can be used only on the AJIO app or website.",
      "AJIO Gift Card is active for 12 months from the issuance date.",
      "The gift vouchers offered to customers at the very moment cannot be returned, at the same time, there is no way to reload them once the sum is over.",
      "If the full value of the gift card is not used in a single transaction, the remaining balance will be stored as AJIO cash in the user's wallet.",
      "Promo codes cannot be used in conjunction with AJIO Gift Cards, however, they can still be used when there are sales or for items that are already on price reduction.",
      "AJIO is not responsible for lost or stolen gift cards. The holder is responsible for the safety of the gift card. This point is not mentioned in your summary.",
      "AJIO Gift Cards do not apply to the purchase of other Gift Cards or items purchased for high-end jewellery such as ornaments made of silver and gold coins. They also do not allow for cash out or credit.",
      "The value stored in the AJIO Wallet from the E-Gift Card is not transferable to any other account or bank account.",
      "It is the holder’s responsibility to bear all taxes, duties, levies, or other statutory dues in connection with the benefits of the gift card",
      "All orders placed using the E-Gift Card are subject to product availability. You should include a note that purchases using the gift card depend on the availability of the product.",
      "AJIO will not be liable for any loss or misuse of the gift card due to technical problems, delays, or unauthorized access.",
    ],
    occasionsTitle: "AJIO Gift Cards for Different Occasions\n",
    festivals:
      "Festivals like Diwali, Holi and Christmas are often celebrated by exchanging traditional gifts.. AJIO Gift Card is an amazing alternative to gift during these festivals. The recipients will always have the option to  choose their gifts making the occasion memorable for them.",
    anniversary:
      " Be it yours, someone special’s, or someone else's, AJIO Gift Cards come in handy in a cool and simple way to send the message of happiness.",
    birthdays:
      "Turn up your fashionable friend’s birthday by allowing them to go and shop for outfits of their choice rather than giving them clothes as a gift.",
  },
  "reliance-gift-card": {
    name: "Reliance Gift Card",
    urlName: "reliance-gift-card",
    brandName: "Reliance ",
    category: "",
    discount: 0,
    backgroundImg: "hehe",
    descriptionTitle: "Reliance E-Gift Card",
    description:
      "What better than being able to shop for groceries, fashion, or electronics at the same place?.  Reliance Gift Card is a convenient option that enables the recipient to purchase all of these from one place. From clothes to vegetables to gadgets, Reliance has every kind of product. For someone who enjoys having the freedom of buying whatever he or she wants, a Reliance Gift Card is the best option.",
    aboutCompany:
      "Reliance is the largest hypermarket chain in India, offering a multi-dimensional shopping experience for Indian customers in all possible categories of products. Be it food, clothing & accessories, high-priced electronics, or ornamental jewellery, all the diverse tastes of Indian consumers are catered to at Reliance Retail. Their retail infrastructure is quite robust, including both inexpensive physical stores as well as an online retail platform that offers value-for-money quality products and services to customers",
    calculatorTitle: "Best Reliance Gift Cards",
    calculatorDescription:
      "Reliance Gift Cards are a popular choice for presents, whether it's for a special occasion or a thoughtful gesture. These gift cards are a convenient and appreciated option that suits any budget and preference.",
    howToBuyTitle: "How to Buy a Reliance Gift Card",
    howToRedeemTitle: "How to Use or Redeem a Reliance Gift Card",
    howToRedeemDesc:
      "\nRedeeming a Reliance Gift Card, in any outlet or at home, is completely hassle-free. This is how you redeem your card in a step by step process:\n",
    howToRedeemSteps: [
      "Redeeming a Reliance Gift Card, in any outlet or at home, is completely hassle-free. This is how you redeem your card in a step by step process:",
      "First, buy the Reliance Gift Card voucher code from EnKash.",
      "Visit the nearest Reliance Store or the Reliance official website.",
      "While checking out, choose ‘Gift Card’ as the mode of payment",
      "Then enter the code of the voucher or gift card number to redeem the purchase in credits.",
      "Finish the transaction and the specified amount will be deducted from the card balance.",
    ],
    checkBalanceTitle: "How to Check Your Reliance Gift Card Balance",
    checkBalanceDesc:
      "It is advisable to monitor the present balance on a gift card particularly where a number of transactions are involved. There are two ways of checking the balance on a Reliance Gift Card",
    checkBalanceSteps: [
      "Check Online:",
      "Go to the official website of Reliance or open up the App, click on the “Gift Card” section and input your card number to know the balance available in your card.",
      "Check Offline:",
      "You can also go to any of the Reliance stores and request the cashier to help check your balance. You may also call the Reliance customer care to ask for your balance.",
    ],
    termsAndConditionsTitle: "Terms and Conditions for Reliance Gift Cards\n",
    termsAndConditionSteps: [
      "Reliance Gift Cards cannot be combined with other offers unless specifically mentioned.",
      "Reliance Gift Vouchers can be redeemed at Reliance SMART, Reliance Smart Point, Reliance Digital, Reliance Trends, Reliance Jewels and My Jio Stores in India.",
      "Each card is valid for a one-time purchase only.",
      "The gift card cannot be exchanged for cash or transferred to another card.",
      "No extension request of the Validity period nor refund of the value of Gift Voucher in case of failure to use the Gift Voucher on or before the validity period will be entertained.",
      "Ensure that the balance on the card is used before the expiration date (12 months from the purchase date).",
      "Gift Vouchers CAN be used to buy discounted products",
      "Multiple Gift Vouchers CAN be used in one bill",
      "This Gift Voucher is not valid on purchase of Gold/Silver Coins.",
      "Reliance shall not be responsible for loss or misuse of Gift Voucher and no duplicate or compensation in lieu of the Gift Voucher shall be given by Reliance in such cases",
      "Reliance shall not be liable under any circumstances towards any loss or damage or expenses or cost or any third-party liability, whether directly or indirectly arising out of or in relation to use of Gift Voucher and redemption thereunder by the bearer.",
      "No extension request of the Validity period nor refund of the value of Gift Voucher in case of failure to use the Gift Voucher on or before the validity period will be entertained.",
    ],
    occasionsTitle: "Reliance Gift Cards for Different Occasions",
    festivals:
      "Holidays are periods of joy and presents. A Reliance Gift Card can ease and enhance the festive shopping experience for your friends and family. Be it Dussehra or Christmas, all the things your dear one requires are available at Reliance",
    anniversary:
      "\nExpress the union of two souls and give your loved one something that he or she will absolutely adore and they can choose this themselves. A Reliance Gift Card means that you will give the person an opportunity to choose whatever.",
    birthdays:
      "A birthday stands to hold great significance and therein lies the need of a Reliance Gift Card. Why not let the receiver enjoy the comprehensive range of products at Reliance and get an ideal birthday present of his or her choice.\n",
  },
  "swiggy-gift-card": {
    name: "Swiggy Gift Card",
    urlName: "swiggy-gift-card",
    brandName: "Swiggy",
    category: "Foods & Beverages ",
    discount: 0,
    backgroundImg: "hehe",
    descriptionTitle: "Swiggy Money E-Gift Card ",
    description:
      "Great gift for any food lover! This is a perfect gift for anyone, who enjoys eating food without stepping out. Swiggy Gift Card provides a multitude of restaurants and cuisines to choose from. Be it any festive occasion or for the sake of giving, Swiggy Gift Card will always bring a smile to someone’s face.",
    aboutCompany:
      "Swiggy is currently one of the leading food delivery mobile applications in India. It has a wide range of food items from various nearby restaurants, fast food joints, and cafes, as well as food chains. Customers appreciate the app mainly because of the smooth performance and swift services that help them get their favourite dishes at their doorsteps in no time. From craving for a cheesy pizza to craving for some sweets or desiring to have a heavy Indian platter, there are endless options at Swiggy. ",
    calculatorTitle: "The Best Swiggy Gift Cards",
    calculatorDescription:
      "Swiggy Gift Cards are a popular choice for presents, whether it's for a special occasion or a thoughtful gesture. These gift cards are a convenient and appreciated option that suits any budget and preference.",
    howToBuyTitle: "How to Buy a Swiggy Gift Card?",
    howToRedeemTitle: "How to Use or Redeem a Swiggy Gift Card?",
    howToRedeemDesc:
      "Swiggy Gift Card Redemption is very easy, there are a few simple steps involved that one can follow that include:",
    howToRedeemSteps: [
      "1 Get the Swiggy Gift card from bolt.enkash.com",
      "2.: In case you do not have the Swiggy application, download it from the Play Store.",
      "3 Sign in to your Swiggy account.",
      "4. In the app, find and select the ‘Wallet’ option.",
      "5. Select the ‘Add Gift Card’ option and input the code for the Swiggy Gift Card.",
      "6. After the code has been added, the total amount on the card will be added to one’s account.",
      "7. When making payment for an order, the available balance may also be applied.",
    ],
    checkBalanceTitle: "How to Check Swiggy Gift Card Balance",
    checkBalanceDesc:
      "Knowing the balance left on your Swiggy Gift Card is quite easy. There are two methods to do it: ",
    checkBalanceSteps: [
      "1. Balance Check through the App",
      "To check the balance remaining on your gift card, just open the Swiggy app, select the ‘Wallet’ icon, and tap on the balance shown right below the ‘Gift Cards’ section.",
      "2. Customer Care",
      'If  you have questions or encounter issues, you can contact Swiggy customer service via the app’s "Help & Support" section, where representatives can further assist with balance inquiries or any other concerns related to Swiggy services',
    ],
    termsAndConditionsTitle: "Terms and Conditions for Swiggy Gift Cards",
    termsAndConditionSteps: [
      "Swiggy Gift Card are valid for 12 months from the date of purchase.",
      "Gifts cards cannot be used if ordered through the website or any PWAs. They can be done only in the Swiggy mobile applications.",
      "Swiggy Money can be used to pay for additional charges such as taxes, delivery fees, and packaging fees",
      "Users without a Swiggy account need to create one to redeem gift cards.",
      "The card shall not be topped up again once the entire amounts loaded onto the card have been exhausted.",
      "In the event that any voucher code is available, it must be entered prior to finalizing the order.",
      "E-Gift Cards are typically delivered instantly, but delivery can sometimes be delayed by 24-48 hours due to system issues.",
      "Swiggy Gift Cards cannot be exchanged returned or converted into cash or any other form of transaction.",
      'Swiggy Gift Cards or Swiggy Money cannot be used on "Minis" orders.',
    ],
    occasionsTitle: "Swiggy Gift Cards for Different Occasions",
    festivals:
      "festive season gifting e needs a Swiggy Gift Card so that the people you care about do not miss out on yummy dishes and goodies",
    anniversary:
      "Using a Swiggy Gift Card designed for a couple’s special day saves them the hassle of cooking. This is the perfect gift for them to make the most of their day. \n",
    birthdays:
      "This makes perfect sense for birthdays; consider a Swiggy Gift Card, so that the person celebrating their birthday can enjoy their favourite food any time they want. This approach allows the beneficiaries to choose for themselves, adding to making the day even better.",
  },
  "mmt-wedding-e-gift-card": {
    name: "MMT Wedding E-Gift Card",
    urlName: "mmt-wedding-e-gift-card",
    brandName: "MMT",
    category: "Travel",
    discount: 0,
    backgroundImg: "hehe",
    descriptionTitle: "MMT E-Gift Card",
    description:
      "We all have that one friend or family member who is always drawn to new adventures. They have a worldwide bucket list and their plans for the next trip are probably on the table already. For such people who are travel enthusiasts, looking for an ideal gift could be hard – until this time! Introducing the MakeMyTrip (MMT) gift card, the ideal present for a travel enthusiast. Be it a short weekend getaway, a long wanted vacation or a catch-up break, this gift voucher assures unlimited travelling pleasure and memories for life ",
    aboutCompany:
      "MakeMyTrip (MMT) is considered one of the most popular online travel agencies in India that has a plethora of travel services to offer. Be it flight bookings, train bookings, hotel room bookings, planning holidays, to ground transportation, every travel need is provided for with MakeMyTrip.\n",
    calculatorTitle: "Best MMT Gift Cards",
    calculatorDescription:
      "MMT Gift Cards are a popular choice for presents, whether it's for a special occasion or a thoughtful gesture. These gift cards are a convenient and appreciated option that suits any budget and preference.",
    howToBuyTitle: "How to Purchase an MMT Gift Card?",
    howToRedeemTitle: "How to Redeem an MMT Gift Card?",
    howToRedeemDesc:
      "Redeeming your MMT Gift Card is quite simple. Below is a procedural guidance you need to follow to use the card",
    howToRedeemSteps: [
      "Visit the MakeMyTrip website and sign in to your profile.",
      "Reserve the travel service that requires obtaining a pass, accommodation, and holiday tour packages.",
      "During payment, click on the ‘Gift Card’ option and enter the Gift Card code received via e-mail or WhatsApp.",
      "After the code application, the total booking amount will be reduced as per the balance in the gift card.",
    ],
    checkBalanceTitle: "How to Check the Balance of an MMT Gift Card?",
    checkBalanceDesc:
      "Tracking your gift card's remaining balance is simple. Here are two ways to check the remaining balance.",
    checkBalanceSteps: [
      "Online Check",
      "Visit the ‘Gift Cards’ part of the MakeMyTrip’s website/app and insert the gift card code for balance inquiry.",
      "Customer Care Support",
      "One can ascertain the balance of their gift card by calling or emailing MakeMyTrip’s customer service.",
    ],
    termsAndConditionsTitle: "Terms and Conditions for MMT Gift Cards",
    termsAndConditionSteps: [
      "The application of the gift card is restricted to the MakeMyTrip app/website for booking flights, hotels and holiday packages. It cannot be used for cab services, bus services, activities, rail bookings, homestays, or VISA purchases",
      "The Gift Card is for individual use only. Use by travel agents will lead to cancellation of bookings and no refunds will be issued.",
      "Typically, the validity period of a gift card is up to 12 months.",
      "In the event of a transaction failure, after the Gift Card has been applied, the amount will automatically be refunded to the same Gift Card within 24 hours",
      "MakeMyTrip is not responsible for lost, stolen, or misused Gift Cards. Ensure you keep your Gift Card number and PIN safe.",
      "Such cards are non-transferrable as they are not redeemable in cash nor can they be topped up.",
      "You can combine multiple Gift Cards (up to three) for a single booking, but they cannot be clubbed with any other ongoing offers, discounts, cashback, or promotions from MakeMyTrip",
      "If you cancel a booking made with a Gift Card within the validity period, the amount will be refunded to the original Gift Card. If the Gift Card's validity has expired, no refund will be processed.",
    ],
    occasionsTitle: "MMT Gift Cards for Different Occasions",
    festivals:
      "Happy occasions like Diwali, Christmas and New Year are appropriate to offer an MMT Gift Card to dear ones. \n",
    anniversary:
      "Gift an MMT gift card and plan a fantastic package for the couple’s anniversary. \n",
    birthdays:
      "Including the MMT gift card in the birthday presents given to close friends or family members would be an excellent idea.",
  },
  "luxe-e-gift-card": {
    name: "LUXE E-Gift Card ",
    urlName: "luxe-e-gift-card",
    brandName: "LUXE",
    category: "Fashion and Luxury ",
    discount: 0,
    backgroundImg: "hehe",
    descriptionTitle: "LUXE E-Gift Card ",
    description:
      "There is always that one person in everyone’s life, be it a best friend, a sibling, or a workmate, who is addicted to the finer things in life.  What better than giving them a LUXE gift card? Whether it is fine dining, high-end fashion or luxury items, a LUXE Gift Card enables ordering anything of their wish. ",
    aboutCompany:
      "LUXE is the best luxury gift card company that offers a variety of luxury gifting options ranging from fashion to lifestyle and even food within a short period. When you choose a gift card from LUXE, you do not simply give a present, you give an experience. Recipients can get accustomed to the way of life characterized by a wide range of high-end brands and bespoke services built to meet their requirements. Whether it is about purchasing a luxury designer gown or indulging in lavish dining at a fancy restaurant, the most pleasurable things in life are made easy with a LUXE Gift Card. ",
    calculatorTitle: "Best  LUXE Gift Cards ",
    calculatorDescription:
      "LUXE Gift Cards are a popular choice for presents, whether it's for a special occasion or a thoughtful gesture. These gift cards are a convenient and appreciated option that suits any budget and preference.",
    howToBuyTitle: "How to Buy a LUXE Gift Card",
    howToRedeemTitle: "How to Redeem a LUXE Gift Card\n",
    howToRedeemDesc:
      "The procedure for LUXE Gift Card redemption is very simple and will take only a few minutes.\nHere’s how you can use it to unlock the luxury experience:",
    howToRedeemSteps: [
      "Purchase the LUXE Gift Card from bolt.enkash.com",
      "Proceed to the official LUXE partner application or website that accepts this gift card.",
      "On the payment page, provide the unique gift card number or the voucher code",
      "Make the desired purchase and use the LUXE Gift Card",
    ],
    checkBalanceTitle: "How to Check LUXE Gift Card Balance ",
    checkBalanceDesc:
      "Are you curious to find out how much of your LUXE Gift Card value is still available for use? You can check your balance through various methods:",
    checkBalanceSteps: [
      "Website:",
      "Access LUXE partner Homepage/app select Gift Cards and input the card details for the balance inquiry.",
      "Physical Store:",
      "Have no worries; you can visit any LUXE-affiliated retailer, and the employees will assist you with checking your balance.",
      "Visit Customer Care:",
      "You may also reach LUXE India customer care for balance checks.",
      "This way you are always kept updated on the amount of value you still have left to enjoy more luxurious experiences.",
    ],
    termsAndConditionsTitle: "Terms and Conditions for LUXE Gift Cards",
    termsAndConditionSteps: [
      "Luxe Gift Card  is valid for 12 months from the date of purchase.",
      "The Luxe Gift Card can be redeemed at over 30 participating brands across India. It is not redeemable at airport stores.",
      "The card can be redeemed only once until expiry. If the value of the merchandise exceeds the card's value, the bearer must pay the difference",
      "Multiple Luxe Gift Cards can be used in a single transaction.",
      "The card is accepted for any product or service provided by the LUXE's partners.",
      "It is exclusively available on the LUXE partner application and is not valid on any other application.",
      "The card can only be used for transactions in Indian Rupees, not foreign currencies",
      "The card cannot be reloaded with additional funds after the initial purchase",
      "LUXE Gift Cards cannot be refunded or exchanged for cash once purchased.",
    ],
    occasionsTitle: "LUXE Gift Cards for Different Occasions",
    festivals:
      "Give your dear ones a LUXE Gift Card on festivals and happy occasions so that they may avail of the luxury experience of their choice.",
    anniversary:
      "\nCelebrate any milestone with a classy surprise that sees couples enjoy high-end goods or services.",
    birthdays:
      "\n Celebrate a loved one's birthday by gifting them with something that enables them to indulge in luxurious retail or dining experiences and more.\n",
  },
  "dominos-pizza-e-gift-card": {
    name: "Dominos Pizza E-Gift Card",
    urlName: "dominos-pizza-e-gift-card",
    brandName: "Domino's ",
    category: "Food and Beverages ",
    discount: 0,
    backgroundImg: "hehe",
    descriptionTitle: "Domino's Pizza E-Gift Card ",
    description:
      "What better gift for a friend who can never say no to a hot cheesy pizza? This gift card is ideal for anyone, whether it is a simple family supper, a game night or a get-together with friends. ",
    aboutCompany:
      "Domino’s is the world’s no. 1 chain in the selling and delivery of pizza and is known for its diverse range of pizzas, sides and drinks. Fresh ingredients coupled with the promises of the quickest delivery have helped the brand earn trust from its customers. In India as well, Domino's has slightly altered its strategies to suit Indian taste but people still get to eat the original pizzas that everyone loves. At Domino's, it is not only about eating pizza- it is about connecting with people over food and how your experience matters.",
    calculatorTitle: "Best Domino's Gift Cards",
    calculatorDescription:
      "Domino's Gift Cards are a popular choice for presents, whether it's for a special occasion or a thoughtful gesture. These gift cards are a convenient and appreciated option that suits any budget and preference.",
    howToBuyTitle: "How to Buy a Domino's Gift Card ",
    howToRedeemTitle: "How to use or redeem a Domino's Gift Card ",
    howToRedeemDesc:
      "Redeeming a Domino’s Gift Card is as easy as ordering your favorite pizza. Here's how:\n",
    howToRedeemSteps: [
      "Buy the voucher code from bolt.enkash.com",
      "Visit the Domino's website or mobile application",
      "Login into your account",
      "Access the ‘Gift Vouchers’ section and enter the gift code",
      "Place an order, and use the amount from the Domino’s Gift Voucher",
      "In addition, please be aware that the app or website of Domino’s is the only platform where the balance on the gift card may be spent and will not be reloaded when used up.",
    ],
    checkBalanceTitle: "How to Check the Balance of Your Domino’s Gift Card?",
    checkBalanceDesc:
      "It is easy to check your balance on a Domino's Gift Card and there are two methods in doing it;",
    checkBalanceSteps: [
      "Online:",
      "Use the Domino's mobile application or website. Then go to the card section that says ‘Gift Card’ where you will also be able to check the balance after entering the particulars of the card",
      "Offline:",
      "Alternatively, one can also go to the nearest outlet or call the customer care of the company to find out the balance of the gift card.",
    ],
    termsAndConditionsTitle: "Terms and Conditions for Domino’s Gift Card",
    termsAndConditionSteps: [
      "Domino's EGC ( Electronic Gift Card) are available for any denomination between INR 100 and INR 3000",
      "The gift card is valid for online ordering for delivery, dine-in, takeaway, and drive-n-pick services via Domino's Mobile App and website",
      "The gift card is reusable and any remaining balance may be kept for use at a later date.",
      "This gift card will not be returned in any form to cash or any other assets; however, the remaining balance will be kept for future use.",
      "The validity of the gift card is 12 months from the date of activation or loading of the card.",
      "One gift card per order will be accepted.",
      "In cases where the order value exceeds the voucher value, the remaining balance must be paid in cash only; no other payment methods are acceptable.",
      "Jubilant Foodworks Ltd (JFL) will not be liable for any reason beyond the purchase value of the EGC.",
      "Redemption can occur only on Domino's digital platforms (Mobile APP, Mobile Website, and Desktop website). Redemption is not available at physical restaurant locations",
      "The company reserves the right to amend these terms and conditions without prior notice.",
      "The EGC is the bearer’s property. JFL or Domino's Pizza India will not be responsible for lost, stolen, damaged, or destroyed EGCs, and no replacements will be provided in such cases",
    ],
    occasionsTitle: "Domino's Gift Cards for Different Occasions ",
    festivals:
      "Festivals always call for something special Domino’s Gift Cards are definitely a good idea. It serves as a convenient present for giving the opportunity to enjoy the cheesy pizzas during the get-togethers like Diwali, Christmas and many other such occasions. ",
    anniversary:
      "Express your love and togetherness with a Domino's Gift Card which will enable the couple to have their preferred dish. Be it an intimate dinner or a pizza date, the gift card provides them with the option and enhances their anniversary experience",
    birthdays:
      "Domino's gift cards are a pleasant addition because the person can order any pizzas, sides, and desserts they want. It doesn’t matter whether it is a friend or family or a colleague, this gift understands each and every person's need \n",
  },
  "bookmyshow-e-gift-card": {
    name: "BookMyShow E-Gift Card ",
    urlName: "bookmyshow-e-gift-card",
    brandName: "BookMyShow ",
    category: "Movies and Music ",
    discount: 0,
    backgroundImg: "hehe",
    descriptionTitle: "BookMyShow E-Gift Card ",
    description:
      "Surprise your loved ones with the gift of entertainment with a BookMyShow E-Gift Card! Whether it's the latest blockbuster movie, a live concert, or a thrilling sports event, this e-gift card unlocks a world of entertainment choices for you and your loved ones.\n",
    aboutCompany:
      "BookMyShow is India's leading online entertainment platform, offering a convenient and user-friendly way to book tickets for movies, plays, concerts, sporting events, and various other experiences. With BookMyShow, you can browse events, select your seats, and book your tickets – all from the comfort of your home or on the go. Give the gift of entertainment with a BookMyShow E-Gift Card today!\n",
    calculatorTitle: "Best BookMyShow Gift Cards",
    calculatorDescription:
      "BookMyShow Gift Cards are a popular choice for presents, whether for a special occasion or a thoughtful gesture. These gift cards are a convenient and appreciated option that suits any budget and preference.",
    howToBuyTitle: "How to Buy a BookMyShow Gift Card",
    howToRedeemTitle: "How to Use or Redeem a BookMyShow Gift Card",
    howToRedeemDesc:
      "BookMyShow Gift Card can be used or redeemed on the brand’s website or app for various entertainment options. Here's a step-by-step guide on how to redeem or use the voucher:",
    howToRedeemSteps: [
      "Log on to https://in.bookmyshow.com/ or the BookMyShow mobile app",
      "Select your desired movie, event, venue, show date, time, and seats",
      "During checkout, click on 'More Payment Options' on the payment page and then the 'Gift Voucher' tab. Enter the E-Gift Card code and click 'Apply'",
      "The BookMyShow Gift Card Voucher value will be applied. If needed, combine it with other payment methods to complete the booking",
      "After a successful transaction, you'll receive a booking ID. Exchange this ID at the cinema/venue box office for your actual tickets. You'll also receive an email/SMS confirmation for your reference",
    ],
    checkBalanceTitle: "How to Check BookMyShow Gift Card Balance",
    checkBalanceDesc:
      "BookMyShow Gift Cards are preactivated cards and remain valid for 6 months from purchase. The balance of the BookMyShow Gift Card Voucher can be checked on the mobile app or website. \n",
    checkBalanceSteps: [
      "Open the profile section in the app or website.",
      "Go to Accounts & Settings",
      "Select Safe payment modes",
      "Select the add option and click on the gift voucher",
      "Enter your Gift Card number and proceed",
      "Go back and view your balance and validity",
    ],
    termsAndConditionsTitle: "Terms and Conditions for BookMyShow Gift Card",
    termsAndConditionSteps: [
      "BookMyShow Gift Card can be redeemed only on the BookMyShow website/mobile app & cannot be redeemed directly at the cinema/venue box office.",
      "BookMyShow Gift Card can be redeemed by purchasing of e-tickets for movies/virtual events/plays/concerts/sports/BMS Stream available on BookMyShow.",
      "Multiple Gift Cards can be used in a single transaction or Gift Voucher can be combined with any other payment type on BookMyShow.",
      "BookMyShow Gift Card can be used multiple times until the last rupee loaded on it gets exhausted within the validity period.",
      "BookMyShow Gift Card cannot be used to purchase another Gift Card.",
      "BookMyShow Gift Card works on a non-extension clause & the order cannot be cancelled or refunded once confirmed.",
      "BookMyShow Gift Card is valid PAN India across all cinemas/partners associated with BookMyShow.",
      "If lost or misused, the BookMyShow Gift Card cannot be replaced. void if resold, cannot be exchanged for points or cash & cannot be re-validated once past the expiry date.",
    ],
    occasionsTitle: "BookMyShow E-Gift Cards for Different Occasions",
    festivals:
      "For this festive season, consider giving your loved ones BookMyShow Gift Cards allowing them to enjoy their preferred movies and shows and have a wonderful time.\n",
    anniversary:
      "Consider gifting a BookMyShow to the couple for their anniversary, enabling them to enjoy their favorite films and shows together.",
    birthdays:
      "Surprise your loved ones with a gift card on their birthday, allowing them to indulge in their special day",
  },
  "starbucks-e-gift-card": {
    name: "Starbucks E-Gift Card ",
    urlName: "starbucks-e-gift-card",
    brandName: "Starbucks ",
    category: "Food and Beverages",
    discount: 0,
    backgroundImg: "hehe",
    descriptionTitle: "Starbucks E-Gift Card ",
    description:
      "We all know someone who is addicted to caffeine. Right? Isn't this the best gift they can get? This Starbucks E-Gift Card can make any coffee lover jump with joy. Give this Starbucks Gift Card to your friends who cannot survive without coffee and see them cherish you forever.\n",
    aboutCompany:
      "A prominent player in the coffee industry, Starbucks offers a wide range of coffee drinks, light bites, and a premium experience. The Indian subsidiary of this American giant caters to Indian tastes and preferences along with its core offerings. ",
    calculatorTitle: "Best Starbucks Gift Cards",
    calculatorDescription:
      "Starbucks Gift Cards are a popular choice for presents, whether it's for a special occasion or a thoughtful gesture. These gift cards are a convenient and appreciated option that suits any budget and preference.",
    howToBuyTitle: "How to buy a Starbucks Gift Card",
    howToRedeemTitle: "How to use or redeem a Starbucks Gift Card ",
    howToRedeemDesc:
      "Starbucks Gift Voucher can be redeemed using the following steps on the app:",
    howToRedeemSteps: [
      "Buy the Voucher code through the EnKash platform",
      "Download the Starbucks mobile app if you haven't already",
      "Open the app and sign in to your Starbucks account.",
      'Tap on the "Cards" section.',
      "Add your gift card by entering the card number or voucher code",
      "Once added, you can use the balance to purchase any product directly through the app.",
    ],
    checkBalanceTitle: "How to Check Starbucks Gift Card Balance",
    checkBalanceDesc:
      "There are various ways to check Starbucks Gift card balance.",
    checkBalanceSteps: [
      "Check Starbucks E Gift Card balance online- To check the gift card balance one can visit the Starbucks India mobile app. On the mobile app open the Starbucks card section and view the balance",
      "Check Starbucks E-Gift Card balance offline- The Starbucks Gift Card balance can also be checked by visiting the store or by calling the India customer care number.",
    ],
    termsAndConditionsTitle: "Terms and Conditions for Starbucks Gift Card ",
    termsAndConditionSteps: [
      "Clubbing of this offer with any other offer is at the discretion of the business provider.",
      "The offer applies to all products.",
      "The voucher can be used to purchase any Starbucks product only from the Starbucks Mobile App (NOT on the mobile website/PWA).",
      "This voucher can only be used for takeaway orders done through the Starbucks mobile app.",
    ],
    occasionsTitle: "Starbucks Gift Card for Different Occasions ",
    festivals:
      "A thoughtful way to celebrate festivals. Let the festival experience for your loved ones be unique with this personalized gift.",
    anniversary:
      "Starbucks Gift Cards are a perfect way to send anniversary wishes to your loved ones. Let their anniversary celebration be over a shared cup of coffee. ",
    birthdays:
      "Starbucks gift cards are ideal for coffee lovers on their birthdays. You can choose to send an e-gift card directly to your loved one's inbox or mobile",
  },
  "myntra-e-gift-card": {
    name: "Myntra E-Gift Card ",
    urlName: "myntra-e-gift-card",
    brandName: "Myntra ",
    category: "e-commerce ",
    discount: 0,
    backgroundImg: "hehe",
    descriptionTitle: "Myntra E-Gift Card ",
    description:
      "The Myntra Gift Card comes in handy when it comes to gifts for special occasions like birthdays, weddings, anniversaries, and festivities. Use it for yourself or gift it to your special ones for shopping across multiple categories and brands. The Myntra Gift Card provides access to everything from beauty, apparel, home & kitchen, and clothing categories.",
    aboutCompany:
      "A premier online beauty destination in India, Myntra offers a comprehensive selection of branded products for men and women at the best price. Myntra makes shopping for your favourite beauty products much easier and more convenient.",
    calculatorTitle: "Best Myntra Gift Cards",
    calculatorDescription:
      "Myntra Gift Cards are a popular choice for presents, whether for a special occasion or a thoughtful gesture. These gift cards are a convenient and appreciated option that suits any budget and preference.",
    howToBuyTitle: "How to buy a Myntra Gift Card",
    howToRedeemTitle: "How to use or redeem a Myntra Gift Card ",
    howToRedeemDesc:
      "Myntra Gift Voucher can be redeemed using the following steps on the website and the app:",
    howToRedeemSteps: [
      "Log on to myntra.com or visit the app",
      "Go to Gift Cards under the Profile Section",
      "Add the Gift Card number and PIN",
      "Use the amount to purchase from the website",
    ],
    checkBalanceTitle: "How to check Myntra Gift Card Balance",
    checkBalanceDesc:
      "Myntra Gift Cards are preactivated cards and remain valid for 1 year from the date of purchase. The balance of the Myntra Gift Card Voucher can be checked on the mobile app or website. \n",
    checkBalanceSteps: [
      "Visit the Myntra website or app and log in with your credentials",
      "Go to the Profile Section",
      "Scroll down to the Gift Cards Section",
      "Enter the Gift Card number and PIN",
      "Click on Check Balance to know the balance available",
    ],
    termsAndConditionsTitle: "Terms and Conditions for Myntra Gift Card ",
    termsAndConditionSteps: [
      "Issued by Pine Labs Pvt. Ltd, authorized by RBI under Qwikcilver; valid on Myntra (website or app) for 1 year",
      "This card cannot be redeemed for cash/credit or used to buy other gift cards; multiple cards are allowed per order",
      "Refunds for cancellations go back to the original Gift Card; pay the remaining balance with other methods",
      "Taxes and duties are the customer's responsibility; the cardholder is responsible for its security.",
      "Fraudulent cards may be cancelled; terms may change without notice; excludes Titan, Bluestone, and Aditya Birla sellers",
    ],
    occasionsTitle: "Myntra Gift Card for Different ferent Occasions ",
    festivals:
      "Let the recipient pick anything of their choice using the Myntra E-Gift Card during the festive season.",
    anniversary:
      "The perfect anniversary gift, Myntra Gift Voucher is something the recipient will appreciate on their special occasion.",
    birthdays:
      "Get this exclusive Myntra E-Gift Card to surprise your loved ones on their birthdays.\n",
  },
  "zomato-e-gift-voucher": {
    name: "Zomato E-Gift Voucher",
    urlName: "zomato-e-gift-voucher",
    brandName: "Zomato ",
    category: "Food and Beverages ",
    discount: 0,
    backgroundImg: "hehe",
    descriptionTitle: "Zomato E-Gift Voucher ",
    description:
      "Zomato Gift Cards are one of the most preferred ways to delight friends, family, or colleagues with the experience of a perfect meal. Whether it is a birthday or an anniversary, a festival or corporate gifting, a Zomato Gift Card will allow your loved ones to savor meals of their choice from multiple restaurants.\n",
    aboutCompany:
      "Zomato is an online portal that connects users with the top restaurants that serve their favorite food. It helps to check out the reviews of restaurants and their menu and track the order also. Various services like restaurant reviews, menus, online orders, and dine-out are available in different countries.\n",
    calculatorTitle: "Best Zomato Gift Cards",
    calculatorDescription:
      "Zomato Gift Cards are a popular choice for presents, whether it's for a special occasion or a thoughtful gesture. These gift cards are a convenient and appreciated option that suits any budget and preference.",
    howToBuyTitle: "How to buy a Zomato Gift Card ",
    howToRedeemTitle: "How to use or Redeem a Zomato Gift Card ",
    howToRedeemDesc:
      "Redeeming a Zomato gift card is effortless. Follow the steps below to redeem your card and avail delicious food.",
    howToRedeemSteps: [
      "Begin with logging in to your Zomato account via the app or the website.",
      "Click on the profile icon located at the bottom right corner of the screen to select 'Zomato Credits' (On the website, look for the wallet or payment options section to find 'Zomato Credits.')",
      "Scroll down to find the “Credits and Gift Cards” section.",
      "Tap or click on “Claim Gift Card” and enter your 16-digit gift card code and PIN (if applicable).",
      "Once the code and PIN are entered, confirm the addition to apply the gift card value to your Zomato credits.",
      "Browse through the app or website, select your restaurant or meal, and add your desired items to the cart.",
      "Once you've finalized your order, proceed to the checkout page.",
      "On the payment screen, choose 'Zomato Credits' to apply the gift card value to your order total.",
      "If the total amount exceeds your gift card balance, you can pay the remaining amount using another payment method like a credit/debit card, UPI, or wallet.",
    ],
    checkBalanceTitle: "How to Check Zomato Gift Card Balance",
    checkBalanceDesc:
      "If you have a Zomato gift card and want to check the balance on it, you have a couple of options - through the Zomato website or mobile app. Here’s how you do it.",
    checkBalanceSteps: [
      "Via the Zomato Website",
      "Visit the Zomato website and log in to your account.",
      "Go to the ‘Payments’ section under your profile.",
      "Input the 16-digit gift card number and the 6-digit PIN.",
      "Click on 'Check Balance' to view your available balance.",
      "Using the Zomato Mobile App",
      "Launch the Zomato app and log in to your account.",
      "Tap on the profile icon then select the ‘Payments’ section.",
      "Select the 'Add Gift Card' option.",
      "Enter the 16-digit gift card number and the PIN.",
      "Tap on 'Check Balance' to see what remains on the gift card.",
    ],
    termsAndConditionsTitle: "Terms and Conditions for Zomato Gift Card ",
    termsAndConditionSteps: [
      "The Zomato gift card can be used to make purchases only on the Zomato website, app.",
      "The Gift Card is valid for 12 months from the date of purchase and can not be used to buy other gift cards.",
      "Zomato Gift Cards cannot be exchanged for cash or credit.",
      "If the order is canceled, the gift card amount will automatically be refunded to the source account.",
      "The gift card is the responsibility of the purchaser. Zomato and its payment partner are not liable for any loss, theft or unauthorised use of the gift card.",
      "Users can combine multiple gift cards for a single purchase.",
    ],
    occasionsTitle: "Zomato Gift Card for Different Occasions ",
    festivals:
      "Celebrate festivals by giving a Zomato card!  Whether it’s Diwali, Christmas or Eid, a Zomato gift card guarantees that the celebrations are delicious. \n",
    anniversary:
      "Whether it is a romantic dinner for two or a family outing, Zomato gift cards are a perfect way to celebrate anniversaries by serving delicious food coming from the top restaurants.",
    birthdays:
      "Celebrate their special day with the gift of food! Zomato gift cards make birthdays better, because recipients get to choose the meals they love.",
  },
  "flipkart-e-gift-voucher": {
    name: "Flipkart E-Gift Voucher",
    urlName: "flipkart-e-gift-voucher",
    brandName: "Flipkart ",
    category: "e-commerce ",
    discount: 0,
    backgroundImg: "\n",
    descriptionTitle: "Flipkart E-Gift Card ",
    description:
      "A Flipkart Gift Card is the perfect way of giving the gift of choice. Be it shopping for electronics, books, or fashion, these cards promise the flexibility and ease of online shopping while catering to a diverse customer base.",
    aboutCompany:
      "Flipkart is one of the most significant e-commerce platforms in India. It provides a wide assortment of products like the latest fashion, electronics, home essentials, sports, books, and more. With Flipkart Gift Vouchers users can buy their favorite products, and make the most of exclusive deals while enjoying a secure shopping experience.",
    calculatorTitle: "Best Flipkart Gift Cards",
    calculatorDescription:
      "Flipkart Gift Cards are a popular choice for presents, whether it's for a special occasion or a thoughtful gesture. These gift cards are a convenient and appreciated option that suits any budget and preference.",
    howToBuyTitle: "How to buy a Flipkart Gift Card ",
    howToRedeemTitle: "How to use or redeem a Flipkart Gift Card ",
    howToRedeemDesc:
      "The process to redeem a Flipkart Gift Voucher on the  Flipkart app or website is pretty straightforward. Let’s look at the step-by-step process to use the gift card below:",
    howToRedeemSteps: [
      "On your mobile device, start the Flipkart app and  or login  to your Flipkart account on the website",
      "Click on the items you wish to buy and add them to your cart.",
      "Go to your cart and click on ‘Place Order’ to proceed to checkout.",
      "In the payment options, select ‘Gift Card’ as your payment mode.",
      "Enter the Flipkart Gift Card code you received via email or WhatsApp",
      "After entering the code, click ‘Apply’ to deduct the gift card amount from the total.",
      "If the Flipkart Gift Card voucher balance doesn’t cover the bill amount, use an additional payment method to complete the purchase.",
    ],
    checkBalanceTitle: "How to Check Flipkart Gift Card Balance",
    checkBalanceDesc:
      "Here is how you can check the balance of your Flipkart Gift Card:",
    checkBalanceSteps: [
      "Through App",
      "Log in to your Flipkart account on the app.",
      "Go to My Account and select Gift Cards.",
      "Enter your gift card number in the Check Balance section.",
      "The remaining balance and validity will be displayed.",
      "Through Website",
      "Start by logging in to the Flipkart.com website",
      "Visit My Account and select Gift Cards.",
      "In the balance section, input your gift card number.",
      "The remaining balance will be visible on your screen.",
    ],
    termsAndConditionsTitle: "Terms and Conditions for Flipkart Gift Card ",
    termsAndConditionSteps: [
      "The gift cards can be redeemed online via the Flipkart website, mobile app, or m-site, against marketplace sellers listed on the Flipkart platform.",
      "Flipkart Gift Vouchers can only be purchased using Credit Cards, Debit Cards, Net Banking and UPI. They cannot be used to purchase other gift cards or Flipkart subscriptions.",
      "Flipkart Gift Cards are valid for one year from the date of issuance. Users can request revalidation of an expired gift card, subject to verification.",
      "On a single transaction, the maximum number of redeemable gift cards is 15. Any amount above the gift card value must be paid by other modes such as Credit or Debit cards. Cash on Delivery (COD) is not applicable.",
      "In the event of misuse or loss of a card, neither Flipkart nor Qwikcilver Solutions will be responsible. The user is responsible for safekeeping the card.",
      "Users can’t seek a refund on gift cards they buy, except if otherwise decided by Flipkart, Qwikcilver Solutions or as law mandates.",
      "Flipkart reserves the right to cancel gift cards bought through fraudulent means or incorrect KYC details.",
    ],
    occasionsTitle: "Flipkart Gift Card for Different Occasions ",
    festivals:
      "Choose a Flipkart Gift Card for a festival – perfect for buying festival clothes, gifts, and home décor. ",
    anniversary:
      "Celebrating an anniversary? Get your dear ones a Flipkart Gift Card which gives them the option to shop for home essentials, electronics or lifestyle products.",
    birthdays:
      "A Flipkart Gift Card is one of the best gifts one can receive on their birthday, as the recipient can shop from a curated list of quality products.  ",
  },
  "amazon-shopping-vouchers": {
    name: "Amazon Shopping Vouchers",
    urlName: "amazon-shopping-vouchers",
    brandName: "Amazon",
    category: "e-commerce ",
    discount: 0,
    backgroundImg: "hehe",
    descriptionTitle: "Amazon Shopping Vouchers ",
    description:
      "Amazon Pay Gift Cards are a flexible and convenient gifting option, allowing recipients to select from various options including merchandise, digital content, electronics, apparel, and much more. They are a great gift choice for occasions like festivals, birthdays or corporate gifting. Anyone with an Amazon account can avail the exclusive benefits of the card.",
    aboutCompany:
      "Amazon Pay is a safe and convenient form of payment from Amazon. It allows people to pay for products & services on Amazon and other partner sites. Amazon Pay customers can quickly and securely pay for products/services online using the same account details they have with Amazon. Amazon Pay Gift Cards make an ideal gift for anyone who loves to shop on Amazon, as they can be used for a variety of products.",
    calculatorTitle: "Best Amazon Pay E-Gift Cards",
    calculatorDescription:
      "Amazon Pay Gift Cards are a popular choice for presents, whether for a special occasion or a thoughtful gesture. These gift cards are a convenient and appreciated option that suits any budget and preference.",
    howToBuyTitle: "How to buy an Amazon Pay Gift Card ",
    howToRedeemTitle: "How to use or redeem an Amazon Pay Gift Card",
    howToRedeemDesc:
      "Here's a step-by-step guide on how to redeem an Amazon Pay Gift Card:",
    howToRedeemSteps: [
      "Log in to the Amazon website or open the Amazon app on your mobile.",
      "Add the preferred products/services to the shopping cart.",
      "During checkout, go to the 'Payment Options' section.",
      "Select 'Gift Card' as your payment mode and input the Amazon Pay Gift Card code.",
      "Click 'Apply', and the gift card balance will be applied to your order.",
      "If required, combine the gift card with other payment modes to complete the purchase.",
      "Once the transaction is successful, you'll receive a confirmation email or SMS, and your order will be processed.",
    ],
    checkBalanceTitle: "How to Check Amazon Pay Gift Card Balance ",
    checkBalanceDesc:
      "Follow these steps to check the remaining balance in your Amazon Pay Gift Card:",
    checkBalanceSteps: [
      "Through Website",
      "Visit the Amazon website.",
      "Navigate to ‘Your Account’ from the website.",
      "Scroll down and find the ‘Gift Cards & Top Up’ section under Payments.",
      "View your current gift card balance and recent transactions related to your gift card.",
      "Through App",
      "Open the Amazon app and log in.",
      "Click on the menu (three horizontal lines) in the app.",
      "Scroll down and find the ‘Gift Cards & Top Up’ section under Payments.",
      "View your current gift card balance and recent transactions related to your gift card.",
    ],
    termsAndConditionsTitle: "Terms and Conditions for Amazon Pay Gift Card ",
    termsAndConditionSteps: [
      "Amazon Pay Gift Cards are valid for 12 months from the date of issuance.",
      "These gift cards can be used for purchases made on Amazon.in or on third-party websites that accept Amazon Pay as a payment method.",
      "The remaining balance, if any, will remain in your Amazon Pay account.",
      "You can't exchange gift cards for cash or transfer them to another account. Once your balance is applied, it will remain in your Amazon Pay account.",
      "If the gift card is misused, lost, stolen or damaged, Pine Labs will not be responsible for its condition.",
      "Amazon Pay Gift Cards are not redeemable for cash, and are not refundable or replaceable if lost, stolen or used without permission.",
      "Gift cards cannot be used to purchase other gift cards or be applied to certain subscriptions.",
      "Issuance: These gift cards are issued by Pine Labs under the name Qwikcilver Solutions Private Limited and co-branded with Amazon Pay.",
    ],
    occasionsTitle: "Amazon Pay Gift Card for Different Occasions ",
    festivals:
      "Amazon Pay Gift Cards are ideal gifts for festivals as the platform offers great discounts for seasonal products which are in high demand during these occasions.",
    anniversary:
      "Celebrate anniversaries with the convenience of an Amazon Pay Gift Card, ideal for couples that like to shop for home, fashion or lifestyle items.\n",
    birthdays:
      "Celebrate birthdays by gifting an Amazon Pay Gift Card, allowing recipients to select from millions of products.\n",
  },
  "decathlon-sports-india-e-gift-card": {
    name: "Decathlon Sports India E-Gift Card",
    urlName: "decathlon-sports-india-e-gift-card",
    brandName: "Decathlon ",
    category: " Sports",
    discount: 0,
    backgroundImg: "hehe",
    descriptionTitle: "Decathlon Sports India E-Gift Card\n\n",
    description:
      "Sportswear and essentials are no less than a treat for a sports lover. Decathlon is a perfect gift for a fitness enthusiast. Everything for a ",
    aboutCompany:
      "Decathlon is a global sports retailer that offers high-quality and affordable gear for 70 sports. It aims to make sports equipment accessible to all with its innovative designs and products.\n",
    calculatorTitle: "Best Decathlon Gift Cards",
    calculatorDescription:
      "Decathlon Gift Cards are a popular choice for presents, whether for a special occasion or a thoughtful gesture. These gift cards are a convenient and appreciated option that suits any budget and preference.",
    howToBuyTitle: "How to buy a Decathlon Gift Card ",
    howToRedeemTitle: "How to use or redeem a Decathlon Gift Card",
    howToRedeemDesc:
      "Decathlon Gift Voucher can be redeemed both online and offline",
    howToRedeemSteps: [
      "Online Redemption:",
      "Visit decathlon.com for online redemption",
      "Add the Gift Card amount to the payment page",
      "Use it to pay for the item purchased",
      "Offline Redemption:",
      "For offline redemption, visit any Decathlon retail store",
      "Present the 16-digit code and PIN during billing",
      "Use the Gift Card amount to pay for the purchase",
    ],
    checkBalanceTitle: "How to Check Decathlon Gift Card Balance",
    checkBalanceDesc:
      "Decathlon Gift Cards are preactivated cards. The balance of the Decathlon Gift Card Voucher can be checked on the mobile app or website. ",
    checkBalanceSteps: [
      "Open the Decathlon app or website",
      "Enter your Gift Card number and proceed",
      "The remaining balance will be reflected on the screen",
    ],
    termsAndConditionsTitle: "Terms and Conditions for Decathlon Gift Card",
    termsAndConditionSteps: [
      "Decathlon Gift Cards can be used on the website, app, or in any Decathlon store across India",
      "Valid for 1 year from the date of issue; any unused balance will be forfeited after expiry",
      "The Gift Card can be redeemed in full or across multiple purchases until the balance is used or the card expires",
      "If the purchase amount exceeds the card value, the remaining amount can be paid using other payment methods",
      "Gift Cards are non-refundable and cannot be exchanged for cash",
    ],
    occasionsTitle: "Decathlon Gift Card for Different Occasions ",
    festivals:
      "Perfect for endless adventures, celebrate the festive season with a Decathlon brand voucher.",
    anniversary:
      "Give the couple an unforgettable anniversary gift with a Decathlon Gift Card. \n ",
    birthdays:
      "Make your best friend’s birthday special by gifting them a Decathlon Gift Card. ",
  },
};

export default VoucherData;
