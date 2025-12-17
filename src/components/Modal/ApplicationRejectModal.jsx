import React from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { RxCrossCircled } from "react-icons/rx";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ApplicationRejectModal = ({ isRejectOpen, setIsRejectOpen, app, refetch }) => {
    const axiosSecure = useAxiosSecure();
  const handleReject = async () => {
    try {
        await axiosSecure.patch(`/applications/reject/${app._id}`);
        toast.success(`${app.userName}'s application rejected`);
        setIsRejectOpen(false);
        refetch();
    }
    catch(err) {
        console.log(err.message);
        toast.error('Something went wrong!');
    }
  };
  return (
    <Dialog
      open={isRejectOpen}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={() => setIsRejectOpen(false)}
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
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <DialogTitle
                as="div"
                className="text-xl sm:text-2xl font-semibold text-gray-900"
              >
                <RxCrossCircled size={80} className="text-red-600"/>
              </DialogTitle>
            </div>

            <div className="space-y-4">
                <h3 className="text-center text-2xl font-bold">Are you sure you want to reject this applicant?</h3>
                <p className="text-gray-500 text-center">This action is permanent cannot be undone</p>
            </div>

            <div className="mt-4 sm:mt-6 flex gap-3">
              <button
                onClick={() => setIsRejectOpen(false)}
                className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-primary cursor-pointer text-white text-sm sm:text-base font-medium rounded-lg hover:bg-blue-900 transition-colors shadow-md hover:shadow-lg"
              >
                cancel
              </button>
              <button
                onClick={handleReject}
                className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-red-500 cursor-pointer text-white text-sm sm:text-base font-medium rounded-lg hover:bg-red-700 transition-colors shadow-md hover:shadow-lg"
              >
                Reject
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default ApplicationRejectModal;
