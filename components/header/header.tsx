import PopUp from "../pop-up/pop-up";
import MobileHeader from "./mobile-header/mobile-header";
import WebHeader from "./web-header";

const Header = ({ utmSource = "" }: any) => {
  return (
    <>
      <PopUp />

      <div className="desktop-only desktop-header">
        <WebHeader utmSource={utmSource} />
      </div>
      <div className="mobile-only">
        <MobileHeader />
      </div>
    </>
  );
};
export default Header;
