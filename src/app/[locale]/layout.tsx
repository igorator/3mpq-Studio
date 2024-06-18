import type { Metadata } from 'next'
import '@ui/globals.css'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { GoogleTagManager } from '@next/third-parties/google'
import { manrope, rubik } from '@ui/fonts'
import { GeistMono } from 'geist/font/mono'
import { PageWrapper } from 'src/components/PageWrapper'
import { HiddenMenu } from 'src/components/HiddenMenu/HiddenMenu'
import { SmoothScroll } from 'src/components/SmoothScroll'
import { locales } from 'src/config'
import { unstable_setRequestLocale } from 'next-intl/server'

export const metadata: Metadata = {
    title: '3mpq Studio',
    description:
        'Welcome to 3mpq Studio, where creativity meets innovation in a virtual design haven, blending elegance and functionality seamlessly to inspire your next masterpiece.',
    metadataBase: new URL('https://3mpq.com'),
    alternates: {
        canonical: '/',
        languages: {
            'en-US': '/en',
            'uk-UK': '/ua',
        },
    },

    openGraph: {
        title: '3mpq Studio',
        description:
            'Welcome to 3mpq Studio, where creativity meets innovation in a virtual design haven, blending elegance and functionality seamlessly to inspire your next masterpiece.',
        images: './opengraph-image.png',
    },
    twitter: {
        title: '3mpq Studio',
        description:
            'Welcome to 3mpq Studio, where creativity meets innovation in a virtual design haven, blending elegance and functionality seamlessly to inspire your next masterpiece.',
        images: './twitter-image.png',
    },
}

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }))
}

export default async function RootLayout({
    children,
    params: { locale },
}: {
    children: React.ReactNode
    params: { locale: string }
}) {
    const messages = await getMessages()
    unstable_setRequestLocale(locale)

    return (
        <html
            lang={locale}
            className={`${GeistMono.variable} ${manrope.variable} ${rubik.variable} relative`}
        >
            <body className='bg-black'>
                <NextIntlClientProvider messages={messages}>
                    <PageWrapper>
                        {children}
                        <SmoothScroll />
                        <HiddenMenu />
                    </PageWrapper>
                </NextIntlClientProvider>
            </body>
            <GoogleTagManager gtmId='GTM-PHT5T3DS' />
        </html>
    )
}
