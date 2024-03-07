import { Section } from '@components/Section'
import { OpacityArticleAnimation } from '@custom-animations/OpacityArticleAnimation'

export const Timeline: React.FC<{ id: string; text: string }> = ({
    id,
    text,
}) => {
    return (
        <Section
            id={id}
            addStyles='mobile:mt-[-16px] mobile:pt-[16px] desktop:mt-[-40px] desktop:pt-[40px]'
        >
            <div className='relative flex w-full items-center justify-center'>
                <OpacityArticleAnimation text={text} />
            </div>
        </Section>
    )
}
