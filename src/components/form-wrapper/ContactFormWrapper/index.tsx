"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

const ContactForm = dynamic(
  () => import("@/src/components/forms/contact-form"),
  {
    ssr: false,
    loading: () => (
      <div className="py-20 text-center text-gray-600">
        Loading Contact form...
      </div>
    ),
  }
)

export default function ContactFormClient() {
  return (
    <Suspense
      fallback={
        <div className="py-20 text-center text-gray-600">
          Loading contact form...
        </div>
      }
    >
      <ContactForm />
    </Suspense>
  )
}

//////contact us
