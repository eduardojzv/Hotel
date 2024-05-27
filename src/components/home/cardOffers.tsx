
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button } from "@nextui-org/react";
import { OfferData } from "../../interfaces/offerData";
interface Props {
  data: OfferData
}
export default function CardOffers({ data }: Props) {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-col gap-2 w-full">
        <Image
          alt=""
          radius="lg"
          src={data.img}
          className="w-full h-full bg-fill bg-center"
        />
        <div className="flex flex-col">
          <p className="text-md text-4xl font-kaushan text-blue-500">{data.title}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-col gap-4">
        <div className="text-lg">
          <p>{data.description}</p>
        </div>
        <Divider />
        {
          data.benefits.items.length > 0 &&

          <div className="pl-4">
            <h1 className="text-blue-500 font-kaushan text-center text-2xl">{data.benefits?.title}</h1>
            <ul className="list-disc space-y-1">
              {data.benefits?.items?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Divider />
          </div>
        }
        <div className="pl-4">
          <h1 className="text-blue-500 font-kaushan text-center text-2xl">{data.conditions?.title}</h1>
          <ul className="list-disc space-y-1">
            {data.conditions?.items?.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

      </CardBody>
      <Divider />
      <CardFooter>
        <Button
          className="w-full text-xl text-orange-300 bg-orange-800 hover:text-white"
          as={Link}
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Reserve Ahora
        </Button>
      </CardFooter>
    </Card>
  )
}