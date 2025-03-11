import iconOne from "./img/icon-one.svg";
import iconTwo from "./img/icon-two.svg";
import iconThree from "./img/icon-three.svg";
import { CarouselData } from "@/components/carousel/how-does-carousel";

const carouselData: CarouselData["carouselData"] = [
  {
    image: iconOne,
    alt: "Login",
    title:
      "Login to EnKash with your registered number or create an account if you are not registered",
    heading: "Login: ",
  },
  {
    image: iconTwo,
    alt: "Upload Invoices",
    title:
      "Upload the invoices and select the invoice number against which you want to use the smart payment collection feature",
    heading: "Upload Invoices: ",
  },
  {
    image: iconThree,
    alt: "Dispatch",
    title:
      "Click on “Dispatch Invoices,” and all your customers will receive their invoices in one click",
    heading: "Dispatch: ",
  },
];

export default carouselData;
