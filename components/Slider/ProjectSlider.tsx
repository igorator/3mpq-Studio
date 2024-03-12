'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel } from 'swiper/modules'
import {
    ProjectSlide,
    ProjectSlideProps,
} from '@components/Slider/ProjectSlide'
import { LinkSliderButton } from '@components/Slider/SliderButtons'
import { routes } from '@data/routes'

type SliderProps = {
    slides: ProjectSlideProps[]
}

export const ProjectsSlider: React.FC<SliderProps> = ({ slides }) => {
    return (
        <Swiper
            spaceBetween={24}
            direction='horizontal'
            modules={[Mousewheel]}
            mousewheel={{
                forceToAxis: true,
            }}
            slidesPerGroupSkip={1}
            slidesPerView={'auto'}
            onSlideChange={() => {}}
            className='flex w-full flex-col-reverse gap-[40px] [&>.swiper-wrapper]:flex'
            breakpoints={{
                320: {
                    allowTouchMove: true,
                },

                768: {
                    allowTouchMove: true,
                },
                1023: {
                    allowTouchMove: true,
                },
            }}
        >
            {slides.map((slide) => (
                <SwiperSlide
                    key={slide.name}
                    className='w-fit shrink-0 cursor-none active:cursor-grabbing'
                >
                    <ProjectSlide {...slide} />
                </SwiperSlide>
            ))}

            <SwiperSlide>
                <LinkSliderButton path={routes.portfolio} />
            </SwiperSlide>
        </Swiper>
    )
}
