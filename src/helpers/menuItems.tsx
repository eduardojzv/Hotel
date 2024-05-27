import { URLS } from "./URLS";
import { AllInclusiveIcon, HomeIcon, LodgingIcon, GalleryIcon, OfferIcon, ExcursionIcon, FoodIcon, StarIcon, PartyIcon, SpanIcon, FitnessIcon, GroupUsersIcon, ServiceIcon, ClubIcon } from "../icons/menu/icons";
import { NavBarItems } from "../interfaces/navBarItems";
import { DropAndAcciordionItems } from "../interfaces/dropAndAcciordionItems";


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
export const dropAndAcciordionItems: DropAndAcciordionItems = {
  services: {
    text: ' Más Servicios',
    icon: <ServiceIcon width={iconSize.width} height={iconSize.height} />,
  },

  subItems: {
    alimentacion: {
      text: 'Alimentos y Bebidas',
      icon: <FoodIcon width={iconSize.width} height={iconSize.height} />,
      href: ''
    },
    premium: {
      text: 'Premium',
      icon: <StarIcon width={iconSize.width} height={iconSize.height} />,
      href: ''
    },
    events: {
      text: 'Reuniones, Bodas y Eventos al Aire Libre',
      icon: <PartyIcon width={iconSize.width} height={iconSize.height} />,
      href: ''
    },
    spa: {
      text: 'Heliconia spa',
      icon: <SpanIcon width={iconSize.width} height={iconSize.height} />,
      href: ''
    },
    entertainment: {
      text: 'Entretenimiento',
      icon: <FitnessIcon width={iconSize.width} height={iconSize.height} />,
      href: ''
    },
    socialProgram: {
      text: 'Programa de Responsabilidad Social Empresarial Humano',
      icon: <GroupUsersIcon width={iconSize.width} height={iconSize.height} />,
      href: ''
    },
    club: {
      text: 'Club Vacacional',
      icon: <ClubIcon width={iconSize.width} height={iconSize.height} />,
      href: ''
    },
    test01: {
      text: 'test01',
      icon: <ClubIcon width={iconSize.width} height={iconSize.height} />,
      href: ''
    },
  }
}