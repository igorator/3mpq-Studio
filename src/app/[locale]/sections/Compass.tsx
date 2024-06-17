'use client'
import { useRef } from 'react'
import { Section } from 'src/components/Section'
import { DefaultText } from 'src/components/Text'
import { GenerateNumberString } from 'src/components/Extra/GenerateNumberElements'
import { motion, useInView } from 'framer-motion'

export const Compass = () => {
    const inViewRef = useRef(null)
    const isInView = useInView(inViewRef)

    return (
        <Section
            id='compass'
            addStyles='flex-col gap-[64px] mobile:pt-[80px] desktop:pt-[150px]'
        >
            <div className='flex h-fit w-full flex-col justify-between gap-[64px]'>
                <div className='flex flex-col gap-[24px]'>
                    <div className='flex items-center gap-[24px]'>
                        <motion.div
                            layout
                            transition={{ duration: 0.5 }}
                            className={`${isInView ? 'mobile:w-full desktop:w-[32px]' : 'w-full'} border-t-[1px] border-white border-opacity-20`}
                        />
                        <motion.div layout>
                            <DefaultText additionalStyles='flex font-secondary mobile:min-w-[250px] desktop:min-w-[288px] justify-center text-16px py-[12px] bg-white text-black'>
                                Estimation & Briefing
                            </DefaultText>
                        </motion.div>
                        <motion.div
                            layout
                            className='w-full border-t-[1px] border-white'
                        />
                    </div>
                    <div className='flex gap-[24px] py-[12px]  [mask-image:_linear-gradient(to_right,transparent_0,_black_100px,_black_calc(100%-100px),transparent_100%)] mobile:justify-center desktop:justify-between'>
                        <GenerateNumberString
                            isInView={isInView}
                            highlighted={260}
                        />
                        <span className='flex-1 items-center justify-center font-accent font-bold opacity-40 mobile:flex desktop:hidden'>
                            240
                        </span>
                        <span className='flex-1 items-center justify-center font-accent font-bold opacity-100 mobile:flex desktop:hidden'>
                            260
                        </span>
                        <span className='flex-1 items-center justify-center font-accent font-bold opacity-40 mobile:flex desktop:hidden'>
                            280
                        </span>
                    </div>
                </div>
            </div>

            <div className='flex h-fit w-full flex-col justify-between gap-[64px]'>
                <div className='flex flex-col gap-[24px]'>
                    <div className='flex items-center gap-[24px]'>
                        <div className='w-full border-t-[1px] border-white border-opacity-20' />

                        <DefaultText additionalStyles='flex font-secondary mobile:min-w-[250px] desktop:min-w-[288px] justify-center text-16px py-[12px] bg-white text-black'>
                            Research & Analytics
                        </DefaultText>

                        <div
                            className='w-full border-t-[1px] border-white'
                            ref={inViewRef}
                        />
                    </div>
                    <div className='flex gap-[24px] py-[12px] [mask-image:_linear-gradient(to_right,transparent_0,_black_100px,_black_calc(100%-100px),transparent_100%)] mobile:justify-center desktop:justify-between'>
                        <GenerateNumberString
                            isInView={isInView}
                            highlighted={0}
                        />
                        <span className='flex-1 items-center justify-center font-accent font-bold opacity-40 mobile:flex desktop:hidden'>
                            340
                        </span>
                        <span className='flex-1 items-center justify-center font-accent font-bold opacity-100 mobile:flex desktop:hidden'>
                            0
                        </span>
                        <span className='flex-1 items-center justify-center font-accent font-bold opacity-40 mobile:flex desktop:hidden'>
                            20
                        </span>
                    </div>
                </div>
            </div>

            <div className='flex h-fit w-full flex-col justify-between gap-[64px]'>
                <div className='flex flex-col gap-[24px]'>
                    <div className='flex items-center gap-[24px]'>
                        <motion.div
                            layout
                            className='w-full border-t-[1px] border-white border-opacity-20'
                        />
                        <motion.div layout>
                            <DefaultText additionalStyles='flex font-secondary mobile:min-w-[250px] desktop:min-w-[288px] justify-center text-16px py-[12px] bg-white text-black'>
                                Design & Development
                            </DefaultText>
                        </motion.div>
                        <motion.div
                            layout
                            transition={{ duration: 0.5 }}
                            className={`${isInView ? 'mobile:w-full desktop:w-[32px]' : 'w-full'} border-t-[1px] border-white`}
                        />
                    </div>
                    <div className='flex gap-[24px] py-[12px]  [mask-image:_linear-gradient(to_right,transparent_0,_black_100px,_black_calc(100%-100px),transparent_100%)] mobile:justify-center desktop:justify-between'>
                        <GenerateNumberString
                            highlighted={100}
                            isInView={isInView}
                        />
                        <span className='flex-1 items-center justify-center font-accent font-bold opacity-40 mobile:flex desktop:hidden'>
                            80
                        </span>
                        <span className='flex-1 items-center justify-center font-accent font-bold opacity-100 mobile:flex desktop:hidden'>
                            100
                        </span>
                        <span className='flex-1 items-center justify-center font-accent font-bold opacity-40 mobile:flex desktop:hidden'>
                            120
                        </span>
                    </div>
                </div>
            </div>
        </Section>
    )
}
