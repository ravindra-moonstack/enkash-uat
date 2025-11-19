export type TVoucher = {
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
  blogCards?: number[]
}

const VoucherData: Record<string, TVoucher> = {
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
      "Whether it's a birthday, wedding, anniversary, or festive celebration, the Amazon Prime Gift Card makes gifting effortless and thoughtful.It provides unlimited same-day or next-day delivery, exclusive Prime-only deals, and early access to shopping events, all at an introductory price of ₹399 for 12 months.This plan is for shopping benefits only and does not include Prime Video, Music, Reading, or Gaming.Existing Prime members are not eligible for this offer.",
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
    blogCards: [9172, 9133, 9162],
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
    blogCards: [10579, 10043, 13986],
  },
  kfc: {
    name: "KFC E-Gift Card",
    urlName: "kfc",
    brandName: "KFC",
    category: "food-and-beverages",
    discount: 7.0,
    backgroundImg: "YOUR_IMAGE_HERE",
    descriptionTitle: "KFC E-Gift Card",
    description:
      "A KFC gift card lets you treat your loved ones to crispy, flavor-packed chicken, burgers, rice bowls, snacks, and more. With over 350 outlets nationwide and exciting deals, the KFC E-Gift Card is a thoughtful and delicious gifting option for any occasion.",
    aboutCompany:
      "KFC is one of the world’s most iconic fast-food brands, known for its signature crispy fried chicken. KFC offers a variety of crowd-favorite items, including chicken buckets, burgers, rice bowls, wraps, snacks, and refreshing beverages. KFC is always about bold flavors and finger-licking good moments.",
    calculatorTitle: "Best KFC Gift Cards",
    calculatorDescription:
      "KFC Gift Cards are the perfect treat for food lovers who crave bold flavors and crispy indulgence. KFC E-Gift Cards make gifting effortless and exciting. Recipients can choose their favorites and enjoy a finger-lickin good meal on their terms with this gift card.",
    howToBuyTitle: "How to Buy a KFC Gift Card?",
    howToRedeemTitle: "How to Use or Redeem a KFC Gift Card?",
    howToRedeemDesc:
      "A KFC Gift Voucher can be redeemed using the following steps:",
    howToRedeemSteps: [
      "Online Redemption",
      "1. Go to www.online.kfc.co.in",
      "2. Add your preferred items to the cart",
      "3. Proceed to checkout",
      "4. Select ‘Gift Card’ as the payment method and enter your card details to redeem",
      "In-Store Redemption",
      "1. Visit any participating KFC store",
      "2. Select your favorite items",
      "3. Inform the cashier about using the E-Gift Card",
      "4. Use the card during payment to complete the transaction",
    ],
    checkBalanceTitle: "How to Check KFC Gift Card Balance",
    checkBalanceDesc:
      "KFC Gift Card balance can be checked using the following steps:",
    checkBalanceSteps: [
      "Open your SMS app",
      "Message the 16-digit card number to 55757575",
      "You will be able to check the balance of your KFC Gift Card",
    ],
    termsAndConditionsTitle: "Terms and Conditions for KFC Gift Card",
    termsAndConditionSteps: [
      "This KFC E-Gift Card is issued by Yum! Restaurants (India) Private Limited and its authorized franchisees, valid only at participating KFC outlets across India.",
      "The cardholder is considered the rightful beneficiary.",
      "Inform the cashier about using the E-Gift Card before billing.",
      "It is usable for purchases up to or less than the card balance (e.g., a ₹500 card can be used for purchases up to ₹500).",
      "The gift card is valid for online orders on www.online.kfc.co.in and the KFC App.",
      "This is a one-time-use card. Any unused balance will be forfeited and cannot be refunded or reused.",
      "Multiple gift cards can be used for a single bill in stores.",
      "No cash refunds or exchanges will be provided, even in case of loss.",
      "Valid for 6 months from the date of issue. Expired cards cannot be revalidated.",
      "Yum! and its franchisees reserve the right to modify terms or participating outlets without prior notice.",
      "For terms updates or outlet list, visit https://online.kfc.co.in.",
      "Use of this card implies acceptance of all terms & conditions.",
      "Disputes, if any, will be subject to the exclusive jurisdiction of the courts in New Delhi.",
    ],
    occasionsTitle: "KFC Gift Cards for Different Occasions",
    occasionsDesc:
      "KFC Gift Cards are easily every foodie's dream come true. Whether it’s a birthday, anniversary, or any festival, a KFC Gift Card is always a thoughtful way to avail discounts and good food.",
    birthdays:
      "What better than gifting a KFC Gift Card to a food lover? Get them this exclusive KFC E-Gift Card and make their day memorable.",
    anniversary:
      "The perfect anniversary gift for a couple who loves food. KFC Gift Voucher is something they will appreciate on their special occasion.",
    festivals:
      "The recipient of the KFC gift card will thank you for making the festive season better for them.",
  },
  zomato: {
    name: "Zomato E-Gift Card",
    urlName: "zomato",
    brandName: "Zomato",
    category: "food-and-beverages",
    discount: 3.5,
    backgroundImg: "YOUR_IMAGE_HERE",
    descriptionTitle: "Zomato E-Gift Card",
    description:
      "A treat for foodies, the Zomato Gift Card offers the freedom to explore and enjoy meals from a wide range of restaurants across India. Whether it's a birthday, celebration, or just a thoughtful surprise, this card lets users order food, book tables, or dine out with ease via the Zomato app. Simple to redeem and valid across multiple services, it’s a deliciously convenient way to gift happiness.",
    aboutCompany:
      "One of the leading online food delivery apps, Zomato connects customers, restaurant partners, and delivery personnel. It caters to a variety of needs allowing users to discover restaurants, read and write reviews, browse and share photos, order food online, book tables, and make payments while dining out.",
    calculatorTitle: "Best Zomato Gift Cards",
    calculatorDescription:
      "Best Zomato Gift Cards are the ultimate way to share good food and great experiences. This card offers the freedom to order from thousands of restaurants or enjoy dining out. With easy redemption via the Zomato app and wide acceptance across delivery, table bookings, and more, Zomato Gift Cards turn every meal into a memorable treat.",
    howToBuyTitle: "How to Buy a Zomato Gift Card?",
    howToRedeemTitle: "How to Use or Redeem Zomato Gift Cards?",
    howToRedeemDesc:
      "Zomato Gift Voucher can be redeemed using the following steps:",
    howToRedeemSteps: [
      "Open the Zomato App and go to the Money section in your profile",
      "Enter the 16-digit code and 6-digit PIN",
      "The amount will be added to your Gift Card Balance",
      "During checkout, your gift card balance will appear under the Zomato Money tab",
      "Simply select it to apply the balance toward your order payment",
    ],
    checkBalanceTitle: "How to Check Zomato Gift Card Balance",
    checkBalanceDesc:
      "Zomato Gift Cards balance can be checked using the following steps:",
    checkBalanceSteps: [
      "Log in to your Zomato account on the app",
      "Go to the profile section",
      "Navigate to transaction history or gift card details",
      "View available gift card balance and usage history",
    ],
    termsAndConditionsTitle: "Terms and Conditions for Zomato Gift Card",
    termsAndConditionSteps: [
      "Issued by Razorpay Technologies Pvt. Ltd., authorized by RBI, in partnership with Zomato.",
      "Valid only on Zomato’s website, mobile app, and affiliated platforms.",
      "To use, claim the card via the “Claim” option in your Zomato account; balance will be added to Zomato Money.",
      "Valid for 4 years from the date of purchase.",
      "Multiple gift cards can be combined in one transaction.",
      "Cannot be reloaded, transferred, refunded, or used to buy other gift cards.",
      "In case of order cancellations, the amount is refunded to Zomato Money.",
      "Can be purchased using UPI, credit/debit cards, or net banking.",
      "Usable alongside promo codes and other digital payment options.",
      "No fees or interest apply.",
      "If order value exceeds balance, pay the remaining via other digital modes on Zomato.",
      "Users are responsible for the security of the 16-digit code and 6-digit PIN. Lost/stolen cards won’t be reissued.",
      "Razorpay/Zomato are not liable for unauthorized use, loss, or technical issues.",
      "May collect KYC details and share them with RBI/statutory authorities if required.",
      "Cards are usually delivered instantly but may take up to 72 hours.",
      "For issues, write to giftcards@zomato.com.",
      "Razorpay may replace non-functional cards after verification.",
      "All disputes are subject to New Delhi court jurisdiction.",
      "Terms may change without prior notice.",
      "No warranties on uninterrupted service or merchantability.",
      "Liability is limited to the value of the gift card.",
      "Users agree to indemnify Zomato/Razorpay against misuse or breach of terms.",
    ],
    occasionsTitle: "Zomato Gift Cards for Different Occasions",
    occasionsDesc:
      "Zomato Gift Cards are easily the best gift for any occasion - be it birthdays, anniversaries, festivals, or any casual day to appreciate the loved ones.",
    birthdays:
      "What better than gifting a Zomato Gift Card to a food lover? Get them this exclusive Zomato E-Gift Card and make their day memorable.",
    anniversary:
      "The perfect anniversary gift for a couple who loves binge-eating. Zomato Gift Voucher is something they will appreciate on their special occasion.",
    festivals:
      "The recipient of the Zomato gift card will thank you for making the festive season better for them.",
    blogCards: [10043, 10579, 13986],
  },
  dominos: {
    name: "Domino’s Gift Card",
    urlName: "dominos",
    brandName: "Domino's",
    category: "food-and-beverages",
    discount: 10, // Up to 10% off
    backgroundImg: "hehe",
    descriptionTitle: "Domino’s Gift Card",
    description:
      "Treat your loved ones to hot, cheesy happiness with the Domino’s Gift Card. Perfect for birthdays, celebrations, or just because, it lets them choose from their favourite pizzas, sides, and desserts. Easy to use and redeem, Domino’s E-Gift Card can be used for delivery, dine-in, & takeaway.",
    aboutCompany:
      "One of the world’s leading pizza delivery brands, Domino’s is known for its fresh, hot, and fast service. Operated in India by Jubilant FoodWorks, Domino’s has become a household name over the years. From classic pizzas to innovative sides, Domino’s offers a seamless ordering experience via its app, website, and in-store services.",
    calculatorTitle: "Best Domino's Gift Cards",
    calculatorDescription:
      "Domino's Gift Cards can easily be the best gift for a sports fanatic. Someone who loves watching sports would surely appreciate this thoughtful gift, especially during live sporting events.",
    howToBuyTitle: "How to Buy a Domino's Gift Card",
    howToRedeemTitle: "How to Use or Redeem Domino's Gift Card",
    howToRedeemDesc:
      "Domino's Gift Voucher can be redeemed using the following steps on its app.",
    howToRedeemSteps: [
      "Log in to the Domino’s app",
      "Add items to your cart and select your delivery time",
      "Proceed to checkout",
      "Click on the ‘E-Vouchers’ tab",
      "Enter your Gift Voucher code and PIN, then click Submit",
      "Pay the remaining amount (if any) at the time of delivery",
    ],
    checkBalanceTitle: "How to Check Domino's Gift Card Balance",
    checkBalanceDesc:
      "Domino's Gift Card balance can be checked using the following steps:",
    checkBalanceSteps: [
      "Visit www.dominos.co.in/giftcards",
      "Go to the ‘Balance Enquiry’ section",
      "Enter your 10-digit gift card number to check the balance",
      "Or, send an SMS DOM BAL <10-digit card number> to 56767",
      "You will be able to check your balance details",
    ],
    termsAndConditionsTitle: "Terms and Conditions for Domino's Gift Card",
    termsAndConditionSteps: [
      "Domino’s e-gift cards are available from ₹100 to ₹3000 and are valid for 180 days from the date of issue.",
      "The gift cards can be redeemed multiple times until fully used, only on the Domino’s app, mobile site, or desktop site; not valid at outlets or for advance orders.",
      "Domino’s gift voucher is valid for delivery, dine-in, takeaway, and Drive N Pick orders via Domino’s digital platforms.",
      "Only one gift card can be used per order. If the order value exceeds the gift card, the balance must be paid in cash only.",
      "The gift card is not eligible for discounts like EDV, CRM offers, combos, or post-order guarantees.",
      "Once purchased, the card is non-refundable, non-cancellable, and cannot be exchanged for cash.",
      "Lost, expired, or misused cards won’t be replaced or refunded; revalidation is not allowed.",
      "Domino’s and Jubilant Foodworks are not liable for stolen, damaged, or unauthorized use of cards.",
      "The balance can be checked at: dominos.co.in/gift-vouchers/balance-enquiry.",
      "JFL reserves the right to change terms or discontinue issuance/redemption without notice. For help, visit gvhelpdesk.com.",
    ],
    occasionsTitle: "Domino's Gift Cards for Different Occasions",
    occasionsDesc:
      "Domino's Gift Cards can easily make up for a great gift for any occasion be it a birthday, anniversary, or any festival. A Domino's Gift Card is always a thoughtful way to make the recipient smile.",
    festivals:
      "Festivals always call for something special — Domino’s Gift Cards are definitely a good idea. They serve as a convenient present for enjoying cheesy pizzas during get-togethers like Diwali, Christmas, and more.",
    anniversary:
      "Express your love and togetherness with a Domino's Gift Card which enables the couple to enjoy their preferred dish. Be it an intimate dinner or a pizza date, the gift card enhances their anniversary experience.",
    birthdays:
      "A Domino's Gift Card is truly a foodie’s delight on their birthday. It’s the perfect way to let them order any pizzas, sides, or desserts they want and make their day memorable.",
  },
  mamaearth: {
    name: "Mamaearth Gift Card",
    urlName: "mamaearth",
    brandName: "Mamaearth",
    category: "health-and-wellness",
    discount: 11, // Up to 11% off
    backgroundImg: "hehe",
    descriptionTitle: "Mamaearth Gift Card",
    description:
      "For someone who prefers all things natural, the Mamaearth E-Gift Card is the perfect gift. It offers access to a wide range of skincare, haircare, and makeup products made with natural ingredients. Completely toxin-free and safe, these products are designed to nourish and protect, giving you the best of nature at a great price.",
    aboutCompany:
      "Mamaearth is a homegrown Indian brand known for its natural, toxin-free personal care and beauty products. Crafted with botanical extracts and nourishing oils, their range is free from harmful chemicals like sulfates and parabens. From skincare and haircare to body care and baby care, Mamaearth combines effective formulas with a strong commitment to sustainability and eco-friendly packaging.",
    calculatorTitle: "Best Mamaearth Gift Cards",
    calculatorDescription:
      "Best Mamaearth Gift Cards make a thoughtful gift for anyone who values clean beauty and natural care. Whether it’s for skincare, haircare, body care, or baby essentials, these gift cards offer the freedom to choose from a wide range of toxin-free, eco-conscious products.",
    howToBuyTitle: "How to Buy a Mamaearth Gift Card",
    howToRedeemTitle: "How to Use or Redeem Mamaearth Gift Card",
    howToRedeemDesc:
      "Mamaearth Gift Voucher can be redeemed using the following steps:",
    howToRedeemSteps: [
      "Visit Mamaearth",
      "Browse and add your desired products to the cart",
      "Add your voucher to the e-Pay balance or enter the voucher details manually at checkout",
    ],
    checkBalanceTitle: "How to Check Mamaearth Gift Card Balance",
    checkBalanceDesc:
      "Mamaearth Gift Cards' balance can be checked using the following steps:",
    checkBalanceSteps: [
      "Log in to your Mamaearth account on the website or app",
      "Go to the profile section",
      "Navigate to transaction history or gift card details",
      "View available gift card balance and usage history",
    ],
    termsAndConditionsTitle: "Terms and Conditions for Mamaearth Gift Card",
    termsAndConditionSteps: [
      "Valid only on www.mamaearth.in. Not refundable or returnable once issued.",
      "The person holding the GV/e-Pay is considered the beneficiary.",
      "Gift Vouchers can be converted into e-Pay balance as per user preference.",
      "Multiple GVs can be combined and added to e-Pay, but no additional offers can be applied during redemption.",
      "Only valid and unexpired Mamaearth GVs/e-Pay balances will be accepted, at Mamaearth’s sole discretion.",
      "e-Pay must be linked to a registered mobile number.",
      "Cannot be transferred to another e-Pay account, or exchanged for cash or Mama Cash.",
      "Redeemable only for eligible products/services on the Mamaearth website. Not valid at offline stores.",
      "Once expired, GV/e-Pay cannot be revalidated or extended.",
      "e-Pay balance retains the validity of the original GV from which it was converted.",
      "Mamaearth, GyFTR, or affiliates are not liable for unauthorized usage due to shared voucher or account details.",
      "Cannot be redeemed on blackout dates. Mamaearth may update these dates without notice.",
      "In case of technical issues, blocked GV/e-Pay will be reactivated within 72 hours.",
      "Any disputes must be addressed with the issuing company; their decision will be final.",
      "Mamaearth/GyFTR may suspend or cancel GV/e-Pay if misuse or fraud is detected.",
      "Terms and conditions are subject to change without prior notice.",
      "For assistance, please visit gvhelpdesk.com.",
    ],
    occasionsTitle: "Mamaearth Gift Cards for Different Occasions",
    occasionsDesc:
      "Mamaearth Gift Cards are easily the best gift; whether it’s a birthday, anniversary, festival, or a simple gesture like thank you. A Mamaearth Gift Card is always a thoughtful way to show that you care.",
    festivals:
      "The recipient of the Mamaearth gift card will thank you for making the festive season better for them. Whether it’s Diwali, Christmas, or Eid — healthy skincare always makes a thoughtful present.",
    anniversary:
      "The perfect anniversary gift for a couple who loves skincare and all things natural. A Mamaearth Gift Voucher is something they will appreciate on their special occasion.",
    birthdays:
      "What better than gifting a Mamaearth Gift Card to a skincare lover? Get them this exclusive Mamaearth E-Gift Card and make their day memorable.",
  },
  apollo: {
    name: "Apollo Pharmacy E-Healing Gift Card",
    urlName: "apollo",
    brandName: "Apollo Pharmacy",
    category: "health-and-wellness",
    discount: 10, // Up to 10% off
    backgroundImg: "hehe",
    descriptionTitle: "Apollo Pharmacy E-Healing Gift Card",
    description:
      "The Apollo Pharmacy E-Healing Gift Card is a thoughtful and practical gift for health-conscious individuals. Redeemable exclusively at Apollo Pharmacy retail outlets, this card allows recipients to purchase a wide range of prescribed medicines and pharma essentials with ease. Whether you're supporting a loved one's recovery or promoting everyday wellness, the E-Healing Gift Card offers a seamless, cashless experience at India’s trusted pharmacy chain.",
    aboutCompany:
      "Apollo Pharmacy is India’s largest and most trusted pharmacy retail chain, with over 5,000 outlets across the country. Backed by the renowned Apollo Hospitals Group, it offers genuine medicines, wellness products, and healthcare essentials. Known for its customer-first approach, expert pharmacists, and 24x7 service in select cities, Apollo Pharmacy ensures safe and reliable access to healthcare anytime, anywhere.",
    calculatorTitle: "Best Apollo Pharmacy Gift Cards",
    calculatorDescription:
      "Best Apollo Pharmacy Gift Cards are perfect for anyone who values health and wellness. Whether it's the E-Healing Gift Card for prescribed medicines or general-purpose pharmacy gift cards, these cards offer flexibility, ease of use, and access to genuine products across Apollo Pharmacy’s network.",
    howToBuyTitle: "How to Buy an Apollo Pharmacy Gift Card",
    howToRedeemTitle: "How to Use or Redeem an Apollo Pharmacy E-Gift Card",
    howToRedeemDesc:
      "Apollo Gift Voucher can be redeemed using the following steps:",
    howToRedeemSteps: [
      "Visit any Apollo Pharmacy retail outlet to redeem the E-Healing Gift Card",
      "Share the 16-digit Card Number and PIN with the cashier at the time of billing",
      "Request the cashier to use Billing Code 5000 (Healing Card) for redemption",
      "For any issues during redemption, contact Apollo Pharmacy Customer Care at 1860 500 0101",
    ],
    checkBalanceTitle: "How to Check Apollo Pharmacy E-Gift Card Balance",
    checkBalanceDesc:
      "The Apollo Pharmacy Gift Cards' balance can be checked using the following steps:",
    checkBalanceSteps: [
      "Open the Apollo Pharmacy app and log in to your account",
      "Navigate to the ‘Apollo Credit’ section in your profile",
      "Tap on ‘Add Gift Card’",
      "Enter the Gift Card Number and PIN, then select ‘Check Balance’",
    ],
    termsAndConditionsTitle:
      "Terms and Conditions for Apollo Pharmacy E-Gift Card",
    termsAndConditionSteps: [
      "This Gift Card is valid only at Apollo Pharmacy retail outlets. Not applicable on the Apollo 24/7 app/website, the Apollo Pharmacy website, or hospital-based pharmacies.",
      "A maximum of 2 E-Healing Cards can be redeemed per day at participating outlets.",
      "The cardholder is considered the sole beneficiary. The validity is as determined by the issuer.",
      "Apollo Pharmacy is not liable for lost, stolen, or misused cards.",
      "To redeem, ask the cashier to use Billing Code 6619 and enter the 16-digit Card Number and PIN. For help, call 1860 500 0101.",
      "Redemption issues should be directed to Apollo Customer Care. For other concerns, contact the issuer mentioned on the card/voucher.",
      "This is a one-time use card with a fixed validity. It cannot be reused, extended, or refunded. Any unused balance will lapse.",
      "The card can be used only for Pharma/Medicines. Not valid on FMCG, DPCO, Surgical items, Apollo brands, doctor consultations, lab tests, or health checks.",
      "No offers, health credits, or clubbing with wallets/cards apply. Any excess amount must be paid in cash. No returns/exchanges on billed items.",
    ],
    occasionsTitle: "Apollo Pharmacy Gift Cards for Different Occasions",
    occasionsDesc:
      "Apollo Gift Cards are easily the best gifts for friends, family, and loved ones. You can gift them a choice with Apollo Gift Cards. Whether it’s a birthday, anniversary, festival, or a simple gesture like thank you, an Apollo Gift Card is always a thoughtful gift.",
    festivals:
      "The recipient of the Apollo gift card will thank you for making the festive season better for them.",
    anniversary:
      "An Apollo Gift Voucher is something they will appreciate for being thoughtful and considerate.",
    birthdays:
      "An Apollo Gift Card is something they will appreciate on their special day.",
  },

  cultfit: {
    name: "Cultfit Gift Card",
    urlName: "cultfit",
    brandName: "Cultfit",
    category: "health-and-wellness",
    discount: 8,
    backgroundImg: "hehe",
    descriptionTitle: "Cultfit Gift Card",
    description:
      "Looking for the perfect gift for a fitness lover? The Cultfit Gift Card is your one-stop solution to inspire healthy living and active lifestyles. Whether it’s for a friend, colleague, or yourself, this all-in-one gift unlocks a world of wellness experiences.",
    aboutCompany:
      "One of India’s leading health and wellness platforms, Cultfit offers a holistic approach to fitness through group workouts, personal training, yoga, meditation, and healthy meals. Cultfit combines digital convenience with offline experiences across its fitness centers in major cities. With its app and website, users can access on-demand workouts, book classes, track progress, and shop for fitness gear.",
    calculatorTitle: "Best Cultfit Gift Cards",
    calculatorDescription:
      "Cultfit Gift Cards can easily be the best gift for a fitness freak. Someone who loves fitness, comfort, and health will surely appreciate this thoughtful gift. It offers them the freedom to choose from workouts, wellness services, or premium fitness gear all in one place.",
    howToBuyTitle: "How to Buy a Cultfit Gift Card",
    howToRedeemTitle: "How to Use or Redeem Cultfit Gift Card",
    howToRedeemDesc:
      "Cultfit Gift Voucher can be redeemed using the following steps on its website and app.",
    howToRedeemSteps: [
      "Visit the Cultfit website or app and browse the listed merchandise",
      "Add your favorite products to the cart and proceed to checkout",
      "Enter your voucher code at the payment page to redeem the offer",
    ],
    checkBalanceTitle: "How to Check Cultfit Gift Card Balance",
    checkBalanceDesc:
      "Cultfit Gift Card balance can be checked using the following steps:",
    checkBalanceSteps: [
      "Log in to your Cultfit account on the website or app",
      "Go to the profile section",
      "Navigate to the gift card section and enter details",
      "View available gift card balance and usage history",
    ],
    termsAndConditionsTitle: "Terms and Conditions for Cultfit Gift Card",
    termsAndConditionSteps: [
      "Cult Gift Cards are issued by Pine Labs (under Qwikcilver) and governed by Indian laws. By purchasing, you agree to share personal details (name, email, phone) with the issuer.",
      "Redeemable on Cult Fit and Cult Sport platforms for services, fitness products, or any offerings.",
      "On redemption, the card balance is added to your Cult wallet and can be used for multiple purchases until exhausted or expired.",
      "Cards can be bought from ₹1 to ₹10,000 and are valid for 1 year. Revalidation may be requested post-expiry.",
      "Not redeemable for cash. No refunds for unused balance. No returns or cancellations.",
      "You’re responsible for safeguarding the card. Cult.fit isn’t liable for misuse. Fraudulent usage may lead to account suspension or cancellation.",
      "Subject to Cult.fit/Cult.sport’s terms, which may change without notice. Cult reserves the right to suspend or cancel the program at any time.",
      "No interest on balances. No guarantee of uninterrupted platform access. If the card is non-functional, a replacement may be issued.",
      "For help, contact Pine Labs at 080 6980 6393 or visit www.qwikcilver.com. Check grievance policy for disputes or unauthorized use.",
      "E-Gift Cards are usually delivered instantly, but may take up to 24 hours. To use the card, you must add it to your Cult.fit account.",
    ],
    occasionsTitle: "Cultfit Gift Cards for Different Occasions",
    occasionsDesc:
      "Cultfit Gift Cards are easily every fitness lover’s dream. Give your friends, family, and loved ones the gift of choice with Cultfit Gift Cards. Whether it’s a birthday, anniversary, festival, or a simple gesture like thank you, a Cultfit Gift Card is always a thoughtful way to make them smile.",
    festivals:
      "The recipient of the Cultfit gift card will thank you for making the festive season better for them.",
    anniversary:
      "The perfect anniversary gift for a couple who loves fitness. Cultfit Gift Voucher is something they will appreciate on their special occasion.",
    birthdays:
      "What better than gifting a Cultfit Gift Card to a fitness enthusiast? Get them this exclusive Cultfit E-Gift Card and make their day memorable.",
  },
  myglamm: {
    name: "MyGlamm Gift Card",
    urlName: "myglamm",
    brandName: "MyGlamm",
    category: "health-and-wellness",
    discount: 16,
    backgroundImg: "hehe",
    descriptionTitle: "MyGlamm Gift Card",
    description:
      "MyGlamm Gift Card is the perfect way to treat someone to a world of beauty and self-care. It offers access to a wide range of makeup, skincare, and personal care products. Valid for 1 year from the date of issue, the card can be combined with promotional offers and other prepaid payment options. Whether it's a birthday, celebration, or just a thoughtful surprise, the MyGlamm Gift Card makes beauty gifting effortless, flexible, and stylish.",
    aboutCompany:
      "A pioneering beauty and personal care brand, MyGlamm has quickly become India’s fastest-growing direct-to-consumer (D2C) beauty brand, offering over 800 cruelty‑free, skin‑friendly SKUs in makeup, skincare, and personal care.",
    calculatorTitle: "Best MyGlamm Gift Cards",
    calculatorDescription:
      "MyGlamm Gift Cards offer versatile gifting in flexible denominations, making them ideal for personal treats or thoughtful presents. Each card is valid for one year from the date of activation, and you can use up to five cards per order for greater flexibility. Whether you’re planning to indulge or surprise, Best MyGlamm Gift Cards provide convenient, no-fuss access to their full range of beauty and personal care products online or via the mobile apps.",
    howToBuyTitle: "How to Buy a MyGlamm Gift Card",
    howToRedeemTitle: "How to Use or Redeem MyGlamm Gift Card",
    howToRedeemDesc:
      "MyGlamm Gift Voucher can be redeemed using the following steps:",
    howToRedeemSteps: [
      "Visit www.myglamm.com or open the MyGlamm app on Android/iOS",
      "Add your favourite products to the cart and proceed to checkout",
      "Select Gift Card as the payment method",
      "Enter the Card Number and PIN to apply the balance",
      "If the order value exceeds the gift card amount, pay the remaining balance using a prepaid payment option (COD not allowed)",
    ],
    checkBalanceTitle: "How to Check MyGlamm Gift Card Balance",
    checkBalanceDesc:
      "MyGlamm Gift Card balance can be checked using the following steps:",
    checkBalanceSteps: [
      "Log in to your MyGlamm account on the website or app",
      "Go to the gifts section",
      "Enter the gift card details",
      "View available gift card balance and usage history",
    ],
    termsAndConditionsTitle: "Terms and Conditions for MyGlamm Gift Card",
    termsAndConditionSteps: [
      "MyGlamm Gift Card can be used on www.myglamm.com, Android & iOS apps; up to 5 gift cards can be used in one order.",
      "It can be combined with promo codes and prepaid payment options.",
      "The gift card is valid for 1 year from the date of issue.",
      "If the order value is less, the remaining balance stays on the same card; if more, the difference must be paid using prepaid options (COD not allowed).",
      "Once issued, gift cards cannot be cancelled, refunded, returned, or transferred to another email/mobile number.",
      "MyGlamm gift card cannot be redeemed for cash, credit, or used to purchase other gift cards.",
      "Expired MyGlamm gift vouchers may be revalidated on request, subject to verification and terms.",
      "The user is solely responsible for safeguarding the e-gift card code; MyGlamm is not liable for unauthorized use.",
      "Fraudulently obtained cards may be canceled. If a card is non-functional, a replacement card of equal value may be issued.",
      "MyGlamm cards are typically delivered instantly, but may take up to 24 hours. For issues, contact hello@myglamm.com or call 022-48913663.",
    ],
    occasionsTitle: "MyGlamm Gift Cards for Different Occasions",
    occasionsDesc:
      "MyGlamm Gift Cards make up for a great gifting option on multiple occasions. Whether it’s a birthday, anniversary, festival, or a simple gesture like thank you, a MyGlamm Gift Card is always a thoughtful gift.",
    festivals:
      "The recipient of the MyGlamm gift card will thank you for making the festive season better for them.",
    anniversary:
      "MyGlamm Gift Voucher is something the couple will appreciate on their special occasion.",
    birthdays:
      "Get this exclusive MyGlamm E-Gift Card and make their special day memorable.",
  },
  healthkart: {
    name: "HealthKart Gift Card",
    urlName: "healthkart",
    brandName: "HealthKart",
    category: "health-and-wellness",
    discount: 10,
    backgroundImg: "hehe",
    descriptionTitle: "HealthKart Gift Card",
    description:
      "A HealthKart Gift Card lets your loved ones choose what they need to stay fit and feel great. Whether it’s for a birthday, milestone, or just a thoughtful surprise, this gift card puts wellness in their hands.",
    aboutCompany:
      "India’s leading online platform for health and nutrition products, HealthKart, is trusted by millions for genuine supplements, fitness essentials, and personal wellness solutions. HealthKart offers a wide range of proteins, vitamins, Ayurvedic remedies, and wellness products, all delivered with authenticity and expert guidance. Whether you're a fitness enthusiast or just starting your wellness journey, HealthKart is your one-stop shop for healthier living.",
    calculatorTitle: "Best HealthKart Gift Cards",
    calculatorDescription:
      "HealthKart Gift Cards are truly a gift for your loved one's health and wellness. The best HealthKart Gift Cards give discounts while delivering healthcare essentials at your doorstep.",
    howToBuyTitle: "How to Buy a HealthKart Gift Card",
    howToRedeemTitle: "How to Use or Redeem HealthKart Gift Card",
    howToRedeemDesc:
      "HealthKart Gift Voucher can be redeemed using the following steps:",
    howToRedeemSteps: [
      "Visit www.healthkart.com and log in to your account",
      "Click on your profile icon and go to HK Cash",
      "Under “Avail HK Cash through Gift Card”, enter your Gift Card number to add balance",
      "Add your selected products to the cart",
      "Choose HK Cash as the payment option during checkout",
    ],
    checkBalanceTitle: "How to Check HealthKart Gift Card Balance",
    checkBalanceDesc:
      "HealthKart Gift Cards balance can be checked using the following steps:",
    checkBalanceSteps: [
      "Log in to your HealthKart account on the website or app",
      "Go to the profile section",
      "Navigate to transaction history or gift card details",
      "View available gift card balance and usage history",
    ],
    termsAndConditionsTitle: "Terms and Conditions for HealthKart Gift Card",
    termsAndConditionSteps: [
      "HealthKart Gift Voucher can only be redeemed on HealthKart.com or the HealthKart app.",
      "The holder of the Gift Voucher code is considered the rightful beneficiary.",
      "Multiple vouchers can be used in a single transaction by adding them as HK Cash to your account.",
      "Each Gift Voucher is for one-time use only.",
      "No refund or credit note will be issued for any unused HK Cash balance.",
      "Expired vouchers cannot be revalidated.",
      "Vouchers can be applied during sales or promotional periods.",
      "If the order exceeds the voucher value, the remaining amount must be paid using another payment method.",
      "Any disputes must be addressed to the issuing company; their decision will be final.",
      "While HealthKart strives to accept all valid vouchers, technical issues may sometimes prevent redemption.",
      "For any assistance, raise a request at www.gvhelpdesk.com.",
    ],
    occasionsTitle: "HealthKart Gift Cards for Different Occasions",
    occasionsDesc:
      "Give your friends, family, and loved ones the gift of good health with HealthKart Gift Cards. Whether it’s a birthday, anniversary, or any festival, a HealthKart Gift Card is always a thoughtful gift to show that you care.",
    festivals:
      "The recipient of the HealthKart gift card will thank you for making the festive season better for them.",
    anniversary:
      "The perfect anniversary gift for a couple who prioritizes their health. HealthKart Gift Voucher is something they will appreciate on their special occasion.",
    birthdays:
      "There’s nothing better than gifting health and wellness on birthdays with a HealthKart Gift Card. Just go for it.",
  },
}

export default VoucherData
