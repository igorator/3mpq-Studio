import { Section } from 'src/components/Section'
import { ContactForm } from 'src/components/Forms/ContactForm'
import { Heading } from 'src/components/Text'
import { getTranslations } from 'next-intl/server'

type ContactUsProps = {
    isPage?: boolean
}

export const ContactUs = async ({ isPage }: ContactUsProps) => {
    const t = await getTranslations()

    return (
        <Section
            id={'contact-us'}
            addStyles={`${isPage ? '' : 'mobile:pt-[80px] desktop:pt-[100px]'} flex flex-col`}
        >
            {!isPage && (
                <Heading headingLevel={2}>
                    {t('sectionHeadings.ContactUs')}
                </Heading>
            )}
            <div
                className={`${isPage ? '' : 'mt-[64px]'} flex w-full flex-col`}
            >
                <ContactForm />
            </div>
        </Section>
    )
}
