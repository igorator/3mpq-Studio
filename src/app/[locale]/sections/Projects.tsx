import { Section } from 'src/components/Section'
import { StaticImageData } from 'next/image'
import { Heading } from 'src/components/Text'
import { ShowMoreButton } from 'src/components/Buttons/ShowMoreButton'
import { ProjectCard } from 'src/components/Cards/ProjectCard'

export const Projects: React.FC<{
    id: string
    page?: boolean
    projects: {
        imgSrc: StaticImageData
        name: string
        description: string
        url: string
    }[]
}> = ({ id, projects, page }) => {
    return (
        <Section
            id={id}
            addStyles={`${page ? '' : 'mobile:pt-[80px] desktop:pt-[150px]'}`}
        >
            <div className='flex w-full flex-col mobile:gap-0 desktop:gap-[64px]'>
                {!page && (
                    <Heading
                        headingLevel={2}
                        additionalStyles='mobile:text-[32px]'
                    >
                        All our projects
                    </Heading>
                )}
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
