import Link from 'next/link'
import Image from 'next/image'
import buttonArrow from '@icons/button-arrow.svg'
import buttonArrowDark from '@icons/button-arrow-dark.svg'

type ButtonProps = {
    children: React.ReactNode
    href: string
    buttonType?: 'highlighted' | 'page'
    arrow?: boolean
}

type NavLink = {
    children: React.ReactNode
    href: string
    currentPage: string
}

export const Button: React.FC<ButtonProps> = ({
    href,
    children,
    buttonType,
    arrow,
}) => {
    return (
        <Link
            className={`${
                buttonType === 'highlighted' ? 'bg-[#FFF] text-black' : ''
            } ${arrow ? 'justify-between' : 'justify-center'} flex items-center rounded-[5px] bg-[#161616] px-[32px] py-[8px] text-center align-middle font-primary text-[16px] leading-[170%] transition-opacity duration-200 ease-in-out hover:opacity-70 active:opacity-50`}
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

export const FormSubmitButton = ({ disabled }: { disabled?: boolean }) => {
    return (
        <button
            className={`${disabled ? 'opacity-70' : ''} mt-auto flex items-center justify-between self-end justify-self-end rounded-[5px] bg-white px-[32px] py-[8px] transition duration-200 ease-out hover:opacity-70 active:opacity-50 mobile:w-full desktop:max-w-[288px]`}
            type='submit'
            disabled={disabled}
        >
            <span className='font-primary leading-[170%] text-[#161616]'>
                Submit
            </span>
            <Image src={buttonArrowDark} alt='' height={32} width={42} />
        </button>
    )
}

export const NavLink: React.FC<NavLink> = ({ children, href, currentPage }) => {
    return (
        <Link
            className={`flex items-center justify-between rounded-[5px] bg-[#161616] px-[32px] py-[8px] text-center font-primary text-[16px] leading-[170%] transition-opacity duration-200 ease-in-out hover:opacity-70 active:opacity-50 ${
                href === currentPage ? 'bg-[#FFF] text-black' : ''
            } `}
            href={href}
        >
            {children}

            <Image src={buttonArrow} alt='arrow' height={32} width={42} />
        </Link>
    )
}
