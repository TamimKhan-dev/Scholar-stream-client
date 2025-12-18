import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AddReviewModal = ({ isReviewOpen, setIsReviewOpen, app }) => {
  const [rating, setRating] = useState(3);
  const [review, setReview] = useState("");
  const axiosSecure = useAxiosSecure();
  const { data: user = {} } = useQuery({
    queryKey: ["user", app.userEmail],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${app.userEmail}`);
      return res.data;
    },
  });

  const handleSubmit = async () => {
    if (!review) {
      toast.error("Review is required");
      return;
    }
    const reviewInfo = {
      scholarshipId: app.scholarshipId,
      universityName: app.universityName,
      userName: app.userName,
      userEmail: app.userEmail,
      userImage: user.imageURL,
      reviewComment: review,
      ratingPoint: rating,
    };
    try {
      await axiosSecure.post("/reviews", reviewInfo);
      toast.success("Review added successfully!");
      setIsReviewOpen(false);
    } catch (err) {
      console.log(err.message);
      toast.error("Something went wrong!");
    }
  };
  return (
    <Dialog
      open={isReviewOpen}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={() => setIsReviewOpen(false)}
    >
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm"
        aria-hidden="true"
      />

      <div className="fixed inset-0 z-10 w-full overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-2 sm:p-4">
          <DialogPanel
            transition
            className="w-full relative max-w-lg rounded-xl sm:rounded-2xl bg-white p-4 sm:p-6 md:p-8 shadow-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsReviewOpen(false)}
              className="absolute cursor-pointer top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Header */}
            <DialogTitle
              as="h2"
              className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6"
            >
              Add a Review
            </DialogTitle>

            {/* Your Rating */}
            <div className="mb-6">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
                Your Rating
              </h3>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    className="focus:outline-none transition-transform hover:scale-110 cursor-pointer"
                  >
                    <svg
                      className={`w-10 h-10 sm:w-12 sm:h-12 ${
                        star <= rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            {/* Your Review */}
            <div className="mb-6">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
                Your Review
              </h3>
              <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Write your review here..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none text-sm sm:text-base"
                rows={6}
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                onClick={handleSubmit}
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-primary text-white text-sm sm:text-base font-medium rounded-lg hover:bg-blue-900 cursor-pointer transition-colors shadow-md hover:shadow-lg"
              >
                Submit Review
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default AddReviewModal;
