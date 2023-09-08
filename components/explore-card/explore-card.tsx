import Image from "next/image";
import { greenArrow, blueArrow } from ".";
import Heading from "../heading/heading";

export interface CardProps {
  title: string;
  description: string;
  theme: string;
}

const ExploreCard = ({ title, description, theme }: CardProps) => {
  const isBlueTheme = () => theme === "blue";
  const getPrimaryColor = () =>
    isBlueTheme() ? "equity-blue" : "electric-green";
  const getSecondaryColor = () => (isBlueTheme() ? "black" : "white");
  const getArrowSrc = () => (isBlueTheme() ? blueArrow : greenArrow);

  return (
    <div className="d-flex flex-column">
      <Heading title={title} color={getPrimaryColor()} size="h2" weight="6" />
      <div className="my-2">
        <Heading
          title={description}
          color={getSecondaryColor()}
          size="h4"
          weight="4"
        />
      </div>
      <div className="d-flex align-items-center mt-2">
        <Heading
          title="Explore Now"
          color={getPrimaryColor()}
          size="h5"
          weight="6"
        />
        <Image
          className="m-2"
          src={getArrowSrc()}
          alt="arrow icon"
          width={50}
        />
      </div>
    </div>
  );
};

export default ExploreCard;
