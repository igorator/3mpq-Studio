'use client'
import Link from 'next/link'
import Image from 'next/image'
import buttonArrow from '@icons/close-arrow.svg'
import { motion } from 'framer-motion'

type NavLink = {
    children: React.ReactNode
    href: string
    currentPage: string
}

export const NavLink: React.FC<NavLink> = ({ children, href, currentPage }) => {
    return (
        <motion.div layout>
            <Link
                className={`flex w-full justify-between rounded-[5px] py-[8px] text-center font-primary text-[16px] leading-[170%] transition duration-200 ease-in-out desktop:hover:blur-[2px] ${href === currentPage ? 'hidden' : ''}`}
                href={href}
                scroll={false}
            >
                {children}

                <Image src={buttonArrow} alt="arrow" height={32} width={42} />
            </Link>
        </motion.div>
    )
}
