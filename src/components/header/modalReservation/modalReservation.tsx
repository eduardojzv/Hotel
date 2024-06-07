import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Divider, SelectItem, Select } from "@nextui-org/react";
import { CalendarIcon, TrashIcon } from "../../../icons/menu/icons";
import DateRange from "../../others/dateRange/dateRange";
import QuantityInputs from "./quantityInputs";
import { FormEvent } from "react";
import { useFormModal } from "../../../utils/zustandStore/clientsReservation";
import ChildrenAges from "./childrenAges";
export default function ModalReservation() {
  const { reservation, deleteRoom, handleRoom } = useFormModal()
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  function obSubmitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log("ee", reservation);
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
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <form onSubmit={obSubmitForm}>
              <ModalHeader className="flex flex-col gap-1">
                Mejor tarifa garantizada desde $ 198.00
                <DateRange />
              </ModalHeader>
              <ModalBody>
                <div className="w-[45%]">
                  <Select
                    label="N° Habitaciones"
                    placeholder="Seleccione la cantidad de Niños"
                    defaultSelectedKeys={["1"]}
                    className="w-full"
                    onChange={(e)=>handleRoom(Number(e.target.value))}
                  >

                    {Array.from({ length: 10 }, (_, index) => (
                      <SelectItem key={index+1} textValue={(index+1).toString()}>
                        {index+1}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
                <Divider />
                <div className="flex gap-2 flex-col max-h-[330px] overflow-y-scroll">
                  {reservation.length > 0
                    ? reservation.map((item, idx) => (
                      <div className='flex flex-col gap-2' key={idx}>
                        <div className="flex flex-row items-center justify-between">
                          <h1>Cuarto N°{idx + 1}</h1>
                          <TrashIcon width='20px' height='20px' className="fill-red-400 cursor-pointer hover:fill-red-600" onClick={() => deleteRoom(idx)} />
                        </div>
                        <QuantityInputs idx={idx} />
                        <ChildrenAges key={`ages-${idx}`} children={item.children} pos={idx}/>
                        <Divider />
                      </div>
                    ))
                    : ''
                  }
                </div>
              </ModalBody>
              <ModalFooter className="flex flex-row items-center">
                <Input type="text" variant='flat' label="Codigo de promocion" />
                <Button color="success" type="submit" variant="flat">
                  Reservar
                </Button>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Cerrar
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
