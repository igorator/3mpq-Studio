import { Section } from '@components/Section'
import { ContactForm } from '@components/Forms/ContactForm'
import { Heading } from '@components/Text'

type ContactUsProps = {
    heading?: boolean
}

export const ContactUs = ({ heading }: ContactUsProps) => {
    return (
        <Section id={'contact-us'} addStyles='flex flex-col'>
            {heading && <Heading headingLevel={2}>Contact Us</Heading>}
            <div
                className={`${heading ? 'mt-[64px]' : ''} flex w-full flex-col`}
            >
                <ContactForm />
            </div>
        </Section>
    )
}
