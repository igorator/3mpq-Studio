import { Section } from 'src/components/Section'
import { Accordion } from 'src/components/Accordion/Accordion'
import { Heading } from 'src/components/Text'

import { ServicesFaqItem } from '@data/types'
import { getLocale, getTranslations } from 'next-intl/server'

export const Services: React.FC<{
    id: string
    services: ServicesFaqItem[]
}> = async ({ id, services }) => {
    const t = await getTranslations()
    const locale = await getLocale()

    return (
        <Section
            id={id}
            fullWidth={true}
            addStyles='mobile:pt-[16px] desktop:pt-[150px]'
        >
            <div className='relative flex w-full justify-between gap-[80px] desktop:max-w-[1328px]'>
                <div className='flex w-full shrink flex-col gap-[64px]'>
                    <Heading headingLevel={2}>
                        {t('sectionHeadings.Services')}
                    </Heading>

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
