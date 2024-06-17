import { Section } from 'src/components/Section'
import { ContactForm } from 'src/components/Forms/ContactForm'
import { Heading } from 'src/components/Text'

type ContactUsProps = {
    isPage?: boolean
}

export const ContactUs = ({ isPage }: ContactUsProps) => {
    return (
        <Section
            id={'contact-us'}
            addStyles={`${isPage ? '' : 'mobile:pt-[80px] desktop:pt-[100px]'} flex flex-col`}
        >
            {!isPage && <Heading headingLevel={2}>Contact Us</Heading>}
            <div
                className={`${isPage ? '' : 'mt-[64px]'} flex w-full flex-col`}
            >
                <ContactForm />
            </div>
        </Section>
    )
}
