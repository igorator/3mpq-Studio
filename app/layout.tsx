import type { Metadata } from 'next'
import { GoogleTagManager } from '@next/third-parties/google'
import { manrope, michroma, rubik } from '@ui/fonts'
import '@ui/globals.css'
import { PageWrapper } from '@components/PageWrapper'
import { HiddenMenu } from '@components/HiddenMenu/HiddenMenu'
import { SmoothScroll } from '@components/SmoothScroll'

export const metadata: Metadata = {
    title: '3mpq Studio',
    description:
        'Welcome to 3mpq Studio, where creativity meets innovation in a virtual design haven, blending elegance and functionality seamlessly to inspire your next masterpiece.',
    metadataBase: new URL('https://3mpq-studio.com'),
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html
            lang='en'
            className={`${manrope.variable} ${michroma.variable} ${rubik.variable} relative`}
        >
            <body className='bg-black'>
                <PageWrapper>
                    {children}
                    <SmoothScroll />
                    <HiddenMenu />
                </PageWrapper>
            </body>
            <GoogleTagManager gtmId='GTM-N69VRBDT' />
        </html>
    )
}
