export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
    const dottedBackground: string =
        'bg-black bg-[radial-gradient(#2D2D2D_1px,transparent_1px)] bg-fixed [background-size:26px_26px]'
    return (
        <div
            className={`relative flex min-h-screen w-full flex-col items-center overflow-x-clip text-white mobile:pb-[64px] desktop:pb-[56px] ${dottedBackground}`}
        >
            {children}
        </div>
    )
}
