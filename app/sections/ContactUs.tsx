import { Section } from '@components/Section'
import { ContactForm } from '@components/Forms/ContactForm'

export const ContactUs = () => {
    return (
        <Section id='contact-us'>
            <div className='flex w-full flex-col gap-[64px]'>
                <ContactForm />
            </div>
        </Section>
    )
}
