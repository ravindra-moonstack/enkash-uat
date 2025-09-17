import { TSubProduct } from "@/src/types"
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
} from ".."

const payableProducts: TSubProduct[] = [
  {
    subtitle: "Default",
    subtitleLink: "/products/make-payments",
    currentHeading: {
      name: "Make Payments",
      description: "Manage all types of business payments",
    },
    list: [
      {
        name: "Vendor Payment",
        description: "Add, verify, manage & pay instantly",
        imageSrc: vendorPayment,
        imageSrcHovered: vendorPaymentFilled,
        link: "/vendor-payment",
      },
      {
        name: "Bill Payment",
        description: "Auto fetch & auto pay utility bills on time",
        imageSrc: billPayments,
        imageSrcHovered: billPaymentsFilled,
        link: "/utility-bill-payment",
      },
      {
        name: "Express Pay",
        description: "Pay multiple vendors & bills with a single click",
        imageSrc: bulkPayout,
        imageSrcHovered: bulkPayoutFilled,
        link: "/bulk-pay",
      },
      {
        name: "GST Payment",
        description: "Easily pay and track GST payments in one place",
        imageSrc: taxPayment,
        imageSrcHovered: taxPaymentFilled,
        link: "/gst-payment",
      },

      {
        name: "Rental Payment",
        description: "Make rental payments directly into landlord's account",
        imageSrc: rentalPayments,
        imageSrcHovered: rentalPaymentsFilled,
        link: "/rent-payment",
      },

      {
        name: "Invoice Management",
        description: "Upload & manage all vendor invoices at one place",
        imageSrc: invoiceManegement,
        imageSrcHovered: invoiceManegementFilled,
        link: "/invoice-management",
      },
      {
        name: "Vendor Management",
        description: "Verify & manage multiple vendors across branches",
        imageSrc: vendorManagement,
        imageSrcHovered: vendorManagementFilled,
        link: "/vendor-management",
      },
      {
        name: "Seamless Banking",
        description: "A personalized business banking experience",
        imageSrc: seamlessBanking,
        imageSrcHovered: seamlessBankingFilled,
        link: "/seamless-banking/",
      },
      {
        name: "Payable Analytics",
        description: "Stay informed for better financial planning",
        imageSrc: payablesAnalytics,
        imageSrcHovered: payablesAnalyticsFilled,
        link: "/payable-analytics/",
      },
      {
        name: "Payroll Processing",
        description: "Simplified salary disbursement process",
        imageSrc: payrollProcessing,
        imageSrcHovered: payrollProcessingFilled,
        link: "/payroll/",
      },
    ],
    footerText: "Manage all your business payments seamlessly",
    footerMobileText: "Explore More",
    footerImg: "olympus_footer_bg",
    footerLink: "/make-payments",
    parentLink: "/make-payments",
  },
]

export default payableProducts
