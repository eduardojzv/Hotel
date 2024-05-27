interface BreakPointVariants {
  hidden: {
    allInclude:string;
    themeSwitcher: string;
    gallery: string;
    excursionsTransfers: string;
    services: string;
    offers: string;
  };
  show: {
    home: string;
    allInclude: string;
    lodging: string;
    themeSwitcher: string;
    services: string;
    offers: string;
  };
}
export const breakPointVariants: BreakPointVariants = {
  hidden: {
    allInclude: 'max-[730px]:hidden',
    themeSwitcher:'max-[768px]:hidden',
    gallery: 'hidden',
    excursionsTransfers:'hidden',
    services: 'max-[1000px]:hidden',
    offers: 'max-[800px]:hidden',
  },
  show: {
    home: 'sm:hidden',
    allInclude: 'min-[730px]:hidden',
    lodging: 'sm:hidden',
    themeSwitcher:'md:hidden',
    services: 'min-[1000px]:hidden',
    offers: 'min-[800px]:hidden',
  }
}