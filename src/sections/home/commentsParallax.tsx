import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './commentsParallax.css';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { commentsData } from '../../helpers/home/commentsData';
import { useTheme } from 'next-themes';
export default function CommentsParallax() {
  const { theme } = useTheme();
  const swiperCss: object = {
    //Pagination
    '--swiper-pagination-bullet-inactive-color': theme === 'dark' ? '#FFFFFF' : '#000000',
    '--swiper-pagination-bullet-inactive-opacity': 0.8,
    '--swiper-pagination-bullet-size': '12px',
    //navigation
    '--swiper-navigation-size': '64px',
    '--swiper-navigation-sides-offset': '10px'
  }
  return (
    <motion.div className='h-full'
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    >
      <Swiper
        className='h-[600px]'
        speed={600}
        pagination={{
          clickable: true,
        }}
        style={swiperCss}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            backgroundImage: theme === 'dark' ? 'url(home/commentsBlack.png)' : 'url(home/comments.jpg)',
          }}
        />
          {commentsData.map((item, idx) => (
            <SwiperSlide key={idx} className=''>
              <div className='items-center text-center space-y-4 max-w-4xl w-[75%]'>
                <div className=" font-kaushan text-4xl text-blue-500">
                  "{item.title}
                </div>
                <div className="text-2xl text-wrap">
                  <p>
                    {item.comment} <strong className='text-3xl'>"</strong> <span className='text-cyan-500'>- {item.person}</span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </motion.div>
  );
}