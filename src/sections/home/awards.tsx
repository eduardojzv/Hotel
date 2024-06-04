import { Image } from "@nextui-org/react";
import { awardsData } from "../../helpers/home/awardsData";

export default function Awards() {
  return (
    <div className=" text-white text-lg h-full grid grid-cols-1 md:grid-cols-2 w-full bg-[url('/public/awards/bgAwards.jpg')] bg-cover bg-center p-5">
      <div className="flex flex-col text-center justify-center items-center gap-2">
        <div>
          <h1 className="text-3xl font-kaushan">{awardsData.title}</h1>
          <p>{awardsData.description01}</p>
        </div>
        <ul className="list-disc">
          {awardsData.recognitions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <ul className="flex flex-wrap items-center justify-center gap-2 w-full">
          {awardsData.awardsImgs.map((item) => (
            <li key={item}>
              <Image
                shadow="sm"
                src={item}
                className="w-28 h-28"
              />
            </li>
          ))}
        </ul>
        <div className="flex  flex-col items-center justify-center gap-2">
          <p>{awardsData.description02}</p>
          <Image
            shadow="sm"
            src={awardsData.imgKAYAK}
            className="w-28 h-28"
          />
        </div>
      </div>
      <div className="flex flex-col text-center justify-center items-center gap-2">
        <div className="flex flex-col gap-2">
          <p>{awardsData.description03}</p>
          <ul className="flex flex-wrap items-center justify-center gap-2 w-full">
          {awardsData.tripAdvisorImgs.map((item) => (
            <li key={item}>
              <Image
                shadow="sm"
                src={item}
                className="w-28 h-28"
              />
            </li>
          ))}
          </ul>
          <div>
           <p> {awardsData.description04}</p>
           <ul className="flex flex-wrap items-center justify-center gap-2 w-full">
           {awardsData.certificates.map((item) => (
            <li key={item}>
              <Image
                src={item}
                className="w-28 h-28"
              />
            </li>
          ))}
           </ul>
          </div>
        </div>
      </div>
    </div>
  )
}