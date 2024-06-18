import { TermsCardsProps } from '@data/types'
import {
    privacyPolicyDataEn,
    privacyPolicyDataUa,
} from 'src/data/terms-data/privacy-policy-data'
import { Terms } from '../../sections/Terms'
import { getLocale } from 'next-intl/server'

export default async function PrivacyPolicyPage() {
    const locale = await getLocale()
    let privacyPolicyData: TermsCardsProps[] = []

    if (locale === 'en') {
        privacyPolicyData = privacyPolicyDataEn
    } else if (locale === 'ua') {
        privacyPolicyData = privacyPolicyDataUa
    }

    return (
        <main className='relative flex w-full flex-col items-center mobile:gap-[80px] mobile:pb-[80px] desktop:gap-[150px] desktop:pb-[120px]'>
            <Terms id='terms' terms={privacyPolicyData} />
        </main>
    )
}
