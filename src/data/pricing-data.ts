export type PricingCardData = {
    id: number
    heading: string
    price: number
    subtext: string
    benefits: string[]
    isMostPopular: boolean
}

export const pricingCardsData = [
    {
        id: 0,
        heading: 'Adapted template site',
        price: 500,
        subtext: 'Ideal for personal projects',
        benefits: ['Fast development', 'Static website', 'Integrations'],
        isMostPopular: false,
    },
    {
        id: 1,
        heading: 'Landing Page',
        price: 1000,
        subtext: 'Great for small businesses',
        benefits: ['Up to 3 pages', 'Basic animations', 'Integrations'],
        isMostPopular: true,
    },
    {
        id: 2,
        heading: 'Website business card',
        price: 500,
        subtext: 'Ideal for advertising traffic',
        benefits: ['1 page', 'Basic animations', 'Integrations'],
        isMostPopular: false,
    },
    {
        id: 3,
        heading: 'E-commerce',
        price: 2000,
        subtext: 'Ideal for sales professionals',
        benefits: ['Original design', 'Integrations', 'SEO optimisation'],
        isMostPopular: false,
    },
    {
        id: 4,
        heading: 'Corporate website',
        price: 3000,
        subtext: 'Suitable for companies',
        benefits: ['Unlimited pages', 'Blog', 'Contact Form'],
        isMostPopular: false,
    },
    {
        id: 5,
        heading: 'Custom Solutions',
        price: 5000,
        subtext: 'Great for brand promotion',
        benefits: [
            'Original design',
            'High-tech development',
            'SEO optimisation',
        ],
        isMostPopular: false,
    },
]
