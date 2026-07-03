import React from "react"
import Image from "next/image"

import "./globals.css"

const Loading = (): React.JSX.Element => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Image
        src={`${process.env.NEXT_PUBLIC_CDN}/images/loader.gif`}
        alt="Loading indicator"
        width={75}
        height={75}
        priority
      />
    </div>
  )
}

export default Loading
