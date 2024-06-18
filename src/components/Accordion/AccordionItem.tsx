import { Link } from '@navigation'
import Image from 'next/image'
import { routes } from 'src/data/routes'
import { Paragraph } from 'src/components/Text'
import accordionArrow from '@icons/accordion-arrow.svg'

import buttonArrow from '@icons/close-arrow.svg'

type AccordionItemProps = {
    question: {
        question: string
        answer: string
    }
    isOpen: boolean
    toggleAccordion: () => void
    itemType?: 'default' | 'services'
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
    question,
    isOpen,
    toggleAccordion,
    itemType,
}) => {
    return (
        <div
            onClick={toggleAccordion}
            className={`cursor-pointer border-b-[1px] border-white transition-[height] duration-150`}
        >
            <div
                className={`flex cursor-pointer justify-between gap-[16px] py-[24px] transition-all duration-150 ease-in-out hover:px-[16px]`}
            >
                <span className='max-w-[500px]  break-words font-primary text-[16px] leading-[170%]'>
                    {question.question}
                </span>
                <Image
                    width={32}
                    height={32}
                    src={accordionArrow}
                    alt={'Show'}
                    className={`transition duration-150 ease-in-out ${isOpen ? 'rotate-180' : ''}`}
                />
            </div>

            <div
                className={`flex w-full flex-wrap justify-between transition-all duration-200 mobile:flex-col-reverse mobile:gap-[32px] desktop:flex-row desktop:gap-[128px] ${isOpen ? 'visible h-fit pb-[24px] pt-[24px] opacity-100' : 'invisible h-[0px] pb-0 opacity-0'} `}
            >
                {itemType === 'services' && (
                    <Link
                        className={`invisible w-full flex-1 items-end gap-[80px] py-[8px] text-center font-primary text-[16px] leading-[170%] transition-[filter] duration-200 mobile:max-w-full mobile:justify-between desktop:max-w-[288px] desktop:justify-start desktop:hover:blur-[2px] ${isOpen ? 'visible' : 'invisible'} `}
                        href={routes.contact}
                    >
                        Contact Us
                        <Image
                            src={buttonArrow}
                            alt='arrow'
                            height={32}
                            width={42}
                        />
                    </Link>
                )}
                <Paragraph
                    paragraphType='default'
                    additionalStyles={`flex-1 max-w-[600px] ${isOpen ? 'visible' : 'invisible'}`}
                >
                    {question.answer}
                </Paragraph>
            </div>
        </div>
    )
}
