import { Section } from '@components/Section'
import { ContactForm } from '@components/Forms/ContactForm'
import { Heading } from '@components/Text'

type ContactUsProps = {
    page?: boolean
}

export const ContactUs = ({ page }: ContactUsProps) => {
    return (
        <Section
            id={'contact-us'}
            addStyles={`${page ? '' : 'mobile:pt-[80px] desktop:pt-[100px]'} flex flex-col`}
        >
            {!page && <Heading headingLevel={2}>Contact Us</Heading>}
            <div className={`${page ? '' : 'mt-[64px]'} flex w-full flex-col`}>
                <ContactForm />
            </div>
        </Section>
    )
}
