import { Image } from "@nextui-org/react";
import { awardsData } from "../../helpers/home/awardsData";

export default function Awards() {
  return (
    <div className="h-[750px] grid grid-cols-1 md:grid-cols-2 w-full bg-[url('/public/awards/bgAwards.jpg')] bg-cover bg-center">
      <div className="flex flex-col text-center items-center gap-4">
        <div>
          <h1>{awardsData.title}</h1>
          <p>{awardsData.description01}</p>
        </div>
        <ul className="list-disc">
          {awardsData.recognitions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <ul className="flex flex-wrap items-center w-auto gap-2">
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
      </div>
      <div>
      </div>
    </div>
  )
}