export interface Post {
  id: number
  title: string
  slug: string
  created_at: string
  featured_image_url: string
  image_alt: string
  category_names?: string
  category_slugs?: string
}

export interface SectionIcon {
  src: string
  alt: string
  bgColor?: string
}

export interface ReceivablesSectionData {
  posts: Post[]
  category: string
  categoryLabel?: string
  icon?: SectionIcon
  exploreAllLink?: string
  exploreAllLabel?: string
}

export type ImagePosition = "left" | "right"

export interface ReceivablesSectionProps {
  data: ReceivablesSectionData
  imagePosition?: ImagePosition
}
