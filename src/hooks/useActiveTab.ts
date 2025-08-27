import { useState } from "react"

export const useActiveTab = () => {
  const [activeTab, setActiveTab] = useState<"login" | "sales">("login")
  const [active, setActive] = useState("sales")

  return {
    activeTab,
    setActiveTab,
    active,
    setActive,
  }
}
