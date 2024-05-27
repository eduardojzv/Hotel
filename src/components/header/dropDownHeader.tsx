import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, NavbarItem, Button } from '@nextui-org/react'
import { ChevronDown} from "../../icons/others";
import { dropAndAcciordionItems } from '../../helpers/menuItems';
export default function DropDownHeader() {
  return (
    <Dropdown>
      <NavbarItem>
        <DropdownTrigger>
          <Button
            disableRipple
            className="p-0 bg-transparent data-[hover=true]:bg-transparent text-base"
            endContent={<ChevronDown fill="currentColor" size={16}/>}
            radius="sm"
            startContent={dropAndAcciordionItems.services.icon}
          >
            {dropAndAcciordionItems.services.text}
          </Button>
        </DropdownTrigger>
      </NavbarItem>
      <DropdownMenu
        aria-label="ACME features"
        className="w-[250px] h-[350px] overflow-y-scroll"
        itemClasses={{
          base: "gap-4",
          title:'text-wrap'
        }}
      >
        {Object.entries(dropAndAcciordionItems.subItems).map(([key, val]) => (
          <DropdownItem key={key}
            description="ACME scales apps to meet user demand, automagically, based on load."
            startContent={val.icon}
          >
            {val.text}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}