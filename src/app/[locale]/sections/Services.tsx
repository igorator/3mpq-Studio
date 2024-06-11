import { Section } from 'src/components/Section'
import { Accordion } from 'src/components/Accordion/Accordion'
import { Heading } from 'src/components/Text'

export const Services: React.FC<{
    id: string
    services: { question: string; answer: string }[]
}> = ({ id, services }) => {
    return (
        <Section
            id={id}
            fullWidth={true}
            addStyles='mobile:pt-[16px] desktop:pt-[150px]'
        >
            <div className='relative flex w-full justify-between gap-[80px] desktop:max-w-[1328px]'>
                <div className='flex w-full shrink flex-col gap-[64px]'>
                    <Heading headingLevel={2}>Services</Heading>

                    <div className='flex shrink flex-col'>
                        <Accordion
                            questions={services}
                            accordionType='services'
                        />
                    </div>
                </div>
            </div>
        </Section>
    )
}
