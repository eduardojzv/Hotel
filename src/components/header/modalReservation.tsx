import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Divider } from "@nextui-org/react";
import { CalendarIcon } from "../../icons/menu/icons";
import DateRange from "../others/dateRange/dateRange";
import QuantityInputs from "./quantityInputs";
import { useState } from "react";
export default function ModalReservation() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [rooms, setRooms] = useState(1)
  function handleRooms(val: string) {
    const newVal = Number(val);
    if (!isNaN(newVal) && newVal >= 1) {
      if (newVal > 10) {
        setRooms(10)
      } else {
        setRooms(newVal)
      }
    } else {
      setRooms(0)
    }
  }
  function onBlurRooms() {
    if (rooms <= 0) setRooms(1)
  }
  return (
    <>
      <Button color="primary" className="absolute -bottom-10 right-10 w-40 h-10" variant="shadow"
        startContent={<CalendarIcon width='30px' height='30px' />} onPress={onOpen} >
        Reserva Ahora
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Mejor tarifa garantizada desde $ 198.00
                <DateRange />
              </ModalHeader>
              <ModalBody>
                <div className="w-[45%]">
                  <Input
                    className=""
                    type="number"
                    label="Habitaciones (min 1)"
                    placeholder="0"
                    labelPlacement="outside"
                    value={rooms <= 0 ? '' : rooms.toString()}
                    onValueChange={handleRooms}
                    onBlur={onBlurRooms}
                  />
                </div>
                <Divider />
                <div className="flex gap-2 flex-col max-h-[340px] overflow-y-scroll">
                  {Array.from({ length: rooms }, (_, index) => (
                    <div className='flex flex-col gap-2' key={index}>
                      <h1>Cuarto N°{index + 1}</h1>
                      <QuantityInputs />
                      <Divider />
                    </div>
                  ))}
                </div>
              </ModalBody>
              <ModalFooter className="flex flex-row items-center">
                <Input type="text" variant='flat' label="Codigo de promocion" />
                <Button color="success" variant="flat" onPress={onClose}>
                  Reservar
                </Button>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
