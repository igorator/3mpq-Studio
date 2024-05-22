import { StaticImageData } from 'next/image'
import halinsky from '@images/team-photos/Halinsky.webp'
import kliushnyk from '@images/team-photos/Kliushnyk.webp'

type TeamMemberCard = {
    type: 'header' | 'avatar' | 'text' | 'empty'
}

export type HeadingTeamMemberCardType = TeamMemberCard & {
    type: 'header'
    title: string
}

export type AvatarTeamMemberCardType = TeamMemberCard & {
    type: 'avatar'
    name: string
    jobTitle: string
    imgSrc: StaticImageData
    desktopOrder?: number | string
    mobileOrder?: number | string
}

export type TextTeamMemberCardType = TeamMemberCard & {
    type: 'text'
    text: string
    desktopOrder?: number | string
    mobileOrder?: number | string
}

export type EmptyTeamMemberCardType = TeamMemberCard & {
    type: 'empty'
}

export const teamMemberCardsData: (
    | HeadingTeamMemberCardType
    | AvatarTeamMemberCardType
    | TextTeamMemberCardType
    | EmptyTeamMemberCardType
)[] = [
    {
        type: 'header',
        title: 'Our Team',
    },
    {
        type: 'empty',
    },
    {
        type: 'text',
        text: `Our team is comprised of highly skilled professionals, each a master in their field.

        Every member is an expert craftsman in their discipline, equipped with a deep understanding and a profound capacity for innovation and execution.`,
    },
    {
        type: 'empty',
    },
    {
        type: 'empty',
    },
    {
        type: 'avatar',
        name: 'IHOR KLIUSHNYK',
        jobTitle: 'Front-end Developer',
        imgSrc: kliushnyk,
    },
    {
        type: 'empty',
    },
    {
        type: 'avatar',
        name: 'KOSTIANTYN HALYNSKYI',
        jobTitle: 'Lead UI/UX Designer',
        imgSrc: halinsky,
    },
]
