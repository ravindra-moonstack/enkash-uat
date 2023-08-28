import Image from "next/image";

import { greenArrow, blueArrow } from ".";
import H1 from "../heading/h1";
import H4 from "../heading/h4";
import H5 from "../heading/h5";

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
      <H1 title={title} color={getPrimaryColor()} />
      <div className="my-2">
        <H5 title={description} color={getSecondaryColor()} />
      </div>
      <div className="d-flex align-items-center mt-2">
        <H5 title="Explore Now" color={getPrimaryColor()} />
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
