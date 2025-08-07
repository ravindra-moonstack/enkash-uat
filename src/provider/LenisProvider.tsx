'use client'

import { useLayoutEffect, useRef } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function LenisProvider({ children }: { children: React.ReactNode }) {
      const lenisRef = useRef<Lenis | null>(null)

      useLayoutEffect(() => {
            const lenis = new Lenis({
                  duration: 1.2,
                  smoothWheel: true,
            })

            lenisRef.current = lenis

            function update(time: number) {
                  lenis.raf(time)
                  requestAnimationFrame(update)
            }

            requestAnimationFrame(update)

            lenis.on('scroll', ScrollTrigger.update)

            // Let ScrollTrigger use Lenis's scroll position
            ScrollTrigger.scrollerProxy(document.body, {
                  scrollTop(value) {
                        if (lenis && value !== undefined) {
                              lenis.scrollTo(value)
                        }
                        return lenis?.scroll ?? 0
                  },
                  getBoundingClientRect() {
                        return {
                              top: 0,
                              left: 0,
                              width: window.innerWidth,
                              height: window.innerHeight,
                        }
                  },
                  pinType: document.body.style.transform ? 'transform' : 'fixed',
            })

            ScrollTrigger.defaults({
                  scroller: document.body,
            })

            ScrollTrigger.refresh()

            return () => {
                  lenis.destroy()
                  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
                  ScrollTrigger.clearMatchMedia()

            }
      }, [])

      return <>{children}</>
}

 