import Heading from "../heading/heading";
import { space } from "../../constant/common";
import Image from "next/image";
import { blueArrowForward, newWay, oldWay, steps } from ".";

const EnkashWay = () => {
  return (
    <>
      <div className="col-12 d-flex justify-content-center">
        <Heading title={`The EnKash Way is${space}`} color="black" size="h1" />
        <Heading title="the better way." color="equity-blue" size="h1" />
      </div>
      <div className="col-12 d-flex justify-content-center mb-5">
        <Heading title="Switch to EnKash today!" color="black" size="h1" />
      </div>
      <div className="col-12 d-flex justify-content-center my-5 px-5">
        <Image src={steps} alt="enkash steps" width={1000} />
      </div>
      <div className="col-12 d-flex my-5 align-items-center justify-content-center px-5">
        <Image className="me-2" src={oldWay} alt="enkash steps" width={550} />
        <Image className="me-2" src={blueArrowForward} alt="enkash steps" />
        <Image src={newWay} alt="enkash steps" width={550} />
      </div>
    </>
  );
};
export default EnkashWay;
