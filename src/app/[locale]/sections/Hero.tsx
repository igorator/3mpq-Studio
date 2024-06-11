import { Section } from 'src/components/Section'
import { ProjectsSlider } from 'src/components/Slider/ProjectSlider'
import { projectsSlides } from 'src/data/projects-data'

export const Hero = () => {
    return (
        <Section id='hero'>
            <div className='flex w-full justify-start mobile:flex-col-reverse mobile:gap-[56px] desktop:flex-col '>
                <ProjectsSlider slides={projectsSlides} />
            </div>
        </Section>
    )
}
