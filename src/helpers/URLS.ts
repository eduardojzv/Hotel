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
    alimentacion: UrlDetails;
    premium: UrlDetails;
    events: UrlDetails;
    spa: UrlDetails;
    entertainment: UrlDetails;
    socialProgram: UrlDetails;
    club: UrlDetails;
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
    alimentacion: {
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


