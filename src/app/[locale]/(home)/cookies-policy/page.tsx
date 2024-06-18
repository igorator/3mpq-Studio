import {
    cookiesPolicyDataEn,
    cookiesPolicyDataUa,
} from 'src/data/terms-data/cookies-policy-data'
import { Terms } from '../../sections/Terms'
import { getLocale } from 'next-intl/server'
import { TermsCardsProps } from '@data/types'

export default async function PrivacyPolicyPage() {
    const locale = await getLocale()
    let cookiesPolicyData: TermsCardsProps[] = []

    if (locale === 'en') {
        cookiesPolicyData = cookiesPolicyDataEn
    } else if (locale === 'ua') {
        cookiesPolicyData = cookiesPolicyDataUa
    }
    return (
        <main className='relative flex w-full flex-col items-center mobile:gap-[80px] mobile:pb-[80px] desktop:gap-[150px] desktop:pb-[120px]'>
            <Terms id='terms' terms={cookiesPolicyData} />
        </main>
    )
}
