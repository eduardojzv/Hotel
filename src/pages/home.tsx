import { Suspense } from "react";
import MainLayout from "../layout/mainLayout";
import CommentsParallax from "../sections/home/commentsParallax";
import RoomsAndSuite from "../sections/home/rooms&Suite";
import Offers from "../sections/home/offers";
import VideoPresentation from "../sections/home/videoPresentationSection";
import InfoSection from "../sections/home/infoSection";
import useIntersectionObserver from "../utils/intersectionObserver";
import VacationClub from "../sections/home/vacationClub";
import Awards from "../sections/home/awards";
export default function Home() {
    const opc = { rootMargin: '-50px' }
    const [InfoSectionRef, isIntersectingInfoSectionRef] = useIntersectionObserver(opc)
    const [CommentsParallaxRef, isIntersectingCommentsParallax] = useIntersectionObserver(opc)
    const [RoomsAndSuiteRef, isIntersectingRoomsAndSuite] = useIntersectionObserver(opc)
    const [OffersRef, isIntersectingOffers] = useIntersectionObserver(opc)
    const [VacationClubRef, isIntersectingVacationClub] = useIntersectionObserver(opc)
    const [AwardsRef, isIntersectingAwards] = useIntersectionObserver(opc)

    return (
        <MainLayout>
            <Suspense fallback={<p>Cargando</p>}>
                <div className="w-full h-[500px]">
                    <VideoPresentation />
                </div>
                <div className="flex flex-col items-center gap-8 mb-5">
                    <div className="w-[85%] min-h-[1100px]" ref={InfoSectionRef}>
                        {isIntersectingInfoSectionRef && <InfoSection />}
                    </div>
                    <div className="w-full min-h-[610px]" ref={CommentsParallaxRef}>
                        {isIntersectingCommentsParallax && <CommentsParallax />}
                    </div>
                    <div ref={RoomsAndSuiteRef}>
                        {isIntersectingRoomsAndSuite && <RoomsAndSuite />}
                    </div>

                    <div className="min-h-[1250px]" ref={OffersRef}>
                        {isIntersectingOffers && <Offers/>}
                    </div>
                    <div className="min-h-[530px]" ref={VacationClubRef}>
                    {isIntersectingVacationClub && <VacationClub />}
                    </div>
                    <div className="min-h-[760px] w-full" ref={AwardsRef}>
                       {isIntersectingAwards &&  <Awards/>}
                    </div>
                </div>
            </Suspense>
        </MainLayout>
    )
}
