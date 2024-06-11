import { lazy } from "react";
import { ReservationURLS, URLS } from "./URLS";
//lazy
const Home=lazy(()=>import('../pages/home'))
const Lodging=lazy(()=>import('../pages/lodging'))
const AllInclusive=lazy(()=>import('../pages/allInclusive'))
const DatesOfStay=lazy(()=>import('../pages/datesOfStay'))
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
    feed: Structure;
    premium: Structure;
    events: Structure;
    spa: Structure;
    entertainment: Structure;
    socialProgram: Structure;
    club: Structure;
    datesOfStay:Structure;
}
const pathAndComponent: PathAndComponent = {
    home: {
        path:URLS.home.path,
        component: <Home />
    },
    allInclude: {
        path: URLS.allInclude.path,
        component: <AllInclusive/>
    },
    lodging: {
        path: URLS.lodging.path,
        component: <Lodging />
    },
    gallery: {
        path:  URLS.gallery.path,
        component: <div>Gallery</div>
    },
    offers: {
        path: URLS.offers.path,
        component: <div>Offers</div>
    },
    excursionsTransfers: {
        path: URLS.excursionsTransfers.path,
        component: <div>Excursions & Transfers</div>
    },
    feed: {
        path: URLS.feed.path,
        component: <div>Alimentación</div>
    },
    premium: {
        path: URLS.premium.path,
        component: <div>Premium</div>
    },
    events: {
        path: URLS.events.path,
        component: <div>Events</div>
    },
    spa: {
        path: URLS.spa.path,
        component: <div>Heliconia Spa</div>
    },
    entertainment: {
        path: URLS.entertainment.path,
        component: <div>Entertainment</div>
    },
    socialProgram: {
        path: URLS.socialProgram.path,
        component: <div>Social Program</div>
    },
    club: {
        path: URLS.club.path,
        component: <div>Club</div>
    },
    datesOfStay:{
        path:ReservationURLS.datesOfStay.path,
        component:<DatesOfStay/>
    }
};

export function BrowserRouterAndComponents() {
    return Object.values(pathAndComponent).map(({ path, component }) => ({
        path,
        element: component
    }));
}