export const handleValueChange = (setter: React.Dispatch<React.SetStateAction<number>>) => (val: string) => {
    const newVal = Number(val);
    (!isNaN(newVal) && newVal >= 0)
        ? setter(newVal)
        : setter(0)
};