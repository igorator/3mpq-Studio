'use client'

import { type TermsCardsProps } from '@data/terms-data'
import { motion } from 'framer-motion'

export const TermsCard = ({ title, text }: TermsCardsProps) => {
    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.5 }}
            viewport={{ once: true }}
            className='flex w-full max-w-[600px] flex-col gap-[16px]'
        >
            <span className='font-secondary text-[22px] font-bold leading-[120%] text-white'>
                {title}
            </span>
            <p className=' font-secondary text-[16px] leading-[200%] text-white'>
                {text}
            </p>
        </motion.div>
    )
}
