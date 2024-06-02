import { Divider, Link } from "@nextui-org/react";
import { FooterNavItems } from "../../helpers/footer/footerItems";
import { FacebookIcon, InstagramIcon, LinkedinIcon, TripAdvisorIcon } from "../../icons/others";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center h-auto mb-4">
      <ul className="flex gap-4">
        {Object.entries(FooterNavItems).map(([key, val]) => (
          <li key={key}>
            <Link href={val.href} showAnchorIcon underline="hover">
              {val.text}
            </Link>
          </li>
        ))}
      </ul>
      <Divider className="mt-2 mb-2"/>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-2">
        <div className="flex flex-col items-center justify-center">
          <ul>
            <li><h1 className="font-kaushan text-blue-500 text-xl">Fiesta Resort Todo Incluído</h1></li>
            <li><p>Puntarenas, Costa Rica 60115</p></li>
            <li>
              <Link href="tel: (+506) 2103-5199">
                Tel USA: (+506) 2103-5199
              </Link>
            </li>
            <li>
              <Link href="tel: (+506) 800-555-5555">
                Tel Costa Rica: 800-555-5555
              </Link>
            </li>
            <li>
              <Link href="https://wa.me/50688159897">
                WhatsApp: (+506) 8815-9897
              </Link>
            </li>
            <li>
              <Link href="mailto:reservaciones@fiestaresort.com">
                Correo: reservaciones@fiestaresort.com
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-row items-center justify-center">
          <ul className="flex gap-2 items-center">
            <li>
              <FacebookIcon width='35px' height='35px' />
            </li>
            <li>
              <TripAdvisorIcon width='42px' height='42px' />
            </li>
            <li>
              <InstagramIcon width='42px' height='42px'/>
            </li>
            <li>
              <LinkedinIcon width='40px' height='40px'/>
            </li>
          </ul>

        </div>
      </div>
    </div>
  )
}