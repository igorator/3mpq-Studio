import { Section } from '@components/Section'
import { PricingCard } from '@components/Cards/PricingCard'
import { PricingCardData } from '@data/pricing-data'

export const Pricing: React.FC<{
    id: string
    pricingCardsData: PricingCardData[]
}> = ({ id, pricingCardsData }) => {
    return (
        <Section id={id} addStyles='pt-[100px] mt-[-100px]'>
            <div className='grid w-full gap-[24px] mobile:grid-cols-1 mobile:gap-[36px] desktop:grid-cols-3'>
                {pricingCardsData.map((card) => (
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
