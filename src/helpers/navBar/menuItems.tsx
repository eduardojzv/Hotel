import { URLS } from "../URLS";
import { AllInclusiveIcon, HomeIcon, LodgingIcon, GalleryIcon, OfferIcon, ExcursionIcon, FoodIcon, StarIcon, PartyIcon, SpanIcon, FitnessIcon, GroupUsersIcon, ServiceIcon, ClubIcon } from "../../icons/menu/icons";
import { NavBarItems } from "../../interfaces/navBarItems";
import { MoreServicesItems } from "../../interfaces/dropAndAcciordionItems";


const iconSize = {
  width: '30px',
  height: '30px'
}
export const navItems: NavBarItems = {
  home: {
    text: 'Inicio',
    icon: <HomeIcon width={iconSize.width} height={iconSize.height} />,
    href: URLS.home.path
  },
  allInclude: {
    text: 'Todo Incluido',
    icon: <AllInclusiveIcon width={iconSize.width} height={iconSize.height} />,
    href: URLS.allInclude.path
  },
  lodging: {
    text: 'Alojamiento',
    icon: <LodgingIcon width={iconSize.width} height={iconSize.height} />,
    href: URLS.lodging.path
  },
  gallery: {
    text: 'Galería',
    icon: <GalleryIcon width={iconSize.width} height={iconSize.height} />,
    href: URLS.gallery.path
  },
  offers: {
    text: 'Ofertas',
    icon: <OfferIcon width={iconSize.width} height={iconSize.height} />,
    href: URLS.offers.path
  },
  excursionsTransfers: {
    text: 'Excursiones & Traslados',
    icon: <ExcursionIcon width={iconSize.width} height={iconSize.height} />,
    href: URLS.excursionsTransfers.path
  },
}
//
export const moreServicesItems: MoreServicesItems = {
  services: {
    text: ' Más Servicios',
    icon: <ServiceIcon width={iconSize.width} height={iconSize.height} />,
  },

  subItems: {
    feed: {
      text: 'Alimentos y Bebidas',
      icon: <FoodIcon width={iconSize.width} height={iconSize.height} />,
      href:  URLS.feed.path
    },
    premium: {
      text: 'Premium',
      icon: <StarIcon width={iconSize.width} height={iconSize.height} />,
      href: URLS.premium.path
    },
    events: {
      text: 'Reuniones, Bodas y Eventos al Aire Libre',
      icon: <PartyIcon width={iconSize.width} height={iconSize.height} />,
      href: URLS.events.path
    },
    spa: {
      text: 'Heliconia spa',
      icon: <SpanIcon width={iconSize.width} height={iconSize.height} />,
      href: URLS.spa.path
    },
    entertainment: {
      text: 'Entretenimiento',
      icon: <FitnessIcon width={iconSize.width} height={iconSize.height} />,
      href: URLS.entertainment.path
    },
    socialProgram: {
      text: 'Programa de Responsabilidad Social Empresarial Humano',
      icon: <GroupUsersIcon width={iconSize.width} height={iconSize.height} />,
      href: URLS.socialProgram.path
    },
    club: {
      text: 'Club Vacacional',
      icon: <ClubIcon width={iconSize.width} height={iconSize.height} />,
      href: URLS.club.path
    },
  }
}