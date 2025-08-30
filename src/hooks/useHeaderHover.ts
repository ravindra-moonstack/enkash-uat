import { useState, useRef } from "react"

export const useHeaderHover = () => {
  //

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isHeaderBgWhite, setIsHeaderBgWhite] = useState<boolean>(false)
  const [modalLeft, setModalLeft] = useState<number | null>(null)
  const itemRefs = useRef<(HTMLLIElement | null)[]>([])

  const handleMouseEnter = (index: number) => {
    const navItem = itemRefs.current[index]
    if (navItem) {
      const itemRect = navItem.getBoundingClientRect()
      const parentRect = navItem.parentElement?.getBoundingClientRect()
      const left = itemRect.left - (parentRect?.left || 0) + itemRect.width / 2

      setModalLeft(left)
      setHoveredIndex(index)
    }
    setIsHeaderBgWhite(false)
  }

  const closeAllModals = () => {
    setHoveredIndex(null)
    setIsHeaderBgWhite(false)
  }

  return {
    hoveredIndex,
    setHoveredIndex,
    isHeaderBgWhite,
    setIsHeaderBgWhite,
    modalLeft,
    itemRefs,
    handleMouseEnter,
    closeAllModals,
  }
}
