import Image from 'next/image'
import { Paragraph } from '@components/Text'
import {
    HeadingTeamMemberCardType,
    AvatarTeamMemberCardType,
    TextTeamMemberCardType,
    EmptyTeamMemberCardType,
} from '@data/team-data'

const commonStyles =
    'flex mobile:h-[280px] desktop:h-[467px] justify-center rounded-[5px] desktop:py-[40px] mobile:py-[24px] mobile:px-[10px]'

export const TeamHeaderCard: React.FC<HeadingTeamMemberCardType> = ({
    title,
}) => {
    return (
        <div
            className={`${commonStyles} relative order-first items-center text-balance bg-white`}
        >
            <h1 className='text-center font-primary uppercase leading-[150%] text-black mobile:text-[16px] desktop:text-[32px] '>
                {title}
            </h1>
        </div>
    )
}

export const TeamMemberCard: React.FC<AvatarTeamMemberCardType> = ({
    name,
    jobTitle,
    imgSrc,
    mobileOrder,
    desktopOrder,
}) => {
    return (
        <div
            className={`${commonStyles} group relative items-end overflow-clip text-balance rounded-[5px] py-[40px] font-accent uppercase mobile:order-${mobileOrder} desktop:order-${desktopOrder}`}
        >
            <Image
                className='z-1 absolute object-cover grayscale transition-all duration-150 ease-in-out group-hover:grayscale-0'
                src={imgSrc}
                alt={`${name}, ${jobTitle}`}
                fill
                sizes='100%'
            />
            <div className='z-2 absolute bottom-0  h-full w-full bg-black bg-opacity-40 transition-all duration-150 ease-in-out group-hover:bg-opacity-0'></div>

            <div className='relative flex w-full justify-center self-end'>
                <span className='z-2 absolute bottom-0 w-fit text-center transition-all duration-150 ease-in-out group-hover:opacity-0 desktop:opacity-100'>
                    {name}
                </span>
                <span className='z-2 relative w-fit max-w-[280px] text-center opacity-0 transition-all duration-150 ease-in-out group-hover:opacity-100'>
                    {jobTitle}
                </span>
            </div>
        </div>
    )
}

export const TeamTextCard: React.FC<TextTeamMemberCardType> = ({
    text,
    mobileOrder,
    desktopOrder,
}) => {
    return (
        <div
            className={`${commonStyles} items-center justify-center gap-[30px] whitespace-pre-line text-pretty rounded-[5px] px-[16px] py-[40px] mobile:order-${mobileOrder}  desktop:order-${desktopOrder} font-secondary leading-[200%] mobile:text-[8px] desktop:text-[16px]`}
        >
            <div className='max-w-[234px]'>
                <Paragraph
                    paragraphType='team'
                    additionalStyles='whitespace-pre-line'
                >
                    {text}
                </Paragraph>
            </div>
        </div>
    )
}

export const TeamEmptyCard: React.FC<EmptyTeamMemberCardType> = ({}) => {
    return <div className='mobile:hidden desktop:flex'></div>
}
