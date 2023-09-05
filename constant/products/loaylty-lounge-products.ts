import {
  vendorPayment,
  vendorPaymentFilled,
  bulkPayout,
  taxPayment,
  bulkPayoutFilled,
  taxPaymentFilled,
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
        imageSrc: bulkPayout,
        imageSrcHovered: bulkPayoutFilled,
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
        imageSrc: vendorPayment,
        imageSrcHovered: vendorPaymentFilled,
      },
      {
        name: "Gift Cards",
        description: "Gift cards for employee benefits",
        imageSrc: taxPayment,
        imageSrcHovered: vendorPaymentFilled,
      },
    ],
    footerText: "Stream Line with Loyalty",
  },
];

export default loyaltyLoungeProducts;
