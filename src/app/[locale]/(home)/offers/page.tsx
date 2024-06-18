import { getTranslations } from 'next-intl/server'

export default async function PrivacyPolicyPage() {
    const t = await getTranslations()

    return (
        <main className='relative flex w-full flex-col items-center mobile:gap-[80px] mobile:pb-[80px] desktop:gap-[150px] desktop:pb-[120px]'>
            <div className='h-[34vh] self-center font-primary'>
                {t('Offers')}
            </div>
        </main>
    )
}
