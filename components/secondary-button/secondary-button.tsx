"use client";

import { ButtonProps } from "@/types/props";

const SecondaryButton = ({ isDisabled, title, url }: ButtonProps) => {
  const handleClick = () => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <button
      disabled={isDisabled}
      className="bg-equity-blue border-0 color-white rounded-5 px-4 py-1"
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default SecondaryButton;
