import Image from 'next/image'
import buttonArrowDark from '@icons/button-arrow-dark.svg'

type FormSubmitButtonProps = {
    disabled?: boolean
}

export const FormSubmitButton: React.FC<FormSubmitButtonProps> = ({
    disabled,
}) => {
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
