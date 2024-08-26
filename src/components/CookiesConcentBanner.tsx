'use client'

import { useState, useEffect } from 'react'
import { setCookie, hasCookie } from '@actions/cookies'
import { ScrollToTopLink } from './ScrollToTopLink'
import { routes } from 'src/data/routes'
import { useTranslations } from 'next-intl'

export const CookieConsent = () => {
    const [showConsent, setShowConsent] = useState(true)
    const t = useTranslations()

    useEffect(() => {
        const checkConsent = async () => {
            setShowConsent(await hasCookie('cookiesConsent'))
        }

        checkConsent()
    }, [])

    const acceptCookie = () => {
        setCookie('cookiesConsent', 'true', {})
        setShowConsent(true)
    }

    return (
        <div
            className={`fixed flex max-w-[500px] flex-col items-end gap-[30px] bg-gray-100 px-4 py-4 transition-opacity duration-200 mobile:bottom-0 mobile:flex-col mobile:shadow-none desktop:bottom-[20px] desktop:right-[20px] desktop:rounded-[5px] desktop:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] ${showConsent ? 'translate-y-16 opacity-0 ' : 'translate-y-0 opacity-100'}`}
        >
            <span className='w-fit text-pretty font-secondary text-black'>
                {t('CookiesBanner.text')}{' '}
                <ScrollToTopLink href={routes.cookies} className='underline'>
                    Cookie Policy
                </ScrollToTopLink>
                .
            </span>
            <button
                className='w-fit rounded bg-[#212121] px-8 py-2 font-secondary text-white duration-150 ease-out hover:opacity-70'
                onClick={acceptCookie}
            >
                {t('CookiesBanner.buttonLabel')}
            </button>
        </div>
    )
}
