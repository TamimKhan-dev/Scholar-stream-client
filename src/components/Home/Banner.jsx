import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import banner1 from "../../assets/images/banner2.jpg";
import banner2 from "../../assets/images/banner1.jpg";
import banner3 from "../../assets/images/banner3.jpg";

const bannerImgs = [
  {
    id: 1,
    img: banner1,
    title: 'Empowering Students to Reach Their Future',
    description: 'Discover scholarships tailored to your goals.'
  },
  {
    id: 2,
    img: banner2,
    title: 'Your Path to Education Starts Here',
    description: 'ScholarStream helps you explore curated scholarships from trusted sources.'
  },
  {
    id: 2,
    img: banner3,
    title: 'Find the Right Scholarship. Change Your Tomorrow.',
    description: 'With ScholarStream, discovering scholarships becomes effortless.'
  },
];

const Banner = () => {
  return (
    <div className="md:min-h-[60vh] rounded-lg bg-gray-400 mt-5 overflow-hidden">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {bannerImgs.map(({id, img, title, description}) => (
          <SwiperSlide key={id} className="h-full relative">
            {/* slider image and overlay */}
            <div className="relative w-full h-full">
              <img
              src={img}
              alt=""
              className="min-h-78 max-h-[60vh] w-full object-cover"
            />

              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* slider text and button */}
            <div className="absolute text-center top-[50%] left-[50%] translate-[-50%] space-y-2 xl:space-y-6 text-white">
              <h1 className="text-lg md:text-2xl xl:text-4xl md:text-nowrap font-bold min-w-2xs">{title}</h1>
              <p className="text-gray-300 font-semibold text-xs md:text-base">{description}</p>
              <button className="bg-primary p-1 text-sm md:text-lg cursor-pointer sm:py-1.5 sm:px-3 rounded-3xl">Search ScholarShips</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
