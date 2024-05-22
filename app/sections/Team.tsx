import { Section } from '@components/Section'
import {
    TeamMemberCard,
    TeamHeaderCard,
    TeamTextCard,
    TeamEmptyCard,
} from '@components/Cards/TeamMemberCards'

import { teamMemberCardsData } from '@data/team-data'

export const Team = () => {
    return (
        <Section id='our-team'>
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
                                <TeamMemberCard
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
                                    text={member.text}
                                    key={index}
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
