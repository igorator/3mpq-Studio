'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FormSubmitButton } from '@components/Buttons/Buttons'
import {
    sendContactFormData,
    type ContactFormData,
} from '@actions/sendContactFormData'
import { InputMask } from '@react-input/mask'
import { FormInputTooltip } from './FormInputTooltip'
import { motion, AnimatePresence } from 'framer-motion'
import { ContactFormResult } from './FormResult'
import formSuccessIcon from '@icons/form-success.svg'
import formRejectIcon from '@icons/form-error.svg'
import formSuccessAnimation from '@animations/form-valid.gif'
import formRejectAnimation from '@animations/form-invalid.gif'
import { routes } from '@data/routes'

const inputStyles = `rounded-none bg-transparent gap-[42px] font-secondary pb-[16px] text-[16px] leading-[200%] text-white placeholder:opacity-50 outline-none hover:placeholder:opacity-70 placeholder:visible focus:placeholder:invisible transition-all duration-150`

enum FormState {
    Default = 'default',
    Loading = 'loading',
    Success = 'success',
    Error = 'error',
}

export const ContactForm = () => {
    const [formState, setFormState] = useState<FormState>(FormState.Default)

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = useForm<ContactFormData>()

    const submitContactFormData = async (data: ContactFormData) => {
        try {
            setFormState(FormState.Loading)
            await sendContactFormData(data)
            setFormState(FormState.Success)
        } catch {
            setFormState(FormState.Error)
        }
    }

    return (
        <div className='mobile:min-h-[720px] desktop:min-h-[465px]'>
            <AnimatePresence>
                {formState === FormState.Default && (
                    <motion.form
                        onSubmit={handleSubmit(submitContactFormData)}
                        className={`flex flex-col items-center justify-center gap-x-[24px] gap-y-[40px]`}
                        exit={{ opacity: 0 }}
                        transition={{ ease: 'easeInOut', duration: 0.3 }}
                        noValidate
                    >
                        <div className='flex w-full justify-between gap-[24px] mobile:flex-col desktop:flex-row'>
                            <div
                                className={`flex flex-1 items-center justify-between border-b-[1px] ${errors['fullName'] ? 'border-[#CB4B59]' : 'border-white'} transition-all duration-150`}
                            >
                                <input
                                    className={inputStyles}
                                    type='text'
                                    placeholder='Full Name'
                                    autoComplete='off'
                                    disabled={isSubmitting}
                                    {...register('fullName', {
                                        required: {
                                            value: true,
                                            message:
                                                'Please, enter your full name',
                                        },
                                        minLength: 2,
                                        maxLength: 80,
                                    })}
                                />
                                <div
                                    className={`${errors['fullName'] ? 'visible' : 'invisible'} transition-all duration-150`}
                                >
                                    <FormInputTooltip
                                        errors={errors['fullName']}
                                    />
                                </div>
                            </div>

                            <div
                                className={`flex flex-1 items-center justify-between border-b-[1px] ${errors['email'] ? 'border-[#CB4B59]' : 'border-white'} transition-all duration-150`}
                            >
                                <input
                                    className={inputStyles}
                                    type='email'
                                    placeholder='Work Email'
                                    autoComplete='off'
                                    disabled={isSubmitting}
                                    {...register('email', {
                                        required: {
                                            value: true,
                                            message: 'Please, enter your email',
                                        },
                                        pattern: {
                                            value: /^[+\-\p{L}\p{M}\p{N}_]([\p{L}\p{M}\p{N}!#$%&'*+\-\/=?^_`{|}~.]*)@(?=.{4,256}$)(([\p{L}\p{N}\p{M}]+)(([-_]*[\p{L}\p{M}\p{N}])*)[.])+[\p{L}\p{M}]{2,22}$/u,
                                            message: `Enter valid email: email@example.com`,
                                        },
                                    })}
                                />
                                <div
                                    className={`${errors['email'] ? 'visible' : 'invisible'} transition-all duration-150`}
                                >
                                    <FormInputTooltip
                                        errors={errors['email']}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='flex w-full justify-between gap-[24px] mobile:flex-col desktop:flex-row'>
                            <div
                                className={`flex flex-1 items-center justify-between border-b-[1px]  ${errors['phoneNumber'] ? 'border-[#CB4B59]' : 'border-white'} transition-all duration-150`}
                            >
                                <InputMask
                                    className={inputStyles}
                                    mask='999-999-9999'
                                    replacement={{ 9: /\d/ }}
                                    placeholder='Phone Number'
                                    autoComplete='off'
                                    disabled={isSubmitting}
                                    {...register('phoneNumber', {
                                        required: {
                                            value: true,
                                            message:
                                                'Please, enter your phone number',
                                        },
                                        pattern: {
                                            value: /^\d{3}-\d{3}-\d{4}$/,
                                            message:
                                                'Invalid phone number format',
                                        },
                                    })}
                                />
                                <div
                                    className={`${errors['phoneNumber'] ? 'visible' : 'invisible'} transition-all duration-150`}
                                >
                                    <FormInputTooltip
                                        errors={errors['phoneNumber']}
                                    />
                                </div>
                            </div>

                            <div
                                className={`flex flex-1  items-center justify-between border-b-[1px] ${errors['companyName'] ? 'border-[#CB4B59]' : 'border-white'} transition-all duration-150`}
                            >
                                <input
                                    className={inputStyles}
                                    type='text'
                                    placeholder='Company Name'
                                    autoComplete='off'
                                    disabled={isSubmitting}
                                    {...register('companyName', {
                                        required: {
                                            value: true,
                                            message:
                                                'Please, enter your company name',
                                        },
                                    })}
                                />
                                <div
                                    className={`transition-all duration-150 ${errors['companyName'] ? 'visible' : 'invisible'} `}
                                >
                                    <FormInputTooltip
                                        errors={errors['companyName']}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='mobile:col-span-0 flex w-full flex-col gap-[16px] desktop:col-span-2'>
                            <label
                                htmlFor='project-info'
                                className='font-secondary text-[16px] leading-[200%]'
                            >
                                Reason For Contacting
                            </label>
                            <textarea
                                className={`min-h-[144px] ${errors['projectInfo'] ? 'border-[#CB4B59]' : 'border-white'} rounded-[5px] border-[1px] px-[24px] pt-[24px] ${inputStyles} transition-all duration-150`}
                                placeholder='Project Info'
                                autoComplete='off'
                                id='project-info'
                                disabled={isSubmitting}
                                {...register('projectInfo', { required: true })}
                            />
                        </div>

                        <div className='flex w-full justify-between gap-[24px] mobile:flex-col desktop:flex-row'>
                            <div className='flex items-center gap-[16px] desktop:order-first'>
                                <input
                                    className={`h-[20px] w-[20px] cursor-pointer rounded-[10px] accent-[#212121] outline-none transition-all duration-150 ${errors['agreement'] ? 'shadow-[0px_0px_0px_1px_#CB4B59]' : 'shadow-none'}`}
                                    type='checkbox'
                                    id='agreement'
                                    {...register('agreement', {
                                        required: true,
                                    })}
                                />
                                <label
                                    htmlFor='agreement'
                                    className={`${errors['agreement'] ? 'text-[#CB4B59]' : 'text-white'} font-secondary text-[16px] leading-[200%]`}
                                >
                                    By submitting this form, you agree to the
                                    processing of your personal data as
                                    described in our{' '}
                                    <a
                                        className='font-bold text-white underline'
                                        href={routes.privacy}
                                        target='_blank'
                                    >
                                        Privacy Policy
                                    </a>
                                </label>
                            </div>

                            <FormSubmitButton disabled={isSubmitting} />
                        </div>
                    </motion.form>
                )}

                {isSubmitSuccessful && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ ease: 'easeInOut', duration: 0.3 }}
                        className='h-full w-full items-center justify-center rounded-[5px] border-[1px] border-white bg-black mobile:px-[12px] desktop:px-[70px]'
                    >
                        <ContactFormResult
                            icon={
                                formState === FormState.Success
                                    ? formSuccessIcon
                                    : formRejectIcon
                            }
                            animation={
                                formState === FormState.Success
                                    ? formSuccessAnimation
                                    : formRejectAnimation
                            }
                            heading={
                                formState === FormState.Success
                                    ? 'Success'
                                    : 'Oh no!'
                            }
                            text={
                                formState === FormState.Success
                                    ? 'An email will arrive in your inbox within 5 minutes'
                                    : 'Something went wrong! Try again later'
                            }
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
