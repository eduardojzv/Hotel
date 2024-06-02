import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { CircleIcon } from "../../icons/home/icons";
import { motion } from "framer-motion";
export default function RoomsAndSuite() {
    return (
        <motion.div
        className="w-full h-[500px] flex flex-col justify-center items-center bg-[url('/public/home/roomSuite.jpg')] bg-cover bg-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        >
            <Card className="w-2/3 max-h-[500px] opacity-80 flex flex-col justify-center items-center gap-2">
                <CardHeader className="flex flex-col justify-center items-center">
                    <p className="text-4xl font-kaushan text-blue-500">Habitaciones y Suites</p>
                </CardHeader>
                <div className="flex flex-row gap-8">
                    <CircleIcon fill="#FA8400" />
                    <CircleIcon fill="#FA8400" />
                    <CircleIcon fill="#FA8400" />
                </div>
                <CardBody className="font-semibold text-lg">
                    <p>Todos los artículos esenciales y más los puede encontrar en nuestras modernas y elegantes habitaciones,
                        con una selección de comodidades para que se sienta como en casa. Vea nuestra guía de servicios y elija
                        la habitación que le sea adecuada.</p>
                </CardBody>
            </Card>
        </motion.div>
    )
}