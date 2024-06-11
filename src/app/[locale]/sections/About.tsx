import { Section } from 'src/components/Section'
import { OpacityArticleAnimation } from '@custom-animations/OpacityArticleAnimation'

export const About: React.FC<{ id: string; text: string }> = ({ id, text }) => {
    return (
        <Section id={id} addStyles='mobile:pt-[80px] desktop:pt-[150px]'>
            <div className='relative flex w-full items-center justify-center'>
                <OpacityArticleAnimation text={text} />
            </div>
        </Section>
    )
}
