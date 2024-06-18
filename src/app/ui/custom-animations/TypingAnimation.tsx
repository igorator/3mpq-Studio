'use client'
import { TypeAnimation } from 'react-type-animation'

type TypingSequence = (string | number)[]

export const NotFoundTyping = ({ sequence }: { sequence: TypingSequence }) => {
    return (
        <TypeAnimation
            sequence={sequence}
            wrapper='span'
            speed={50}
            style={{ display: 'inline-block' }}
            repeat={Infinity}
        />
    )
}
