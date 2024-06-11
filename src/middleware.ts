import createMiddleware from 'next-intl/middleware'
import { locales, defaultLocale } from './config'

export default createMiddleware({
    // A list of all locales that are supported
    locales: locales,

    // Used when no locale matches
    defaultLocale: defaultLocale,
})

export const config = {
    matcher: ['/((?!api|_next|.*\\..*).*)'],
}
