type FAQ = {
  question: string
  answer: {
    heading: string
    bullets: string[]
  }[]
}

export type Voucher = {
  name: string
  urlName: string
  brandName: string
  category: string
  discount: number
  backgroundImg: string
  descriptionTitle: string
  description: string
  aboutCompany: string
  calculatorTitle: string
  calculatorDescription?: string
  howToBuyTitle: string
  howToRedeemTitle: string
  howToRedeemDesc: string
  howToRedeemSteps: string[]
  checkBalanceTitle: string
  checkBalanceDesc: string
  checkBalanceSteps: string[]
  termsAndConditionsTitle: string
  termsAndConditionSteps: string[]
  occasionsTitle: string
  occasionsDesc: string
  festivals: string
  anniversary: string
  birthdays: string
}

const VoucherData: Record<string, Voucher> = {
  nykaa: {
    name: "Nykaa Gift Card",
    urlName: "nykaa",
    brandName: "Nykaa",
    category: "e-commerce",
    discount: 7.0,
    backgroundImg: "PC272920797HGB6I.png",
    descriptionTitle: "Nykaa Fashion E-Gift Card",
    description:
      "The Nykaa Gift Card is your go-to gift for every special occasion.Whether it’s a birthday, wedding, anniversary, or festive celebration, it’s the perfect way to pamper yourself or your loved ones. Enjoy seamless shopping across beauty, fashion, home & kitchen, and more from top brands, all in one place.",
    aboutCompany:
      "India’s leading beauty, fashion, and lifestyle destination, Nykaa is known for offering a curated range of products across makeup, skincare, haircare, wellness, fragrances, fashion, and more. Launched in 2012, Nykaa has built a reputation for authenticity, quality, and a seamless shopping experience both online and through its growing network of offline stores.",
    calculatorTitle: "Best Nykaa Gift Cards",
    calculatorDescription:
      "Nykaa Gift Cards are a popular choice for presents, whether for a special occasion or a thoughtful gesture. These gift cards are a convenient and appreciated option that suits any budget and preference.\n",
    howToBuyTitle: "How to Buy a Nykaa Fashion E-Gift Card?",
    howToRedeemTitle: "How to Use or Redeem Nykaa Gift Card",
    howToRedeemDesc:
      "Nykaa Gift Voucher can be redeemed using the following steps on the website, its app and on their stores:\xa0",
    howToRedeemSteps: [
      "Website/App",
      "1. Add your favourite items to the cart",
      '2. At checkout, select the "Gift Card" payment option',
      "3. Enter the 16-digit Card Code and PIN, then click Apply",
      "4. If the gift card balance is less than your order total, pay the remaining amount using another payment method",
      "5. If your order value is less than the gift card amount, the card won't be applied",

      "In-Store Redemption",
      "1. Visit any Nykaa retail store and select your products",
      "2. At billing, request to pay via Gift Card",
      "3. Share your 16-digit Card Code and PIN with the cashier",
      "4. Pay any remaining balance using another payment method if needed",

      "Note: By purchasing this gift card, you agree to share your personal details (Name, Email ID, Phone Number, if available) with the issuer, PineLabs, as per PPI guidelines.",
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
    occasionsDesc: "Nykaa Fashion E-Gift Cards for different Occasions",
    festivals:
      "Consider gifting your employees Nykaa gift cards to help them relax & enjoy their holidays. It's a thoughtful way to show appreciation and ensure they have a pleasant break.",
    anniversary:
      "Consider gifting your employees Nykkaa gift cards to help them relax & enjoy their holidays. It's a thoughtful way to show appreciation and ensure they have a pleasant break.",
    birthdays:
      "Consider gifting your employees Nykaa gift cards to help them relax & enjoy their holidays. It's a thoughtful way to show appreciation and ensure they have a pleasant break.",
  },
  ajio: {
    name: "AJIO E-Gift Card",
    urlName: "ajio",
    brandName: "AJIO",
    category: "e-commerce",
    discount: 0,
    backgroundImg: "hehe",
    descriptionTitle: "AJIO E- Gift Card ",
    description:
      "A perfect gift for all occasions like birthdays, weddings, anniversaries, and festivities, the AJIO E-Gift Card is available in multiple denominations. This gift card can be personalized with a message or a greeting. Use it for yourself or gift it to your special ones for shopping across multiple categories and brands. Get everything on one platform for men, women, and kids across beauty, apparel, home & kitchen, and clothing categories.",
    aboutCompany:
      "AJIO is India’s go-to online fashion hub. Explore top international brands and unique home-grown labels all at your fingertips. From fashion-forward looks to home decor and must-have accessories, AJIO offers something for everyone. AJIO E-Gift Cards are the perfect way to spread smiles. Let your loved ones shop their style, their way, with a seamless and joyful online experience.\n",
    calculatorTitle: "Best AJIO Gift Cards",
    calculatorDescription:
      "AJIO Gift Cards make gifting effortless; perfect for any occasion or just to show you care. Stylish, flexible, and suited to every budget, they let your loved ones choose what they truly want.",
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
    occasionsDesc:
      "Whether it’s a birthday, anniversary, festive celebration, or just a heartfelt thank you, AJIO Gift Cards make every moment memorable. Thoughtful and easy to use, they’re the ideal way to spread joy with friends, family, or colleagues.\n",
    festivals:
      "Festivals like Diwali, Holi and Christmas are often celebrated by exchanging traditional gifts.. AJIO Gift Card is an amazing alternative to gift during these festivals. The recipients will always have the option to  choose their gifts making the occasion memorable for them.",
    anniversary:
      " Be it yours, someone special’s, or someone else's, AJIO Gift Cards come in handy in a cool and simple way to send the message of happiness.",
    birthdays:
      "Turn up your fashionable friend’s birthday by allowing them to go and shop for outfits of their choice rather than giving them clothes as a gift.",
  },
  fnp: {
    name: "Ferns N Petals E-Gift Card",
    urlName: "fnp",
    brandName: "FNP",
    category: "e-commerce",
    discount: 18.0,
    backgroundImg: "PC272920797HGB6I.png",
    descriptionTitle: "FNP Gift Card",
    description:
      "The FNP Gift Card can be your best rescue for last-minute gifts. Special occasions like birthdays, weddings, anniversaries, and milestones deserve special gifts. This card unlocks a world of thoughtful choices from cakes, flowers, and hampers to plants. Use it for yourself or surprise someone special.",
    aboutCompany:
      "FNP, India’s leading gifting brand, helps you celebrate your loved ones with thoughtful gifts delivered right to their doorstep. From birthdays to milestones, FNP turns every special moment into a cherished memory with its wide range of gifting options.",
    calculatorTitle: "Best FNP Gift Cards",
    calculatorDescription:
      "FNP Gift Cards are a thoughtful way to celebrate any occasion, offering the freedom to choose and the joy of gifting. Flexible, convenient, and perfect for every budget and preference.",
    howToBuyTitle: "How to Buy a FNP Gift Card?",
    howToRedeemTitle: "How to Use or Redeem FNP Gift Card?",
    howToRedeemDesc:
      "FNP Gift Voucher can be redeemed using the following steps on the website:",
    howToRedeemSteps: [
      "Visit www.fnp.com and sign in to your FNP account",
      "Add your favorite products to the cart",
      "Proceed to checkout and apply your Gift Card under the ‘Discount Card’ section",
    ],
    checkBalanceTitle: "How to Check FNP Gift Card Balance",
    checkBalanceDesc:
      "FNP Gift Cards are prepaid cards. The balance of the FNP Gift Card Voucher can be checked on the website.",
    checkBalanceSteps: [
      "Visit the FNP website and log in with your credentials",
      "Go to the Profile Section",
      "Scroll down to the Gift Cards Section",
      "Enter the Gift Card number and PIN",
      "Click on Check Balance to know the balance available",
    ],
    termsAndConditionsTitle: "Terms and Conditions for FNP Gift Card",
    termsAndConditionSteps: [
      "The bearer of the Instant Gift Voucher is considered the rightful beneficiary.",
      "Partial redemption is allowed; however, no refund or credit note will be issued for the unused or remaining balance.",
      "The voucher cannot be revalidated or extended once it has expired.",
      "Instant Gift Vouchers are valid only on www.fnp.com. FNP reserves the right to include or exclude specific products or categories without prior notice.",
      "The voucher cannot be redeemed on designated blackout dates. FNP may modify these dates at its discretion.",
      "For any disputes, please contact the issuing company. Their decision will be final.",
      "Multiple Gift Vouchers cannot be used in a single transaction.",
      "For any issues with voucher acceptance, please contact the shop manager.",
      "This voucher cannot be used directly at physical FnP retail outlets.",
    ],
    occasionsTitle: "FNP Gift Cards for Different Occasions",
    occasionsDesc:
      "FNP Gift Cards are the perfect way to celebrate any special moment, from birthdays and anniversaries to festive occasions or a simple thank you. Thoughtful, easy, and always appreciated, they’re a great way to spread joy with loved ones and colleagues alike.",
    festivals:
      "FNP Gift Cards are the perfect way to celebrate any special moment, from birthdays and anniversaries to festive occasions or a simple thank you. Thoughtful, easy, and always appreciated, they’re a great way to spread joy with loved ones and colleagues alike.",
    anniversary:
      "FNP Gift Voucher makes for the perfect anniversary gift with its utility and variety.",
    birthdays:
      "Your loved ones will be delighted to get this exclusive FNP E-Gift Card on their birthdays.",
  },
  "flipkart-super-coins": {
    name: "Flipkart SuperCoins E-Gift Card",
    urlName: "flipkart-super-coins",
    brandName: "Flipkart",
    category: "e-commerce",
    discount: 6.0,
    backgroundImg: "YOUR_FLIPKART_IMAGE.png", // replace with your actual image file
    descriptionTitle: "Flipkart Gift Card",
    description:
      "Flipkart SuperCoins Gift Card, the most convenient option when it comes to thoughtful gifting. Ideal for birthdays, weddings, anniversaries, or celebratory occasions, it provides unparalleled utility. For yourself or your near and dear ones, shop across a broad spectrum of categories — beauty, fashion, home & kitchen, and more of the most popular brands on Flipkart.",
    aboutCompany:
      "One of India’s leading e-commerce platforms, Flipkart brings you a wide range of branded products across electronics, fashion, beauty, and everyday essentials — all at great prices. From gadgets to garments, it’s your one-stop shop for convenient, hassle-free shopping for all age groups.",
    calculatorTitle: "Best Flipkart SuperCoins Gift Cards",
    calculatorDescription:
      "Flipkart SuperCoins Gift Cards are the perfect go-to for any occasion — be it a celebration or a simple gesture of care. Flexible, convenient, and budget-friendly, they make gifting easy and thoughtful for everyone.",
    howToBuyTitle: "How to Buy a Flipkart SuperCoins Gift Card?",
    howToRedeemTitle: "How to Use or Redeem Flipkart Gift Card?",
    howToRedeemDesc:
      "Flipkart Gift Voucher can be redeemed using the following steps:",
    howToRedeemSteps: [
      "Visit this link to redeem your card",
      "Convert your card balance into Flipkart SuperCoins",
      "Use the SuperCoins for discounts on Flipkart and partner platforms",
    ],
    checkBalanceTitle: "How to Check Flipkart Gift Card Balance",
    checkBalanceDesc:
      "Flipkart Gift Cards are prepaid cards. The balance of the Flipkart Gift Card Voucher can be checked using the following steps:",
    checkBalanceSteps: [
      "Visit the Flipkart website or app and log in with your credentials",
      "Go to the Account Section",
      "Enter the SuperCoin zone",
      "Check the balance on the top right corner of the section",
    ],
    termsAndConditionsTitle: "Terms and Conditions for Flipkart Gift Card",
    termsAndConditionSteps: [
      "Use your voucher-earned SuperCoins on Flipkart and Cleartrip (Flights, Hotels, Buses) for discounts equal to your coin balance.",
      "Avail discounts on utility bill payments and mobile recharges via Flipkart using SuperCoins.",
      "SuperCoins can be used on Flipkart 3 days after redeeming the voucher.",
      "This voucher is not applicable on Baby care products, Gift card store, Gold & silver coins/bars, gemstones, Milk & curd under ₹30, Tobacco products and ₹9 Veggies (Flipkart Minutes).",
      "If cart value < SuperCoins balance, a ₹10 platform fee per product applies.",
      "SuperCoins are non-transferable, non-refundable, and not convertible to cash.",
      "SuperCoins used cannot be reversed.",
      "Misuse or blacklisted accounts will face cancellation of SuperCoins.",
      "Flipkart may share your registered mobile number with SuperPartners to enable redemption.",
      "Flipkart SuperCoin benefits: flipkart.com/supercoin",
      "External SuperCoin partners: Partner Store",
      "Convert voucher to SuperCoins: Redeem here",
      "E-vouchers are usually delivered instantly but may take 48–72 hours in rare cases.",
      "No returns/refunds on gift cards or vouchers via Enkash. Refer: enkash.in/faq",
    ],
    occasionsTitle: "Flipkart Gift Cards for Different Occasions",
    occasionsDesc:
      "Flipkart Gift Cards are the perfect present for any special occasion, offering a delightful way to share the joy with friends, family, or colleagues. Whether it's a birthday, anniversary, holiday, or just to say thank you, Flipkart Gift Cards are sure to bring a smile.",
    birthdays:
      "Get this exclusive Flipkart E-Gift Card to surprise your loved ones on their birthdays.",
    anniversary:
      "The perfect anniversary gift, Flipkart Gift Voucher is something the recipient will appreciate on their special occasion.",
    festivals:
      "Let the recipient pick anything of their choice using the Flipkart E-Gift Card during the festive season.",
  },
  "amazon-prime-shopping": {
    name: "Amazon Prime Shopping",
    urlName: "amazon-prime-shopping",
    brandName: "Amazon",
    category: "e-commerce",
    discount: 13.0,
    backgroundImg: "hehe",
    descriptionTitle: "Amazon Prime Gift Card",
    description:
      "Whether it's a birthday, wedding, anniversary, or festive celebration, the Amazon Prime Gift Card makes gifting effortless and thoughtful.<br/><br/>It provides unlimited same-day or next-day delivery, exclusive Prime-only deals, and early access to shopping events, all at an introductory price of ₹399 for 12 months.<br/><br/>This plan is for shopping benefits only and does not include Prime Video, Music, Reading, or Gaming.<br/>Existing Prime members are not eligible for this offer.",
    aboutCompany:
      "One of the world’s largest and most trusted e-commerce platforms, Amazon offers a vast selection of products across categories like electronics, fashion, beauty, home essentials, books, and more. In India, Amazon has become a go-to destination for millions of shoppers, known for its fast delivery, reliable service, and customer-first approach.",
    calculatorTitle: "Best Amazon Gift Cards",
    calculatorDescription:
      "A go-to choice for effortless gifting, Amazon Gift Cards are perfect for any occasion or just a thoughtful surprise. Flexible, easy to use, and suitable for every budget, they let recipients choose exactly what they love.",
    howToBuyTitle: "How to Buy an Amazon Prime Gift Card?",
    howToRedeemTitle: "How to Use or Redeem an Amazon Prime Gift Card?",
    howToRedeemDesc:
      "Amazon Prime Gift Voucher can be redeemed using the following steps on the website and the app:",
    howToRedeemSteps: [
      "Sign in to your Amazon.com account.",
      "Go to Account, and then go to Manage Prime Membership.",
      "Choose “Use your gift card balance when available” or enter a new gift card code to apply it toward your membership renewal.",
    ],
    checkBalanceTitle: "How to Check Amazon Gift Card Balance",
    checkBalanceDesc:
      "Amazon Gift Card balance can be checked on the mobile app or website.",
    checkBalanceSteps: [
      "Visit the Amazon website or app and log in with your credentials.",
      "Go to the Orders Section.",
      "Scroll down to the Gift Cards Section.",
      "Enter the Gift Card number and PIN.",
      "Click on Check Balance to know the balance available.",
    ],
    termsAndConditionsTitle: "Terms and Conditions for Amazon Gift Card",
    termsAndConditionSteps: [
      "The Amazon Prime Voucher is a prepaid code issued by Pine Labs (Qwikcilver) and co-branded with Amazon Pay, used to buy Prime memberships (3-month, 12-month, Prime Lite, or Prime Shopping Edition) or a zero-value Amazon Pay Gift Card.",
      "The voucher is valid for 1 year from the activation date and cannot be transferred, cancelled, or refunded once issued.",
      "It can be redeemed only on Amazon.in/vouchers. It cannot be used to buy physical/digital products, Global Store items, recharges, bills, or pre-loaded Amazon Pay Gift Cards.",
      "Only non-Prime members can use the voucher. Users with Prime via telecom (Airtel, Jio, etc.) or Google Play cannot redeem it.",
      "This plan offers same/1-day delivery, early sale access, and cashback offers—but no access to Prime Video, Music, E-books, or Gaming.",
      "Max voucher value: ₹1799. It can be redeemed once per user. This card is not valid with non-eligible items in a mixed cart and cannot be used with international debit/credit cards.",
      "Lost or misused vouchers won’t be reissued, and terms may change without notice. Always check the latest terms here.",
    ],
    occasionsTitle: "Amazon Gift Cards for Different Occasions",
    occasionsDesc:
      "Amazon Prime Gift Cards are the perfect gifts for any special occasion, offering a delightful way to share the joy with friends, family, or colleagues. Whether it's a birthday, anniversary, holiday, or just to say thank you, Amazon Gift Cards are sure to bring a smile.",
    festivals:
      "Let the recipient pick anything of their choice using the Amazon E-Gift Card during the festive season.",
    anniversary:
      "The perfect anniversary gift, an Amazon Gift Voucher is something they will appreciate on their special occasion.",
    birthdays:
      "This exclusive Amazon E-Gift Card is to surprise your loved ones on their birthdays.",
  },
  zee5: {
    name: "ZEE5 Gift Card",
    urlName: "zee5",
    brandName: "ZEE5",
    category: "movies-and-music",
    discount: 17.0,
    backgroundImg: "YOUR_IMAGE_HERE",
    descriptionTitle: "ZEE5 Gift Card",
    description:
      "The ZEE5 Gift Card is an ideal choice for any occasion whether it’s a birthday, anniversary, wedding, or festive celebration. Gift unlimited entertainment with access to top shows, blockbuster movies, and exclusive originals, all with a single subscription.",
    aboutCompany:
      "India’s leading video-on-demand platform, ZEE5 streams your favorite shows before they air on TV. The platform also streams a wide selection of Indian and international movies, originals, and more. Subscribe effortlessly using ZEE5 Gift Vouchers, easy to buy, and easy to redeem.",
    calculatorTitle: "Best ZEE5 Gift Cards",
    calculatorDescription:
      "A popular choice for presents, ZEE5 gift cards never disappoint the recipients. Be it for a special occasion or a thoughtful gesture, these gift cards are a convenient option that suits any budget and preference.",
    howToBuyTitle: "How to Buy a ZEE5 Gift Card?",
    howToRedeemTitle: "How to Use or Redeem ZEE5 Gift Card?",
    howToRedeemDesc:
      "ZEE5 Gift Voucher can be redeemed using the following steps:",
    howToRedeemSteps: [
      "Visit the ZEE5 website.",
      "Click on “Buy Plan”.",
      "Select your preferred subscription plan.",
      'Click on "Have a code?"',
      "Enter your gift voucher code and click “Continue”.",
    ],
    checkBalanceTitle: "How to Check ZEE5 Gift Card Balance",
    checkBalanceDesc:
      "ZEE5 Gift Cards are preactivated cards and remain valid for 1 year from the date of purchase. The balance of the ZEE5 Gift Card Voucher can be checked on the mobile app or website.",
    checkBalanceSteps: [
      "Visit the ZEE5 website or app and log in with your credentials.",
      "Go to the Account Section.",
      "Scroll down to the Wallet Section.",
      "Add the Gift Card number and PIN.",
      "Click on Check Balance to know the balance available.",
    ],
    termsAndConditionsTitle: "Terms and Conditions for ZEE5 Gift Card",
    termsAndConditionSteps: [
      "This card is valid on Zee5 website and app via the subscription page.",
      "It can be used one-time only; one Gift Voucher per transaction.",
      "This gift voucher has an expiration date and cannot be revalidated once expired.",
      "It has no refunds or credit for unused balance; it will lapse automatically.",
      "It can be combined with ongoing Zee5 promotions, but not valid on blackout dates (subject to change).",
      "Zee5 is not liable for lost, stolen, or unauthorized use of gift vouchers.",
      "In case of blocking, the gift voucher will be re-enabled in 72 hours; failed transactions will be auto-refunded within 48 hours.",
      "For issues, contact www.gvhelpdesk.com; legal matters fall under Delhi's jurisdiction.",
    ],
    occasionsTitle: "ZEE5 Gift Cards for Different Occasions",
    occasionsDesc:
      "Whether it’s a birthday, anniversary, festival, or a simple gesture like thank you, a ZEE5 Gift Card is always a thoughtful way to make someone smile.",
    birthdays:
      "Get your loved ones this exclusive ZEE5 E-Gift Card on their birthdays.",
    anniversary:
      "The perfect anniversary gift to binge-watch ZEE5 Gift Voucher is something the couple would love on their special occasion.",
    festivals:
      "The ZEE5 E-Gift Card makes a perfect festive surprise offering non-stop entertainment your loved ones will enjoy throughout the holiday season.",
  },
  pvr: {
    name: "PVR Gift Card",
    urlName: "pvr",
    brandName: "PVR",
    category: "movies-and-music",
    discount: 11.0,
    backgroundImg: "YOUR_IMAGE_HERE",
    descriptionTitle: "PVR Gift Card",
    description:
      "The perfect pick for any special occasion, the PVR Gift Card is a reliable choice. Be it a birthday, wedding, anniversary or any festive occasion, the PVR E-Gift Card is a treat for movie buffs. Treat yourself or your loved ones to the joy of entertainment, with hassle-free access to movies, F&B, and more. A gift that always hits the right note!",
    aboutCompany:
      "India’s largest and most premium film exhibition company, PVR Cinemas is known for redefining the movie-going experience. With state-of-the-art screens, luxury seating, gourmet F&B offerings, and cutting-edge technology, PVR offers more than just movies. It delivers unforgettable entertainment moments. Whether it's blockbuster films, live screenings, or curated cinematic experiences, PVR is the ultimate destination for movie lovers across the country.",
    calculatorTitle: "Best PVR Gift Cards",
    calculatorDescription:
      "PVR Gift Cards are a popular choice for gifting, whether for a special occasion or a thoughtful gesture. These gift cards are a convenient and appreciated option that suits any budget and preference.",
    howToBuyTitle: "How to Buy a PVR Gift Card?",
    howToRedeemTitle: "How to Use or Redeem PVR Gift Card?",
    howToRedeemDesc:
      "PVR Gift Voucher can be redeemed using the following steps on the website and their outlets:",
    howToRedeemSteps: [
      "Website/App",
      "1. Visit www.pvrcinemas.com to redeem PVR Gift Card online.",
      "2. Choose Gift Card as the payment mode.",
      "3. Enter Gift Card details like number and PIN.",
      "In-Store Redemption",
      "1. Visit any PVR Cinemas outlet.",
      "2. Confirm gift card acceptance at the counter before purchase.",
      "3. During billing, show your gift card details to the cashier.",
      "4. Pay any remaining amount via cash or card.",
    ],
    checkBalanceTitle: "How to Check PVR Gift Card Balance",
    checkBalanceDesc:
      "PVR Gift Card balance can be checked with the following steps:",
    checkBalanceSteps: [
      "Visit the PVR website or app and log in with your credentials.",
      "Navigate to the Add Gift Card option.",
      "Add the Gift Card number and PIN.",
      "Click on Check Balance to know the balance available.",
    ],
    termsAndConditionsTitle: "Terms and Conditions for PVR Gift Card",
    termsAndConditionSteps: [
      "This card is valid for online purchases (tickets & F&B) at www.pvrcinemas.com.",
      "It can be used for multiple online transactions. However, allows one-time use for offline purchases.",
      "It is valid for 1 year from the activation date.",
      "There is no refund on items purchased using the E-Gift Card.",
      "This voucher is not applicable for movie or candy bar voucher purchases. It does not guarantee seat or ticket availability.",
      "It cannot be redeemed for cash or credit; unused balance won’t be refunded or exchanged.",
      "It is freely transferable. If lost/stolen, this card will not be replaced or reimbursed.",
      "If the purchase exceeds the card value, the difference must be paid via credit/debit card.",
      "Keep your card number and PIN safe. Any misuse won’t be compensated.",
      "E-Gift Cards are generally delivered instantly but may take up to 24 hours in case of system delays.",
      "For full terms, visit www.pvrcinemas.com/giftcards.",
    ],
    occasionsTitle: "PVR Gift Cards for Different Occasions",
    occasionsDesc:
      "PVR Gift Cards are meant to be gifted on any occasion, be it a birthday, an anniversary, any festival, or a simple appreciation gesture.",
    birthdays:
      "The best gifts are the ones the recipient can choose for themselves. So, get them this exclusive PVR E-Gift Card on their birthdays.",
    anniversary:
      "This PVR Gift Voucher is a perfect anniversary surprise, giving the couple a chance to relax, unwind, and enjoy quality time together on their special day.",
    festivals:
      "Let your loved ones choose what they love with the PVR E-Gift Card this festive season.",
  },
  "fan-code": {
    name: "Fancode Gift Card",
    urlName: "fan-code",
    brandName: "Fancode",
    category: "movies-and-music",
    discount: 8.0,
    backgroundImg: "YOUR_IMAGE_HERE",
    descriptionTitle: "Fancode Gift Card",
    description:
      "The ultimate gift for every sports fan. Whether it’s a birthday, anniversary, festival, or just a reason to celebrate fandom, the FanCode Gift Card lets the recipient unlock a world of official team merchandise, exclusive fan gear, and premium sportswear. From cricket to football and everything in between, shop across top collections on the FanCode Shop with ease.",
    aboutCompany:
      "India’s leading digital sports destination, FanCode, is designed specifically for sports fans. FanCode offers unmatched access to both mainstream and niche sports through flexible subscription options like match passes and tour passes, making premium sports content affordable and accessible for every fan.",
    calculatorTitle: "Best Fancode Gift Cards",
    calculatorDescription:
      "Fancode Gift Cards can easily be the best gift for a sports fanatic. Someone who loves watching sports would surely appreciate this thoughtful gift, especially during live sporting events.",
    howToBuyTitle: "How to Buy a Fancode Gift Card?",
    howToRedeemTitle: "How to Use or Redeem Fancode Gift Card?",
    howToRedeemDesc:
      "Fancode Gift Voucher can be redeemed using the following steps on its website and app:",
    howToRedeemSteps: [
      "Visit the FanCode website or app and browse the listed merchandise.",
      "Add your favorite products to the cart and proceed to checkout.",
      "Enter your voucher code at the payment page to redeem the offer.",
    ],
    checkBalanceTitle: "How to Check Fancode Gift Card Balance",
    checkBalanceDesc:
      "Fancode Gift Cards balance can be checked using the following steps:",
    checkBalanceSteps: [
      "Log in to your FanCode account on the website or app.",
      "Go to the profile section.",
      "Navigate to transaction history or gift card details.",
      "View available gift card balance and usage history.",
    ],
    termsAndConditionsTitle: "Terms and Conditions for Fancode Gift Card",
    termsAndConditionSteps: [
      "This Gift Card is not legal tender and cannot replace a credit/debit card.",
      "It cannot be exchanged for cash or a cheque.",
      "The person holding the card is considered its rightful beneficiary.",
      "The card is valid only on Fancode platforms (e-commerce website and mobile app) for purchasing listed merchandise.",
      "It cannot be used at offline stores, multi-brand outlets, departmental stores, or other online marketplaces.",
      "The Gift Card is valid for 1 year from the date of activation (purchase).",
      "Only one Gift Card can be used per invoice.",
      "Lost, damaged, or defaced cards will not be reissued or compensated.",
      "For any redemption or usage issues, please contact Fancode customer support. The company’s decision will be final.",
      "All disputes are subject to Mumbai jurisdiction only.",
    ],
    occasionsTitle: "Fancode Gift Cards for Different Occasions",
    occasionsDesc:
      "Fancode Gift Cards are easily every sports enthusiast’s dream. Give your friends, family, and loved ones the gift of choice with Fancode Gift Cards. Whether it’s a birthday, anniversary, festival, or a simple gesture like thank you, a Fancode Gift Card is always a thoughtful way to make them smile.",
    birthdays:
      "What better than gifting a Fancode Gift Card to a sports lover? Get them this exclusive Fancode E-Gift Card and make their day memorable.",
    anniversary:
      "The perfect anniversary gift for a couple who loves sports. Fancode Gift Voucher is something they will appreciate on their special occasion.",
    festivals:
      "The recipient of the Fancode gift card will thank you for making the festive season better for them.",
  },
  "sony-liv": {
    name: "Sony LIV Gift Card",
    urlName: "sony-liv",
    brandName: "Sony LIV",
    category: "movies-and-music",
    discount: 54.0,
    backgroundImg: "YOUR_IMAGE_HERE",
    descriptionTitle: "Sony LIV Gift Card",
    description:
      "For entertainment lovers and binge-watchers, the Sony LIV Gift Card is easily the perfect pick. Make any occasion special for them be it their birthday, wedding, anniversary or festive celebration. Pamper them with Sony LIV Gift Voucher and let them dive into their favourite shows, movies and more.",
    aboutCompany:
      "A premium OTT streaming platform, Sony LIV offers a wide range of content including live sports, original web series, TV shows, blockbuster movies, and exclusive international content. The platform streams entertainment across multiple languages and genres. Sony LIV provides a complete viewing experience for every kind of audience anytime and anywhere.",
    calculatorTitle: "Best Sony LIV Gift Cards",
    calculatorDescription:
      "Sony LIV Gift Cards are a popular choice for gifting, whether for a special occasion or a thoughtful gesture. These gift cards are a convenient option that suits any budget and preference.",
    howToBuyTitle: "How to Buy a Sony LIV Gift Card?",
    howToRedeemTitle: "How to Use or Redeem Sony LIV Gift Card?",
    howToRedeemDesc:
      "Sony LIV Gift Voucher can be redeemed using the following steps:",
    howToRedeemSteps: [
      "Open the Sony LIV app or website.",
      "Select your preferred subscription plan.",
      "Enter your voucher code in the given field to redeem instantly.",
    ],
    checkBalanceTitle: "How to Check Sony LIV Gift Card Balance",
    checkBalanceDesc:
      "Sony LIV Gift Cards balance can be checked using the following steps:",
    checkBalanceSteps: [
      "Visit the Sony LIV website or app and log in with your credentials.",
      "Go to My Purchases or Transaction History under the account section.",
      "Check the subscription plan validity.",
    ],
    termsAndConditionsTitle: "Terms and Conditions for Sony LIV Gift Card",
    termsAndConditionSteps: [
      "This code is issued by Culver Max Entertainment Pvt. Ltd. (CMEPL), formerly Sony Pictures Networks India.",
      "This card is valid only in India and can be redeemed till 31st March 2025.",
      "It cannot be clubbed with existing subscriptions or offers on Sony LIV.",
      "This gift card is non-refundable, non-transferable, and not redeemable for cash. It is not a credit/debit code or legal tender.",
      "CMEPL is not responsible for any misuse, theft, or transfer after purchase.",
      "Disputes are subject to the exclusive jurisdiction of courts in Mumbai.",
      "Redeeming the code implies acceptance of all terms at sonyliv.com/terms-of-use.",
    ],
    occasionsTitle: "Sony LIV Gift Cards for Different Occasions",
    occasionsDesc:
      "The Sony LIV Gift Card makes for an amazing birthday, anniversary, or festival gift. Buy Sony LIV Gift Card and make your loved ones happy.",
    birthdays:
      "The best gifts are the ones they choose themselves. So, get them this exclusive Sony LIV E-Gift Card on their birthdays.",
    anniversary:
      "The perfect anniversary gift, Sony LIV Gift Voucher is something the recipient will appreciate on their special occasion.",
    festivals:
      "Let the recipient pick anything of their choice using the Sony LIV E-Gift Card during the festive season.",
  },
  "amazon-prime": {
    name: "Amazon Prime Gift Card",
    urlName: "amazon-prime",
    brandName: "Amazon Prime",
    category: "movies-and-music",
    discount: 12.0,
    backgroundImg: "YOUR_IMAGE_HERE",
    descriptionTitle: "Amazon Prime Gift Card",
    description:
      "Explore a world of entertainment and convenience with the Amazon Prime Music Voucher. Access unlimited ad-free music streaming, along with all the perks of Prime membership - lightning-fast free delivery, early access to exclusive deals, popular movies and TV shows on Prime Video, a vast collection of eBooks, games, and more. Amazon Prime takes your everyday experiences to the next level.",
    aboutCompany:
      "A world of non-stop entertainment awaits you with Amazon Prime. Access unlimited ad-free music and movies with Prime Music and watch movies, shows, and Originals. Amazon Prime brings music and entertainment together, anytime, anywhere.",
    calculatorTitle: "Best Amazon Prime Gift Cards",
    calculatorDescription:
      "Amazon Prime Gift Cards are a popular choice for gifting, whether for a special occasion or as a thoughtful gesture. These gift cards are a convenient and appreciated option that suits any budget and preference.",
    howToBuyTitle: "How to Buy an Amazon Prime Gift Card?",
    howToRedeemTitle: "How to Use or Redeem Amazon Prime Gift Card?",
    howToRedeemDesc:
      "Amazon Prime Gift Voucher can be redeemed using the following steps on the website and its app:",
    howToRedeemSteps: [
      "Go to www.amazon.in/vouchers.",
      "In the ‘Add a new voucher’ section, enter your code.",
      "Click ‘Add’ to apply the voucher to your account.",
    ],
    checkBalanceTitle: "How to Check Amazon Prime Gift Card Balance",
    checkBalanceDesc:
      "The Amazon Prime Gift Cards balance can be checked on the mobile app or website using the following steps:",
    checkBalanceSteps: [
      "Visit the Amazon Prime website or app and log in with your credentials.",
      "Go to your profile.",
      "Move to the Account Section.",
      "Check the Gift Card balance available.",
    ],
    termsAndConditionsTitle: "Terms and Conditions for Amazon Prime Gift Card",
    termsAndConditionSteps: [
      "This voucher is issued by Pine Labs (Qwikcilver) and co-branded with Amazon Pay (India). It is valid for 12 months from the date of activation.",
      "It can be used to buy Amazon Prime memberships (3-months, 12-months, Lite, or Shopping Edition) or an Amazon Pay Anytime Gift Card (inactive, zero-value) on Amazon.in.",
      "It cannot be transferred, cancelled, or refunded once issued and is not valid on Amazon Business accounts.",
      "It cannot be used with Prime memberships activated via telecom providers (Jio, Airtel, VI, etc.) or through Google Play.",
      "It cannot be used for physical/digital items, global store, recharges, bill payments, tickets, financial products, or pre-loaded gift cards.",
      "Only Indian-issued credit/debit cards are accepted for voucher purchase.",
      "EnKash, Pine Labs, or Amazon is not responsible for lost or misused vouchers.",
      "Terms may change without prior notice.",
      "For detailed T&Cs and FAQs, click here.",
    ],
    occasionsTitle: "Amazon Prime Gift Cards for Different Occasions",
    occasionsDesc:
      "Move over traditional gifts and get your friends, family, and loved ones something they will truly appreciate. Whether it’s a birthday, anniversary, festival, or a simple gesture like thank you, an Amazon Prime Gift Card is always a thoughtful way to make someone smile.",
    birthdays:
      "The best gifts are the ones they choose themselves. So, get them this exclusive Amazon Prime E-Gift Card on their birthdays.",
    anniversary:
      "A perfect anniversary gift, Amazon Prime Gift Voucher is something the couple will appreciate on their special occasion.",
    festivals:
      "The festive season is different for different people. Give them the choice to pick anything using the Amazon Prime E-Gift Card during the festive season.",
  },
  westside: {
    name: "Westside Gift Card",
    urlName: "westside",
    brandName: "Westside",
    category: "apparels",
    discount: 10.0,
    backgroundImg: "YOUR_IMAGE_HERE",
    descriptionTitle: "Westside Gift Card",
    description:
      "This Gift Card is every shopping lover's dream. For those who are always on the lookout for new and chic clothes, the Westside E-Gift Card is a perfect pick. You can find everything under the same roof, from clothing to home decor and beauty products, at any Westside store. Use this Gift Card to get yourself your favorite thing.",
    aboutCompany:
      "Westside is a popular modern retail outlet offering trendy fashion apparel, footwear, and accessories for men, women, and kids. They also stock homeware, beauty products, and toys. Known for its dynamic collection and reasonable prices, Westside caters to a young, fashion-conscious audience seeking a one-stop shopping destination.",
    calculatorTitle: "Best Westside Gift Cards",
    calculatorDescription:
      "Westside Gift Cards can easily be the best gift for a shopaholic. Someone who loves to be updated with the latest trends in fashion, beauty, and home decor, the Westside E-Gift Card can be your best pick. This gift card unlocks a seamless shopping experience for the recipient.",
    howToBuyTitle: "How to Buy a Westside Gift Card?",
    howToRedeemTitle: "How to Use or Redeem Westside Gift Card?",
    howToRedeemDesc:
      "Westside Gift Voucher can be redeemed using the following steps:",
    howToRedeemSteps: [
      "Visit the nearest Westside outlet to redeem this E-Gift Card. Find the nearest store here.",
      "Confirm the acceptance of the Gift Card at the store before making any purchase.",
      "Add the products you want to buy to the cart.",
      "Present your Gift Card details to the cashier during billing & pay any balance amount by cash or card.",
    ],
    checkBalanceTitle: "How to Check Westside Gift Card Balance",
    checkBalanceDesc:
      "Westside Gift Cards balance can be checked using the following steps:",
    checkBalanceSteps: [
      "Open your SMS app.",
      "Type WS followed by your card number.",
      "Send it to 09094774499 to check your balance.",
    ],
    termsAndConditionsTitle: "Terms and Conditions for Westside Gift Card",
    termsAndConditionSteps: [
      "Westside Gift Card is redeemable only at Westside stores in India for merchandise, not valid at in-store cafés or food courts.",
      "The gift card is valid for 1 year from the date of issue; it cannot be extended.",
      "This is a single-use only; partial redemption is not allowed.",
      "If the bill exceeds the voucher value, the balance must be paid by the customer.",
      "It is usable during sales, promotions, and offers.",
      "This card is not exchangeable for cash, credit notes, or other gift cards.",
      "If lost, damaged, or cancelled, this voucher won’t be replaced or refunded.",
      "All disputes are subject to Mumbai jurisdiction.",
      "This card is a property of Trent Limited, which may amend T&Cs without notice.",
      "For more info, visit www.mywestside.com.",
    ],
    occasionsTitle: "Westside Gift Cards for Different Occasions",
    occasionsDesc:
      "Whether it’s a birthday, anniversary, festival, or a simple gesture like thank you, a Westside Gift Card is always a thoughtful idea.",
    birthdays:
      "Nothing is better than gifting a Westside Gift Card on birthdays. This exclusive Westside E-Gift Card can make their day memorable.",
    anniversary:
      "The perfect anniversary gift for a couple, the Westside Gift Voucher is something they will appreciate on their special occasion.",
    festivals:
      "The recipient of the Westside gift card will thank you for making the festive season better for them.",
  },
  blackberrys: {
    name: "Blackberrys Gift Card",
    urlName: "blackberrys",
    brandName: "Blackberrys",
    category: "apparels",
    discount: 10.0,
    backgroundImg: "YOUR_IMAGE_HERE",
    descriptionTitle: "Blackberrys Gift Card",
    description:
      "The Blackberrys E-Gift Card is the perfect choice for the modern man who appreciates sharp style and refined elegance. Whether it’s a birthday, anniversary, festive celebration, or corporate reward, this digital gift unlocks premium menswear from one of India’s leading fashion brands. From crisp formals to smart casuals, accessories, and footwear, let your loved ones pick exactly what fits their taste.",
    aboutCompany:
      "One of India’s leading premium menswear brands, Blackberrys is known for redefining modern Indian fashion with a perfect blend of style, sophistication, and innovation. Blackberrys is a go-to destination for the progressive, confident Indian man who values fit, fabric, and function.",
    calculatorTitle: "Best Blackberrys Gift Cards",
    calculatorDescription:
      "Blackberrys Gift Card is a premium gift for men with a taste. It adds to the aura and complements the personality. You can surely count on this Blackberrys Gift Card for all special occasions or to make any ordinary day extraordinary for the recipient.",
    howToBuyTitle: "How to Buy a Blackberrys Gift Card?",
    howToRedeemTitle: "How to Use or Redeem Blackberrys Gift Card?",
    howToRedeemDesc:
      "Blackberrys Gift Voucher can be redeemed using the following steps:",
    howToRedeemSteps: [
      "This Gift Card is redeemable only at Blackberrys exclusive stores in India.",
      "The recipient needs to present the original email containing the valid Gift Card at the time of purchase.",
      "If the purchase amount exceeds the card value, the balance must be paid using other available payment modes at the Blackberrys stores.",
    ],
    checkBalanceTitle: "How to Check Blackberrys Gift Card Balance",
    checkBalanceDesc:
      "Blackberrys Gift Card balance can be checked using the following steps:",
    checkBalanceSteps: [
      "Visit any Blackberrys exclusive store in India.",
      "Present the valid gift card at the time of purchase, either in its original email form or as a physical copy.",
      "The gift card balance cannot be checked online or through customer service channels.",
    ],
    termsAndConditionsTitle: "Terms and Conditions for Blackberrys Gift Card",
    termsAndConditionSteps: [
      "This gift card is redeemable only at Blackberrys' exclusive stores in India.",
      "The Gift Card must be presented in its original email form at the time of redemption.",
      "It is valid for 1 year from the date of issue and is issued in Indian Rupees.",
      "It can be redeemed only once and in full; no partial redemption, refunds, or credit notes.",
      "If the purchase value exceeds the card amount, the difference must be paid by the bearer.",
      "Carries no value until activated; available in fixed denominations of ₹500, ₹1000, ₹2500, ₹5000, ₹7500, and ₹10,000.",
      "The maximum card value is ₹10,000, and it cannot be transferred, reloaded, or redeemed for cash.",
      "There is no replacement or compensation for lost or misused cards; protect the card details.",
      "Blackberrys reserves the right to amend the terms without prior notice.",
      "All disputes are subject to the exclusive jurisdiction of the Delhi courts.",
      "For queries, contact: customersupport@blackberrys.com",
    ],
    occasionsTitle: "Blackberrys Gift Cards for Different Occasions",
    occasionsDesc:
      "Whether it’s a birthday, anniversary, festival, or a simple appreciation, a Blackberrys Gift Card is always a thoughtful choice.",
    birthdays:
      "Nothing is better than gifting a Blackberrys Gift Card to someone who appreciates class and style.",
    anniversary:
      "The perfect anniversary gift, the Blackberrys Gift Voucher is sure to bring a smile to their face.",
    festivals:
      "The recipient of the Blackberrys gift card will thank you for making the festive season better for them.",
  },
  levis: {
    name: "Levi’s Gift Card",
    urlName: "levis",
    brandName: "Levi’s",
    category: "apparels",
    discount: 10.0,
    backgroundImg: "YOUR_IMAGE_HERE",
    descriptionTitle: "Levi’s Gift Card",
    description:
      "Give timeless fashion with the Levi’s E-Gift Card. Perfect for birthdays, festivals, or to show appreciation, a Levi’s Gift Card can be something you can think about. Whether it’s classic jeans, smart casuals, or stylish essentials, this card lets your loved ones choose what fits them best.",
    aboutCompany:
      "One of the most recognized and trusted fashion brands in the world, Levi’s pioneered the blue jean and has been synonymous ever since then. Levi’s continues to redefine casual wear with its signature range of denim, jackets, shirts, t-shirts, and accessories, all designed to fit every body, style, and moment.",
    calculatorTitle: "Best Levi’s Gift Cards",
    calculatorDescription:
      "Levi’s Gift Cards can easily be the best gift for a denim lover. Someone who loves timeless fashion will surely appreciate this thoughtful gift.",
    howToBuyTitle: "How to Buy a Levi’s Gift Card?",
    howToRedeemTitle: "How to Use or Redeem Levi’s Gift Card?",
    howToRedeemDesc:
      "Levi’s Gift Voucher can be redeemed using the following steps:",
    howToRedeemSteps: [
      "Visit the Levi's store near you.",
      "Confirm whether the Gift Card will be accepted or not.",
      "Pick your favorite products and proceed to billing.",
      "Show your gift card details to the cashier.",
      "Pay any remaining balance using cash or card.",
    ],
    checkBalanceTitle: "How to Check Levi’s Gift Card Balance",
    checkBalanceDesc:
      "Levi’s Gift Card balance can be checked using the following steps:",
    checkBalanceSteps: [
      "Go to your SMS app.",
      "Type LEVIGC followed by your 16-digit card number.",
      "Send the message to 9841646669.",
      "You’ll receive details of your gift card balance and expiry.",
    ],
    termsAndConditionsTitle: "Terms and Conditions for Levi’s Gift Card",
    termsAndConditionSteps: [
      "The Levi’s Gift Card is redeemable only for merchandise at participating Exclusive Levi’s Stores in India. Check stores here.",
      "The gift card is not valid at Levi’s Factory Stores and cannot be used on discounted articles during the EOSS/Sale period for cards purchased on or after 3rd Feb 2025.",
      "It is valid for 6 months from the date of activation and can be redeemed only once.",
      "The card balance cannot be redeemed for cash; merchandise only.",
      "The card is transferable, but will not be replaced if lost or stolen.",
      "This E-Gift Card remains the property of Levi’s and must be returned if requested.",
      "The legal disputes will be subject to the courts in Bangalore.",
      "E-Gift Cards are normally delivered instantly, but may take up to 24 hours in case of system delays.",
      "There will be no returns or refunds on gift cards/vouchers sold via enkash.in; refer to enkash.in/faq for full refund policy.",
    ],
    occasionsTitle: "Levi’s Gift Cards for Different Occasions",
    occasionsDesc:
      "A Levi’s Gift Card is an easy gift for multiple occasions, be it a birthday, an anniversary, a festival, or a simple gesture of appreciation. A Levi's Gift Card is always a thoughtful way to make the recipient smile.",
    birthdays:
      "What better than gifting a Levi's Gift Card to a fashion enthusiast? Get them this exclusive Levi's E-Gift Card and make their day memorable.",
    anniversary:
      "The perfect anniversary gift for a couple who is into styling and fashion. The Levi's Gift Voucher is something they will appreciate on their special occasion.",
    festivals:
      "The recipient of the Levi's gift card will thank you for making the festive season better for them.",
  },
  pantaloons: {
    name: "Pantaloons E-Gift Card",
    urlName: "pantaloons",
    brandName: "Pantaloons",
    category: "apparels",
    discount: 10.0,
    backgroundImg: "YOUR_IMAGE_HERE",
    descriptionTitle: "Pantaloons E Gift Card",
    description:
      "The Pantaloons E-Gift Card can be your go-to choice for gifting fashion that fits every personality and occasion. This card lets your loved ones shop from a wide range of apparel, footwear, accessories, and more.",
    aboutCompany:
      "With hundreds of stores across India, Pantaloons offer a seamless shopping experience across men’s, women’s, and kids’ fashion, all under one roof. Pantaloons blends quality with trend-forward designs to make fashion accessible and enjoyable for all.",
    calculatorTitle: "Best Pantaloons Gift Cards",
    calculatorDescription:
      "Pantaloons Gift Card is an easy pick for any occasion. Perfect for individuals and families, it is a dependable gift that will make the recipient appreciate it.",
    howToBuyTitle: "How to Buy a Pantaloons Gift Card?",
    howToRedeemTitle: "How to Use or Redeem Pantaloons Gift Card?",
    howToRedeemDesc:
      "Pantaloons Gift Voucher can be redeemed using the following steps:",
    howToRedeemSteps: [
      "Visit any nearby Pantaloons outlet.",
      "Confirm if the Gift Card is accepted.",
      "Pick the products you want to purchase.",
      "Show your Gift Card details during final billing.",
      "If the bill exceeds the Gift Card value, pay the remaining amount using cash or card.",
    ],
    checkBalanceTitle: "How to Check Pantaloons Gift Card Balance",
    checkBalanceDesc:
      "Pantaloons Gift Cards balance can be checked using the following steps:",
    checkBalanceSteps: [
      "Visit the nearest Pantaloons store.",
      "Show the gift card during purchase.",
      "Ask the cashier for the balance available.",
    ],
    termsAndConditionsTitle: "Terms and Conditions for Pantaloons Gift Card",
    termsAndConditionSteps: [
      "The Pantaloons E-Gift Card is redeemable at all Pantaloons outlets across India. Check stores here.",
      "The card is not valid at shop-in-shops or on jewellery items.",
      "The gift card can be redeemed only once and must be used in full by the bearer. No refunds or credit notes will be issued for any unused balance.",
      "The card is valid for 1 year from the date of activation. There will be no cancellation or replacement once the card is issued.",
      "If your purchase exceeds the card value, the balance must be paid separately.",
      "Pantaloons is not liable for misuse, loss, or theft of this gift card.",
      "Any use of the card is considered a valid discharge of Pantaloons’ liability.",
      "Pantaloons reserves the right to change terms without prior notice.",
      "All disputes are subject to the courts in Mumbai.",
      "E-Gift Cards are usually delivered instantly, but may take 24–48 hours due to system delays.",
      "No returns or refunds on gift cards purchased via enkash.in — check enkash.in/faq for refund policy.",
    ],
    occasionsTitle: "Pantaloons Gift Cards for Different Occasions",
    occasionsDesc:
      "Whether it’s a birthday, anniversary, festival, or a simple gesture to appreciate, a Pantaloons Gift Card is an ideal pick to make anyone smile.",
    birthdays:
      "Get this exclusive Pantaloons E-Gift Card to make their special day memorable.",
    anniversary:
      "The perfect anniversary gift for a couple, the Pantaloons Gift Voucher is something they will appreciate on their special occasion.",
    festivals:
      "The recipient of the Pantaloons gift card will thank you for making the festive season better for them.",
  },
  jockey: {
    name: "Jockey E-Gift Card",
    urlName: "jockey",
    brandName: "Jockey",
    category: "apparels",
    discount: 13.0,
    backgroundImg: "YOUR_IMAGE_HERE",
    descriptionTitle: "Jockey E-Gift Card",
    description:
      "Jockey E-Gift Card is the perfect gift of comfort and style. Whether it’s innerwear, outerwear, loungewear, or kidswear, the Jockey E-Gift Voucher lets your loved ones choose what they truly want. An ideal pick for birthdays, festivals and instant gifting, it allows the recipient to choose from a wide range of premium apparels.",
    aboutCompany:
      "Jockey is a global leader in comfort apparel, sold in over 140 countries and recognized as one of the world’s most loved brands. Jockey has revolutionized innerwear through continuous product and marketing innovation. Building on its strong foundation, the brand has expanded into outerwear with offerings like T-shirts, jackets, trackpants, loungewear, socks, towels, tank tops, capris, shorts, and a full kidswear range.",
    calculatorTitle: "Best Jockey Gift Cards",
    calculatorDescription:
      "Best Jockey Gift Cards offer the perfect blend of comfort, style, and flexibility, making them ideal for any occasion. Jockey E-Gift Cards let your loved ones or colleagues choose from a wide range of premium innerwear, outerwear, loungewear, and kidswear. These digital gift cards come with easy delivery and secure checkout, ensuring a hassle-free gifting experience that never goes out of style.",
    howToBuyTitle: "How to Buy a Jockey Gift Card?",
    howToRedeemTitle: "How to Use or Redeem a Jockey Gift Card?",
    howToRedeemDesc:
      "Jockey Gift Voucher can be redeemed using the following steps on its website:",
    howToRedeemSteps: [
      "Visit www.jockeyindia.com",
      "Log in and add your selected products to the cart",
      "Proceed to checkout and choose Jockey Gift Card as your payment method",
      "Enter the card number and PIN to redeem",
      "Pay any remaining amount using other payment options",
    ],
    checkBalanceTitle: "How to Check Jockey Gift Card Balance",
    checkBalanceDesc:
      "Jockey Gift Cards balance can be checked using the following steps:",
    checkBalanceSteps: [
      "Log in to your Jockey account on the website",
      "Go to the Gift Cards section",
      "Enter the gift card number and PIN",
      "Check gift card balance",
    ],
    termsAndConditionsTitle: "Terms and Conditions for Jockey Gift Card",
    termsAndConditionSteps: [
      "Jockey Gift Cards can only be redeemed online on e-commerce website and mobile app for listed merchandise and not at Jockey offline stores (EBOs).",
      "This Gift Card is not legal tender and cannot replace a credit/debit card.",
      "The person holding the card is considered its rightful beneficiary.",
      "It cannot be used at offline stores, multi-brand outlets, departmental stores, or other online marketplaces.",
      "The Gift Card is valid for 1 year from the date of activation (purchase). Expired cards will not be revalidated.",
      "Only one Gift Card can be used per invoice. Any lost, damaged, or defaced cards will not be reissued or compensated.",
      "For any redemption or usage issues, please contact Jockey customer support. The company’s decision will be final.",
      "All disputes are subject to Mumbai jurisdiction only.",
      "This E-Gift Card cannot be refunded, transferred and exchanged for cash or credit.",
      "Jockey gift card can be used only once and meant solely for the recipient. Any unused balance will be forfeited and will not be refunded.",
      "Page Industries Ltd. (“PAGE”) reserves the right to modify the terms without prior notice.",
      "PAGE is not responsible for lost, stolen, damaged, or unauthorized use of the card.",
      "Contact Pine Labs: support@enkash.in | 080-69806393 for support.",
      "All disputes are subject to the jurisdiction of courts in Bangalore, Karnataka. Final interpretation rests with PAGE.",
    ],
    occasionsTitle: "Jockey Gift Cards for Different Occasions",
    occasionsDesc:
      "Whether it’s a birthday, anniversary, festival, or a simple gesture like thank you, a Jockey Gift Card is always a thoughtful gift.",
    birthdays: "A Jockey Gift Card is a useful gift for birthdays.",
    anniversary:
      "Jockey Gift Voucher is something the couple will appreciate on their special occasion.",
    festivals:
      "The recipient of the Jockey gift card will thank you for making the festive season better for them.",
  },
  mcdonalds: {
    name: "McDonald’s Gift Card",
    urlName: "mcdonalds",
    brandName: "McDonald’s",
    category: "food-and-beverages",
    discount: 13.0,
    backgroundImg: "YOUR_IMAGE_HERE",
    descriptionTitle: "McDonald’s Gift Card",
    description:
      "The ultimate treat for food lovers! Whether it’s a quick bite, a family meal, or a snack break, the McDonald’s Gift Card makes every moment delicious. Valid at McDonald’s restaurants across South and West India, it offers the freedom to choose from your favorite burgers, fries, desserts, and more. Perfect for gifting, it’s a simple way to share smiles and great taste.",
    aboutCompany:
      "One of the world’s leading fast-food chains, McDonald’s is known for its iconic menu. The brand blends global consistency with local flavors to cater to diverse tastes. With a strong focus on quality, affordability, and innovation, McDonald’s continues to be a go-to destination for quick, delicious meals and memorable family experiences.",
    calculatorTitle: "Best McDonald’s Gift Cards",
    calculatorDescription:
      "Best McDonald’s Gift Cards are a fun and flavorful way to celebrate any occasion, be it birthdays, festive treats, employee rewards, or just a spontaneous surprise. These cards let your loved ones enjoy their favorite McDonald’s meals.",
    howToBuyTitle: "How to Buy a McDonald’s Gift Card?",
    howToRedeemTitle: "How to Use or Redeem McDonald’s Gift Card?",
    howToRedeemDesc:
      "McDonald’s Gift Voucher can be redeemed using the following steps:",
    howToRedeemSteps: [
      "Visit the McDonald’s stores in West and South of India.",
      "Select the items you want to purchase.",
      "Enter the gift card details to pay for the purchase.",
      "If the balance is short, use your card or cash to pay for the remaining amount.",
    ],
    checkBalanceTitle: "How to Check McDonald’s Gift Card Balance",
    checkBalanceDesc:
      "McDonald's Gift Cards balance can be checked using the following steps:",
    checkBalanceSteps: [
      "Open the SMS app in your phone.",
      "SMS BAL <space> 16-digit Card Number to 9975933517.",
      "You can also check balance by visiting enkash.in/balenq.",
    ],
    termsAndConditionsTitle: "Terms and Conditions for McDonald’s Gift Card",
    termsAndConditionSteps: [
      "This gift card is valid for 1 year from the date of purchase and can be used multiple times.",
      "The gift card is available only in denominations listed at the time of purchase.",
      "Usable only at McDonald’s restaurants in South and West India (not valid on McDelivery, SOK, or third-party apps).",
      "One card can be used per order; remaining balance (if any) must be paid in cash.",
      "The gift voucher is not refundable, exchangeable, refillable, or cancellable once purchased.",
      "Lost or expired cards cannot be reissued or refunded.",
      "McDonald’s is not liable for non-acceptance due to technical issues or system errors.",
      "Card usage may be affected by force majeure events (e.g., strikes, lockdowns).",
      "McDonald’s may withdraw the card or modify terms without prior notice.",
      "All disputes are subject to Mumbai court jurisdiction.",
      "E-Gift Cards are typically delivered instantly but may take up to 24–48 hours in rare cases.",
      "For queries, contact: myfeedback@mcdonaldsindia.com",
    ],
    occasionsTitle: "McDonald’s Gift Cards for Different Occasions",
    occasionsDesc:
      "Be it a birthday, anniversary, festival, or a simple gesture to appreciate, a McDonald’s Gift Card is a great way to pamper anyone.",
    birthdays:
      "A McDonald’s Gift Card can make anyone’s birthday better and memorable.",
    anniversary:
      "McDonald’s Gift Voucher is the perfect anniversary gift for a couple who would like to go on a McDonald’s date to celebrate their special day.",
    festivals:
      "The recipient of the McDonald’s gift card will thank you for making the festive season better for them.",
  },
  swiggy: {
    name: "Swiggy E-Gift Card",
    urlName: "swiggy",
    brandName: "Swiggy",
    category: "food-and-beverages",
    discount: 3,
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
    occasionsDesc: "Nykaa Fashion E-Gift Cards for different Occasions",
    festivals:
      "festive season gifting e needs a Swiggy Gift Card so that the people you care about do not miss out on yummy dishes and goodies",
    anniversary:
      "Using a Swiggy Gift Card designed for a couple’s special day saves them the hassle of cooking. This is the perfect gift for them to make the most of their day. \n",
    birthdays:
      "This makes perfect sense for birthdays; consider a Swiggy Gift Card, so that the person celebrating their birthday can enjoy their favourite food any time they want. This approach allows the beneficiaries to choose for themselves, adding to making the day even better.",
  },
  "luxe-e-gift-card": {
    name: "LUXE E-Gift Card",
    urlName: "luxe-e-gift-card",
    brandName: "LUXE",
    category: "e-commerce",
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
      "Access LUXE partner Homepage/app select Gift Cards and input the card details for the balance inquiry.",
      "Have no worries; you can visit any LUXE-affiliated retailer, and the employees will assist you with checking your balance.",
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
    occasionsDesc: "Nykaa Fashion E-Gift Cards for different Occasions",
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
    brandName: "Domino's",
    category: "food-and-beverages",
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
      "Use the Domino's mobile application or website. Then go to the card section that says ‘Gift Card’ where you will also be able to check the balance after entering the particulars of the card",
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
    occasionsDesc: "Nykaa Fashion E-Gift Cards for different Occasions",
    festivals:
      "Festivals always call for something special Domino’s Gift Cards are definitely a good idea. It serves as a convenient present for giving the opportunity to enjoy the cheesy pizzas during the get-togethers like Diwali, Christmas and many other such occasions. ",
    anniversary:
      "Express your love and togetherness with a Domino's Gift Card which will enable the couple to have their preferred dish. Be it an intimate dinner or a pizza date, the gift card provides them with the option and enhances their anniversary experience",
    birthdays:
      "Domino's gift cards are a pleasant addition because the person can order any pizzas, sides, and desserts they want. It doesn’t matter whether it is a friend or family or a colleague, this gift understands each and every person's need \n",
  },
  "bookmyshow-e-gift-card": {
    name: "BookMyShow E-Gift Card",
    urlName: "bookmyshow-e-gift-card",
    brandName: "BookMyShow",
    category: "movies-and-music",
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
    occasionsDesc: "Nykaa Fashion E-Gift Cards for different Occasions",
    festivals:
      "For this festive season, consider giving your loved ones BookMyShow Gift Cards allowing them to enjoy their preferred movies and shows and have a wonderful time.\n",
    anniversary:
      "Consider gifting a BookMyShow to the couple for their anniversary, enabling them to enjoy their favorite films and shows together.",
    birthdays:
      "Surprise your loved ones with a gift card on their birthday, allowing them to indulge in their special day",
  },
  "starbucks-e-gift-card": {
    name: "Starbucks E-Gift Card",
    urlName: "starbucks-e-gift-card",
    brandName: "Starbucks",
    category: "food-and-beverages",
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
    occasionsDesc: "Nykaa Fashion E-Gift Cards for different Occasions",
    festivals:
      "A thoughtful way to celebrate festivals. Let the festival experience for your loved ones be unique with this personalized gift.",
    anniversary:
      "Starbucks Gift Cards are a perfect way to send anniversary wishes to your loved ones. Let their anniversary celebration be over a shared cup of coffee. ",
    birthdays:
      "Starbucks gift cards are ideal for coffee lovers on their birthdays. You can choose to send an e-gift card directly to your loved one's inbox or mobile",
  },
  "myntra-e-gift-card": {
    name: "Myntra E-Gift Card",
    urlName: "myntra-e-gift-card",
    brandName: "Myntra",
    category: "e-commerce",
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
    occasionsDesc: "Nykaa Fashion E-Gift Cards for different Occasions",
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
    brandName: "Zomato",
    category: "food-and-beverages",
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
    occasionsDesc: "Nykaa Fashion E-Gift Cards for different Occasions",
    festivals:
      "Celebrate festivals by giving a Zomato card!  Whether it’s Diwali, Christmas or Eid, a Zomato gift card guarantees that the celebrations are delicious. \n",
    anniversary:
      "Whether it is a romantic dinner for two or a family outing, Zomato gift cards are a perfect way to celebrate anniversaries by serving delicious food coming from the top restaurants.",
    birthdays:
      "Celebrate their special day with the gift of food! Zomato gift cards make birthdays better, because recipients get to choose the meals they love.",
  },

  "decathlon-sports-india-e-gift-card": {
    name: "Decathlon Sports India E-Gift Card",
    urlName: "decathlon-sports-india-e-gift-card",
    brandName: "Decathlon",
    category: "e-commerce",
    discount: 0,
    backgroundImg: "hehe",
    descriptionTitle: "Decathlon Sports India E-Gift Card\n\n",
    description:
      "Sportswear and essentials are no less than a treat for a sports lover. Decathlon is a perfect gift for a fitness enthusiast.",
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
      "Visit decathlon.com for online redemption",
      "Add the Gift Card amount to the payment page",
      "Use it to pay for the item purchased",
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
    occasionsDesc: "Nykaa Fashion E-Gift Cards for different Occasions",
    festivals:
      "Perfect for endless adventures, celebrate the festive season with a Decathlon brand voucher.",
    anniversary:
      "Give the couple an unforgettable anniversary gift with a Decathlon Gift Card. \n ",
    birthdays:
      "Make your best friend’s birthday special by gifting them a Decathlon Gift Card. ",
  },
}

export default VoucherData
