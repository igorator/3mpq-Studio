import Image from 'next/image'
import toolTipIcon from '@icons/tooltip-icon.svg'

export const FormInputTooltip = ({ errors }: { errors: any }) => {
    return (
        <div className='group relative h-fit w-fit'>
            <Image
                src={toolTipIcon}
                sizes='24'
                alt={''}
                className='relative z-0'
            />
            <p className='invisible absolute right-0 z-10 mt-[10px] rounded-[5px] bg-white px-[16px] py-[8px] font-secondary text-[16px] leading-[200%] text-[#212121] opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 mobile:w-[288px] desktop:w-[351px]'>
                {errors && errors.message}
            </p>
        </div>
    )
}
