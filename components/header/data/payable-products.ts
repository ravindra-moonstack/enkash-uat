import {
  vendorPayment,
  vendorPaymentFilled,
  bulkPayout,
  taxPayment,
  bulkPayoutFilled,
  taxPaymentFilled,
  rentalPayments,
  rentalPaymentsFilled,
  billPayments,
  billPaymentsFilled,
  invoiceManegement,
  invoiceManegementFilled,
  seamlessBankingFilled,
  seamlessBanking,
  payablesAnalytics,
  payablesAnalyticsFilled,
  payrollProcessing,
  payrollProcessingFilled,
  vendorManagement,
  vendorManagementFilled,
} from "@/components/header";

const payableProducts = [
  {
    subtitle: "Default",
    subtitleLink: "/olympus/payables",
    currentHeading: {
      name: "Payables",
      description:
        "Easily pay and manage all your vendors, bills, rentals, taxes, and more in one platform",
    },
    list: [
      {
        name: "Vendor Payment",
        description:
          "Instantaneously add, verify, pay, and manage vendors with ease",
        imageSrc: vendorPayment,
        imageSrcHovered: vendorPaymentFilled,
        link: "/olympus/payables/vendor-payment",
      },
      {
        name: "Bill Payment",
        description:
          "Pay utilities on time, every time, with Auto-Fetch and Auto-Pay",
        imageSrc: billPayments,
        imageSrcHovered: billPaymentsFilled,
        link: "/olympus/payables/bill-payment",
      },
      {
        name: "Express Pay",
        description: "Pay multiple bills & invoices with a single click",
        imageSrc: bulkPayout,
        imageSrcHovered: bulkPayoutFilled,
        link: "/olympus/payables/bulk-payout",
      },
      {
        name: "GST Payment",
        description: "Pay GST with any card, get reminders, and track payments",
        imageSrc: taxPayment,
        imageSrcHovered: taxPaymentFilled,
        link: "/olympus/payables/gst-payments",
      },

      {
        name: "Rental Payment",
        description:
          "Pay & manage your office/home rent directly into your landlord’s bank",
        imageSrc: rentalPayments,
        imageSrcHovered: rentalPaymentsFilled,
        link: "/olympus/payables/rental-payment",
      },
      // {
      //   name: "Pay By Any Card",
      //   description:
      //     "Pay your business utility bills, GST and vendor payments via any card",
      //   imageSrc: payByAnyCard,
      //   imageSrcHovered: payByAnyCardFilled,
      //   link: "/olympus/payables/pay-by-any-card",
      // },
      {
        name: "Invoice Management",
        description:
          "Upload and manage all the vendor invoices from a single dashboard",
        imageSrc: invoiceManegement,
        imageSrcHovered: invoiceManegementFilled,
        link: "/olympus/payables/invoice-management",
      },
      {
        name: "Vendor Management",
        description: "Onboard, verify, and manage all business vendors easily",
        imageSrc: vendorManagement,
        imageSrcHovered: vendorManagementFilled,
        link: "/olympus/payables/vendor-management",
      },
      {
        name: "Seamless Banking",
        description: "A personalized business banking experience",
        imageSrc: seamlessBanking,
        imageSrcHovered: seamlessBankingFilled,
        link: "/olympus/payables/seamless-banking/",
      },
      {
        name: "Payable Analytics",
        description:
          "Stay informed about business’s accounts payable for better financial planning",
        imageSrc: payablesAnalytics,
        imageSrcHovered: payablesAnalyticsFilled,
        link: "/olympus/payables/payable-analytics/",
      },
      {
        name: "Payroll Processing",
        description:
          "Simplify salary disbursement process with efficient payroll processing",
        imageSrc: payrollProcessing,
        imageSrcHovered: payrollProcessingFilled,
        link: "/olympus/payables/payroll-processing/",
      },
    ],
    footerText: "Manage all your business payments seamlessly",
    footerMobileText: "Explore Payables",
    footerImg: "olympus_footer_bg",
    footerLink: "/olympus/payables",
    parentLink: "/olympus/payables",
  },
];

export default payableProducts;
