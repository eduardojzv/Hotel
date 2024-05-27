import { CircleIcon } from "../icons/home/icons";
import { CardHomeData } from "../interfaces/cardHomeData";
import { URLS } from "./URLS";
export const cardHomeData: CardHomeData[] = [
    {
        title: 'AVISO DE REMODELACIÓN: HABITACIONES',
        file: 'home/fiestaRoom.jpg',
        notice: [
            {
                subtitle: 'Fecha de remodelación',
                description: 'del 18 de octubre, 2023 en adelante.'

            },
            {
                subtitle: 'Area de remodelación',
                description: 'Habitaciones (1era etapa-habitaciones Fiesta).'
            }
        ],
        paragraphs: [
            'Como parte de nuestro constante compromiso por mejorar nuestras instalaciones y servicios, estaremos renovando nuestras 408 habitaciones, en un proyecto que durará aproximadamente 4 años:',
            'Los trabajos de remodelación se llevarán a cabo bajo un logistica sectorizada con el fin de minizar el impacto sobre el resto de nuestra propiedad. De antemano nos disculpamos por cualquier inconveniente y agradecemos su comprensión durante este proyecto.'
        ],
        styles: {
            img: 'relative col-span-6 md:col-span-6 ',
            info: 'flex flex-col col-span-6 md:col-span-6 h-full'
        },
    },
    {
        title: 'Disfrute de nuestro resort todo incluido e ilimitado',
        file: 'videos_gif/HomeInfo.mp4',
        notice: [
        ],
        paragraphs: [
            'La mejor experiencia en todo incluido en Costa Rica. Nuestro resort está listo para deleitarle con nuestra cálida hospitalidad, emocionante entretenimiento y tentadora gastronomía.',
        ],
        styles: {
            img: 'relative col-span-6 md:col-span-8 md:order-2 ',
            info: 'flex flex-col items-center col-span-6 md:col-span-4 h-full'
        },
        link:{
            href:URLS.allInclude.path,
            text:'Explore Mas'
        },
        icons:{
            component:<CircleIcon fill="#FFC300"/>,
            quantity:3
        }
    }
]