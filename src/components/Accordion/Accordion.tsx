'use client'
import { useState } from 'react'
import { AccordionItem } from 'src/components/Accordion/AccordionItem'

type AccordionProps = {
    questions: Array<{
        question: string
        answer: string
    }>
    accordionType?: 'default' | 'services'
}

export const Accordion: React.FC<AccordionProps> = ({
    questions,
    accordionType,
}) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleAccordion = (index: number) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
    }

    return (
        <div
            className={`${accordionType === 'services' ? '' : 'border-t-[1px]'}`}
        >
            {questions.map((question, index) => (
                <AccordionItem
                    key={question.question}
                    itemType={accordionType}
                    question={question}
                    isOpen={openIndex === index}
                    toggleAccordion={() => toggleAccordion(index)}
                />
            ))}
        </div>
    )
}
