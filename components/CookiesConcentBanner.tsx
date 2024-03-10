'use client'

import { useState, useEffect } from 'react'
import { hasCookie, setCookie } from 'cookies-next'
import { ScrollToTopLink } from './ScrollToTopLink'
import { routes } from '@data/routes'

export const CookieConsent = () => {
    const [showConsent, setShowConsent] = useState(true)

    useEffect(() => {
        setShowConsent(hasCookie('localConsent'))
    }, [])

    const acceptCookie = () => {
        setShowConsent(true)
        setCookie('localConsent', 'true', {})
    }

    if (showConsent) {
        return null
    }

    return (
        <div
            className={`fixed inset-0 bg-black bg-opacity-70 transition-opacity duration-200`}
        >
            <div className='fixed bottom-0 left-0 right-0 flex items-center justify-between gap-[30px] bg-gray-100 px-4 py-8 mobile:flex-col desktop:flex-row'>
                <span className='text-center font-secondary text-base text-black mobile:mr-0 mobile:text-balance desktop:mr-16'>
                    This website uses cookies to improve user experience. By
                    using our website you consent to all cookies in accordance
                    with our{' '}
                    <ScrollToTopLink
                        href={routes.privacy}
                        className='underline'
                    >
                        Cookie Policy
                    </ScrollToTopLink>
                    .
                </span>
                <button
                    className='rounded bg-[#212121] px-8 py-2 font-secondary text-white'
                    onClick={() => acceptCookie()}
                >
                    Accept
                </button>
            </div>
        </div>
    )
}
