'use client'

import { useLayoutEffect, useRef } from 'react'
import Lenis from 'lenis'

export default function LenisProvider({ children }: { children: React.ReactNode }) {
      const lenisRef = useRef<Lenis | null>(null)

      useLayoutEffect(() => {
            const lenis = new Lenis({
                  duration: 0.8,
                  smoothWheel: true,
            })

            lenisRef.current = lenis

            function update(time: number) {
                  lenis.raf(time)
                  requestAnimationFrame(update)
            }

            requestAnimationFrame(update)

            return () => {
                  lenis.destroy()
            }
      }, [])

      return <>{children}</>
}
