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

const VoucherData: Record<string, Voucher> = {
  PC272920797HGB6I: {
    voucherId: "PC272920797HGB6I",
    name: "Nykaa Fashion E-Gift Card",
    brandName: "Nykaa",
    category: "e-commerce",
    discount: 7,
    description:
      "The best way to pamper someone who loves fashion, beauty, and self-care is with a Nykaa Fashion E-Gift Card. The recipient can explore a wide range of products across fashion apparel, accessories, beauty products, personal care items, and even homeware. This Gift Card is the perfect gift for someone who likes their fashion game strong!",
    aboutCompany:
      "A one-stop online fashion and lifestyle platform tailored for the Indian market. With a curated selection of fashion and lifestyle products along with a convenient online shopping experience, Nykaa has become the talk of the town within no time.",
    backgroundImg: "PC272920797HGB6I.png",
    howToRedeem: [
      "1. This E-Gift Card can be redeemed both online and offline",
      "2. For online redemption, visit Nykaa, Nykaa Man, Nykaa Fashion",
      "3.Add the Gift Card amount to the payment page",
      "4.Use it to pay for the item purchased",
      "5.For offline redemption, visit any Nykka retail store",
      "6. Present the 16-digit code and PIN during billing",
      "7. Use the Gift Card amount to pay for the purchase",
    ],
  },
  PC20013745371T7J: {
    voucherId: "PC20013745371T7J",
    name: "Myntra E-Gift Card",
    brandName: "Myntra",
    category: "e-commerce",
    discount: 6,
    description:
      "The Myntra E-Gift Card is perfect for all occasions like birthdays, weddings, anniversaries, and festivities. Use it for yourself or gift it to your special ones for shopping across multiple categories and brands. This E-Gift Card provides access to everything from beauty, apparel, home & kitchen, and clothing categories.",
    aboutCompany:
      "An eCommerce giant, Myntra offers a vast selection of clothing, footwear, accessories, and homeware for men, women, and kids. They cater to beauty and lifestyle needs from different brands. A popular choice for online fashion shopping, Myntra has a diverse product range and focuses on established and latest brands.",
    backgroundImg: "PC20013745371T7J.png",
    howToRedeem: [
      "1. Visit www.myntra.com or download the Myntra app to redeem the Gift Card",
      "2. Applicable on selected items, this Gift Card has to be added to the Myntra wallet",
      "3.Select the items to be purchased and use the wallet amount to make the payment",
    ],
  },
  PC033846095QLM6I: {
    voucherId: "PC033846095QLM6I",
    name: "Nykaa E-Gift Card",
    brandName: "Nykaa",
    category: "e-commerce",
    discount: 5.5,
    description:
      "If you know someone who loves all things fashion, this E-Gift Card belongs to them. The recipient can access various products across fashion apparel, accessories, beauty products, personal care items, and homeware. This E-Gift Card is an ideal gift for a fashion enthusiast.",
    aboutCompany:
      "A premier online beauty destination in India, Nykaa offers a comprehensive selection of branded products for men and women at the best price. Nykaa makes shopping for your favourite beauty products much easier and convenient.",
    backgroundImg: "PC033846095QLM6I.png",
    howToRedeem: [
      "1. This E-Gift Card can be redeemed both online and offline",
      "2. For online redemption, visit Nykaa, Nykaaman, Nykaafashion",
      "3. Add the Gift Card amount to the payment page",
      "4. Use it to pay for the item purchased",
      "5. For offline redemption, visit any Nykka retail store",
      "6. Present the 16-digit code and PIN during billing",
      "7.Use the Gift Card amount to pay for the purchase",
    ],
  },
  PC974927165CGD4J: {
    voucherId: "PC974927165CGD4J",
    name: "Tata CliQ E-Gift Card",
    brandName: "Tata CliQ",
    category: "e-commerce",
    discount: 4,
    description:
      "Access a diverse range of fashion, lifestyle, and homeware products with this E-Gift Card from Tata CliQ. Available in multiple denominations, this Gift Card is easy to buy, deliver and redeem. The recipient can enjoy shopping for the product of their choice from their exclusive curated selection.",
    aboutCompany:
      "Everything at Tata CliQ is hand-picked and 100% authentic – sourced straight from the best brands and their authorized resellers from India and across the world, just for you. One of the fastest-growing, e-commerce brands in the country, Tata CliQ gives you a seamless online shopping experience. Immerse yourself in the joy of browsing through the best Indian and International brands in fashion, luxury, electronics, and jewellery.",
    backgroundImg: "PC974927165CGD4J.png",
    howToRedeem: [
      "1. Visit www.tatacliq.com to redeem E-Gift Card on eligible products",
      "2. Login to your Tata CliQ account",
      "3. Select the CliQ Cash option",
      "4. Enter the Gift Card Number and PIN",
      "5. Add the card amount to your Tata CliQ wallet",
      "6. Make a purchase and pay using the wallet amount",
      "7. Pay the remaining amount, if any using a credit card, net banking, or debit card",
    ],
  },
  PC156384302G3B1F: {
    voucherId: "PC156384302G3B1F",
    name: "Tata CliQ Luxury E-Gift Card",
    brandName: "Tata CliQ",
    category: "e-commerce",
    discount: 4,
    description:
      "Spoil your favorite person with this luxury E-Gift Card from Tata CliQ. This card gives access to premium fashion, beauty, and lifestyle products on Tata CliQ Luxury. Buy this card online and get it delivered instantly to the recipient.",
    aboutCompany:
      "Everything at Tata CliQ is hand-picked and 100% authentic – sourced straight from the best brands and their authorized resellers from India and across the world, just for you. One of the fastest-growing, e-commerce brands in the country, Tata CliQ gives you a seamless online shopping experience. Immerse yourself in the joy of browsing through the best Indian and International brands in fashion, luxury, electronics, and jewellery.",
    backgroundImg: "PC156384302G3B1F.png",
    howToRedeem: [
      "1. Visit www.tatacliq.com and login",
      "2. Select the CliQ Cash option",
      "3. Enter the Gift Card Number and PIN",
      "4. The amount will be added to the Tata CliQ wallet",
      "5. Make a purchase using the wallet amount",
      "6. Please note, this Gift Card can only be redeemed on certain eligible products",
    ],
  },
  PC855976612CPXXD: {
    voucherId: "PC855976612CPXXD",
    name: "AJIO Gift Card",
    brandName: "AJIO",
    category: "e-commerce",
    discount: 1.25,
    description:
      "A perfect gift for all occasions like birthdays, weddings, anniversaries, and festivities, the AJIO E-Gift Card is available in multiple denominations. This gift card can be personalized with a message or a greeting. Use it for yourself or gift it to your special ones for shopping across multiple categories and brands. Get everything on one platform for men, women, and kids across beauty, apparel, home & kitchen, and clothing categories.",
    aboutCompany:
      "A Style Treat For Everyone! Welcome to AJIO - India's favorite online shopping destination. Indulge in the world of fashion with the best of global brands, home-grown labels, and the trendiest international styles, with just a click. From a vast collection of looks, brands, home décor, and accessories, AJIO has something for everyone. Treat your loved ones with the finest of fashion and lifestyle from our selection of premium international brands. Be it a birthday or an anniversary AJIO's E-Gift Card will help ensure big smiles and happy hearts, with a seamless online shopping experience.",
    backgroundImg: "PC855976612CPXXD.png",
    howToRedeem: [
      "1.Visit https://www.ajio.com/ to redeem the E-Gift Card",
      "2.Add the E-Gift Card value into the AJIO wallet as AJIO cash",
      "3.Buy the products of your choice and pay using cash during checkout",
      "4.If the cart value exceeds the AJIO cash, pay the balance amount with the available prepaid payment modes",
    ],
  },
  PC977733912CJIW7: {
    voucherId: "PC977733912CJIW7",
    name: "109F E-Gift Card",
    brandName: "109F",
    category: "apparels",
    discount: 13,
    description:
      "A gift card for a woman who knows her style and does not hesitate to experiment with new-age trends and fashion. This can be your go-to gift for someone bold, carefree, and lives on her terms. Redefine fashion with the latest designs without compromising on quality, style and comfort.",
    aboutCompany:
      "109°F is the urban woman's cult western-wear fashion brand. Explore the latest trends in lifestyle and shop for women's western wear. This new-age fashion brand brings finely crafted designs for the urban Indian woman who is aware of International Fashion Trends and is confident of making her statement in any situation.",
    backgroundImg: "PC977733912CJIW7.png",
    howToRedeem: [
      "1. Visit www.109f.com",
      "2. Select the desired product and proceed to checkout",
      "3. Choose Gift Card as payment mode and enter the card number and PIN",
      "4. If there is any balance amount pay it using other available payment modes",
      "5. You will receive a confirmation on order processing",
    ],
  },
  PC676551930WQQZN: {
    voucherId: "PC676551930WQQZN",
    name: "Max(Online) E-Gift Card",
    brandName: "Max(Online)",
    category: "apparels",
    discount: 11,
    description:
      "This gift card with an exclusive discount can be used to purchase everything from clothes to accessories and footwear for kids, men, and women. It is an impressive gift for someone who likes shopping and looking for quality at affordable prices. Consider this E-Gift Card as a great option for birthdays, anniversaries, and other special occasions.",
    aboutCompany:
      "With stores in over 200 cities in the country, Max Fashion boasts of a convenient shopping experience where customers can choose from a variety of 17000+ styles. They believe fashion is for everyone from the Gen Z shopper looking for cutting-edge global fashion to everyone in the family seeking quality essentials, Max Fashion has it all. Max Fashion offers apparel, footwear & accessories to match every occasion, event, and pocket for Men, Women & Kids.",
    backgroundImg: "PC676551930WQQZN.png",
    howToRedeem: [
      "1. Visit maxfashion.com or download the app",
      "2. Select the merchandise you are willing to purchase",
      "3. Go to the cart",
      "4. Select Gift Card as payment mode",
      "5. Enter 16 digit code and PIN",
      "6. Any balance amount to be paid by debit/credit card",
    ],
  },
  PC802928170X7UE7: {
    voucherId: "PC802928170X7UE7",
    name: "JACK & JONES E-Gift Card",
    brandName: "JACK & JONES",
    category: "apparels",
    discount: 11,
    description:
      "For all the fashion lovers out there, this E-Gift Card is meant for you! It allows the recipient to pick anything of their choice from the JACK & JONES collection. Available in multiple denominations, this E-Gift Card can be your last-minute gift for someone particular about their sense of style. You can mail it instantly and surprise the recipient with a wide clothing range available at JACK & JONES.",
    aboutCompany:
      "The ultimate destination for men's clothing and shoes, JACK & JONES keeps up with the latest men's fashion trends. With a mission to provide you guys with the coolest clothes for every occasion, they have streetwear staples to classic essentials. They have styles that keep you looking fresh and on point for all age groups and sizes. JACK & JONES caters to the modern, cosmopolitan man seeking a versatile and stylish look.",
    backgroundImg: "PC802928170X7UE7.png",
    howToRedeem: [
      "1. Walk into your nearest JACK and JONES outlet",
      "2. Present the E-Gift Card at the store and confirm its applicability",
      "3. Make a purchase and pay using the Gift Card",
    ],
  },
  PC782550452IQCV8: {
    voucherId: "PC782550452IQCV8",
    name: "Westside E-Gift Card",
    brandName: "Westside",
    category: "apparels",
    discount: 10,
    description:
      "This Gift Card is every shopping lover's dream. For those who are always on the lookout for new and chic clothes, the Westside E-Gift Card is a perfect pick. You can find everything under the same roof from clothing to home decor and beauty products at any Westside store. Use this Gift Card to get yourself your favourite thing.",
    aboutCompany:
      "Westside, part of the Tata group, is a popular modern retail outlet offering trendy fashion apparel, footwear, and accessories for men, women, and kids. They also stock homeware, beauty products, and toys. Known for its dynamic collection and reasonable prices, Westside caters to a young, fashion-conscious audience seeking a one-stop shopping destination.",
    backgroundImg: "PC782550452IQCV8.png",
    howToRedeem: [
      "1. Visit the nearest Westside outlet to redeem this E-Gift Card. Find the nearest store here",
      "2. Confirm the acceptance of the Gift Card at the store before making any purchase",
      "3.Add the products you want to buy to the cart",
      "4. Present your Gift Card details to the cashier during billing & pay any balance amount by cash or card",
    ],
  },
  PC1940310122W3V7: {
    voucherId: "PC1940310122W3V7",
    name: "Shoppers Stop E-Gift Card",
    brandName: "Shoppers Stop",
    category: "apparels",
    discount: 10,
    description:
      "Shop till you drop with this E-Gift Card! This is no cliché as this Gift Card gives access to a wide range of products at Shoppers Stop stores. It happens to be a perfect gift for someone who likes to keep up with the latest trends in fashion, homeware, and beauty. It can be purchased in multiple denominations and can be sent to the recipient instantly.",
    aboutCompany:
      "Shoppers Stop is a multi-brand retail extravaganza that fits anyone's personality. Renowned for its focus on fashion and commitment to providing a good shopping experience, it offers a variety of services. You can get everything under one roof from clothing to accessories, beauty products, and homeware. It can easily become your go-to place for shopping.",
    backgroundImg: "PC1940310122W3V7.png",
    howToRedeem: [
      "1. Visit the nearest Shoppers Stop outlet",
      "2. Confirm the acceptance of the Gift Card at the store",
      "3. Select the product you want to buy",
      "4. Present the E-Gift Card details to the cashier during billing",
      "5. Pay using the E-Gift Card at the store",
      "6. If there is any balance remaining, pay it using cash or a card",
    ],
  },
  PC698625467AYGL0: {
    voucherId: "PC698625467AYGL0",
    name: "KFC E-Gift Card",
    brandName: "KFC",
    category: "food-and-beverages",
    discount: 6,
    description:
      "This finger-licking good E-Gift Card is every chicken lover's dream come true. Give this to your friends and family who feel famished for chicken and are always excited to hop on to it. Believe us, they will remember you for life!",
    aboutCompany:
      "A global name in the fried chicken industry, KFC is every non-vegetarian's paradise. A renowned fast-food choice, its signature fried chicken with the Colonel's secret herbs and spices, alongside burgers, wraps, and local favorites with an Indian twist attracts many visitors daily.",
    backgroundImg: "PC698625467AYGL0.png",
    howToRedeem: [
      "1. This E-Gift Card can be redeemed both online and offline",
      "2.For online redemption, visit online.kfc.co.in",
      "3. Select your preferred food item",
      "4. Make payment using the E-Gift Card during the checkout",
      "5. For offline redemption, visit your nearby KFC outlet to redeem the E-Gift Card",
      "6. Confirm the Gift Card's applicability at the outlet",
      "7. Produce your Gift Card details during billing",
      "8. Use it to make the payment for the item purchased",
    ],
  },
  PC532779359SCEX6: {
    voucherId: "PC532779359SCEX6",
    name: "McDonald's Club Gift Voucher",
    brandName: "McDonald's",
    category: "food-and-beverages",
    discount: 13,
    description:
      "A digital voucher that allows the recipient to purchase food and beverages at participating McDonald's restaurants. This Value Club Gift Voucher is an amazing gift option for someone who is lovin' it.",
    aboutCompany:
      "A popular fast food chain, McDonald's is everyone's favorite. Their iconic burgers and fries are to die for. The attention it gets from all age groups makes its competitors envious. Their affordability, good quality food, and a reasonable price point make it stand out in the market.",
    backgroundImg: "PC532779359SCEX6.png",
    howToRedeem: [
      "1. Visit your nearest McDonald's store",
      "2. Confirm the applicability of this Gift Voucher",
      "3. Make the purchase and produce the Gift Voucher details during billing",
      "4. Pay for the item purchased using the Gift Voucher amount",
    ],
  },
  PC072491319U46GD: {
    voucherId: "PC072491319U46GD",
    name: "Pizza Hut E-Gift Card",
    brandName: "Pizza Hut",
    category: "food-and-beverages",
    discount: 8,
    description:
      "Treat your foodie friend to hot, cheesy, delicious pizzas from Pizza Hut with this E-Gift Card. An ideal gift for a pizza lover, this E-Gift Card gives access to signature pan pizzas, along with a delightful range of sides, beverages, and desserts.",
    aboutCompany:
      "A worldwide pizza restaurant chain, Pizza Hut offers a wide variety of pizzas, from classic styles like pepperoni and Margherita to specialty pizzas with unique toppings and regional flavors. Because of their convenient delivery and takeout options, it is a popular choice for enjoying pizza at home.",
    backgroundImg: "PC072491319U46GD.png",
    howToRedeem: [
      "1. This E-Gift Card can be redeemed both online and offline",
      "2. For online redemption, visit https://www.pizzahut.co.in/ or download the mobile app",
      "3. Apply the Gift Voucher details during the checkout process",
      "4. Pay for the item purchased using the Gift Card amount",
      "5. For offline redemption, visit the Pizza Hut outlet",
      "6. Present the E-Gift Card details and confirm the applicability",
      "7. Pay for the item purchased using the Gift Card amount",
    ],
  },
  PC41810865901M3H: {
    voucherId: "PC41810865901M3H",
    name: "Starbucks E-Gift Card",
    brandName: "Starbucks",
    category: "food-and-beverages",
    discount: 9,
    description:
      "We all know someone who is addicted to caffeine. Right? Isn't this the best gift they can get? This Starbucks E-Gift Card can make any coffee lover jump with joy. Give this Gift Card to your friends who cannot survive without coffee and see them cherish you forever.",
    aboutCompany:
      "A prominent player in the coffee industry, Starbucks offers a wide range of coffee drinks, light bites, and a premium experience. The Indian subsidiary of this American giant caters to Indian tastes and preferences along with its core offerings.",
    backgroundImg: "PC41810865901M3H.png",
    howToRedeem: [
      "1. Open the Starbucks India mobile application",
      "2. Go to the Add Card section",
      "3. Add the voucher details like code and PIN",
      "4. Use it to pay for the item ordered",
    ],
  },
  PC372405820GELTK: {
    voucherId: "PC372405820GELTK",
    name: "Swiggy Money E-Gift Card",
    brandName: "Swiggy",
    category: "food-and-beverages",
    discount: 5,
    description:
      "This digital gift voucher from Swiggy allows the recipient to purchase food items as per their preferred choice. Gift this to someone who loves exploring different cuisines. The recipient can use it across multiple restaurants listed on the Swiggy app. Available in multiple denominations, this E-Gift Card is an ideal gift for a food vlogger and enthusiast.",
    aboutCompany:
      "One of India's largest online food-ordering platforms, Swiggy needs no introduction. Order your favorite cuisines from restaurants online and get them delivered to your doorstep without any hassle. The platform offers food and essential items delivery services across multiple cities in the country.",
    backgroundImg: "PC372405820GELTK.png",
    howToRedeem: [
      "1. Open the Swiggy app and visit the Swiggy Money page",
      "2. Click on the Add Gift Card button at the bottom of the page",
      "3. Enter your 16-digit alphanumeric code and 6-digit PIN",
      "4. After code validation, the Gift Card amount will be added to Swiggy Money account",
      "5. Use the amount to pay for the product willing to order",
    ],
  },
  PC946708564DIAYO: {
    voucherId: "PC946708564DIAYO",
    name: "Zomato Gift Card",
    brandName: "Zomato",
    category: "food-and-beverages",
    discount: 6,
    description:
      "Treat your foodie friend with this Zomato Gift Card. Available in multiple denominations, the recipient can use it to purchase a variety of cuisines across different restaurants available on Zomato. Easy to redeem, this Gift Card allows you to fulfill your hunger pangs anytime and anywhere.",
    aboutCompany:
      "A leading online food delivery player in the market, Zomato has established a large delivery network across multiple locations. Emerging as a trusted brand, it provides food delivery to your preferred location with remarkable time limits.",
    backgroundImg: "PC946708564DIAYO.png",
    howToRedeem: [
      "1. Open the Zomato app",
      "2. Go to the Claim Gift Card section",
      "3. Enter the 16-digit card number and 6-digit PIN and tap on claim",
      "4. Pay using the Gift Card",
    ],
  },
  PC279528599CMINK: {
    voucherId: "PC279528599CMINK",
    name: "MyGlamm E-Gift Card",
    brandName: "MyGlamm",
    category: "health-and-wellness",
    discount: 16,
    description:
      "This exclusive Gift Card from MyGlamm gives you access to a wide range of products across different categories like home, makeup, hair care, skincare, bath & body, sanitizing care, and their curated collection. Get your hands on these vegan products and showcase your glam in full power wherever you go!",
    aboutCompany:
      "MyGlamm is an online makeup shopping store, that offers a wide range of international beauty products & cosmetics. They collaborate with global experts and makeup artists to bring exciting innovations in makeup to accomplish a focused goal – to make glamour effortless and accessible to all. Their research-driven and first-to-the-market beauty products are toxin-free, derma-tested and vegan. They consciously contribute to the planet's well-being by making cruelty-free products.",
    backgroundImg: "PC279528599CMINK.png",
    howToRedeem: [
      "1. Visit www.myglamm.com or download the MyGlamm Android or iOS app",
      "2. Select the product to be purchased and proceed to check out",
      "3. Enter the E-Gift card number and PIN in the 'Gift Card' option section",
      "4. The E-Gift card amount will be deducted from the amount to be paid",
      "5. Pay the remaining amount, if any with the available prepaid payment modes",
    ],
  },
  PC612840985SZK5Y: {
    voucherId: "PC612840985SZK5Y",
    name: "Healthians E-Gift Card",
    brandName: "Healthians",
    category: "health-and-wellness",
    discount: 58,
    description:
      "A perfect gift for someone who prioritizes their health, this E-Gift Card is available in multiple denominations. It can be redeemed against any check-up offered by Healthians. The recipient can use this E-Gift Card to pay for the check-up and experience a convenient sample collection from the comfort of their home. Give the gift of good health to your friends and family with this E-Gift Card.",
    aboutCompany:
      "Healthians is the fastest-growing and leading health service company, offering health tests at-home service in more than 250+ cities across India and counting. Equipped with state-of-the-art fully automated laboratories, the company has a huge network of 2100+ trained and highly skilled phlebotomists who specialize in taking blood samples for testing. Healthians has made it easy to book health check-ups from home and made the entire journey of customers right from health test booking to report delivery very simple and seamless. With its advanced tech-enabled quality control process, Healthians ensures that each of its customers gets accurate health test reports every time.",
    backgroundImg: "PC612840985SZK5Y.png",
    howToRedeem: [
      "1. Visit https://www.healthians.com/ or download the Healthians App",
      "2. Select the health test check-up package as needed",
      "3. Book it after providing the details required",
      "4.Choose Healthians E-Gift Card as your payment option",
      "5. Enter the 16-digit number and 6-digit PIN to redeem the E-Gift Card",
      "6. Confirm the booking and get the health tests done at home",
    ],
  },
  PC075280109BSKFI: {
    voucherId: "PC075280109BSKFI",
    name: "Himalaya E-Gift Card",
    brandName: "Himalaya",
    category: "health-and-wellness",
    discount: 6,
    description:
      "This E-Gift Card is the gift of natural wellness! Delivered instantly, this digital gift voucher allows your loved ones to choose their favorite products from Himalaya's range of natural beauty and health products. It can be redeemed offline from the outlet. A gift voucher from Himalaya speaks volumes to your gift recipient; it speaks of your care and thoughtfulness.",
    aboutCompany:
      "A leading global healthcare brand, Himalaya has introduced many iconic products that are being used in millions of homes around the globe. It is the most trusted herbal brand offering head-to-heel wellness solutions. Their commitment to cater to the specific needs of their customers through innovative health care and personal care products makes them remarkable.",
    backgroundImg: "PC075280109BSKFI.png", // You can insert the image URL here
    howToRedeem: [
      "1. Visit the nearby outlet and confirm about E-Gift Card acceptance",
      "2. Choose the products you would like to buy",
      "3. Present your Gift Card details to the cashier during billing",
      "4. Pay the balance amount by cash or card, if any",
    ],
  },
  PC499909568YMAR1: {
    voucherId: "PC499909568YMAR1",
    name: "Mamaearth E-Gift Card",
    brandName: "Mamaearth",
    category: "health-and-wellness",
    discount: 8,
    description:
      "For someone who likes things natural, this E-Gift Card from Mamaearth is the best gift. With this E-Gift Card get access to the products that enhance your skincare and haircare. You can also get makeup products made from natural ingredients. All of these products are toxin-free and safe. Get the best products for your skin care and hair care needs at a great price.",
    aboutCompany:
      "Mamaearth is an Indian brand that offers natural, toxin-free personal care and beauty products. Their products are made with ingredients like botanical extracts and oils, and free from harmful chemicals like sulfates and parabens. Mamaearth offers a wide range of products for skincare, hair care, body care, and baby care. The brand is known for its commitment to sustainability and its use of recycled packaging.",
    backgroundImg: "PC499909568YMAR1.png", // You can insert the image URL here
    howToRedeem: [
      "1. Visit https://mamaearth.in/ to redeem the Gift Card",
      "2. Select your desired products and add them to the cart",
      "3. Enter the Gift Card number & PIN on the payment page",
      "4. Checkout by making payment via the Gift Card",
    ],
  },
  PC0150611084TAMU: {
    voucherId: "PC0150611084TAMU",
    name: "The Body Shop E-Gift Card",
    brandName: "The Body Shop",
    category: "health-and-wellness",
    discount: 4,
    description:
      "This E-Gift Card is a saviour for your last-minute gift hunting. The perfect choice for a skincare enthusiast, this Gift Card is meant to make you happy. Get access to premium and natural products for your skin care and makeup at a great price. This gift card without any doubt is a steal deal. So, get your hands on it today and pamper your loved ones with the best gift.",
    aboutCompany:
      "The Body Shop is the world’s leading ethical beauty brand. Started in Brighton, England in 1976, the company champions natural beauty products. Known for its brightly coloured stores and recycled packaging, it offers bath, body, skincare, and makeup made with ingredients like shea butter and tea tree oil. The Body Shop stands against animal testing and supports fair trade practices.",
    backgroundImg: "PC0150611084TAMU.png", // Insert the image URL here
    howToRedeem: [
      "1. This E-Gift Card can be redeemed both online and offline",
      "2. For online redemption, visit https://www.thebodyshop.in/",
      "3. Add the desired products to your cart and checkout",
      "4. Enter the voucher code and PIN under the Gift Card section",
      "5. The Gift Card amount will be added to your wallet",
      "6. Make the payment from the “Pay from wallet” method on the payment page",
      "7. For offline redemption, visit The Body Shop store",
      "8. Select the products you want to purchase",
      "9. Share Gift Card details with the cashier at the time of billing",
    ],
  },
  PC3042371245PULT: {
    voucherId: "PC3042371245PULT",
    name: "Amazon Prime 12 month membership",
    brandName: "Amazon",
    category: "movies-and-music",
    discount: 12,
    description:
      "Elevate your shopping experience with a 12-month Prime membership! Unlock a world of benefits and convenience with Amazon Prime. From free one-day delivery on millions of items to exclusive deals and entertainment, Prime membership makes your shopping and entertainment experience better in every way. Get access to premium features like free same-day delivery, unlimited ad-free music, books, prime video, prime music, early access, gaming, and much more.",
    aboutCompany:
      "Amazon Prime is a subscription service offered by Amazon that provides a variety of benefits to its members. With a Prime membership, you can enjoy faster delivery times, exclusive deals and discounts, access to streaming services like Prime Video and Prime Music, and much more. Upgrade your Amazon experience today with a 12-month Prime membership!",
    backgroundImg: "PC3042371245PULT.png", // Insert the image URL here
    howToRedeem: [
      "1. Visit www.amazon.in/vouchers",
      "2. Enter the voucher code in the 'Add new' section",
      "3. Click on the 'Add button' to add a voucher",
    ],
  },
  PC585610538R56E2: {
    voucherId: "PC585610538R56E2",
    name: "Amazon Prime Voucher 3 months membership",
    brandName: "Amazon Prime",
    category: "movies-and-music",
    discount: 12,
    description:
      "Open a world of benefits and convenience with Amazon Prime voucher. From free one-day delivery on millions of items to exclusive deals and entertainment, Prime membership makes your shopping and entertainment experience better in every way. Get access to premium features like free same-day delivery, unlimited ad-free music, books, prime video, prime music, early access, gaming, and much more.",
    aboutCompany:
      "Amazon Prime is a subscription service offered by Amazon that provides a variety of benefits to its members. With a Prime membership, you can enjoy faster delivery times, exclusive deals and discounts, access to streaming services like Prime Video and Prime Music, and much more.",
    backgroundImg: "PC585610538R56E2.png", // Insert the image URL here
    howToRedeem: [
      "1. Visit www.amazon.in/vouchers",
      "2. Enter the voucher code in the 'Add new' section",
      "3. Click on the 'Add button' to add a voucher",
    ],
  },
  PC957513993K8X8B: {
    voucherId: "PC957513993K8X8B",
    name: "BookMyShow E-Gift Card",
    brandName: "BookMyShow",
    category: "movies-and-music",
    discount: 5,
    description:
      "Surprise your loved ones with the gift of entertainment with a BookMyShow E-Gift Card! Whether it's the latest blockbuster movie, a live concert, or a thrilling sports event, this e-gift card unlocks a world of entertainment choices for you and your loved ones.",
    aboutCompany:
      "BookMyShow is India's leading online entertainment platform, offering a convenient and user-friendly way to book tickets for movies, plays, concerts, sporting events, and a variety of other experiences. With BookMyShow, you can browse events, select your seats, and book your tickets – all from the comfort of your home or on the go. Give the gift of entertainment with a BookMyShow E-Gift Card today!",
    backgroundImg: "PC957513993K8X8B.png", // Insert the image URL here
    howToRedeem: [
      "1. Log on to https://in.bookmyshow.com/ or the BookMyShow mobile app",
      "2. Select your desired movie, event, venue, show date, time, and seats",
      "3. During checkout, on the payment page, click on 'More Payment Options' and then the 'Gift Voucher' tab. Enter the E-Gift Card code and click 'Apply'",
      "4. The E-Gift Card value will be applied. If needed, combine it with other payment methods to complete the booking",
      "5. After a successful transaction, you'll receive a booking ID. Exchange this ID at the cinema/venue box office for your actual tickets. You'll also receive an email/SMS confirmation for your reference",
    ],
  },
  PC727329978UT2C8: {
    voucherId: "PC727329978UT2C8",
    name: "PVR Cinemas E-Gift Card",
    brandName: "PVR Cinemas",
    category: "movies-and-music",
    discount: 8,
    description:
      "Experience the latest movies at PVR cinemas with this E-Gift Card. Redeem this Gift Card online on the website or offline at PVR cinema halls. This Gift Card is an ideal gift for a cinephile. Sit back and enjoy the movies at a discounted price.",
    aboutCompany:
      "PVR Cinemas is a leading Indian multiplex chain offering a premium movie experience. They boast comfortable seating, high-quality sound systems, and a variety of screens, including IMAX. Movie lovers can enjoy the latest releases in Hindi, English, and regional languages with utmost comfort and wholesome cinematic experience.",
    backgroundImg: "PC727329978UT2C8.png", // Insert the image URL here
    howToRedeem: [
      "1. For online redemption, visit www.pvrcinemas.com.",
      "2. Visit PVR cinema outlets for offline redemption",
      "3. Choose Gift Card as payment mode and enter Gift Card details if making an online payment",
      "4. In case of offline redemption, first confirm the acceptance of the Gift Card at the outlet",
      "5. Present your Gift Card details to the cashier during billing & pay any balance amount by cash or card",
    ],
  },
  PC063249106DH0LA: {
    voucherId: "PC063249106DH0LA",
    name: "Discovery Plus Gift Voucher",
    brandName: "Discovery Plus",
    category: "movies-and-music",
    discount: 8,
    description:
      "Enter a world of factual entertainment with a Discovery Plus Gift Voucher! A perfect gift for documentary and reality TV lovers. The voucher gives access to stream shows about science, nature, adventure, and more on Discovery Plus.",
    aboutCompany:
      "Dive into reality TV, documentaries & more on Discovery Plus! This streaming service offers shows about science, nature, adventure & more.",
    backgroundImg: "PC063249106DH0LA.png", // Insert the image URL here
    howToRedeem: [
      "1. Visit www.discoveryplus.in or the Discovery Plus application on Android",
      "2. Use the voucher code to redeem on android or website",
      "3. Login from the same ID on iOS and enjoy",
    ],
  },
  PC476876900A5IOL: {
    voucherId: "PC476876900A5IOL",
    name: "ZEE5 Insta Gift Voucher",
    brandName: "ZEE5",
    category: "movies-and-music",
    discount: 8,
    description:
      "Give the gift of streaming! A ZEE5 Insta Gift Voucher lets someone access ZEE5's movies, shows, and live TV in India. Buy it online, pick a denomination, redeem it on the ZEE5 app, and enjoy.",
    aboutCompany:
      "An Indian subscription video on-demand and over-the-top streaming service, run by Zee Entertainment Enterprises. Access content in 12 languages and watch your favorite TV show episodes a day before the telecast on ZEE5.",
    backgroundImg: "PC476876900A5IOL.png", // Insert the image URL here
    howToRedeem: [
      "1. Visit https://www.zee5.com/ or the ZEE5 application to redeem the voucher",
      "2. Apply the gift voucher code on the subscription offerings page: https://www.zee5.com/myaccount/subscription",
      "3. Enjoy the content on the streaming platform",
    ],
  },

  // Add more e-commerce vouchers as needed...
};

export default VoucherData;
