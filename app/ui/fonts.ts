import { Michroma, Manrope, Rubik } from 'next/font/google'

export const michroma = Michroma({
    subsets: ['latin'],
    weight: '400',
    display: 'swap',
    variable: '--font-primary',
})

export const manrope = Manrope({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-secondary',
})

export const rubik = Rubik({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-accent',
})
