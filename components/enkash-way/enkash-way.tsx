import Heading from "../heading/heading";
import { space } from "../../constant/common";
import Image from "next/image";
import { blueArrowForward, newWay, oldWay, steps } from ".";

const EnkashWay = () => {
  return (
    <>
      <div className="col-12 d-flex flex-column flex-md-row justify-content-center align-items-center">
        <Heading
          title={`The EnKash Way is${space}`}
          color="black"
          size="h1"
          weight="6"
        />
        <Heading
          title="the better way."
          color="equity-blue"
          size="h1"
          weight="6"
        />
      </div>
      <div className="col-12 d-flex justify-content-center mb-5">
        <Heading
          title="Switch to EnKash today!"
          color="black"
          size="h1"
          weight="6"
        />
      </div>
      <div className="col-12 d-flex justify-content-center my-5 px-5">
        
      </div>
      <div className="col-12 d-flex flex-column flex-lg-row my-5 align-items-center justify-content-center px-5">
        <Image
          className="me-2 mb-3 mb-lg-0 img-fluid"
          src={oldWay}
          alt="enkash steps"
          width={550}
        />
        <Image
          className="me-2 mb-3 mb-lg-0 img-fluid"
          src={blueArrowForward}
          alt="enkash steps"
        />
        <Image
          className="img-fluid"
          src={newWay}
          alt="enkash steps"
          width={550}
        />
      </div>
    </>
  );
};

export default EnkashWay;
