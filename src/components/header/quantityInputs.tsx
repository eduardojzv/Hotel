import { Input } from '@nextui-org/react';
import { useState } from 'react';
export default function QuantityInputs() {
    const [quantityAdults, setQuantityAdults] = useState(1)
    const [quantityChildren, setQuantityChildren] = useState(0)
    function handleAdults(val: string) {
        const newVal = Number(val);
        (!isNaN(newVal) && newVal >= 1)
            ? setQuantityAdults(newVal)
            : setQuantityAdults(0)
    }
    function handleChildren(val: string) {
        const newVal = Number(val);
        (!isNaN(newVal) && newVal >= 0)
            ? setQuantityChildren(newVal)
            : setQuantityChildren(0)
    }
    function onBlourAdults(){
        if (quantityAdults<=0) setQuantityAdults(1)
      }
    return (
        <div className='flex flex-row gap-2'>
            <Input
                required
                className="w-fit"
                type="number"
                label="Adultos (min 1)"
                placeholder="0"
                labelPlacement="outside"
                value={quantityAdults<=0 ? '' :quantityAdults.toString()}
                onValueChange={handleAdults}
                onBlur={onBlourAdults}
            />
            <Input
                required
                className="w-fit"
                type="number"
                label="Niños"
                placeholder="0"
                labelPlacement="outside"
                value={quantityChildren<=0 ? '' : quantityChildren.toString()}
                onValueChange={handleChildren}
            />
        </div>
    )
}