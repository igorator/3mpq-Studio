import {
    termsOfConditionsDataEn,
    termsOfConditionsDataUa,
} from 'src/data/terms-data/terms-of-conditions-data'
import { Terms } from '../../sections/Terms'
import { getLocale } from 'next-intl/server'
import { TermsCardsProps } from '@data/types'

export default async function TermsPage() {
    const locale = await getLocale()
    let termsOfConditionsData: TermsCardsProps[] = []

    if (locale === 'en') {
        termsOfConditionsData = termsOfConditionsDataEn
    } else if (locale === 'ua') {
        termsOfConditionsData = termsOfConditionsDataUa
    }

    return (
        <main className='relative flex w-full flex-col items-center mobile:gap-[80px] mobile:pb-[80px] desktop:gap-[150px] desktop:pb-[120px]'>
            <Terms id='terms' terms={termsOfConditionsData} />
        </main>
    )
}
