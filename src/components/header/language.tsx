import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { languages } from "../../helpers/navBar/languajes";
import { useEffect, useState } from "react";
export default function Language() {
  const [selectedKeys, setSelectedKeys]: any = useState(new Set([localStorage.getItem('language') || languages[0]]));
  function setLanguageStorage(lang: any) {
    const value = lang.values().next().value
    if (value && languages.includes(value)) {
      localStorage.setItem('language', value)
      setSelectedKeys(lang)
    } else {
      localStorage.setItem('language', languages[0])
      setSelectedKeys(new Set([languages[0]]));
    }
  }
  useEffect(() => {
    const storedLang = localStorage.getItem('language');
    if (storedLang && languages.includes(storedLang)) {
      setSelectedKeys(new Set([storedLang]));
    } else {
      setSelectedKeys(new Set([languages[0]]));
    }
  }, []);

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="bordered"
          className="capitalize"
        >
          {selectedKeys}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Single selection example"
        variant="shadow"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={setLanguageStorage}
      >
        {languages.map((lang) => (
          <DropdownItem key={lang}>{lang}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}