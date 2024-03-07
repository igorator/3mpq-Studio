import { Section } from '@components/Section'
import { StaticImageData } from 'next/image'
import { Heading } from '@components/Text'
import { ShowMoreButton } from '@components/Buttons/ShowMoreButton'
import { ProjectCard } from '@components/Cards/ProjectCard'

export const Projects: React.FC<{
    id: string
    projects: {
        imgSrc: StaticImageData
        name: string
        description: string
        url: string
    }[]
}> = ({ id, projects }) => {
    return (
        <Section
            id={id}
            addStyles='mobile:mt-[-16px] mobile:pt-[16px] desktop:mt-[-40px] desktop:pt-[40px]'
        >
            <div className='flex w-full flex-col mobile:gap-0 desktop:gap-[64px]'>
                <Heading headingLevel={2} additionalStyles='mobile:text-[32px]'>
                    All our projects
                </Heading>
                <div className='flex w-full flex-col overflow-hidden'>
                    <div className='relative'></div>
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.name}
                            imgSrc={project.imgSrc}
                            name={project.name}
                            description={project.description}
                            orderNumber={index + 1}
                            url={project.url}
                            scrollBoundary={
                                index === 3 ? 'projectsScrollBoundary' : ''
                            }
                        />
                    ))}
                </div>
                <ShowMoreButton />
            </div>
        </Section>
    )
}
