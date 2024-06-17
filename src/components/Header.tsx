'use client'

import { Button } from 'src/components/Buttons/DefaultButton'
import { Logo } from 'src/components/Logo'
import { HiddenMenuButton } from 'src/components/HiddenMenu/HiddenMenuButton'
import { useMenu } from 'src/hooks/useMenu'
import { motion } from 'framer-motion'
import { routes } from 'src/data/routes'
import { usePathname } from '@navigation'
import LocaleSwitcher from './LocaleSwitcher/LocaleSwitcher'
import { useTranslations } from 'next-intl'

export const Header: React.FC = () => {
    const currentPage = usePathname()
    const t = useTranslations()
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
                <LocaleSwitcher />

                {currentPage !== routes.contact && (
                    <Button
                        href={routes.contact}
                        buttonType='highlighted'
                        addStyles='desktop:flex mobile:hidden'
                    >
                        {t('ctaButtons.getInTouch')}
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
