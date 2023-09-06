import {
  vendorPayment,
  vendorPaymentFilled,
  bulkPayout,
  taxPayment,
  bulkPayoutFilled,
  taxPaymentFilled,
  brandVouchers,
  brandVouchersFilled,
  offers,
  offersFilled,
  giftCards,
  giftCardFilled,
} from "@/components/header";

const loyaltyLoungeProducts = [
  {
    subtitle: "Default",
    list: [
      {
        name: "Employee Rewards",
        description: "Automated platform for employee appreciation",
        imageSrc: vendorPayment,
        imageSrcHovered: vendorPaymentFilled,
      },
      {
        name: "Brand Voucher",
        description: "200+ brand vouchers for corporate gifting",
        imageSrc: brandVouchers,
        imageSrcHovered: brandVouchersFilled,
      },
      {
        name: "Channel Incentives",
        description: "Enable automated trade incentives easily",
        imageSrc: taxPayment,
        imageSrcHovered: taxPaymentFilled,
      },
      {
        name: "Offers",
        description: "Get discounts on partnered subscriptions and more",
        imageSrc: offers,
        imageSrcHovered: offersFilled,
      },
      {
        name: "Gift Cards",
        description: "Gift cards for employee benefits",
        imageSrc: giftCards,
        imageSrcHovered: giftCardFilled,
      },
    ],
    footerText: "Stream Line with Loyalty",
  },
];

export default loyaltyLoungeProducts;
