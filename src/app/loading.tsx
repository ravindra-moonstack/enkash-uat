import React from "react"
import Image from "next/image"

import "./globals.css"

const Loading = (): React.JSX.Element => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Image
        src="/images/loader.gif"
        alt="funny gif"
        width={75}
        height={75}
        priority
      />
    </div>
  )
}

export default Loading
