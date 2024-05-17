'use client'

import { Button } from '@components/Buttons/DefaultButton'
import { Logo } from '@components/Logo'
import { HiddenMenuButton } from '@components/HiddenMenu/HiddenMenuButton'
import { useMenu } from '@hooks/useMenu'
import { motion } from 'framer-motion'
import { routes } from '@data/routes'
import { usePathname } from 'next/navigation'

export const Header: React.FC = () => {
    const currentPage = usePathname()
    const { isMenuOpen, toggleMenu } = useMenu()

    return (
        <motion.header
            id='header'
            className='flex w-full max-w-[1440px] justify-between mobile:px-[12px] mobile:pt-[16px] desktop:px-[56px] desktop:pt-[32px]'
            initial={{ opacity: 0 }}
            animate={{ opacity: 100 }}
            transition={{ ease: 'easeInOut', duration: 1 }}
        >
            <Logo scroll={false} />

            <div className='flex mobile:gap-[24px] desktop:gap-[40px]'>
                {currentPage !== routes.contact && (
                    <Button href={routes.contact} buttonType='highlighted'>
                        Get in touch
                    </Button>
                )}

                <HiddenMenuButton
                    isPressed={isMenuOpen}
                    openMenu={toggleMenu}
                />
            </div>
        </motion.header>
    )
}
