import React from "react"
import "./globals.css"
import Image from "next/image"
const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Image src="/images/loader.gif" alt="funny gif" width={75} height={75} />
    </div>
  )
}

export default Loading
