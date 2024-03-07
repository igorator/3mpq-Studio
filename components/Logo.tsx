import Image from 'next/image'
import Link from 'next/link'
import { routes } from '@data/routes'
import logoWhite from '@public/logo/logo.svg'
import logoDark from '@public/logo/logo-dark.svg'

export const Logo: React.FC<{
    styleSrc?: 'default' | 'dark'
    scroll?: boolean
}> = ({ styleSrc, scroll }) => {
    const src = styleSrc ?? 'default'

    return (
        <Link
            href={routes.root}
            className='transition duration-150 desktop:hover:blur-[2px]'
            scroll={scroll}
        >
            <Image
                src={src === 'dark' ? logoDark : logoWhite}
                alt='3mpq'
                width={40}
                height={40}
                priority={true}
            />
        </Link>
    )
}
