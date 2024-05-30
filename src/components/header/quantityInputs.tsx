import { Input } from '@nextui-org/react';
import { useFormModal } from '../../utils/zustandStore/clientsReservation';
interface Props {
    idx:number;
    children: {
        quantity: number;
        ages: number[];
    };
    quantityAdults: number;
}
export default function QuantityInputs({ quantityAdults, children,idx}: Props) {
    const { handleAdults,handleChildren} = useFormModal()

    // function handleAdults(val: string) {
    //     const newVal = Number(val);
    //     (!isNaN(newVal) && newVal >= 1)
    //         ? setQuantityAdults(newVal)
    //         : setQuantityAdults(0)
    // }
    // function handleChildren(val: string) {
    //     const newVal = Number(val);
    //     (!isNaN(newVal) && newVal >= 0)
    //         ? setQuantityChildren(newVal)
    //         : setQuantityChildren(0)
    // }
    // function onBlourAdults(){
    //     if (quantityAdults<=0) setQuantityAdults(1)
    //   }
    return (
        <div className='flex flex-row gap-2'>
            <Input
                className="w-fit"
                type="number"
                label="Adultos (min 1)"
                placeholder="0"
                labelPlacement="outside"
                value={quantityAdults <= 0 ? '' : quantityAdults.toString()}
                onValueChange={(val)=>handleAdults(idx,Number(val))}
                isRequired
            />
            <Input
                className="w-fit"
                type="number"
                label="Niños"
                placeholder="0"
                labelPlacement="outside"
                value={children.quantity <= 0 ? '' : children.quantity.toString()}
                onValueChange={(val)=>handleChildren(idx,Number(val))}
            />
        </div>
    )
}