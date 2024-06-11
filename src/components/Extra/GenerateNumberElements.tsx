import { DefaultText } from 'src/components/Text'

interface GenerateNumberStringProps {
    highlighted?: number
    isInView: boolean
}

export const GenerateNumberString: React.FC<GenerateNumberStringProps> = ({
    highlighted,
    isInView,
}: GenerateNumberStringProps) => {
    const combinedRange: number[] = [
        240, 260, 280, 300, 320, 340, 0, 20, 40, 60, 80, 100, 120,
    ]

    return (
        <>
            {combinedRange.map((number, index) => (
                <DefaultText
                    key={`number_${index}`}
                    additionalStyles={`flex-1 mobile:hidden desktop:flex justify-center font-accent font-bold ${
                        isInView && highlighted === number
                            ? 'opacity-100'
                            : 'opacity-20'
                    } 'transition-opacity duration-300 ease-in-out' : ''}`}
                >
                    {number}
                </DefaultText>
            ))}
        </>
    )
}
