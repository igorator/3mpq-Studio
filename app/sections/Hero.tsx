import { Section } from '@components/Section'
import { ProjectsSlider } from '@components/Sliders/ProjectsSlider/ProjectsSlider'
import { projectsSlides } from '@data/projects-data'

export const Hero = () => {
    return (
        <Section id='hero'>
            <div className='flex w-full justify-start mobile:flex-col-reverse mobile:gap-[56px] desktop:flex-col '>
                <div className='flex w-full flex-col'>
                    <ProjectsSlider slides={projectsSlides} />
                </div>
            </div>
        </Section>
    )
}
