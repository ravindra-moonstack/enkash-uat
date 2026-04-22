import React from "react"
import { StaticImageData } from "next/image"

export interface BreadcrumbItem {
  name: string
  url: string
}

export type BreadcrumbProps = {
  items: BreadcrumbItem[]
  domain?: string
  linkColor?: "white" | "black" | "allWhite" | "allBlack"
}

export type TCategoryOptions = {
  value: string
  label: string
  children?: { value: string; label: string }[]
}[]

export type TStackCardItemProp = {
  icon: string | StaticImageData
  title: string
  description?: string
  highlightText?: string
  descriptionHtml?: React.ReactNode
  image?: string | StaticImageData
  buttonUrl?: string
  maxImageHeight?: string
  reverse?: boolean
}

export type TStackCardsProp = Array<TStackCardItemProp>

export type TAllProductsDataProp = {
  title: string
  title2?: string
  subtitle?: string
  description?: string
  image?: string | StaticImageData
  link?: string
  showSlide?: string
  items?: Array<{
    title?: string
    description?: string
    image?: string | StaticImageData
  }>
}

export type TAllProductsProp = {
  title?: string
  title2?: string
  subtitle?: string
  data?: Array<TAllProductsDataProp>
}

export type TAllProductSectionItem = {
  title: string
  title2?: string
  description: string
  image: string | StaticImageData
  link?: string
}

export type TAllProductSection = {
  title: string
  subtitle?: string
  items: TAllProductSectionItem[]
}

export type TAllProductSections = TAllProductSection[]

export type TCardTypeItem = {
  titleHtml: string
  description?: string
  subDescription?: string
  cardImage?: string | StaticImageData
  linkUrl?: string
}

export type TCardTypes = TCardTypeItem[]
