'use client'

import { Link } from '@navigation'
import { useLenisStore } from 'src/hooks/useLenis'

export const ScrollToTopLink: React.FC<{
    href: string
    className?: string
    children: React.ReactNode
    onClick?: () => void
}> = ({ href, className, children, onClick }) => {
    const lenisInstance = useLenisStore((state) => state.lenisInstance)

    const handleClick = () => {
        if (lenisInstance) {
            lenisInstance.scrollTo('top')
        }
        if (onClick) {
            onClick()
        }
    }

    return (
        <Link
            href={href}
            className={className}
            onClick={handleClick}
            scroll={false}
        >
            {children}
        </Link>
    )
}
