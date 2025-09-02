import React from "react"
import MobileHeader from "./mobile-header/mobile-header"
import WebHeader from "./web-header"

interface HeaderProps {
  utmSource?: string
}

const Header = ({ utmSource = "" }: HeaderProps): React.JSX.Element => {
  return (
    <>
      <div className="desktop-only desktop-header">
        <WebHeader utmSource={utmSource} />
      </div>
      <div className="mobile-only">
        <MobileHeader utmSource={utmSource} />
      </div>
    </>
  )
}

export default Header
