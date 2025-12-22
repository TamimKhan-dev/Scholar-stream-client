import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import TopScholarshipCards from "./TopScholarshipCards";
import "swiper/css";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import LoadingSpinner from "../Shared/LoadingSpinner";

const TopScholarships = () => {
  const axiosSecure = useAxiosSecure();
  const { data, isLoading } = useQuery({
    queryKey: ["scholarships"],
    queryFn: async () => {
      const res = await axiosSecure.get("/scholarships?sortValue=Latest&limit=6&skip=0");
      return res.data;
    },
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const scholarships = data?.data || [];

  return (
    <div className="mb-20 relative">
      <h2 className="text-2xl font-bold mb-8">Top ScholarShips</h2>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
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
          modules={[Autoplay, Pagination]}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="mySwiper min-h-85"
        >
          {scholarships.map((scholarship) => (
            <SwiperSlide
              key={scholarship._id}
              className="bg-white rounded-lg min-h-85 border-2 border-gray-200"
            >
              <TopScholarshipCards scholarship={scholarship} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default TopScholarships;
