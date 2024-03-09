import Image from 'next/image'
import { Logo } from '@components/Logo'
import { ScrollToTopButton } from '@components/Buttons/ScrollToTopButton'
import { FooterNavItems } from '@components/Footer/FooterNavItems'
import abstactSpiral from '@images/decorative/spiral.svg'
import doubleCircle from '@images/decorative/double-circle.svg'
import polkaDots from '@images/decorative/polka-dots.svg'
import { ScrollToTopLink } from '@components/ScrollToTopLink'
import { routes } from '@data/routes'

export const Footer = () => {
    return (
        <footer className='flex w-full max-w-[1440px] flex-col items-center justify-center mobile:gap-[80px] mobile:px-[12px] desktop:gap-[120px] desktop:px-[56px] [&>*]:border-white [&>*]:mobile:border-opacity-100 [&>*]:desktop:border-opacity-50'>
            <div className='w-full grid-cols-2 grid-rows-2 mobile:flex mobile:flex-col mobile:gap-[32px] desktop:grid desktop:gap-0'>
                <div className='d flex border-r-[1px] mobile:justify-start mobile:border-opacity-100 mobile:p-0 desktop:items-start desktop:justify-between desktop:border-b-[1px] desktop:pb-[32px] desktop:pr-[64px]'>
                    <Image
                        width={141}
                        height={144}
                        src={abstactSpiral}
                        alt={''}
                        className='mobile:hidden desktop:block'
                    />
                    <ul className='text-16px text-none flex h-full flex-col justify-start font-secondary not-italic leading-[200%] mobile:items-start desktop:items-end '>
                        <li>
                            <address className='uppercase not-italic'>
                                Web design & devlopment
                            </address>
                        </li>
                        <li>
                            <address className='uppercase not-italic'>
                                3mpq
                            </address>
                        </li>
                        <li>
                            <address className='uppercase not-italic'>
                                Studio
                            </address>
                        </li>
                    </ul>
                </div>

                <div className='order-first items-end justify-between mobile:p-0 desktop:order-none desktop:flex desktop:border-b-[1px] desktop:pb-[32px] desktop:pl-[64px]'>
                    <div className='flex h-full justify-between pt-[5px] mobile:flex-row desktop:flex-col'>
                        <ScrollToTopButton />
                    </div>

                    <Image
                        width={105}
                        height={96}
                        src={doubleCircle}
                        alt={''}
                        className='self-start mobile:hidden desktop:block'
                    />
                </div>

                <div className='flex border-r-[1px] pr-[64px] pt-[32px] mobile:order-last   mobile:p-0 desktop:order-none desktop:items-end desktop:justify-start desktop:pr-[64px] desktop:pt-[32px]'>
                    <div className='flex h-fit w-fit flex-col font-secondary'>
                        <ScrollToTopLink
                            href={routes.privacy}
                            className='opacity-20 transition-opacity duration-150 hover:opacity-100'
                        >
                            PRIVACY POLICY
                        </ScrollToTopLink>
                        <ScrollToTopLink
                            href={routes.terms}
                            className='opacity-20 transition-opacity duration-150 hover:opacity-100'
                        >
                            TERMS OF SERVICE
                        </ScrollToTopLink>
                    </div>
                </div>

                <div className='flex justify-between mobile:border-l mobile:p-0 desktop:items-end desktop:border-none desktop:pl-[64px] desktop:pt-[32px]'>
                    <menu className='flex list-none flex-col font-secondary text-[16px] leading-[200%] mobile:w-full mobile:items-end desktop:items-start [&>li]:w-fit'>
                        <FooterNavItems />
                    </menu>
                    <Image
                        width={134}
                        height={139}
                        src={polkaDots}
                        alt={''}
                        className='mobile:hidden desktop:block'
                    />
                </div>
            </div>
        </footer>
    )
}
