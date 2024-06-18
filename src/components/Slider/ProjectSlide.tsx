import Image, { StaticImageData } from 'next/image'

export type ProjectSlideProps = {
    name: string
    imgSrc: StaticImageData
    url: string
}

export const ProjectSlide: React.FC<ProjectSlideProps> = ({
    name,
    imgSrc,
    url,
}) => (
    <a
        target='_blank'
        href={url}
        className='flex cursor-none flex-col gap-[24px]'
    >
        <div className='flex gap-[24px] mobile:h-[206px] mobile:w-[260px] desktop:h-[519px] desktop:w-[652px]'>
            <Image
                className='rounded-[5px] object-cover opacity-70 transition duration-150 ease-in-out hover:opacity-100'
                src={imgSrc}
                alt={name}
                width={652}
                height={519}
            />
        </div>

        <span className='font-secondary text-[16px] leading-[200%]'>
            {name}
        </span>
    </a>
)
