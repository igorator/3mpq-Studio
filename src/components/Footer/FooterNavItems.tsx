import { routes } from 'src/data/routes'
import { ScrollToTopLink } from 'src/components/ScrollToTopLink'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'

const footerLinkStyles = 'uppercase transition duration-150 hover:blur-[2px]'

export const FooterNavItems = async () => {
    const t = await getTranslations()

    return (
        <>
            <ScrollToTopLink className={footerLinkStyles} href={routes.root}>
                {t('Footer.navItems.Home')}
            </ScrollToTopLink>
            <ScrollToTopLink
                className={footerLinkStyles}
                href={routes.portfolio}
            >
                {t('Footer.navItems.Portfolio')}
            </ScrollToTopLink>
            <ScrollToTopLink className={footerLinkStyles} href={routes.contact}>
                {t('Footer.navItems.Contact')}
            </ScrollToTopLink>

            <Link className={footerLinkStyles} href={'/#pricing'}>
                {t('Footer.navItems.Pricing')}
            </Link>
        </>
    )
}
