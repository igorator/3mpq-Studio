'use client'
import Tempus from '@studio-freight/tempus'
import Lenis from '@studio-freight/lenis'
import { useLayoutEffect, useRef } from 'react'
import { useMenu } from 'src/hooks/useMenu'
import { useLenisStore } from 'src/hooks/useLenis'

export function SmoothScroll() {
    const lenis = useRef<Lenis | null>(null)
    const { isMenuOpen } = useMenu()
    const { setLenisInstance } = useLenisStore()

    useLayoutEffect(() => {
        if (!isMenuOpen) {
            lenis.current = new Lenis({
                smoothWheel: true,
            })

            const resize = setInterval(() => {
                lenis.current!.resize()
            }, 150)

            const onFrame = (time: number) => {
                lenis.current!.raf(time)
            }

            const unsubscribe = Tempus.add(onFrame)

            setLenisInstance(lenis.current)

            return () => {
                unsubscribe()
                clearInterval(resize)
                lenis.current!.destroy()
                setLenisInstance(null)
            }
        }
    }, [isMenuOpen, setLenisInstance])

    return null
}
