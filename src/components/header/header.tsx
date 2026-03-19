import React from "react"
import dynamic from "next/dynamic"

const MobileHeader = dynamic(() => import("./mobile-header/mobile-header"), {
  ssr: true,
})
const WebHeader = dynamic(() => import("./web-header"), {
  ssr: true,
})

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
