import { motion,AnimationProps} from "framer-motion";
interface Props {
    children: React.ReactNode
    animationConfig:AnimationProps
}
export default function ObserverdAnimation({ children,animationConfig }: Props) {
    return (
        <motion.div
        {...animationConfig}
        >
            {children}
        </motion.div>
    )
}