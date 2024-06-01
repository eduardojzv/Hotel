import { Button } from "@nextui-org/react";

interface Props {
    children: {
        quantity: number;
        ages: number[];
    };
}
export default function ChildrenAges({ children }: Props) {
    return (
        <div className="flex  flex-wrap gap-2">
            {Array.from({ length: children.quantity }).map((_,idx) => (
                <Button key={idx}>Age</Button>
            ))}
        </div>
    )
}