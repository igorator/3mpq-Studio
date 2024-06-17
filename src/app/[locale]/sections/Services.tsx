import { Section } from 'src/components/Section'
import { Accordion } from 'src/components/Accordion/Accordion'
import { Heading } from 'src/components/Text'
import { getLocale } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import {
    ServicesFaqItem,
    servicesDataEn,
    servicesDataUa,
} from 'src/data/services-data'
export const Services = async () => {
    const t = useTranslations()
    const locale = await getLocale()

    let services: ServicesFaqItem[] = []

    if (locale === 'en') {
        services = servicesDataEn
    } else if (locale === 'ua') {
        services = servicesDataUa
    }

    return (
        <Section
            id={'services'}
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
