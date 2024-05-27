import { Suspense } from "react";
import MainLayout from "../layout/mainLayout";
import CommentsParallax from "../sections/home/commentsParallax";
import RoomsAndSuite from "../sections/home/rooms&Suite";
import Offers from "../sections/home/offers";
import VideoPresentation from "../sections/home/videoPresentationSection";
import InfoSection from "../sections/home/infoSection";
import useIntersectionObserver from "../utils/intersectionObserver";
import VacationClub from "../sections/home/vacationClub";
export default function Home() {
    const opc = { rootMargin: '-50px' }
    const [elementRef, isIntersecting] = useIntersectionObserver(opc)
    const [elementRef2, isIntersecting2] = useIntersectionObserver(opc)
    const [elementRef3, isIntersecting3] = useIntersectionObserver(opc)
    const [elementRef4, isIntersecting4] = useIntersectionObserver(opc)

    return (
        <MainLayout>
            <Suspense fallback={<p>Cargando</p>}>
                <div className="w-full h-[500px]">
                    <VideoPresentation />
                </div>
                <div className="flex flex-col items-center gap-8 mb-5">
                    <div className="w-[85%] min-h-[1100px]" ref={elementRef}>
                        {isIntersecting && <InfoSection />}
                    </div>
                    <div className="w-full h-[610px]" ref={elementRef2}>
                        {isIntersecting2 && <CommentsParallax />}
                    </div>
                    <div ref={elementRef3}>
                        {isIntersecting3 && <RoomsAndSuite />}
                    </div>

                    <div className="min-h-[1250px]" ref={elementRef4}>
                        {isIntersecting4 && <Offers />}
                    </div>
                    <div>
                        <VacationClub />
                    </div>
                </div>
            </Suspense>
        </MainLayout>
    )
}
