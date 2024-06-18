import { Projects } from '../../sections/Projects'
import { allProjectsDataEn } from 'src/data/projects-data/projects-data-en'
import { allProjectsDataUa } from '@data/projects-data/projects-data-ua'
import { Project } from '@data/types'
import { ServicesAnimationWrapper } from 'src/components/PageAnimations/ServicesAnimationWrapper'
import { getLocale } from 'next-intl/server'

export default async function PortfolioPage() {
    const locale = await getLocale()

    let allProjectsData: Project[] = []

    if (locale === 'en') {
        allProjectsData = allProjectsDataEn
    } else if (locale === 'ua') {
        allProjectsData = allProjectsDataUa
    }

    return (
        <main className='relative flex w-full flex-col items-center pb-[150px] mobile:gap-[80px] desktop:gap-[150px]'>
            <ServicesAnimationWrapper>
                <Projects page id={'projects'} projects={allProjectsData} />
            </ServicesAnimationWrapper>
        </main>
    )
}
