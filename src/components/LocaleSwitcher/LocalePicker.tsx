'use client'

import { useParams } from 'next/navigation'
import { useTransition } from 'react'
import { useRouter, usePathname } from '@navigation'

type LocalePickerProps = {
    defaultValue: string
}

export function LocalePicker({ defaultValue }: LocalePickerProps) {
    const router = useRouter()
    const [isPending, startTransition] = useTransition()
    const pathname = usePathname()
    const params = useParams()

    function onLocaleChange(nextLocale: string) {
        startTransition(() => {
            router.replace(
                // @ts-expect-error -- TypeScript will validate that only known `params`
                // are used in combination with a given `pathname`. Since the two will
                // always match for the current route, we can skip runtime checks.
                { pathname, params },
                { locale: nextLocale }
            )
        })
    }

    return (
        <div className='flex items-center justify-between gap-[16px] font-primary'>
            <button
                className={`transition-opacity duration-150  ${defaultValue === 'en' ? 'opacity-100' : 'opacity-30 hover:opacity-50'} ${isPending ? 'opacity-30 ' : ''}`}
                onClick={() => onLocaleChange('en')}
                disabled={isPending}
            >
                ENG
            </button>
            <button
                className={`transition-opacity duration-150  ${defaultValue === 'ua' ? 'opacity-100' : 'opacity-30 hover:opacity-50'} ${isPending ? 'opacity-30 ' : ''}`}
                onClick={() => onLocaleChange('ua')}
                disabled={isPending}
            >
                UA
            </button>
        </div>
    )
}
