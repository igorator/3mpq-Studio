import React, { ReactNode } from 'react'

type TextProps = {
    children: ReactNode
    additionalStyles?: string
}

type HeadingProps = TextProps & {
    headingLevel: 1 | 2 | 3
}

type ArticleProps = TextProps & {
    type?: 'services' | null
}

type ParagraphProps = TextProps & {
    paragraphType: 'default' | 'hero' | 'team'
}

export const DefaultText: React.FC<TextProps> = ({
    children,
    additionalStyles,
}) => {
    return (
        <span
            className={`text-wrap text-[16px] leading-[170%] ${additionalStyles}`}
        >
            {children}
        </span>
    )
}

export const Paragraph: React.FC<ParagraphProps> = ({
    children,
    paragraphType,
    additionalStyles,
}) => {
    return (
        <>
            {(() => {
                switch (paragraphType) {
                    case 'default':
                        return (
                            <p
                                className={`text-pretty font-secondary text-[16px] leading-[200%] ${additionalStyles}`}
                            >
                                {children}
                            </p>
                        )
                    case 'hero':
                        return (
                            <p className="h-fit max-w-[704px] self-end text-pretty font-primary leading-[170%] desktop:text-[16px]">
                                {children}
                            </p>
                        )
                    case 'team':
                        return (
                            <p className="mobile:text[10px] text-pretty font-secondary leading-[170%] desktop:text-[16px]">
                                {children}
                            </p>
                        )
                }
            })()}
        </>
    )
}

export const Article: React.FC<ArticleProps> = ({
    children,
    type,
    additionalStyles,
}) => {
    return (
        <>
            {(() => {
                switch (type) {
                    case 'services':
                        return (
                            <article
                                className={`text-justify font-primary leading-[150%] mobile:text-[16px] desktop:text-[32px] ${additionalStyles}`}
                            >
                                {children}
                            </article>
                        )
                    default:
                        return (
                            <article
                                className={`text-balance font-primary leading-[170%] mobile:text-[24px] desktop:text-[32px] ${additionalStyles}`}
                            >
                                {children}
                            </article>
                        )
                }
            })()}
        </>
    )
}

export const Heading: React.FC<HeadingProps> = ({
    children,
    headingLevel,
    additionalStyles,
}) => {
    return (
        <>
            {(() => {
                switch (headingLevel) {
                    case 1:
                        return (
                            <h1
                                className={`font-primary leading-[150%] mobile:text-[32px] desktop:text-[48px] ${additionalStyles}`}
                            >
                                {children}
                            </h1>
                        )
                    case 2:
                        return (
                            <h2
                                className={`font-primary leading-[170%] mobile:text-[24px] desktop:text-[32px] ${additionalStyles}`}
                            >
                                {children}
                            </h2>
                        )
                    case 3:
                        return (
                            <h3 className="text-balance font-primary text-[16px] leading-[170%]">
                                {children}
                            </h3>
                        )
                }
            })()}
        </>
    )
}
