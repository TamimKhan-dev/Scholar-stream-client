import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { format } from "date-fns";
import { useState } from "react";
import ReviewDeleteModal from "../../Modal/ReviewDeleteModal";

const AllReviewsDataRow = ({ review, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const date = format(review.reviewDate, 'dd/MM/yyyy')
  const { data: scholarship = {} } = useQuery({
    queryKey: ["scholarship", review.scholarshipId],
    queryFn: async () => {
      const res = await axiosSecure(`/scholarships/${review.scholarshipId}`);
      return res.data;
    },
  });
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900">{scholarship.scholarshipName}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 ">{scholarship.universityName}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs text-wrap">
        <p className="max-w-[200px] min-w-20 w-fit">
          {review?.reviewComment || "No Feedback yet!"}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 ">{date}</p>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 ">{review.ratingPoint}/5</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex gap-1">
          <button
            onClick={() => setIsDeleteOpen(true)}
            className="text-sm h-7 px-3 py-1 rounded-sm cursor-pointer bg-red-600 text-white"
          >
            Delete
          </button>
        </div>
        <ReviewDeleteModal
          setIsDeleteOpen={setIsDeleteOpen}
          isDeleteOpen={isDeleteOpen}
          review={review}
          refetch={refetch}
        />
      </td>
    </tr>
  );
};

export default AllReviewsDataRow;
