'use client'

import { ScrollToTopLink } from '@components/ScrollToTopLink'
import { routes } from '@data/routes'
import { usePathname } from 'next/navigation'

export const ShowMoreButton: React.FC = () => {
    const currentPage = usePathname()
    return (
        <ScrollToTopLink
            href={routes.portfolio}
            className={`${currentPage !== routes.portfolio ? 'flex' : 'hidden'} w-full items-center justify-center self-center  bg-white bg-opacity-0 text-black transition duration-200 ease-in-out hover:bg-opacity-[5%] active:bg-opacity-[10%] mobile:mt-0 mobile:py-[24px] desktop:mt-[-64px] desktop:py-[120px]`}
        >
            <div className='text-nowrap rounded-[5px] bg-white px-[29.5px] py-[8px] text-center font-primary leading-[170%]'>
                View portfolio
            </div>
        </ScrollToTopLink>
    )
}
