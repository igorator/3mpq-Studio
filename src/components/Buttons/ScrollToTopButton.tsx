'use client'
import Image from 'next/image'
import { useLenisStore } from 'src/hooks/useLenis'
import arrowTop from '@icons/arrow-top.svg'
import { useTranslations } from 'next-intl'

type ScrollToTopButtonProps = {
    addStyles?: string
}

export const ScrollToTopButton = ({ addStyles }: ScrollToTopButtonProps) => {
    const t = useTranslations()
    const lenisInstance = useLenisStore((state) => state.lenisInstance)
    return (
        <button
            className={`flex flex-col gap-[8px] font-secondary text-[16px] uppercase underline transition duration-150 hover:blur-[2px] ${addStyles}`}
            onClick={(): void => {
                lenisInstance?.scrollTo('top')
            }}
        >
            {t('ctaButtons.scrollToTop')}
            <Image src={arrowTop} alt={'scroll to top'} />
        </button>
    )
}
