'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FormSubmitButton } from 'src/components/Buttons/FormSubmitButton'
import {
    sendContactFormData,
    type ContactFormData,
} from '@actions/sendContactFormData'
import { motion, AnimatePresence } from 'framer-motion'
import { ContactFormResult } from 'src/components/Forms/FormResult'
import {
    FormInput,
    FormTextArea,
    MaskFormInput,
} from 'src/components/Forms/FormInputs'
import { routes } from 'src/data/routes'
import formSuccessIcon from '@icons/form-success.svg'
import formRejectIcon from '@icons/form-error.svg'
import formSuccessAnimation from '@animations/form-valid.gif'
import formRejectAnimation from '@animations/form-invalid.gif'
import { useTranslations } from 'next-intl'

enum FormState {
    Default = 'default',
    Loading = 'loading',
    Success = 'success',
    Error = 'error',
}

export const ContactForm = () => {
    const [formState, setFormState] = useState<FormState>(FormState.Default)
    const t = useTranslations('')

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
                            <FormInput
                                type='text'
                                placeholder={t(
                                    'ContactForm.placeholders.fullName'
                                )}
                                errors={errors['fullName']}
                                disabled={isSubmitting}
                                register={{
                                    ...register('fullName', {
                                        required: {
                                            value: true,
                                            message: t(
                                                'ContactForm.validationMessages.fullName.emptyField'
                                            ),
                                        },
                                        minLength: 2,
                                        maxLength: 80,
                                    }),
                                }}
                            />

                            <FormInput
                                type='email'
                                placeholder={t(
                                    'ContactForm.placeholders.email'
                                )}
                                errors={errors['email']}
                                disabled={isSubmitting}
                                register={{
                                    ...register('email', {
                                        required: {
                                            value: true,
                                            message: t(
                                                'ContactForm.validationMessages.email.emptyField'
                                            ),
                                        },
                                        pattern: {
                                            value: /^[+\-\p{L}\p{M}\p{N}_]([\p{L}\p{M}\p{N}!#$%&'*+\-\/=?^_`{|}~.]*)@(?=.{4,256}$)(([\p{L}\p{N}\p{M}]+)(([-_]*[\p{L}\p{M}\p{N}])*)[.])+[\p{L}\p{M}]{2,22}$/u,
                                            message: t(
                                                'ContactForm.validationMessages.email.invalidInput'
                                            ),
                                        },
                                    }),
                                }}
                            />
                        </div>

                        <div className='flex w-full justify-between gap-[24px] mobile:flex-col desktop:flex-row'>
                            <MaskFormInput
                                type='number'
                                mask='999-999-9999'
                                replacement={{ 9: /\d/ }}
                                placeholder={t(
                                    'ContactForm.placeholders.email'
                                )}
                                disabled={isSubmitting}
                                errors={errors['phoneNumber']}
                                register={{
                                    ...register('phoneNumber', {
                                        required: {
                                            value: true,
                                            message: t(
                                                'ContactForm.validationMessages.phone.emptyField'
                                            ),
                                        },
                                        pattern: {
                                            value: /^\d{3}-\d{3}-\d{4}$/,
                                            message: t(
                                                'ContactForm.validationMessages.phone.invalidInput'
                                            ),
                                        },
                                    }),
                                }}
                            />

                            <FormInput
                                type='text'
                                placeholder={t(
                                    'ContactForm.placeholders.company'
                                )}
                                disabled={isSubmitting}
                                errors={errors['companyName']}
                                register={{
                                    ...register('companyName', {
                                        required: {
                                            value: true,
                                            message: t(
                                                'ContactForm.validationMessages.company.emptyField'
                                            ),
                                        },
                                    }),
                                }}
                            />
                        </div>
                        <div className='mobile:col-span-0 flex w-full flex-col gap-[16px] desktop:col-span-2'>
                            <label
                                htmlFor='project-info'
                                className='font-secondary text-[16px] leading-[200%]'
                            >
                                {t('ContactForm.labels.reasonForContacting')}
                            </label>

                            <FormTextArea
                                type='text'
                                placeholder={t(
                                    'ContactForm.placeholders.projectInfo'
                                )}
                                disabled={isSubmitting}
                                register={{
                                    ...register('projectInfo', {
                                        required: true,
                                    }),
                                }}
                                errors={errors['projectInfo']}
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
                                    {t('ContactForm.labels.agreement')}{' '}
                                    <a
                                        className='font-bold text-white underline'
                                        href={routes.cookies}
                                        target='_blank'
                                    >
                                        Privacy Policy
                                    </a>
                                </label>
                            </div>

                            <FormSubmitButton
                                label={t('ctaButtons.formSubmit')}
                                disabled={isSubmitting}
                            />
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
