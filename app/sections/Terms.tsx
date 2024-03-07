import { Section } from '@components/Section'
import { TermsCard } from '@components/Cards/TermsCards'
import { TermsCardsProps } from '@data/terms-data'

export const Terms: React.FC<{ id: string; terms: TermsCardsProps[] }> = ({
    id,
    terms,
}) => {
    return (
        <Section id={id}>
            <div className='flex w-full flex-col items-center justify-center gap-[80px]'>
                {terms.map((term, index) => (
                    <TermsCard
                        key={index}
                        title={term.title}
                        text={term.text}
                    />
                ))}
            </div>
        </Section>
    )
}
