'use client'

import { useState, useEffect } from 'react'
import styles from '@components/CustomCursor/customCursor.module.css'

export function CustomDragCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isDragCursor, setIsDragCursor] = useState(false)

    const handleMouseMove = (e) => {
        const { clientX, clientY, target } = e
        setPosition({ x: clientX, y: clientY })

        setIsDragCursor(
            target.closest('.swiper-slide') &&
                !target.closest('.link-slider-button') &&
                !target.closest('button') &&
                !target.closest('form')
        )
    }

    const handleMouseWheel = (e) => {
        const { target } = e

        setIsDragCursor(
            target.closest('.swiper-slide') &&
                !target.closest('.link-slider-button') &&
                !target.closest('button') &&
                !target.closest('form')
        )
    }

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('wheel', handleMouseWheel)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('wheel', handleMouseWheel)
        }
    }, [])

    const flareSize = isDragCursor ? 74 : 0

    const cursorStyle = isDragCursor ? { left: '-100px', top: '-100px' } : {}

    return (
        <div
            className={`${styles.flare} fixed rounded-[50%] bg-white ${
                isDragCursor
                    ? `${styles.pointer} `
                    : 'cursor-auto text-opacity-0'
            } items-center justify-center font-secondary uppercase text-black mobile:hidden tablet:hidden desktop:flex`}
            style={{
                ...cursorStyle,
                left: `${position.x}px`,
                top: `${position.y}px`,
                width: `${flareSize}px`,
                height: `${flareSize}px`,
            }}
        >
            Drag
        </div>
    )
}
