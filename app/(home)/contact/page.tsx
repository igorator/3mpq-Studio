import { ContactUs } from '@sections/ContactUs'
import { MainAnimationWrapper } from '@components/PageAnimations/HomeAnimationWrapper'

export default function ContactPage() {
    return (
        <main className='relative flex w-full flex-col items-center mobile:pb-[80px] desktop:pb-[120px]'>
            <MainAnimationWrapper>
                <ContactUs page />
            </MainAnimationWrapper>
        </main>
    )
}
