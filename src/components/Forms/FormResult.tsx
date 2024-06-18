import Image, { StaticImageData } from 'next/image'
import { Heading, Paragraph } from 'src/components/Text'

type FormResultProps = {
    icon: StaticImageData
    heading: string
    text: string
}

type ContactFormResultProps = FormResultProps & {
    animation: StaticImageData
}

export const ContactFormResult = ({
    icon,
    heading,
    text,
    animation,
}: ContactFormResultProps) => {
    return (
        <div className='flex h-full w-full items-center mobile:justify-center desktop:justify-between'>
            <div className='flex h-full flex-1 flex-col gap-[40px] mobile:items-center mobile:justify-center desktop:items-start desktop:justify-around'>
                <Image priority src={icon} alt={''} />
                <div className='flex flex-col gap-[16px]'>
                    <Heading
                        headingLevel={1}
                        additionalStyles='mobile:text-center desktop:text-start'
                    >
                        {heading}
                    </Heading>
                    <Paragraph paragraphType={'default'}>{text}</Paragraph>
                </div>
            </div>

            <div className='flex-1 items-center justify-center mobile:hidden desktop:flex'>
                <Image
                    priority
                    width={300}
                    height={300}
                    src={animation}
                    alt={''}
                    className='h-fit max-h-[300px] max-w-[300px] '
                />
            </div>
        </div>
    )
}
