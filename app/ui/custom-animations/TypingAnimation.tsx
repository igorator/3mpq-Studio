'use client'
import { TypeAnimation } from 'react-type-animation'

export const InformationTyping = () => {
    return (
        <TypeAnimation
            sequence={[
                'Product Engineering',
                2000,
                'Solution Discovery',
                2000,
                'DevOps',
                2000,
                'Digital Assurance',
                2000,
                'Scaled Agile Delivery',
                2000,
                'RunOps',
                2000,
                'Software Architecture',
                2000,
                'Customer Experience',
                2000,
                'User Research',
                2000,
                'Experience Design',
                2000,
                'Product Discovery',
                2000,
                'Product Management',
                2000,
                'Intelligent Automation',
                2000,
                'Conversational Al',
                2000,
                'Digital Adoption Platforms',
                2000,
                'IPaaS',
                2000,
                'Intelligent Document Processing',
                2000,
                'Low Code Applications',
                2000,
                'Process Mining',
                2000,
                'Robotic Process Automation',
                2000,
                'Data & Al',
                2000,
                'Big Data Platforms',
                2000,
                'Generative Al',
                2000,
                'Modern Data Tech',
                2000,
                'loT & Embedded',
                2000,
                'Business Intelligence & Data Visualisation',
                2000,
                'Artificial Intelligence',
                2000,
                'Data Science & Data Analytics',
                2000,
                'MLOps',
            ]}
            wrapper='span'
            speed={50}
            style={{ display: 'inline-block' }}
            repeat={Infinity}
        />
    )
}

export const NotFoundTyping = () => {
    return (
        <TypeAnimation
            sequence={[
                'Page not found...',
                2000,
                'We`re sorry...',
                1000,
                'We can pass it through together...',
                2000,
                '3mpq...',
                1000,
            ]}
            wrapper='span'
            speed={50}
            style={{ display: 'inline-block' }}
            repeat={Infinity}
        />
    )
}
