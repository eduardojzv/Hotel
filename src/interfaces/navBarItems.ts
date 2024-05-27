import { ReactNode } from "react";
interface NavItemDetails {
    text: string;
    icon: ReactNode;
    href: string;
}
export interface NavBarItems {
    [key: string]: NavItemDetails;
}