import { Section } from 'src/components/Section'
import {
    TeamHeaderCard,
    TeamTextCard,
    TeamEmptyCard,
    TeamAvatarCard,
} from 'src/components/Cards/TeamMemberCards'

import { TeamMemberCardType } from '@data/types'

export async function Team({
    id,
    teamMemberCardsData,
}: {
    id: string
    teamMemberCardsData: TeamMemberCardType[]
}) {
    return (
        <Section id={id}>
            <div className='grid w-full gap-[24px] mobile:grid-cols-2 mobile:pt-[16px] desktop:grid-cols-4 desktop:pt-[150px]'>
                {teamMemberCardsData.map((member, index) => {
                    switch (member.type) {
                        case 'header':
                            return (
                                <TeamHeaderCard
                                    key={index}
                                    title={member.title}
                                    type={'header'}
                                />
                            )
                        case 'avatar':
                            return (
                                <TeamAvatarCard
                                    key={index}
                                    name={member.name}
                                    jobTitle={member.jobTitle}
                                    imgSrc={member.imgSrc}
                                    mobileOrder={member.mobileOrder}
                                    desktopOrder={index + 1}
                                    type={'avatar'}
                                />
                            )
                        case 'text':
                            return (
                                <TeamTextCard
                                    key={index}
                                    text={member.text}
                                    mobileOrder={member.mobileOrder}
                                    desktopOrder={index + 1}
                                    type={'text'}
                                />
                            )
                        case 'empty':
                            return <TeamEmptyCard key={index} type={'empty'} />
                        default:
                            return null
                    }
                })}
            </div>
        </Section>
    )
}
