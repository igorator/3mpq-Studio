import { Section } from 'src/components/Section'
import { OpacityArticleAnimation } from '@custom-animations/OpacityArticleAnimation'
import { useTranslations } from 'next-intl'

export const About: React.FC<{
    id: string
}> = ({ id }) => {
    const t = useTranslations()

    return (
        <Section id={id} addStyles='mobile:pt-[80px] desktop:pt-[150px]'>
            <div className='relative flex w-full items-center justify-center'>
                <OpacityArticleAnimation text={t('Home.About')} />
            </div>
        </Section>
    )
}
