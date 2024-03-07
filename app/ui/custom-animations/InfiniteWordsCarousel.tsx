export const InfiniteWordsCarousel = () => {
    const words = [
        'Product Engineering',
        'Solution Discovery',
        'DevOps',
        'Digital Assurance',
        'Scaled Agile Delivery',
        'RunOps',
        'Software Architecture',
        'Customer Experience',
        'User Research',
        'Experience Design',
        'Product Discovery',
        'Product Management',
        'Intelligent Automation',
        'Conversational Al',
        'Digital Adoption Platforms',
        'IPaaS',
        'Intelligent Document Processing',
        'Low Code Applications',
        'Process Mining',
        'Robotic Process Automation',
        'Data & Al',
        'Big Data Platforms',
        'Generative Al',
        'Modern Data Tech',
        'loT & Embedded',
        'Business Intelligence & Data Visualisation',
        'Artificial Intelligence',
        'Data Science & Data Analytics',
        'MLOps',
    ]

    return (
        <div className='inline-flex w-full max-w-[600px] flex-nowrap gap-[24px] overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]'>
            <ul className='md:justify-start flex shrink-0 animate-infinite-scroll items-center justify-center gap-[24px] [&_img]:max-w-none'>
                {words &&
                    words.map((word: string, index: number) => (
                        <li
                            key={index}
                            className='font-accent text-[16px] leading-[200%]'
                        >
                            #{word}
                        </li>
                    ))}
            </ul>
            <ul
                className='md:justify-start flex shrink-0 animate-infinite-scroll items-center justify-center gap-[24px] [&_img]:max-w-none '
                aria-hidden='true'
            >
                {words &&
                    words.map((word: string, index: number) => (
                        <li
                            className='font-accent text-[16px] leading-[200%]'
                            key={index}
                        >
                            #{word}
                        </li>
                    ))}
            </ul>
        </div>
    )
}
