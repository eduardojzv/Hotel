import { OfferData } from "../../interfaces/offerData";

export const offersData: OfferData[] = [
    {
        title: 'Fiesta Promo',
        description: 'La mejor promoción del año llegó...',
        benefits: {
            title: "Beneficios",
            items: [
                'Si te hospedas 1 noche, recibe early check in gratis a partir de las 11 a.m. (incluye snacks y bebidas).',
                'Si te hospedas 2 noches, la segunda noche es gratis para un acompañante.',
                'Si te hospedas 3 noches, recibe early check in gratis + segunda noche gratis para un acompañante.'
            ]
        },
        conditions: {
            title: 'Condiciones',
            items: [
                'Promoción válida de Domingo a Jueves.',
                'No incluye el almuerzo buffet el día del ingreso.',
                'Mínimo 2 personas por habitación.',
                'No aplica con otras promociones ni para grupos.',
                'El cargo correspondiente a hospedaje se realizará automáticamente al reservar.',
                'Oferta exclusiva para reservar por nuestro sitio web (fiestaresort.com) o Contact Center.',
                'Aplican restricciones.'
            ]
        },
        dates: {
            validDates: {
                daysOfWeek: ['domingo', 'lunes', 'martes', 'miercoles', 'jueves'],
                range: [
                    [
                        new Date('2024-02-25'),
                        new Date('2024-06-30')]
                ]
            },
            excludedDates: {
                title: 'Fechas Excluidas',
                specificDates: [new Date('2024-04-14')],
                range: [
                    [
                        new Date('2024-04-13'),
                        new Date('2024-04-19')
                    ]
                ]
            }
            ,
        },
        href: '',
        img: 'home/fiestaPromoStandard.png'
    },
    {
        title: 'Oferta Compra Anticipada',
        description: '¿Planificando a futuro? Disfrute de un 15% de descuento en nuestra tarifa al reservar esta oferta con al menos noventa días antes de su llegada.',
        benefits: {
            title:'Beneficios',
            items:['5% de descuento en nuestra tarifa al reservar esta oferta con al menos noventa días antes de su llegada.']
        },
        conditions: {
            title: 'Condiciones',
            items: [
                'OFERTA VÁLIDA DEL 01 MARZO AL 23 DICIEMBRE 2024.',
                'Mínimo de 2 noches de estancia.',
                'No se permiten cambios.',
                'No se emitirá ningún reembolso en caso de cancelación, no presentación o salida anticipada.',
                'No reembolsable.',
                'No aplica para grupos.',
                'No aplica del 01 al 15 de julio, Semana Santa, feriados, ni fines de semana.',
                'Válida de Domingo a Jueves.',
                'El cargo correspondiente a hospedaje se realizará automáticamente al reservar.',
                'Aplican restricciones.'
            ]
        },
        dates: {
            validDates: {
                daysOfWeek: ['domingo', 'lunes', 'martes', 'miercoles', 'jueves'],
                range: [
                    [new Date('2024-03-01'),
                    new Date('2024-12-23')]
                ]
            },
            excludedDates: {
                title: 'Fechas Excluidas',
                specificDates: [new Date('2024-04-14')],
                range: [
                    [
                        new Date('2024-04-13'),
                        new Date('2024-04-19')
                    ],
                    [
                        new Date('2024-07-01'),
                        new Date('2024-07-15')
                    ]
                ]
            }
        },
        href: '',
        img: 'home/advancePurchaseStandard.jpg'
    },
    {
        title: 'Otro día en Fiesta',
        description: 'Disfrute Costa Rica, hospédese 3 noches y obtenga la 4ta noche gratis! Lo estamos esperando a usted y su Familia!',
        benefits: {
            title:'Beneficios',
            items:['Reserva 4 noches y pague 3, mínimo 4 noches de hospedaje.']
        },
        conditions: {
            title: 'Condiciones',
            items: [
                'No aplica para grupos',
                'No aplica con otras promociones o descuentos.',
                'El cargo correspondiente a hospedaje se realizará automáticamente al reservar.',
                'No aplica del 01 al 15 de julio,Semana Santa, ni feriados.',
                'No reembolsable, no se emitirá ningún reembolso en caso de cancelación, salida anticipada o no presentarse.',
                'Aplican restricciones.'
            ]
        },
        dates: {
            validDates: {
                daysOfWeek: ['domingo', 'lunes', 'martes', 'miercoles', 'jueves'],
                range: [
                    [new Date('2024-02-11'),
                    new Date('2024-12-23')]
                ]
            },
            excludedDates: {
                title: 'Fechas Excluidas',
                specificDates: [new Date('2024-04-14')],
                range: [
                    [
                        new Date('2024-06-01'),
                        new Date('2024-06-15')
                    ],
                    [
                        new Date('2024-04-13'),
                        new Date('2024-04-19')
                    ],
                ]
            }
        },
        href: '',
        img: 'home/anotherDay.png'
    }
];
