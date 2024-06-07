import { getLocalTimeZone, today } from "@internationalized/date";
import { DateRangePicker } from "@nextui-org/react";
import { I18nProvider } from "@react-aria/i18n";
import { useState } from "react";

export default function DateRange() {
    const todayDate = today(getLocalTimeZone());
    const oneDayLater = todayDate.add({ days: 1 });
    const oneYearLater = todayDate.add({ years: 1 });
    const [calendarValue, setCalendarValue] = useState({
        start: todayDate,
        end: oneDayLater,
    });
    return (
        <I18nProvider locale="es-ES">
            <DateRangePicker
                minValue={todayDate}
                value={calendarValue}
                maxValue={oneYearLater}
                onChange={setCalendarValue}
                label="Tiempo de Estadia"
                className="w-auto"
            />
        </I18nProvider>
    )
}