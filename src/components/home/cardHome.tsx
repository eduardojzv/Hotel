import { Button, Card, CardBody, Image, Link } from "@nextui-org/react";
import { CardHomeData } from "../../interfaces/cardHomeData";
import { getFileCategory } from "../../helpers/getFileType";
import { Fragment } from "react/jsx-runtime";

interface Props {
  data: CardHomeData
}
export default function CardHome({ data }: Props) {
  const fileCategory = getFileCategory(data.file)
  const quantity = data.icons?.quantity || 0
  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 w-full"
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className={`${data.styles.img}`}>
            {fileCategory == "img"
              ?
              <Image
                alt="Album cover"
                className="object-cover"
                shadow="md"
                height="200px"
                src={data.file}
                width="100%"
              />

              : fileCategory == "video"
                ?

                <video className='aspect-[2.26/1] w-full object-fill' controls poster="home/homePoster.jpeg">
                  <source src={data.file} type="video/mp4" />
                </video>
                : fileCategory
            }
          </div>

          <div className={`${data.styles.info}`}  >
            <div className="text-center space-y-4">
              <h3 className="font-bold text-3xl ">{data.title}</h3>
              <p className="text-lg ">{data.paragraphs[0]}</p>
              {
                data.notice.map((item, idx) => (
                  <h1 key={idx} className="text-large font-bold mt-2">
                    {item.subtitle} :
                    <span className=""> {item.description}</span>
                  </h1>
                ))
              }
              {quantity > 0 &&
                <div className="flex flex-row items-center justify-center gap-8 h-auto ">

                  {Array.from({ length: quantity }).map((_,idx) => (
                    <Fragment key={idx}>{data.icons?.component}</Fragment>
                  ))
                  }
                </div>
              }

              {
                data.paragraphs.slice(1).map((item) => (
                  <p key={item} className="text-lg ">{item}</p>
                ))
              }
            </div>
            {
              data.link &&
              <Button color="primary" className="m-4 w-fit" variant="ghost" as={Link} href={data.link.href} showAnchorIcon>
                {data.link.text}
              </Button>
            }
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
