import { Hero } from 'app/sections/Hero'
import { Services } from '@sections/Services'
import { Timeline } from '@sections/Timeline'
import { Projects } from '@sections/Projects'
import { Compass } from '@sections/Compass'
import { ContactUs } from '@sections/ContactUs'
import { homePageProjectsData } from '@data/projects-data'
import { MainAnimationWrapper } from '@components/PageAnimations/HomeAnimationWrapper'
import { servicesData } from '@data/services-data'
import { Pricing } from '@sections/Pricing'
import { pricingCardsData } from '@data/pricing-data'

export default function Home() {
    return (
        <main className='relative flex w-full flex-col items-center mobile:gap-[80px] mobile:pb-[80px] desktop:gap-[150px] desktop:pb-[120px]'>
            <MainAnimationWrapper>
                <Hero />
            </MainAnimationWrapper>
            <Services id='services' services={servicesData} />
            <Timeline
                id='about'
                text='We blend innovative design with cutting-edge technology to craft digital experiences that resonate. Our expertise spans React, Next.js, Vue.js, Tailwind, TypeScript, Node.js, Ruby on Rails, PostgreSQL, and Webflow, ensuring we deliver solutions that are not only visually stunning but highly functional. Explore our portfolio to see our dedication to excellence. If our approach to seamless design and robust development strikes a chord, we`ve achieved our mission. Let`s create something extraordinary together.'
            />
            <Pricing id='pricing' pricingCardsData={pricingCardsData} />
            <Compass id='compass' />
            <Projects id='projects' projects={homePageProjectsData} />
            <ContactUs />
        </main>
    )
}
