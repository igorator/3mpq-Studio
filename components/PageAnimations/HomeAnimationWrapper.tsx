'use client'

import { motion } from 'framer-motion'

export const MainAnimationWrapper = ({
    children,
}: {
    children: React.ReactNode
}) => {
    {
        children
    }
    return (
        <motion.div
            className='w-full max-w-[1440px]'
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ ease: 'easeInOut', duration: 1 }}
        >
            {children}
        </motion.div>
    )
}
