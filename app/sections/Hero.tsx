import { Section } from '@components/Section'
import { ProjectsSlider } from '@components/Slider/ProjectSlider'
import { projectsSlides } from '@data/projects-data'

export const Hero = () => {
    return (
        <Section id='hero'>
            <div className='flex w-full justify-start mobile:flex-col-reverse mobile:gap-[56px] desktop:flex-col '>
                <ProjectsSlider slides={projectsSlides} />
            </div>
        </Section>
    )
}
