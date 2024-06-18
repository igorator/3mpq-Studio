import { Section } from 'src/components/Section'
import { ProjectsSlider } from 'src/components/Slider/ProjectSlider'
import { ProjectSlideProps } from '@components/Slider/ProjectSlide'

export const Hero: React.FC<{
    id: string
    slides: ProjectSlideProps[]
}> = ({ id, slides }) => {
    return (
        <Section id={id}>
            <div className='flex w-full justify-start mobile:flex-col-reverse mobile:gap-[56px] desktop:flex-col '>
                <ProjectsSlider slides={slides} />
            </div>
        </Section>
    )
}
