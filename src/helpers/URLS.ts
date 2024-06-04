interface UrlDetails {
    path: string;
}
interface Urls {
    home: UrlDetails;
    allInclude: UrlDetails;
    lodging: UrlDetails;
    gallery: UrlDetails;
    offers: UrlDetails;
    excursionsTransfers: UrlDetails;
    feed: UrlDetails;
    premium: UrlDetails;
    events: UrlDetails;
    spa: UrlDetails;
    entertainment: UrlDetails;
    socialProgram: UrlDetails;
    club: UrlDetails;
}
interface FooterUrls {
    contactLocation: UrlDetails;
    emailOffers: UrlDetails;
    privacyPolicy: UrlDetails
}
export const URLS: Urls = {
    home: {
        path: '/',

    },
    allInclude: {
        path: '/all-include',
    },
    lodging: {
        path: '/lodging',
    },
    gallery: {
        path: '/gallery',
    },
    offers: {
        path: '/offers',
    },
    excursionsTransfers: {
        path: '/excursions-transfers',
    },
    feed: {
        path: '/feeding',
    },
    premium: {
        path: '/premium',
    },
    events: {
        path: '/events',
    },
    spa: {
        path: '/heliconia-spa',
    },
    entertainment: {
        path: '/entertainment',
    },
    socialProgram: {
        path: '/social-program',
    },
    club: {
        path: '/club',
    }
};
export const FooterURLS: FooterUrls = {
    contactLocation: {
        path: "/contact-location"
    },
    emailOffers: {
        path: "/email-offers"
    },
    privacyPolicy: {
        path: "/privacy-policy"
    }
}


