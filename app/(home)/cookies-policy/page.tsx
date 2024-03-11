import { cookiesPolicyData } from '@data/terms-data'
import { Terms } from '@sections/Terms'

export default function PrivacyPolicyPage() {
    return (
        <main className='relative flex w-full flex-col items-center mobile:gap-[80px] mobile:pb-[80px] desktop:gap-[150px] desktop:pb-[120px]'>
            <Terms id='terms' terms={cookiesPolicyData} />
        </main>
    )
}
