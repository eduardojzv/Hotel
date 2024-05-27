import { Accordion, AccordionItem, Listbox, ListboxItem } from '@nextui-org/react'
import { dropAndAcciordionItems } from '../../helpers/menuItems'

export default function AccordionResponsive() {
    return (
        <Accordion className="px-0 w-fit">
            <AccordionItem key="1" aria-label="Más Información" title={dropAndAcciordionItems.services.text} startContent={dropAndAcciordionItems.services.icon}>
                <div className="w-full max-w-[260px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
                    <Listbox variant="flat" aria-label="Listbox menu with descriptions"
                        classNames={{
                            base: "max-w-xs",
                            list: "max-h-[300px] overflow-scroll",
                        }}
                    >
                        {Object.entries(dropAndAcciordionItems.subItems).map(([key, val]) => (
                            <ListboxItem
                                key={key}
                                description="Create a new file"
                                startContent={val.icon}
                                classNames={{
                                    title: 'text-wrap'
                                }}
                            >
                                {val.text}
                            </ListboxItem>
                        ))}
                    </Listbox>
                </div>
            </AccordionItem>
        </Accordion>
    )
}