import React, { useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { X } from "lucide-react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from 'react-hot-toast'

const FeedbackModal = ({ setIsFeedbackOpen, isFeedbackOpen, app, refetch }) => {
  const [feedback, setFeedback] = useState("");
  const axiosSecure = useAxiosSecure(); 
  const handleSubmit = async () => {
    try{
        await axiosSecure.patch(`/applications/feedback/${app._id}`, {feedback: feedback})
        toast.success('Feedback given successfully!');
        refetch();
    }
    catch(err) {
        console.log(err.response.data.message);
        toast.error(err.message)
    }
    setIsFeedbackOpen(false);
  };


  return (
    <Dialog
      open={isFeedbackOpen}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={() => setIsFeedbackOpen(false)}
    >
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm"
        aria-hidden="true"
      />

      <div className="fixed inset-0 z-10 w-full overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-2 sm:p-4">
          <DialogPanel
            transition
            className="w-full max-w-lg rounded-xl sm:rounded-2xl bg-white p-4 sm:p-6 md:p-8 shadow-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
          >
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <DialogTitle
                as="h3"
                className="text-xl sm:text-2xl font-semibold text-gray-900"
              >
                Give Feedback
              </DialogTitle>
              <button
                onClick={() => setIsFeedbackOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors shrink-0"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <label
                htmlFor="feedback"
                className="block text-sm font-medium text-gray-900"
              >
                Your Feedback
              </label>
              <textarea
                id="feedback"
                defaultValue={app?.feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Write your feedback here..."
                rows={6}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-gray-900 placeholder-gray-400 text-sm sm:text-base"
              />
            </div>

            <div className="mt-4 sm:mt-6">
              <button
                onClick={handleSubmit}
                className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-primary cursor-pointer text-white text-sm sm:text-base font-medium rounded-lg hover:bg-blue-900 transition-colors shadow-md hover:shadow-lg"
              >
                Submit Feedback
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default FeedbackModal;
