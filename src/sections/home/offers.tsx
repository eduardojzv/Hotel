import CardOffers from "../../components/home/cardOffers";
import { offersData } from "../../helpers/offersData";
import { CircleIcon } from "../../icons/home/icons";
import { motion } from "framer-motion";
export default function Offers() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}>
      <h1 className="text-blue-500 text-center font-kaushan text-6xl">
        Ofertas
      </h1>
      <div className="flex gap-8 justify-center mt-4 mb-4">
        <CircleIcon fill="#FA8400" />
        <CircleIcon fill="#FA8400" />
        <CircleIcon fill="#FA8400" />
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2">
        {offersData.map((item, idx) => (
          <CardOffers key={idx} data={item} />
        ))}
      </div>
    </motion.div>
  )
}