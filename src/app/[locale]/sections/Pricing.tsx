import { Section } from 'src/components/Section'
import { PricingCard } from 'src/components/Cards/PricingCard'
import { PricingCardData } from '@data/types'

export const Pricing: React.FC<{
    id: string
    pricingCardData: PricingCardData[]
}> = async ({ id, pricingCardData }) => {
    return (
        <Section id={id} addStyles='mobile:pt-[80px] desktop:pt-[150px]'>
            <div className='grid w-full gap-[24px] mobile:mt-[16px] mobile:grid-cols-1 mobile:gap-[36px] desktop:mt-[40px] desktop:grid-cols-3'>
                {pricingCardData.map((card) => (
                    <PricingCard
                        key={card.id}
                        pricingCardData={{
                            id: card.id,
                            heading: card.heading,
                            price: card.price,
                            subtext: card.subtext,
                            benefits: card.benefits,
                            isMostPopular: card.isMostPopular,
                        }}
                    />
                ))}
            </div>
        </Section>
    )
}
