'use client'
import Link from 'next/link'
import Image from 'next/image'
import { NavLink } from 'src/components/PageNavigation/NavLink'
import { Heading } from 'src/components/Text'
import { usePathname } from '../../navigation'
import { motion } from 'framer-motion'
import { routes } from 'src/data/routes'
import { pageConfig } from 'src/data/page-nav-config'
import pageNavArrow from '@icons/page-nav-arrow.svg'

export const PageNavigation = () => {
    const currentPage: string = usePathname()

    const { pageHeading, pageText } = pageConfig[currentPage] || ['', '']

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex w-full max-w-[1440px] flex-col mobile:gap-[40px] mobile:px-[12px] mobile:pb-[16px] mobile:pt-[56px] desktop:justify-end desktop:gap-[64px] desktop:px-[56px] desktop:pb-[64px] desktop:pt-[64px]`}
        >
            <Link
                className={`flex w-full justify-between gap-[32px] transition duration-200 mobile:flex-col mobile:items-start mobile:hover:blur-0 desktop:flex-row desktop:items-center ${currentPage === routes.root ? 'cursor-default hover:blur-[0px]' : 'group desktop:hover:blur-[4px] '}`}
                href={'/'}
                scroll={false}
            >
                <motion.div
                    key={pageHeading}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: 'easeInOut', duration: 0.3 }}
                    className='flex mobile:gap-[16px] desktop:gap-[32px]'
                >
                    {currentPage !== routes.root && (
                        <Image
                            width={40}
                            height={40}
                            src={pageNavArrow}
                            alt={'Back'}
                            priority
                        />
                    )}
                    <Heading
                        headingLevel={2}
                        additionalStyles='flex-1 transition duration-200 desktop:group-hover:translate-x-[10px]'
                    >
                        {pageHeading}
                    </Heading>
                </motion.div>
                <span className='font-secondary text-[16px] opacity-50 transition-all duration-200 mobile:group-hover:opacity-50 desktop:group-hover:opacity-0'>
                    {currentPage === routes.root
                        ? 'Enjoy your journey'
                        : 'Back to home'}
                </span>
            </Link>
            <div
                className={`flex h-fit justify-between gap-[40px] mobile:flex-col desktop:flex-row-reverse`}
            >
                <motion.nav
                    layout
                    className='flex flex-col justify-end gap-[8px] mobile:w-full mobile:max-w-[341px] desktop:w-[288px]'
                >
                    <NavLink href={routes.portfolio} currentPage={currentPage}>
                        All our projects
                    </NavLink>
                </motion.nav>

                <motion.p
                    key={currentPage}
                    exit={{ opacity: 0, x: -20 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ ease: 'easeInOut', duration: 0.3 }}
                    className='flex max-w-[780px] self-end whitespace-pre-line text-pretty font-primary leading-[200%] desktop:pb-[8px] desktop:text-[16px]'
                >
                    {pageText}
                </motion.p>
            </div>
        </motion.div>
    )
}
