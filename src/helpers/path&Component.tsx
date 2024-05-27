import { lazy } from "react";
//lazy
const Home=lazy(()=>import('../pages/home'))
const Lodging=lazy(()=>import('../pages/lodging'))
const AllInclusive=lazy(()=>import('../pages/allInclusive'))
interface Structure {
    path: string;
    component: React.ReactNode
}
interface PathAndComponent {
    home: Structure;
    allInclude: Structure;
    lodging: Structure;
    gallery: Structure;
    offers: Structure;
    excursionsTransfers: Structure;
    alimentacion: Structure;
    premium: Structure;
    events: Structure;
    spa: Structure;
    entertainment: Structure;
    socialProgram: Structure;
    club: Structure;
}
export const pathAndComponent: PathAndComponent = {
    home: {
        path: '/',
        component: <Home />
    },
    allInclude: {
        path: '/all-include',
        component: <AllInclusive/>
    },
    lodging: {
        path: '/lodging',
        component: <Lodging />
    },
    gallery: {
        path: '/gallery',
        component: <div>Gallery</div>
    },
    offers: {
        path: '/offers',
        component: <div>Offers</div>
    },
    excursionsTransfers: {
        path: '/excursions-transfers',
        component: <div>Excursions & Transfers</div>
    },
    alimentacion: {
        path: '/feeding',
        component: <div>Alimentación</div>
    },
    premium: {
        path: '/premium',
        component: <div>Premium</div>
    },
    events: {
        path: '/events',
        component: <div>Events</div>
    },
    spa: {
        path: '/heliconia-spa',
        component: <div>Heliconia Spa</div>
    },
    entertainment: {
        path: '/entertainment',
        component: <div>Entertainment</div>
    },
    socialProgram: {
        path: '/social-program',
        component: <div>Social Program</div>
    },
    club: {
        path: '/club',
        component: <div>Club</div>
    }
};

export function BrowserRouterAndComponents() {
    return Object.values(pathAndComponent).map(({ path, component }) => ({
        path,
        element: component
    }));
}