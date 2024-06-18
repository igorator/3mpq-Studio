'use client'

import { motion } from 'framer-motion'

export function ServicesAnimationWrapper({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <motion.div
            className='w-full max-w-[1440px]'
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 20, opacity: 0 }}
            transition={{ ease: 'easeInOut', duration: 1 }}
        >
            {children}
        </motion.div>
    )
}
