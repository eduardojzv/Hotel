import { ReactNode } from 'react';
export interface DropAndAcciordionItems {
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