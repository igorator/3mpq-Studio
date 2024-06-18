'use client'

import { ScrollToTopLink } from 'src/components/ScrollToTopLink'
import { routes } from 'src/data/routes'
import { usePathname } from '../../navigation'
import { useTranslations } from 'next-intl'

export const ShowMoreButton: React.FC = () => {
    const currentPage = usePathname()
    const t = useTranslations()

    return (
        <ScrollToTopLink
            href={routes.portfolio}
            className={`${currentPage !== routes.portfolio ? 'flex' : 'hidden'} w-full items-center justify-center self-center  bg-white bg-opacity-0 text-black transition duration-200 ease-in-out hover:bg-opacity-[5%] active:bg-opacity-[10%] mobile:mt-0 mobile:py-[24px] desktop:mt-[-64px] desktop:py-[120px]`}
        >
            <div className='text-nowrap rounded-[5px] bg-white px-[29.5px] py-[8px] text-center font-primary leading-[170%]'>
                {t('ctaButtons.viewPortfolio')}
            </div>
        </ScrollToTopLink>
    )
}
