import { Button, Card, CardBody, Image, Link } from "@nextui-org/react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { vacacionalClubData } from "../../helpers/home/vacacionalClubData";
export default function VacationClub() {
    return (
        <Card
            isBlurred
            className="border-none bg-background/60 dark:bg-default-100/50 w-full"
            shadow="sm"
        >
            <CardBody>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                    <div className="grid-cols-3 md:col-span-6">
                        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                            {vacacionalClubData.imgs.map((item) => (
                                <SwiperSlide key={item}>
                                    <Image
                                        alt="Album cover"
                                        className="object-cover"
                                        shadow="md"
                                        height="200px"
                                        src={item}
                                        width="100%"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className="grid-cols-3 md:col-span-6">
                        <div className="text-center space-y-4 flex flex-col items-center">
                            <h3 className="font-bold text-3xl ">{vacacionalClubData.title}</h3>
                            <p className="text-lg ">{vacacionalClubData.description}</p>
                        <Button color="primary" className="m-4 w-fit" variant="shadow" as={Link} showAnchorIcon>
                            Explorar Mas
                        </Button>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}