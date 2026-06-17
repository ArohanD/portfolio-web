import { useEffect, useState } from "react"

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 640)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return isMobile
}

// Viewport-driven masonry column count. SSR-safe: starts at 2 (the common
// case) so the first paint isn't 1 column on desktop; corrects on hydration.
export function useColumnCount(): number {
  const [cols, setCols] = useState(2)

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth
      setCols(w >= 1440 ? 4 : w >= 1024 ? 3 : w >= 640 ? 2 : 1)
    }
    compute()
    window.addEventListener("resize", compute)
    return () => window.removeEventListener("resize", compute)
  }, [])

  return cols
}
