import { Header } from '@components/Header'
import { PageNavigation } from '@components/PageNavigation/PageNavigation'
import { CustomDragCursor } from '@components/CustomCursor/CustomCursorSlider'
import { Footer } from '@components/Footer/Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <PageNavigation />
            {children}
            <CustomDragCursor />
            <Footer />
        </>
    )
}
