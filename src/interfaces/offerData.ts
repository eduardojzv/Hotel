export interface OfferData {
    title: string;
    description: string;
    benefits: {
        title: string;
        items: string[]
    };
    conditions: {
        title: string;
        items: string[]
    };
    dates: {
        validDates: {
            daysOfWeek: string[];
            range: [Date, Date][];
        }
        excludedDates: {
            title: string;
            specificDates: Date[];
            range: [Date, Date][];
        };
    };
    href: string;
    img: string;
}