import Link from 'next/link'
import Image from 'next/image'
import buttonArrow from '@icons/button-arrow.svg'
import buttonArrowDark from '@icons/button-arrow-dark.svg'

type ButtonProps = {
    children: React.ReactNode
    href: string
    buttonType?: 'highlighted' | 'page'
    arrow?: boolean
    addStyles?: string
}

export const Button: React.FC<ButtonProps> = ({
    href,
    children,
    buttonType,
    arrow,
    addStyles,
}) => {
    return (
        <Link
            className={`${
                buttonType === 'highlighted' ? 'bg-[#FFF] text-black' : ''
            } ${arrow ? 'justify-between' : 'justify-center'} ${addStyles} flex items-center rounded-[5px] bg-[#161616] px-[32px] py-[8px] text-center align-middle font-primary text-[16px] leading-[170%] transition-opacity duration-200 ease-in-out hover:opacity-70 active:opacity-50`}
            href={href}
        >
            {children}
            {arrow && (
                <Image
                    src={
                        buttonType === 'highlighted'
                            ? buttonArrowDark
                            : buttonArrow
                    }
                    alt='arrow'
                    height={32}
                    width={42}
                />
            )}
        </Link>
    )
}
