'use client'

import Image, { StaticImageData } from 'next/image'
import { Heading, DefaultText, Paragraph } from '@components/Text'
import linkArrow from '@icons/close-arrow.svg'
import { motion } from 'framer-motion'

interface ProjectCardProps {
    name: string
    description: string
    imgSrc: StaticImageData
    orderNumber: number
    url: string
    scrollBoundary?: string
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
    imgSrc,
    name,
    description,
    orderNumber,
    url,
    scrollBoundary,
}) => {
    return (
        <motion.a
            target='_blank'
            {...(url.length > 0 && { href: url })}
            className={`group ${scrollBoundary} flex w-full items-center justify-between gap-[24px] overflow-hidden border-t-[1px] border-[#808080] py-[64px] mobile:flex-col desktop:flex-row`}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.5 }}
            viewport={{ once: true }}
        >
            <Image
                src={imgSrc}
                alt={name}
                width={288}
                height={229}
                className='rounded-[5px] object-cover opacity-60 transition duration-150 group-hover:opacity-100 mobile:w-full desktop:h-[229px] desktop:w-[288px]'
            />
            <div className='flex h-full flex-col items-end justify-between gap-[24px]'>
                {url.length > 0 ? (
                    <span className='self-start rounded-full bg-white px-[16px] text-center font-secondary leading-[200%] text-[#212121]'>
                        View project
                    </span>
                ) : (
                    <span></span>
                )}
                <div className='flex w-full items-baseline gap-[16px] self-start'>
                    <DefaultText additionalStyles='font-secondary'>{`${orderNumber < 10 ? '0' : ''}${orderNumber}`}</DefaultText>
                    <Heading headingLevel={2}>{name}</Heading>

                    <Image
                        width={42}
                        height={24}
                        src={linkArrow}
                        alt={'show project'}
                        className={`ml-auto self-start transition duration-150 group-hover:blur-[2px] ${url.length > 0 ? 'visible' : 'invisible'}`}
                    />
                </div>

                <Paragraph
                    paragraphType={'default'}
                    additionalStyles='max-w-[560px] mobile:mr-[0px] desktop:mr-[30px] max-h-[95px] line-clamp-3'
                >
                    {description}
                </Paragraph>
            </div>
        </motion.a>
    )
}
