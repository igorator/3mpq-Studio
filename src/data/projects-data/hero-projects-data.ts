import { ProjectSlideProps } from 'src/components/Slider/ProjectSlide'

import pharmbills from '@images/projects-images/1 Pharmbills.png'
import customary from '@images/projects-images/2 Customary.png'
import anrobo from '@images/projects-images/3 Anrobo.png'
import pharmbillsAcademy from '@images/projects-images/4 Pharmbills academy.png'

export const heroProjectsSlides: ProjectSlideProps[] = [
    {
        url: 'https://www.behance.net/gallery/164060455/Pharmbills-Redesign',
        name: 'Pharmbills',
        imgSrc: pharmbills,
    },
    {
        url: 'https://www.behance.net/gallery/148909183/Customary-Redesign',
        name: 'Customary',
        imgSrc: customary,
    },
    {
        url: 'https://www.behance.net/gallery/136608733/Anrobo-NFT-project',
        name: 'Anrobo',
        imgSrc: anrobo,
    },

    {
        url: 'https://www.behance.net/gallery/164665817/Pharmbills-academy-UIUX-Rebranding',
        name: 'Pharmbills academy',
        imgSrc: pharmbillsAcademy,
    },
]
