'use client'

import { Link } from '@navigation'
import Image from 'next/image'
import { useEffect } from 'react'
import { useMenu } from 'src/hooks/useMenu'
import { anchorLinksEn, anchorLinksUa } from 'src/data/achor-links'
import upworkIcon from '@social-icons/upwork.svg'
import behanceIcon from '@social-icons/behance.svg'
import closeArrow from '@icons/close-arrow.svg'
import offersAnimation from '@animations/offers.gif'
import { ScrollToTopLink } from 'src/components/ScrollToTopLink'
import { routes } from 'src/data/routes'
import { useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'

const socialLinks = [
    {
        iconSrc: upworkIcon,
        url: 'https://www.upwork.com/agencies/3mpq',
        title: 'upwork',
    },

    {
        iconSrc: behanceIcon,
        url: 'https://www.behance.net/empq',
        title: 'behance',
    },
]

export const HiddenMenu = () => {
    const locale = useParams().locale
    const t = useTranslations()
    const { isMenuOpen, toggleMenu } = useMenu()

    let anchorLinks
    locale === 'en'
        ? (anchorLinks = anchorLinksEn)
        : (anchorLinks = anchorLinksUa)

    useEffect(() => {
        const bodyStyle = document.body.style

        if (isMenuOpen) {
            bodyStyle.position = 'fixed'
            bodyStyle.overflowY = 'scroll'
            bodyStyle.width = '100%'
        } else {
            bodyStyle.position = ''
            bodyStyle.overflowY = ''
        }

        return () => {
            bodyStyle.position = ''
            bodyStyle.overflowY = ''
        }
    }, [isMenuOpen])

    return (
        <div
            onClick={toggleMenu}
            className={`${
                isMenuOpen ? `visible opacity-100` : `invisible opacity-0`
            } z-1000 fixed left-0 right-0 top-0 flex h-[100dvh] w-full flex-col items-center bg-black bg-opacity-80 text-white transition-all duration-300 mobile:pt-[32px] desktop:pt-[46px]`}
        >
            <div className='flex h-full w-full flex-col items-end gap-[40px] mobile:px-[12px] desktop:max-w-[1440px] desktop:px-[56px] '>
                <button>
                    <Image
                        width={42}
                        height={24}
                        src={closeArrow}
                        alt='Close menu'
                        className='transition-filter cursor-pointer duration-150 ease-out hover:blur-[2px]'
                    />
                </button>

                <div
                    className='flex w-full justify-end gap-[40px] mobile:flex-col-reverse desktop:flex-row'
                    onClick={(e) => {
                        e.stopPropagation()
                    }}
                >
                    <ScrollToTopLink
                        className='flex h-full items-stretch justify-between gap-[64px] rounded-[5px] bg-[#212121] bg-opacity-60 backdrop-blur-[12px] transition-all duration-200 hover:bg-opacity-80 mobile:h-fit mobile:w-full mobile:flex-col-reverse mobile:p-[12px] desktop:w-fit desktop:flex-row desktop:p-[40px]'
                        onClick={toggleMenu}
                        href={routes.offers}
                    >
                        <div className='w-0 border-r-[1px] border-white mobile:hidden desktop:block' />
                        <div className='flex w-full flex-col justify-between gap-[42px] mobile:max-w-full desktop:w-[161px]'>
                            <p className='font-primary leading-[170%]'>
                                {t('hiddenMenu.OffersText')}
                            </p>

                            <div className='flex items-center gap-[8px] font-primary transition duration-200'>
                                {t('hiddenMenu.OffersButtonLabel')}
                                <Image
                                    src={closeArrow}
                                    alt={''}
                                    width={42}
                                    height={42}
                                    unoptimized={true}
                                />
                            </div>
                        </div>
                    </ScrollToTopLink>

                    <nav
                        className={`flex justify-between rounded-[5px] bg-[#212121] bg-opacity-60 backdrop-blur-[12px] mobile:w-full mobile:flex-col mobile:gap-[24px] mobile:p-[12px] desktop:w-[401px] desktop:flex-row desktop:gap-[40px] desktop:px-[80px] desktop:py-[40px]`}
                    >
                        <menu className='flex flex-col justify-between gap-[16px] font-primary text-[16px] uppercase mobile:list-none desktop:list-disc'>
                            {anchorLinks.map(
                                (link: {
                                    title: string
                                    url: string
                                }): React.ReactNode => (
                                    <li
                                        onClick={toggleMenu}
                                        key={link.title}
                                        className='transition-filter ease w-fit cursor-pointer duration-150 hover:pl-[24px] hover:blur-[2px]'
                                    >
                                        <Link href={link.url}>
                                            {link.title}
                                        </Link>
                                    </li>
                                )
                            )}
                        </menu>
                        <menu className='flex list-none gap-[24px] mobile:flex-row mobile:justify-start desktop:flex-col '>
                            {socialLinks &&
                                socialLinks.map(
                                    (link: {
                                        iconSrc: string
                                        url: string
                                        title: string
                                    }): React.ReactNode => (
                                        <li key={link.title}>
                                            <a
                                                href={link.url}
                                                className='transition duration-150 ease-out hover:blur-[2px]'
                                                target='_blank'
                                            >
                                                <Image
                                                    width={24}
                                                    height={24}
                                                    src={link.iconSrc}
                                                    alt={link.title}
                                                />
                                            </a>
                                        </li>
                                    )
                                )}
                        </menu>
                    </nav>
                </div>
            </div>
        </div>
    )
}
