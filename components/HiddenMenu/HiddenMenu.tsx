'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'
import { useMenu } from '@hooks/useMenu'
import { anchorLinks } from '@data/achor-links'
import xIcon from '@social-icons/x.svg'
import linkedinIcon from '@social-icons/linkedin.svg'
import facebookIcon from '@social-icons/facebook.svg'
import instagramIcon from '@social-icons/instagram.svg'
import closeArrow from '@icons/close-arrow.svg'

const socialLinks = [
    { iconSrc: xIcon, url: 'https://twitter.com/', title: 'X' },
    {
        iconSrc: linkedinIcon,
        url: 'https://www.linkedin.com/',
        title: 'LinkedIn',
    },
    {
        iconSrc: facebookIcon,
        url: 'https://www.facebook.com/',
        title: 'Facebook',
    },
    {
        iconSrc: instagramIcon,
        url: 'https://www.instagram.com/',
        title: 'Instagram',
    },
]

export const HiddenMenu = () => {
    const { isMenuOpen, toggleMenu } = useMenu()

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
            } z-1000 fixed left-0 right-0 top-0 flex h-[100dvh] w-full flex-col items-center bg-black bg-opacity-60 text-white transition-all duration-300 mobile:pt-[32px] desktop:pt-[46px]`}
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

                <nav
                    onClick={(e) => {
                        e.stopPropagation()
                    }}
                    className={`flex justify-between rounded-[5px] bg-[#212121] bg-opacity-60 backdrop-blur-[12px] mobile:w-full mobile:flex-col mobile:gap-[24px] mobile:p-[12px] desktop:w-[478px] desktop:flex-row desktop:gap-[40px] desktop:px-[80px] desktop:py-[40px]`}
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
                                    <Link href={link.url}>{link.title}</Link>
                                </li>
                            )
                        )}
                    </menu>
                    <menu className='flex list-none gap-[24px] mobile:flex-row mobile:justify-start desktop:flex-col desktop:justify-between'>
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
    )
}
