import { Hero } from '../sections/Hero'
import { Services } from '../sections/Services'
import { About } from '../sections/About'
import { Projects } from '../sections/Projects'
import { Compass } from '../sections/Compass'
import { ContactUs } from '../sections/ContactUs'
import { Pricing } from '../sections/Pricing'
import { Team } from '../sections/Team'
import { homePageProjectsData } from 'src/data/projects-data'
import { MainAnimationWrapper } from 'src/components/PageAnimations/HomeAnimationWrapper'
import { useTranslations } from 'next-intl'

export default function Home() {
    const t = useTranslations('Home')

    return (
        <main className='relative flex w-full flex-col items-center mobile:pb-[80px] desktop:pb-[150px]'>
            <MainAnimationWrapper>
                <Hero />
                <Services />
            </MainAnimationWrapper>
            <About />
            <Pricing />
            <Compass />
            <Team />
            <Projects id='projects' projects={homePageProjectsData} />
            <ContactUs />
        </main>
    )
}
