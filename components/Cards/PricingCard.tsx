import { PricingCardData } from '@data/pricing-data'
import Image from 'next/image'
import pricingCheck from '@icons/pricing-check.svg'
import { PricingButton } from '@components/Buttons/PricingButton'

export const PricingCard: React.FC<{ pricingCardData: PricingCardData }> = ({
    pricingCardData,
}) => {
    const { heading, price, subtext, benefits, isMostPopular } = pricingCardData
    return (
        <div
            className={`relative flex flex-col items-center justify-between border-white mobile:px-[16px] desktop:px-[56px] desktop:py-[40px] ${isMostPopular ? 'border-[2px] border-opacity-100' : 'border-[1px]  border-opacity-20'}`}
        >
            {isMostPopular ? (
                <div className='absolute top-[-20px] flex w-full max-w-[133px] items-center justify-center rounded-[42px] bg-white px-[12px] py-[4px] font-semibold text-[#212121]'>
                    Most Popular
                </div>
            ) : null}
            <h2 className='font-primary text-[16px] font-bold leading-[200%]'>
                {heading}
            </h2>
            <p className='mt-[16px] font-primary text-[48px] leading-[150%]'>
                From ${price}
            </p>
            <PricingButton />
            <p className='mt-[40px] text-[16px] leading-[200%]'>{subtext}</p>
            <ul className='mt-[40px] flex w-full flex-col items-start gap-[8px]'>
                {benefits.map((benefit, index) => (
                    <li
                        key={index}
                        className='flex items-center gap-[32px] py-[12px]'
                    >
                        <Image src={pricingCheck} alt={''} />
                        {benefit}
                    </li>
                ))}
            </ul>
        </div>
    )
}
