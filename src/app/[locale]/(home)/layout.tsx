import { Header } from 'src/components/Header'
import { PageNavigation } from 'src/components/PageNavigation/PageNavigation'
import { CustomDragCursor } from 'src/components/CustomCursor/CustomCursorSlider'
import { Footer } from 'src/components/Footer/Footer'
import { CookieConsent } from 'src/components/CookiesConcentBanner'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <PageNavigation />
            {children}
            <CustomDragCursor />
            <CookieConsent />
            <Footer />
        </>
    )
}
