import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Divider } from "@nextui-org/react";
import { CalendarIcon, TrashIcon } from "../../icons/menu/icons";
import DateRange from "../others/dateRange/dateRange";
import QuantityInputs from "./quantityInputs";
import { FormEvent } from "react";
import { useFormModal } from "../../utils/zustandStore/clientsReservation";
export default function ModalReservation() {
  const { rooms,deleteRoom,handleRoom} = useFormModal()


  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  //  const [rooms, setRooms] = useState(1)
  // function handleRooms(val: string) {
  //   const newVal = Number(val);
  //   if (!isNaN(newVal) && newVal >= 1) {
  //     if (newVal > 10) {
  //       setRooms(10)
  //     } else {
  //       setRooms(newVal)
  //     }
  //   } else {
  //     setRooms(0)
  //   }
  // }
  // function onBlurRooms() {
  //   if (rooms <= 0) setRooms(1)
  // }
  function obSubmitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log("ee", rooms);
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
                  <Input
                    className=""
                    type="number"
                    label="Habitaciones (min 1)"
                    placeholder="0"
                    labelPlacement="outside"
                    value={rooms.length<=0?'':rooms.length.toString()}
                    onValueChange={(val)=>handleRoom(Number(val))}
                    min={0}
                    isRequired
                  />
                </div>
                <Divider />
                <div className="flex gap-2 flex-col max-h-[330px] overflow-y-scroll">
                  {rooms.length > 0
                    ? rooms.map((item,idx) => (
                      <div className='flex flex-col gap-2' key={idx}>
                        <div className="flex flex-row items-center justify-between">
                          <h1>Cuarto N°{idx + 1}</h1>
                          <TrashIcon width='20px' height='20px' className="fill-red-400 cursor-pointer hover:fill-red-600" onClick={()=>deleteRoom(idx)}/>
                        </div>
                        <QuantityInputs quantityAdults={item.adults} children={item.children} idx={idx} />
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
