import { FormInputTooltip } from '@components/Forms/FormInputTooltip'
import { InputMask } from '@react-input/mask'

type FormInputProps = {
    type?: string
    placeholder?: string
    errors: any
    register: any
    disabled: boolean
    id?: string
}

type MaskFormInputProps = FormInputProps & {
    mask: string
    replacement: any
}

export const FormInput: React.FC<FormInputProps> = ({
    type,
    placeholder,
    errors,
    register,
    disabled,
}) => {
    return (
        <div
            className={`flex flex-1 items-center justify-between gap-[24px] border-b-[1px] ${errors ? 'border-[#CB4B59]' : 'border-white'} gap-[24px] transition-all duration-150`}
        >
            <input
                className={`w-full gap-[42px] rounded-none bg-transparent pb-[16px] font-secondary text-[16px] leading-[200%] text-white outline-none transition-all duration-150 placeholder:visible placeholder:opacity-50 hover:placeholder:opacity-70 focus:placeholder:invisible`}
                type={type}
                placeholder={placeholder}
                autoComplete='off'
                disabled={disabled}
                {...register}
            />
            <div
                className={`${errors ? 'visible' : 'invisible'} transition-all duration-150`}
            >
                <FormInputTooltip errors={errors} />
            </div>
        </div>
    )
}

export const MaskFormInput: React.FC<MaskFormInputProps> = ({
    mask,
    placeholder,
    errors,
    register,
    replacement,
    disabled,
}) => {
    return (
        <div
            className={`flex flex-1 items-center justify-between gap-[24px] border-b-[1px] ${errors ? 'border-[#CB4B59]' : 'border-white'} transition-all duration-150`}
        >
            <InputMask
                className={`w-full gap-[42px] rounded-none bg-transparent pb-[16px] font-secondary text-[16px] leading-[200%] text-white outline-none transition-all duration-150 placeholder:visible placeholder:opacity-50 hover:placeholder:opacity-70 focus:placeholder:invisible`}
                mask={mask}
                placeholder={placeholder}
                autoComplete='off'
                disabled={disabled}
                {...register}
                replacement={replacement}
            />
            <div
                className={`${errors ? 'visible' : 'invisible'} transition-all duration-150`}
            >
                <FormInputTooltip errors={errors} />
            </div>
        </div>
    )
}

export const FormTextArea: React.FC<FormInputProps> = ({
    type,
    placeholder,
    errors,
    register,
    disabled,
}) => {
    return (
        <textarea
            className={`min-h-[144px] ${errors ? 'border-[#CB4B59]' : 'border-white'} gap-[42px] rounded-[5px] border-[1px] bg-transparent px-[24px] pt-[24px] font-secondary text-[16px] leading-[200%] text-white outline-none transition-all duration-150 placeholder:visible placeholder:opacity-50 hover:placeholder:opacity-70 focus:placeholder:invisible`}
            type={type}
            placeholder={placeholder}
            autoComplete='off'
            id='project-info'
            disabled={disabled}
            {...register}
        />
    )
}
