import { useLocale } from 'next-intl'
import { LocalePicker } from './LocalePicker'

export default function LocaleSwitcher() {
    const locale = useLocale()

    return <LocalePicker defaultValue={locale} />
}
