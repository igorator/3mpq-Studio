import { Link } from '@navigation'

export type HiddenMenuLinkProps = {
    title: string
    url: string
    toggleMenu: () => void
    scrollToSectionId: string
}

export const HiddenMenuLink: React.FC<HiddenMenuLinkProps> = ({
    title,
    url,
    toggleMenu,
}) => {
    return (
        <li
            onClick={toggleMenu}
            key={title}
            className='transition-filter ease w-[214px] cursor-pointer duration-150 hover:pl-[24px] hover:blur-[2px]'
        >
            <Link href={url}>{title}</Link>
        </li>
    )
}
