import React from "react";
import { Autoplay , Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import TopScholarshipCards from "./TopScholarshipCards";
import "swiper/css";

const TopScholarships = () => {
  return (
    <div className="mb-20 relative">
      <h2 className="text-2xl font-bold mb-8">Top ScholarShips</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay ,Pagination]}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        className="mySwiper min-h-85"
      >
        {[1, 2, 3, 4].map((slide) => (
          <SwiperSlide
            key={slide}
            className="bg-white rounded-lg min-h-85 border-2 border-gray-200"
          >
            <TopScholarshipCards />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopScholarships;
