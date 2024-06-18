import halinsky from '@images/team-photos/Halinsky.webp'
import kliushnyk from '@images/team-photos/Kliushnyk.webp'
import { TeamMemberCardType } from './types'

export const teamMemberCardsDataEn: TeamMemberCardType[] = [
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

export const teamMemberCardsDataUa: TeamMemberCardType[] = [
    {
        type: 'header',
        title: 'Наша команда',
    },
    {
        type: 'empty',
    },
    {
        type: 'text',
        text: `Наша команда складається з висококваліфікованих фахівців, кожен з яких є майстром у своїй галузі

Кожен член команди є експертом у своїй галузі, володіє глибоким розумінням та здатністю до інновацій та виконання.`,
    },
    {
        type: 'empty',
    },
    {
        type: 'empty',
    },
    {
        type: 'avatar',
        name: 'ІГОР КЛЮШНИК',
        jobTitle: 'Front-end Розробник',
        imgSrc: kliushnyk,
    },
    {
        type: 'empty',
    },
    {
        type: 'avatar',
        name: 'КОСТЯНТИН ГАЛИНСЬКИЙ',
        jobTitle: 'Lead UI/UX Дизайнер',
        imgSrc: halinsky,
    },
]
