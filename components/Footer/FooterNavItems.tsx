import { routes } from '@data/routes'
import { ScrollToTopLink } from '@components/ScrollToTopLink'
import Link from 'next/link'

const footerLinkStyles = 'uppercase transition duration-150 hover:blur-[2px]'

export const FooterNavItems = () => {
    return (
        <>
            <ScrollToTopLink className={footerLinkStyles} href={routes.root}>
                Home
            </ScrollToTopLink>
            <ScrollToTopLink
                className={footerLinkStyles}
                href={routes.portfolio}
            >
                Portfolio
            </ScrollToTopLink>
            <ScrollToTopLink className={footerLinkStyles} href={routes.contact}>
                Contact
            </ScrollToTopLink>

            <Link className={footerLinkStyles} href={'/#pricing'}>
                Pricing
            </Link>
        </>
    )
}
