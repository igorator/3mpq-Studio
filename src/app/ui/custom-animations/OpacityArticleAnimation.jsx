'use client'

import { useTransform, motion, useScroll } from 'framer-motion'
import { useRef } from 'react'

export function OpacityArticleAnimation({ text }) {
    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start 0.8', 'start 0.25'],
    })
    const words = text.split(' ')
    return (
        <article
            className='flex h-fit flex-wrap gap-[10px] text-justify font-primary leading-[150%] mobile:text-[16px] desktop:text-[32px]'
            type={'services'}
            ref={container}
        >
            {words.map((word, i) => {
                const start = i / words.length

                const end = start + 1 / words.length

                return (
                    <Word
                        key={i}
                        progress={scrollYProgress}
                        range={[start, end]}
                    >
                        {word}
                    </Word>
                )
            })}
        </article>
    )
}

const Word = ({ children, progress, range }) => {
    const amount = range[1] - range[0]

    const step = amount / children.length

    return (
        <div className={`relative flex`}>
            {children.split('').map((char, i) => {
                const start = range[0] + i * step

                const end = range[0] + (i + 1) * step

                return (
                    <Char
                        key={`c_${i}`}
                        progress={progress}
                        range={[start, end]}
                    >
                        {char}
                    </Char>
                )
            })}
        </div>
    )
}

const Char = ({ children, progress, range }) => {
    const opacity = useTransform(progress, range, [0, 1])

    return (
        <span>
            <span className={`absolute opacity-20`}>{children}</span>

            <motion.span style={{ opacity: opacity }}>{children}</motion.span>
        </span>
    )
}
