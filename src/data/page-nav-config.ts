import { routes } from './routes'

type PageConfig = {
    [key: string]: {
        pageHeading: string
        pageText: string
    }
}

export const pageConfig: PageConfig = {
    [routes.root]: {
        pageHeading: 'Home',
        pageText:
            'We redefine digital landscapes by blending innovative design with the latest technology to create transformative digital experiences. Our bespoke solutions, from web development to branding and beyond, are crafted to captivate your audience and elevate your brand.',
    },

    [routes.portfolio]: {
        pageHeading: 'Portfolio',
        pageText: '',
    },

    [routes.contact]: {
        pageHeading: 'Contact',
        pageText: '',
    },
    [routes.privacy]: {
        pageHeading: 'Privacy Policy',
        pageText: '',
    },
    [routes.terms]: {
        pageHeading: 'Terms of Service',
        pageText: '',
    },
    [routes.cookies]: {
        pageHeading: 'Cookie Policy',
        pageText: '',
    },
    [routes.offers]: {
        pageHeading: 'Offers',
        pageText: '',
    },
}
