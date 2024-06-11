import { Logo } from 'src/components/Logo'
import { DefaultText } from 'src/components/Text'
import { NotFoundTyping } from '@custom-animations/TypingAnimation'
import { FooterNavItems } from 'src/components/Footer/FooterNavItems'

export default function NotFound() {
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
                            'Page not found...',
                            2000,
                            'We`re sorry...',
                            1000,
                            'We can pass it through together...',
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
