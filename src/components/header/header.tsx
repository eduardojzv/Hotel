import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link} from "@nextui-org/react";
import { FiestaResortIcon, Logo } from "../../icons/menu/icons";
import { navItems } from "../../helpers/navBar/menuItems";
import { lazy, useState } from "react";
import { breakPointVariants } from "../../helpers/navBar/breakPoinsMenuItems";
import { motion } from "framer-motion";
import AccordionResponsive from "./AccordionResponsive";
import Language from "./language";
import DropDownHeader from "./dropDownHeader";
import { useLocation } from "react-router-dom";
import ThemeSwitcher from "../others/themeSwitcher/themeSwitcher";
//lazy
const ModalReservation=lazy(()=>import('./modalReservation/modalReservation'))
export default function Header() {
  const location = useLocation();
  //console.log("location,Se re-renderiza cada vez que el icono se mueve en el nav",location.pathname);
  const currentPage = location.pathname

  const [IconState, setIconState] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function ScrollPositionChange(position: number) {
    if (position <= 0) {
      setIconState(true)
    } else {
      setIconState(false)
    }

  }
  return (
    <>
      <Navbar
        onScrollPositionChange={ScrollPositionChange}
        disableScrollHandler={false}
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen} classNames={{
          item: [
            "flex",
            "relative",
            "h-full",
            "items-center",
            "data-[active=true]:after:content-['']",
            "data-[active=true]:after:absolute",
            "data-[active=true]:after:bottom-0",
            "data-[active=true]:after:left-0",
            "data-[active=true]:after:right-0",
            "data-[active=true]:after:h-[2px]",
            "data-[active=true]:after:rounded-[2px]",
            "data-[active=true]:after:bg-primary",
          ]
        }} >
        <NavbarContent justify="start" className="max-w-fit">
          <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
        </NavbarContent>
        {
          IconState && <motion.div className="absolute -z-0 top-16  p-1 left-0" initial={{ scale: 0, originY: -1, originX: 1 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20
            }}>
            <FiestaResortIcon width="150px" height="150px" />
          </motion.div>

        }
        <NavbarContent justify="start">
          {
            !IconState ?
              <motion.div initial={{ scale: 0, originY: 3, originX: -2 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20
                }}>
                <NavbarBrand>
                  <Logo width="85px" height="85px" />
                </NavbarBrand>
              </motion.div>
              :
              <div className="w-[85px]"></div>
          }
          <Language />
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {Object.entries(navItems).map(([key, val]) => (
            <NavbarItem key={key} isActive={val.href === currentPage} className={`${breakPointVariants.hidden[key as keyof typeof breakPointVariants.hidden] || ''}`}>
              <Link
                href={val.href}
                aria-current={val.href === currentPage ? 'page' : 'false'}
                color={val.href === currentPage ? 'primary' : 'foreground'}
              >
                <div className="flex gap-2  items-center">
                  {val.icon}
                  {val.text}
                </div>
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <ModalReservation/>

        <NavbarContent className={`${breakPointVariants.hidden['services'] || ''}`}>
          <DropDownHeader />
        </NavbarContent>
        <NavbarContent >
          <NavbarItem>
            <ThemeSwitcher />
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="z-40">
          {Object.entries(navItems).map(([key, val]) => (
            <NavbarMenuItem key={key} className={`${breakPointVariants.show[key as keyof typeof breakPointVariants.show] || ''}`}>
              <Link color={val.href === currentPage ? 'primary' : 'foreground'} href={val.href} className="w-full" size="lg">
                <div className="flex gap-2 justify-center items-center">
                  {val.icon}
                  {val.text}
                </div>
              </Link>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem className={`${breakPointVariants.show["services"] || ''}`}>
            <AccordionResponsive />
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
}
