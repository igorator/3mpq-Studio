import { Projects } from '../../sections/Projects'
import { allProjectsData } from 'src/data/projects-data'
import { ServicesAnimationWrapper } from 'src/components/PageAnimations/ServicesAnimationWrapper'

export default function PortfolioPage() {
    return (
        <main className='relative flex w-full flex-col items-center pb-[150px] mobile:gap-[80px] desktop:gap-[150px]'>
            <ServicesAnimationWrapper>
                <Projects page id={'projects'} projects={allProjectsData} />
            </ServicesAnimationWrapper>
        </main>
    )
}
