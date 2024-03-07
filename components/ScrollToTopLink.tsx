'use client'

import Link from 'next/link'
import { useLenisStore } from '@hooks/useLenis'

export const ScrollToTopLink: React.FC<{
    href: string
    className?: string
    children: React.ReactNode
    scrollBehavior?: string
}> = ({ href, className, children }) => {
    const lenisInstance = useLenisStore((state) => state.lenisInstance)
    return (
        <Link
            href={href}
            className={className}
            onClick={() => lenisInstance?.scrollTo('top')}
            scroll={false}
        >
            {children}
        </Link>
    )
}
