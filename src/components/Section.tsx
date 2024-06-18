type SectionProps = {
    children: React.ReactNode
    id?: string
    fullWidth?: boolean
    addStyles?: string
    withoutPaddingX?: boolean
}

export const Section = ({
    children,
    id,
    fullWidth,
    withoutPaddingX,
    addStyles,
}: SectionProps) => {
    return (
        <section
            className={`relative flex w-full justify-center ${withoutPaddingX ? 'p-0' : 'mobile:px-[12px] desktop:px-[56px]'} ${fullWidth ? '' : 'max-w-[1440px]'} ${addStyles}`}
            id={id}
        >
            {children}
        </section>
    )
}
