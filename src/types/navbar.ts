import { HTMLAttributeAnchorTarget } from "react"

export type TProductFeatureItem = {
  children?: any
  name: string
  description?: string
  imageSrc?: string
  imageSrcHovered?: string
  link: string
  target?: HTMLAttributeAnchorTarget
}

export type TSubProduct = {
  subtitle?: string
  subtitleLink?: string
  subtitleTarget?: string
  currentHeading: {
    name: string
    description: string
  }
  list?: TProductFeatureItem[]
  footerText?: string
  footerMobileText: string
  footerImg?: string
  footerLink?: string
  parentLink?: string
  parentTarget?: string
}

export type TProductCategory = {
  name?: string
  description?: string
  link?: string
  subProducts?: TSubProduct[]
  backgroundColor?: string
  target?: string
}
