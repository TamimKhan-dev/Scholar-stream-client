import React from 'react';
import { AlertTriangle } from 'lucide-react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const DeleteUserModal = ({ deleteOpen, setDeleteOpen, user }) => {
    const axiosSecure = useAxiosSecure();

    const deleteUser = async () => {
        try {
          await axiosSecure.delete(`/users/${user._id}`)
          toast.success('User deleted successfully!');
          setDeleteOpen(false);
        }
        catch(err) {
          console.log(err.message);
        }
    }

    return (
      <>
        {deleteOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          
          
          <div className="relative w-full max-w-md mx-4 sm:mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 space-y-5 transform transition-all">
              <div className="flex justify-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-amber-100 flex items-center justify-center">
                  <AlertTriangle className="w-7 h-7 sm:w-8 sm:h-8 text-amber-600" />
                </div>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center">
                Delete User 
              </h2>
              
              <p className="text-sm sm:text-base text-gray-600 text-center font-medium">
                Are you sure you want to delete this user?
              </p>
               
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                <button
                  onClick={() => setDeleteOpen(false)}
                  className="flex-1 px-4 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 cursor-pointer focus:ring-gray-400 focus:ring-offset-2"
                >
                  Cancel
                </button>
                <button
                  onClick={deleteUser}
                  className="flex-1 px-4 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-white bg-primary rounded-lg cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-md"
                >
                  Delete User
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      </>
    )
};

export default DeleteUserModal;