{/*loading = "lazy" 는 사용자가 실제 리소스를 보기 전까지 로드하지 않도록, 로딩속도 개선 및 페이지에 많은 이미지가 있을때 성능 개선 가능 */}
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../index.css'


export default function CardImageBox({images}) {
  return (
    <div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        cssMode={true}
        spaceBetween={20}
        slidesPerView={1}                      
        lazy={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="w-full max-w-md mx-auto "
      >
        {images.map((src, index) => (
        <SwiperSlide key={index} className="flex justify-center items-center h-40">
          <img src={src} loading="lazy" className="w-full h-full object-cover" alt={`Slide ${index}`} />
        </SwiperSlide>
      ))}
      </Swiper>
    </div>
  );
}
