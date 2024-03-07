'use client'
import Image from 'next/image'
import burgerMenuIcon from '@icons/burger.svg'

export const HiddenMenuButton: React.FC<{
    openMenu: () => void
    isPressed: boolean
}> = ({ openMenu, isPressed }) => {
    return (
        <button
            aria-label="navigation"
            onClick={() => {
                openMenu()
            }}
            className={`rounded-full transition duration-200 desktop:bg-transparent desktop:hover:blur-[2px] ${
                isPressed && `opacity-0`
            }`}
        >
            <Image
                width={42}
                height={24}
                alt="Header menu"
                src={burgerMenuIcon}
            />
        </button>
    )
}
