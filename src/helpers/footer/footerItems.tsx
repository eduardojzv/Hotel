import { NavBarItems } from "../../interfaces/navBarItems";
import { FooterURLS } from "../URLS";
export const FooterNavItems: NavBarItems = {
    contactLocation: {
        text: "CONTACTO Y UBICACIÓN",
        icon: "",
        href:FooterURLS.contactLocation.path
    },
    emailOffers: {
        text: "BOLETÍN",
        icon: "",
        href: FooterURLS.emailOffers.path
    },
    privacyPolicy:{
        text:"POLÍTICA DE PRIVACIDAD",
        icon:"",
        href:FooterURLS.privacyPolicy.path
    }
}