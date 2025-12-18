import { format } from "date-fns";
import React from "react";
import { IoMdStar } from "react-icons/io";

const ReviewCards = ({ review }) => {
  const date = format(review.reviewDate, "dd/MM/yyyy");
  return (
    <div className="border-2 p-3 border-gray-100 rounded-lg">
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <img
            src={review?.userImage}
            alt=""
            className="h-10 w-10 rounded-full"
          />
          <div>
            <h5 className="font-bold">{review.userName}</h5>
            <p className="text-gray-500">{date}</p>
          </div>
        </div>

        <div className="flex gap-0.5 text-xl text-yellow-400">
          {Array.from({ length: review.ratingPoint }).map((_, i) => (
            <IoMdStar key={i} />
          ))}
        </div>
      </div>

      <p className="font-semibold">{review.reviewComment}</p>
    </div>
  );
};

export default ReviewCards;
