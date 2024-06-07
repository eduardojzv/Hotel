import { Select, SelectItem } from '@nextui-org/react';
import { useFormModal } from '../../../utils/zustandStore/clientsReservation';
interface Props {
    idx: number;
}
export default function QuantityInputs({idx }: Props) {
    const { handleAdults, handleChildren } = useFormModal()
    return (
        <div className='flex flex-row gap-2'>
            <Select
                label="N° Adultos"
                placeholder="Seleccione la cantidad de Adultos"
                defaultSelectedKeys={[`1`]}
                onChange={(e)=>handleAdults(idx,Number(e.target.value))}
            >

                {Array.from({ length: 10 }, (_, index) => (
                    <SelectItem key={index+1} textValue={(index+1).toString()}>
                    {index+1}
                </SelectItem>
                ))}
            </Select>
            <Select
                label="N° Niños"
                placeholder="Seleccione la cantidad de Niños"
                defaultSelectedKeys={["0"]}
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