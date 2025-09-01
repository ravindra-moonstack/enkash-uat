export type TProductFeatureItem = {
  name: string
  description?: string
  imageSrc?: string // or StaticImageData
  imageSrcHovered?: string // or StaticImageData
  link: string
}

export type TSubProduct = {
  subtitle?: string
  subtitleLink?: string
  currentHeading: {
    name: string
    description: string
  }
  list: TProductFeatureItem[]
  footerText?: string
  footerMobileText: string
  footerImg?: string
  footerLink?: string
  parentLink?: string
}

export type TProductCategory = {
  name?: string
  description?: string
  link?: string
  subProducts?: TSubProduct[]
  backgroundColor?: string
}
