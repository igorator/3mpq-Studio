import Image from 'next/image'
import { useSwiper } from 'swiper/react'
import { ScrollToTopLink } from '@components/ScrollToTopLink'
import sliderNextSlideArrow from '@icons/slider-arrow-wide.svg'
import sliderProjectsArrow from '@icons/slider-arrow-projects.svg'

export const SliderTopButton = ({
    isLastSlide,
    setIsLastSlide,
    sliderTitle,
}: {
    isLastSlide: boolean
    setIsLastSlide: React.Dispatch<React.SetStateAction<boolean>>
    sliderTitle: string
}) => {
    const slider = useSwiper()
    return (
        <div className={`w-full items-center justify-between desktop:flex `}>
            <h1 className='font-primary text-[32px] capitalize'>
                {sliderTitle}
            </h1>
            <button
                aria-label='next slide'
                className='mr-[104px]'
                onClick={
                    isLastSlide
                        ? () => {
                              slider.slideTo(0)
                              setIsLastSlide(false)
                          }
                        : () => slider.slideNext()
                }
            >
                <Image
                    className={`transition-transform ease-linear mobile:invisible desktop:visible ${
                        isLastSlide && `rotate-180`
                    }`}
                    src={sliderNextSlideArrow}
                    alt={'next slide'}
                    width={52}
                    height={32}
                />
            </button>
        </div>
    )
}

export const LinkSliderButton: React.FC<{ path: string }> = ({ path }) => {
    return (
        <ScrollToTopLink
            href={path}
            className='link-slider-button hover:shadow-[4px 4px 32px 0px rgba(0, 0, 0, 0.45)] flex h-[89%] shrink-0 items-center justify-center rounded-[10px] bg-[#FFFFFF] bg-opacity-0 transition duration-300 ease-in-out hover:bg-opacity-5 active:bg-opacity-10 mobile:h-[206px] mobile:w-[120px] desktop:h-[519px] desktop:w-[184px]'
        >
            <Image
                width={96}
                height={96}
                src={sliderProjectsArrow}
                alt={'Portfolio'}
                className='h-auto w-auto'
                priority
            />
        </ScrollToTopLink>
    )
}
