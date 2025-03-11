import iconOne from "./img/icon-one.svg";
import iconTwo from "./img/icon-two.svg";
import iconThree from "./img/icon-three.svg";
import iconFour from "./img/icon-four.svg";
import { CarouselData } from "@/components/carousel/how-does-carousel";

const carouselData: CarouselData["carouselData"] = [
  {
    image: iconOne,
    alt: "Generate QR Code: Use EnKash dashboard or API to create a QR code for your business",
    title: "Use EnKash dashboard or API to create a QR code for your business",
    heading: "Generate QR Code: ",
  },
  {
    image: iconTwo,
    alt: "Display and Share: Print it for your storefront, share it digitally, or include it on invoices.",
    title:
      "Print it for your storefront, share it digitally, or include it on invoices.",
    heading: "Display and Share: ",
  },
  {
    image: iconThree,
    alt: "Accept Payments: Customers scan the code using their preferred UPI app or wallet.",
    title: "Customers scan the code using their preferred UPI app or wallet.",
    heading: "Accept Payments: ",
  },
  {
    image: iconFour,
    alt: "Track and Reconcile: Automatically match payments with orders and generate detailed reports.",
    title:
      "Automatically match payments with orders and generate detailed reports.",
    heading: "Track and Reconcile: ",
  },
];

export default carouselData;
