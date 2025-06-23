import WebHeader from "./web-header"

const Header = ({ utmSource = "" }: any) => {
  return (
    <>
      <div className="desktop-only desktop-header">
        <WebHeader utmSource={utmSource} />
      </div>
      {/* <div className="mobile-only">
        <MobileHeader utmSource={utmSource} />
      </div> */}
    </>
  )
}
export default Header
