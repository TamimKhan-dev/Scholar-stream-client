import React, { useState } from "react";
import { motion } from "framer-motion";
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
    title: "Empowering Students to Reach Their Future",
    description: "Discover scholarships tailored to your goals.",
  },
  {
    id: 2,
    img: banner2,
    title: "Your Path to Education Starts Here",
    description:
      "ScholarStream helps you explore curated scholarships from trusted sources.",
  },
  {
    id: 3,
    img: banner3,
    title: "Find the Right Scholarship. Change Your Tomorrow.",
    description:
      "With ScholarStream, discovering scholarships becomes effortless.",
  },
];

const bannerContentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const h1Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 10 },
  },
};
const descriptionVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="md:min-h-[60vh] mb-18 rounded-lg bg-gray-400 mt-5 overflow-hidden">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {bannerImgs.map(({ id, img, title, description }, index) => {
          const isSlideActive = index === activeIndex;

          return (
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
              <motion.div
                className="absolute text-center top-[50%] left-[50%] translate-[-50%] space-y-2 xl:space-y-6 text-white"
                variants={bannerContentVariants}
                initial="hidden"
                animate={isSlideActive ? "visible" : "hidden"}
                key={id + "content"}
              >
                <motion.h1
                  variants={h1Variants}
                  className="text-lg md:text-2xl xl:text-4xl md:text-nowrap font-bold min-w-2xs"
                >
                  {title}
                </motion.h1>
                <motion.p
                  variants={descriptionVariants}
                  className="text-gray-300 font-semibold text-xs md:text-base"
                >
                  {description}
                </motion.p>
                <motion.button
                  variants={buttonVariants}
                  className="bg-primary p-1 text-sm md:text-lg cursor-pointer sm:py-1.5 sm:px-3 rounded-3xl"
                >
                  Search ScholarShips
                </motion.button>
              </motion.div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Banner;
