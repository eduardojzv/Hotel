import { ReactNode } from "react";

export interface CardHomeData {
    title: string;
    file: string;
    notice: {
        subtitle: string;
        description: string;
    }[];
    paragraphs: string[];
    styles: {
        img: string;
        info: string;
    };
    link?:{
        text:string,
        href:string
    };
    icons?:{
        component:ReactNode,
        quantity:number;
    }
}