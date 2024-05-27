import { Button } from "@nextui-org/react"
import { CircleIcon } from "../../icons/home/icons"
import { ChevronDown } from "../../icons/others"
import { useState } from "react"
import { motion } from "framer-motion"
import CardHome from "../../components/home/cardHome"
import { cardHomeData } from "../../helpers/cardHomeData"
export default function InfoSection() {
  const [read, setRead] = useState({
    text: 'Leer Más',
    state: false
    
  })
  function ReadMore() {
    setRead((prev) => ({
      text: !prev.state ? 'Leer Menos' : 'Leer Más',
      state: !prev.state
    }));

  }
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5}}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}>
      <div className='text-blue-500 text-center font-kaushan text-6xl'>
        <h1 className=''>
          Fiesta Resort
        </h1>
        <h1>Un resort familiar en Costa Rica TEST</h1>
      </div>
      <div className="flex gap-8 justify-center mt-4 mb-4">
        <CircleIcon fill="#EB00AE" />
        <CircleIcon fill="#EB00AE" />
        <CircleIcon fill="#EB00AE" />
      </div>
      <div className="text-center space-y-4">
        <p>Al llegar al Fiesta Resort Todo Incluido, descubrirá un oasis frente a la playa, enmarcado por jardines tropicales, seis piscinas y una playa de oscura arena volcánica con vista a un océano Pacífico azul brillante. Podrá disfrutar de una amplia gama de actividades para la familia –desde tenis y voleibol de playa, hasta un relajante spa, un anfiteatro, y clubes para niños y adolescentes.</p>
        {
          read.state && <motion.div
            initial={{ scale: 0, y: "-50%" }}
            animate={{ scale: 1, y: 1 }}
            transition={{ duration: 0.3, type: "tween" }}
          >
            <p>Perfectas para familias, parejas y grupos de todo tipo, nuestras 408 habitaciones y suites reflejan su pintoresco entorno con espacios amplios y ventilados, y con un diseño y decorado alegre y luminoso, acentuado por balcones privados con vista al mar, a la piscina o al jardín.</p>
            <p>Venga a descubrir el Fiesta Resort, donde todo está incluido y nada se interpone entre usted y unas inolvidables vacaciones de playa en Costa Rica.</p>
          </motion.div>
        }
        <Button color="primary" variant="ghost" onClick={ReadMore} endContent={<ChevronDown fill="currentColor" size={14} />}>
          {read.text}
        </Button>
        <div className="flex flex-col gap-4">
          {cardHomeData.map((item, idx) => (
            <CardHome key={idx} data={item} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}