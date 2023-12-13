import MobileHeader from "./mobile-header/mobile-header";
import WebHeader from "./web-header";

const Header = () => {
  return (
    <>
      <div className="desktop-only desktop-header">
        <WebHeader />
      </div>
      <div className="mobile-only">
        <MobileHeader />
      </div>
    </>
  );
};
export default Header;
