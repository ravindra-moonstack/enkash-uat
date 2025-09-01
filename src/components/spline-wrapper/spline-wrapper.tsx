"use client"

import React from "react"
const Spline = React.lazy(() => import("@splinetool/react-spline"))

interface Props {
  scene: string
  className?: string
}

export default function SplineWrapper({ scene, className }: Props) {
  return (
    <div className={className}>
      <Spline scene={scene} />
    </div>
  )
}
