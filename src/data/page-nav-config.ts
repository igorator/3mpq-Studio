import { routes } from './routes'

type PageConfig = {
    [key: string]: {
        pageHeading: string
        pageText: string
    }
}

export const pageConfigEn: PageConfig = {
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

export const pageConfigUa: PageConfig = {
    [routes.root]: {
        pageHeading: 'Веб розробка',
        pageText:
            'Ми переосмислюємо цифрові ландшафти, поєднуючи інноваційний дизайн з новітніми технологіями для створення трансформаційного цифрового досвіду. Наші індивідуальні рішення, від веб-розробки до брендингу і не тільки, створені для того, щоб захопити вашу аудиторію і підняти ваш бренд.',
    },

    [routes.portfolio]: {
        pageHeading: 'Портфоліо',
        pageText: '',
    },

    [routes.contact]: {
        pageHeading: 'Зв`яжіться з нами',
        pageText: '',
    },
    [routes.privacy]: {
        pageHeading: 'Політика конфіденційності',
        pageText: '',
    },
    [routes.terms]: {
        pageHeading: 'Умови користування',
        pageText: '',
    },
    [routes.cookies]: {
        pageHeading: 'Політика cookie',
        pageText: '',
    },
    [routes.offers]: {
        pageHeading: 'Пропозиції',
        pageText: '',
    },
}
