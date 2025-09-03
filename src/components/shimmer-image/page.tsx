"use client"

import { useState } from "react"
import Image, { ImageProps } from "next/image"

interface ShimmerImageProps
  extends Omit<ImageProps, "onError" | "onLoadingComplete"> {
  fallback?: string // optional fallback image
  className?: string
}

export default function ShimmerImage({
  src,
  alt,
  fallback,
  className,
  ...props
}: ShimmerImageProps) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  return (
    <div
      className={`relative overflow-hidden rounded-md bg-gray-200 ${
        loading ? "animate-pulse" : ""
      } ${className || ""}`}
    >
      {!error ? (
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover transition-opacity duration-500 ${
            loading ? "opacity-0" : "opacity-100"
          }`}
          onLoadingComplete={() => setLoading(false)}
          onError={() => {
            setError(true)
            setLoading(false)
          }}
          {...props}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gray-100 text-gray-500 text-sm">
          {fallback ? (
            <Image
              src={fallback}
              alt="Not found"
              fill
              className="object-contain p-4"
            />
          ) : (
            "Image not found"
          )}
        </div>
      )}
    </div>
  )
}
