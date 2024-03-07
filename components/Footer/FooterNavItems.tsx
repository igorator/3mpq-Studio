import { routes } from '@data/routes'
import { ScrollToTopLink } from '@components/ScrollToTopLink'

export const FooterNavItems = () => {
    return (
        <>
            <ScrollToTopLink
                className='uppercase transition duration-150 hover:blur-[2px]'
                href={routes.root}
            >
                Home
            </ScrollToTopLink>
            <ScrollToTopLink
                className='uppercase transition duration-150 hover:blur-[2px]'
                href={routes.portfolio}
            >
                Portfolio
            </ScrollToTopLink>
            <ScrollToTopLink
                className='uppercase transition duration-150 hover:blur-[2px]'
                href={routes.contact}
            >
                Contact
            </ScrollToTopLink>
        </>
    )
}
