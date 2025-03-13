import iconOne from "./img/icon-one.svg";
import iconTwo from "./img/icon-two.svg";
import iconThree from "./img/icon-three.svg";
import { CarouselData } from "@/components/carousel/how-does-carousel";

const carouselData: CarouselData["carouselData"] = [
  {
    image: iconOne,
    alt: "Instantly set up unique virtual payment addresses for each customer, branch, or department.",
    title:
      "Instantly set up unique virtual payment addresses for each customer, branch, or department.",
    heading: "Virtual Account Creation: ",
  },
  {
    image: iconTwo,
    alt: "Receive payments via NEFT, RTGS, IMPS, or other channels directly to your virtual bank accounts",
    title:
      "Receive payments via NEFT, RTGS, IMPS, or other channels directly to your virtual bank accounts",
    heading: "Collect Payment: ",
  },
  {
    image: iconThree,
    alt: "Real-time alerts and centralized dashboards, for smooth reconciliation and transparency.",
    title:
      "Real-time alerts and centralized dashboards, for smooth reconciliation and transparency.",
    heading: "Stay Informed: ",
  },
];

export default carouselData;
