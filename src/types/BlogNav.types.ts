export interface BreadcrumbItem {
  label: string
  href?: string
}

export interface CategoryItem {
  id: string | number
  label: string
  slug: string
}

export interface BlogNavData {
  breadcrumbs: BreadcrumbItem[]
  categories: CategoryItem[]
}

export interface BlogNavProps {
  data: BlogNavData
  activeCategory?: string
  showCategories?: boolean
  showDivider?: boolean
  onCategoryChange?: (categorySlug: string) => void
}
