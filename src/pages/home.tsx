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
import ObserverdAnimation from "../components/animation/observerdAnimation";
import { AnimationProps } from "framer-motion";
export default function Home() {
    const opc = { rootMargin: '-50px' }
    const [InfoSectionRef, isIntersectingInfoSectionRef] = useIntersectionObserver(opc)
    const [CommentsParallaxRef, isIntersectingCommentsParallax] = useIntersectionObserver(opc)
    const [RoomsAndSuiteRef, isIntersectingRoomsAndSuite] = useIntersectionObserver(opc)
    const [OffersRef, isIntersectingOffers] = useIntersectionObserver(opc)
    const [VacationClubRef, isIntersectingVacationClub] = useIntersectionObserver(opc)
    const [AwardsRef, isIntersectingAwards] = useIntersectionObserver(opc)
    //Animation Props
    const animationConfigs: AnimationProps = {
        initial: { opacity: 0, scale: 0.5,originX:1},
        animate:{ opacity: 1, scale: 1 },
        transition:{ duration: 0.4}
    }
    return (
        <MainLayout>
            <Suspense fallback={<p>Cargando</p>}>
                <div className="w-full h-[500px]">
                    <VideoPresentation />
                </div>
                <div className="flex flex-col items-center gap-8 mb-5">
                    <div className="w-[85%] min-h-[1100px]" ref={InfoSectionRef}>
                        {isIntersectingInfoSectionRef &&
                            <ObserverdAnimation animationConfig={animationConfigs}>
                                <InfoSection />
                            </ObserverdAnimation>
                        }
                    </div>
                    <div className="w-full min-h-[610px]" ref={CommentsParallaxRef}>
                        {isIntersectingCommentsParallax &&
                            <ObserverdAnimation animationConfig={animationConfigs}>
                                <CommentsParallax />
                            </ObserverdAnimation>
                        }
                    </div>
                    <div ref={RoomsAndSuiteRef}>
                        {isIntersectingRoomsAndSuite &&
                            <ObserverdAnimation animationConfig={animationConfigs}>
                                <RoomsAndSuite />
                            </ObserverdAnimation>
                        }
                    </div>

                    <div className="min-h-[1250px]" ref={OffersRef}>
                        {isIntersectingOffers &&
                            <ObserverdAnimation animationConfig={animationConfigs}>
                                <Offers />
                            </ObserverdAnimation>
                        }
                    </div>
                    <div className="min-h-[530px]" ref={VacationClubRef}>
                        {isIntersectingVacationClub &&
                            <ObserverdAnimation animationConfig={animationConfigs}>
                                <VacationClub />
                            </ObserverdAnimation>
                        }
                    </div>
                    <div className="min-h-[550px] w-full" ref={AwardsRef}>
                        {isIntersectingAwards &&
                            <ObserverdAnimation animationConfig={animationConfigs}>
                                <Awards />
                            </ObserverdAnimation>
                        }
                    </div>
                </div>
            </Suspense>
        </MainLayout>
    )
}
