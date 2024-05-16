import { PricingCardData } from '@data/pricing-data'
import Image from 'next/image'
import pricingCheck from '@icons/pricing-check.svg'

export const PricingCard: React.FC<{ pricingCardData: PricingCardData }> = ({
    pricingCardData,
}) => {
    const { heading, price, subtext, benefits, isMostPopular } = pricingCardData
    return (
        <div
            className={`relative flex flex-col items-center justify-between border-white px-[56px] py-[40px] ${isMostPopular ? 'border-[2px] border-opacity-100' : 'border-[1px]  border-opacity-20'}`}
        >
            {isMostPopular ? (
                <div className='absolute top-[-50px] rounded-[42px] bg-white px-[12px] py-[4px] text-[#212121]'>
                    Most Popular
                </div>
            ) : null}
            <h2 className='font-primary text-[16px] leading-[200%]'>
                {heading}
            </h2>
            <p className='text-[48px] leading-[150%]'>From ${price}</p>
            <p className='text-[16px] leading-[200%]'>{subtext}</p>
            <ul>
                {benefits.map((benefit, index) => (
                    <li key={index} className=''>
                        <Image src={pricingCheck} alt={''} />
                        {benefit}
                    </li>
                ))}
            </ul>
        </div>
    )
}
