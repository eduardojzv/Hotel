import { Select, SelectItem } from "@nextui-org/react";
import { useFormModal } from "../../../utils/zustandStore/clientsReservation";
interface Props {
    pos:number
    children:{
        quantity:number;
        ages: number[];
    }
}
export default function ChildrenAges({children,pos}:Props) {
    const { reservation,handleAges} = useFormModal()
    console.log("res",reservation);
    
    return (
        <div className="flex flex-row flex-wrap gap-2 items-center justify-center p-1">
            {
                Array.from({length:children.quantity}).map((_,idx)=>(
                    <Select
                    key={idx}
                    isRequired
                    label={`Niño °${idx+1}`}
                    defaultSelectedKeys={["0"]}
                    className="w-[20%]"
                    onChange={(e) => handleAges(Number(e.target.value),pos)}
                >

                    {Array.from({ length: 10 }, (_, index) => (
                        <SelectItem key={index} textValue={(index).toString()}>
                            {index}
                        </SelectItem>
                    ))}
                </Select>
                ))
            }
        </div>
    )
}