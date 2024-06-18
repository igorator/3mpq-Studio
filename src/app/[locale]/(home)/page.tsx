import { Hero } from '../sections/Hero'
import { Services } from '../sections/Services'
import { About } from '../sections/About'
import { Projects } from '../sections/Projects'
import { Compass } from '../sections/Compass'
import { ContactUs } from '../sections/ContactUs'
import { Pricing } from '../sections/Pricing'
import { Team } from '../sections/Team'
import { MainAnimationWrapper } from 'src/components/PageAnimations/HomeAnimationWrapper'
import { getLocale, getTranslations } from 'next-intl/server'

import {
    PricingCardData,
    Project,
    ServicesFaqItem,
    TeamMemberCardType,
} from '@data/types'

import { heroProjectsSlides } from '@data/projects-data/hero-projects-data'
import { homePageProjectsDataEn } from 'src/data/projects-data/projects-data-en'
import { homePageProjectsDataUa } from '@data/projects-data/projects-data-ua'
import { servicesDataEn, servicesDataUa } from 'src/data/services-data'
import { pricingCardsDataEn, pricingCardsDataUa } from 'src/data/pricing-data'
import {
    teamMemberCardsDataEn,
    teamMemberCardsDataUa,
} from 'src/data/team-data'

export default async function Home() {
    const locale = await getLocale()
    const t = await getTranslations()

    let services: ServicesFaqItem[] = []
    let pricingCardData: PricingCardData[] = []
    let teamMemberCardsData: TeamMemberCardType[] = []
    let homePageProjectData: Project[] = []

    if (locale === 'en') {
        homePageProjectData = homePageProjectsDataEn
        pricingCardData = pricingCardsDataEn
        services = servicesDataEn
        teamMemberCardsData = teamMemberCardsDataEn
    } else if (locale === 'ua') {
        homePageProjectData = homePageProjectsDataUa
        pricingCardData = pricingCardsDataUa
        services = servicesDataUa
        teamMemberCardsData = teamMemberCardsDataUa
    }

    return (
        <main className='relative flex w-full flex-col items-center mobile:pb-[80px] desktop:pb-[150px]'>
            <MainAnimationWrapper>
                <Hero id='hero' slides={heroProjectsSlides} />
                <Services id='services' services={services} />
            </MainAnimationWrapper>
            <About id='about' text={t('Home.About')} />
            <Pricing id='pricing' pricingCardData={pricingCardData} />
            <Compass id='compass' />
            <Team id='our-team' teamMemberCardsData={teamMemberCardsData} />
            <Projects id='projects' projects={homePageProjectData} />
            <ContactUs />
        </main>
    )
}
