import { ReactNode } from 'react';
export interface MoreServicesItems {
    services: {
        text: string;
        icon: ReactNode;
    };
    subItems: {
        [key: string]: {
            text: string;
            icon: ReactNode;
            href: string;
        }
    };
}