export interface BreadcrumbItem {
  name: string
  url: string
}

export type BreadcrumbProps = {
  items: BreadcrumbItem[]
  domain?: string
  linkColor?: "white" | "black" | "allWhite"
}
