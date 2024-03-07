'use client'

import { SpinnerLoader } from '@components/SpinnerLoader'
import React, { useState, useEffect } from 'react'
import { Suspense } from 'react'

const LazySpline = React.lazy(() => {
    return new Promise((resolve) => setTimeout(resolve, 1500)).then(
        () => import('@splinetool/react-spline')
    )
})

export const Chips = () => {
    const [showSpline, setShowSpline] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSpline(true)
        }, 1500)

        return () => clearTimeout(timer)
    }, [])

    return (
        <Suspense fallback={<SpinnerLoader />}>
            {showSpline && (
                <LazySpline
                    className={`cursor-grab active:cursor-grabbing`}
                    scene='https://prod.spline.design/kUrENFAZsVZ80fSj/scene.splinecode'
                />
            )}
        </Suspense>
    )
}
