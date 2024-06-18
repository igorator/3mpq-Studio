import { Pathnames, LocalePrefix } from 'next-intl/routing'

export const defaultLocale = 'en' as const
export const locales = ['en', 'ua'] as const

export const pathnames: Pathnames<typeof locales> = {
    '/': '/',
    '/contact': {
        en: '/contact',
        ua: '/contact',
    },
    '/portfolio': {
        en: '/portfolio',
        ua: '/portfolio',
    },
    '/offers': {
        en: '/offers',
        ua: '/offers',
    },
    '/privacy-policy': {
        en: '/privacy-policy',
        ua: '/privacy-policy',
    },
    '/terms': {
        en: '/terms',
        ua: '/terms',
    },
    '/cookies': {
        en: '/cookies',
        ua: '/cookies',
    },
}

export const localePrefix: LocalePrefix<typeof locales> = 'always'

export const port = process.env.PORT || 3000
export const host = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : `http://localhost:${port}`
