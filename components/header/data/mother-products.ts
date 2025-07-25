import {
  paymentLinks,
  paymentLinksFilled,
  bulkCollect,
  collectionAnalyticsFilled,
  collectionAnalytics,
  eNach,
  eNachFilled,
  subscriptionManagement,
  subscriptionManagementFilled,
  customizedPayment,
  customizedPaymentFilled,
  paymentButton,
  paymentButtonFilled,
  paymentGateway,
  paymentGatewayFilled,
  autoCollect,
  autoCollectFilled,
  instantSettlements,
  instantSettlementsFilled,
  upiPayments,
  upiPaymentsFilled,
  qrCode,
  qrCodeFilled,
  autoReconciliation,
  autoReconciliationFilled,
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
  vendorManagementFilled,
  affordabilityFilled,
  collectionReminderFilled,
  casflowFilled,
  digitalInvoiceFilled,
} from "../../header"

export const motherProducts = [
  {
    name: "Collect Payments",
    description: "Fastest & secure payment gateway offerings",
    link: "/collect-payments",
    subProducts: [
      {
        subtitle: "Default",
        subtitleLink: "/collect-payments",
        currentHeading: {
          name: "Collect Payments",
          description: "Get paid faster with customized PG solutions",
        },
        list: [
          {
            name: "Payment Gateway",
            description: "Fast, secure payment collection",
            imageSrc: paymentGateway,
            imageSrcHovered: paymentGatewayFilled,
            link: "/payment-gateway",
          },
          {
            name: "Auto Collect",
            description: "Automate incoming payments",
            imageSrc: autoCollect,
            imageSrcHovered: autoCollectFilled,
            link: "/auto-collect",
          },
          {
            name: "Payment Link",
            description: "Create & send links to get paid",
            imageSrc: paymentLinks,
            imageSrcHovered: paymentLinksFilled,
            link: "/payment-link",
          },
          {
            name: "Subscriptions",
            description: "Simplify recurring payments ",
            imageSrc: subscriptionManagement,
            imageSrcHovered: subscriptionManagementFilled,
            link: "/subscriptions",
          },
          {
            name: "Payment Button",
            description: "Custom payment buttons",
            imageSrc: paymentButton,
            imageSrcHovered: paymentButtonFilled,
            link: "/payment-button",
          },
          {
            name: "e-NACH",
            description: "Auto-debit with digital mandate",
            imageSrc: eNach,
            imageSrcHovered: eNachFilled,
            link: "/e-nach",
          },
          {
            name: "Payment Page",
            description: "Custom checkout instantly",
            imageSrc: customizedPayment,
            imageSrcHovered: customizedPaymentFilled,
            link: "/payment-page",
          },
          {
            name: "Instant Settlements",
            description: "Get funds in seconds",
            imageSrc: instantSettlements,
            imageSrcHovered: instantSettlementsFilled,
            link: "/instant-settlement",
          },
          {
            name: "UPI Payments",
            description: "Accept UPI payments with ease",
            imageSrc: upiPayments,
            imageSrcHovered: upiPaymentsFilled,
            link: "/upi-payments",
          },

          {
            name: "Affordability Suite",
            description: "Offer EMIs, BNPL options",
            imageSrc: bulkCollect,
            imageSrcHovered: affordabilityFilled,
            link: "/affordability-suite",
          },
          {
            name: "QR Codes",
            description: "Multiple QRs for payment collection",
            imageSrc: qrCode,
            imageSrcHovered: qrCodeFilled,
            link: "/qr-codes",
          },
        ],
        footerText: "Effortlessly streamline your business collections",
        footerMobileText: "Explore More",
        footerImg: "olympus_footer_bg",
        footerLink: "/collect-payments",
        parentLink: "/collect-payments",
      },
    ],
  },
  {
    name: "Make Payments",
    description: "Manage all types of business payments",
    link: "/make-payments",
    payableProducts: [
      {
        subtitle: "Default",
        subtitleLink: "/make-payments",
        currentHeading: {
          name: "Make Payments",
          description: "Manage all types of business payments",
        },
        list: [
          {
            name: "Business Bill Payments",
            description: "Auto-fetch & pay utility bills",
            imageSrc: billPayments,
            imageSrcHovered: billPaymentsFilled,
            link: "/business-bill-payment",
          },
          {
            name: "Vendor Payment",
            description: "Pay vendors instantly",
            imageSrc: vendorPayment,
            imageSrcHovered: vendorPaymentFilled,
            link: "/vendor-payment",
          },
          {
            name: "Rental Payment",
            description: "Never miss the rent deadline",
            imageSrc: rentalPayments,
            imageSrcHovered: rentalPaymentsFilled,
            link: "/rental-payment",
          },
          {
            name: "Payroll Processing",
            description: "Disburse salaries on time",
            imageSrc: collectionAnalytics,
            imageSrcHovered: collectionAnalyticsFilled,
            link: "/payroll",
          },

          {
            name: "Bulk Pay ",
            description: "Mass payments in one click",
            imageSrc: bulkPayout,
            imageSrcHovered: bulkPayoutFilled,
            link: "/express-pay",
          },
          {
            name: "GST Payment",
            description: "Pay & track GST payments",
            imageSrc: taxPayment,
            imageSrcHovered: taxPaymentFilled,
            link: "/gst-payment",
          },
        ],
        footerText: "Manage all your business payments seamlessly",
        footerMobileText: "Explore More",
        footerImg: "olympus_footer_bg",
        footerLink: "/make-payments",
        parentLink: "/make-payments",
      },
    ],
  },

  {
    name: "Payable & Receivable+",
    description: "Manage all types of business payments",
    link: "/make-payments",
    payableProducts: [
      {
        subtitle: "Default",
        subtitleLink: "/make-payments",
        currentHeading: {
          name: "Make Payments",
          description: "Manage all types of business payments",
        },
        list: [
          {
            name: "Collection Reminders",

            imageSrc: collectionReminderFilled,
            imageSrcHovered: collectionReminderFilled,
            link: "/collection-reminders",
          },
          {
            name: "Vendor Management",

            imageSrc: vendorManagementFilled,
            imageSrcHovered: vendorManagementFilled,
            link: "/vendor-management",
          },
          {
            name: "Digital Invoicing",

            imageSrc: invoiceManegement,
            imageSrcHovered: digitalInvoiceFilled,
            link: "/digital-invoicing",
          },

          {
            name: "Payable Analytics",

            imageSrc: payablesAnalytics,
            imageSrcHovered: payablesAnalyticsFilled,
            link: "/payable-analytics",
          },
          {
            name: "Collection Analytics",

            imageSrc: collectionAnalytics,
            imageSrcHovered: collectionAnalyticsFilled,
            link: "/collection-analytics",
          },
          {
            name: "Seamless Banking",

            imageSrc: seamlessBanking,
            imageSrcHovered: seamlessBankingFilled,
            link: "/seemless-banking",
          },
          {
            name: "Auto Reconciliation",

            imageSrc: autoReconciliation,
            imageSrcHovered: autoReconciliationFilled,
            link: "/auto-reconcillation",
          },

          {
            name: "Cashflow Analytics",

            imageSrc: casflowFilled,
            imageSrcHovered: casflowFilled,
            link: "/cashflow-analytics",
          },
          {
            name: "Invoice Management",

            imageSrc: invoiceManegement,
            imageSrcHovered: invoiceManegementFilled,
            link: "/invoice-management",
          },
          {
            name: "Workflow Management",

            imageSrc: instantSettlements,
            imageSrcHovered: instantSettlementsFilled,
            link: "/workflow-management",
          },
        ],
        footerText: "Manage all your business payments seamlessly",
        footerMobileText: "Explore More",
        footerImg: "olympus_footer_bg",
        footerLink: "/make-payments",
        parentLink: "/make-payments",
      },
    ],
  },
]

export default motherProducts
