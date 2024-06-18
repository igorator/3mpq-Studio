import { Logo } from 'src/components/Logo'
import { DefaultText } from 'src/components/Text'
import { NotFoundTyping } from '@custom-animations/TypingAnimation'
import { FooterNavItems } from 'src/components/Footer/FooterNavItems'
import { getTranslations } from 'next-intl/server'

export default async function NotFound() {
    const t = await getTranslations()

    return (
        <main className='flex h-[90dvh] w-full max-w-[1440px] flex-col justify-between mobile:px-[16px] desktop:px-[64px]'>
            <header className='flex w-full max-w-[1440px] justify-between mobile:pt-[16px] desktop:pt-[32px]'>
                <Logo scroll={false} />
            </header>
            <div className='flex w-full flex-1 items-center justify-center gap-[24px]'>
                <DefaultText additionalStyles='font-secondary'>404</DefaultText>
                <div className='h-[20px] border'></div>
                <DefaultText additionalStyles='font-secondary opacity-50'>
                    <NotFoundTyping
                        sequence={[
                            t('NotFound.First'),
                            2000,
                            t('NotFound.Second'),
                            1000,
                            t('NotFound.Third'),
                            2000,
                            '3mpq...',
                            1000,
                        ]}
                    />
                </DefaultText>
            </div>

            <div className='flex w-full'>
                <nav className='flex list-none flex-col items-end justify-end font-secondary text-[16px] leading-[200%] mobile:w-full [&>li]:w-fit'>
                    <FooterNavItems />
                </nav>
            </div>
        </main>
    )
}
