'use client'
import React, { useEffect, useState } from 'react'

const Block: React.FC<{ isHighlighted: boolean }> = ({ isHighlighted }) => (
    <div
        className={`border-2 border-solid border-white transition-opacity duration-500 mobile:h-[23px] mobile:rounded-[1.7px] desktop:h-[41px] desktop:w-[100%] desktop:rounded-[5px] ${
            isHighlighted ? 'opacity-90' : 'opacity-40'
        }`}
    ></div>
)

export const GridAnimation: React.FC = () => {
    const [highlightedBlocks, setHighlightedBlocks] = useState<number[]>([])

    useEffect(() => {
        const interval = setInterval(() => {
            const randomBlocks: number[] = []
            for (let i = 0; i < 7; i++) {
                const randomBlock = Math.floor(Math.random() * 25) + i * 25
                randomBlocks.push(randomBlock)
            }
            setHighlightedBlocks(randomBlocks)
        }, 1500)

        return () => clearInterval(interval)
    }, [])

    return (
        <div
            className='grid w-full mobile:gap-[4px] desktop:gap-[8px]'
            style={{
                gridTemplateColumns: 'repeat(25, 1fr)',
            }}
        >
            {Array.from({ length: 25 * 7 }).map((_, index) => (
                <Block
                    key={index}
                    isHighlighted={highlightedBlocks.includes(index)}
                />
            ))}
        </div>
    )
}
