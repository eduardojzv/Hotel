import { Select, SelectItem } from '@nextui-org/react';
import { useFormModal } from '../../../utils/zustandStore/clientsReservation';
interface Props {
    idx: number;
    children: {
        quantity: number;
        ages: number[];
    };
    quantityAdults: number;
}
export default function QuantityInputs({ quantityAdults, children, idx }: Props) {
    const { handleAdults, handleChildren } = useFormModal()
    console.log(quantityAdults,children);
    
    return (
        <div className='flex flex-row gap-2'>
            <Select
                isRequired
                label="Cantidad de adultos"
                placeholder="Seleccione la cantidad de Adultos"
                defaultSelectedKeys={[`children-1`]}
                className="max-w-xs"
                onChange={(e)=>handleAdults(idx,Number(e.target.value))}
            >

                {Array.from({ length: 10 }, (_, index) => (
                    <SelectItem key={`children-${index+1}`} textValue={(index+1).toString()}>
                    {index+1}
                </SelectItem>
                ))}
            </Select>
            <Select
                isRequired
                label="Cantidad de Niños"
                placeholder="Seleccione la cantidad de Niños"
                defaultSelectedKeys={["0"]}
                className="max-w-xs"
                onChange={(e)=>handleChildren(idx,Number(e.target.value))}
            >

                {Array.from({ length: 10 }, (_, index) => (
                    <SelectItem key={index} textValue={(index).toString()}>
                    {index}
                </SelectItem>
                ))}
            </Select>
        </div>
    )
}