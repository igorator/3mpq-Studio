import { StaticImageData } from 'next/image'

export type ProjectCardProps = {
    name: string
    description: string
    imgSrc: StaticImageData
    orderNumber: number
    url: string
    scrollBoundary?: string
}

export type Project = {
    name: string
    description: string
    url: string
    imgSrc: StaticImageData
}

export type TermsCardsProps = {
    title: string
    text: string
}

export type PricingCardData = {
    id: number
    heading: string
    price: number
    subtext: string
    benefits: string[]
    isMostPopular?: boolean
}

export type ServicesFaqItem = {
    question: string
    answer: string
}

type TeamMemberCardBase = {
    desktopOrder?: number | string
    mobileOrder?: number | string
}

// Определяем типы для каждого типа карты
export type HeadingTeamMemberCardType = TeamMemberCardBase & {
    type: 'header'
    title: string
}

export type AvatarTeamMemberCardType = TeamMemberCardBase & {
    type: 'avatar'
    name: string
    jobTitle: string
    imgSrc: StaticImageData
}

export type TextTeamMemberCardType = TeamMemberCardBase & {
    type: 'text'
    text: string
}

export type EmptyTeamMemberCardType = TeamMemberCardBase & {
    type: 'empty'
}

// Используем объединение типов для создания окончательного типа TeamMemberCard
export type TeamMemberCardType =
    | HeadingTeamMemberCardType
    | AvatarTeamMemberCardType
    | TextTeamMemberCardType
    | EmptyTeamMemberCardType
