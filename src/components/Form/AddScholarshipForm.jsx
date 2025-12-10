import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { imageUpload } from "../../utils/imageUpload";
import { format } from 'date-fns';
import toast from "react-hot-toast";

const AddScholarshipForm = () => {
  const [isSending, setIsSending] = useState(false);
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    try {
      const file = data.universityImage?.[0];

      let imageURL = "";

      if (file) {
        const uploadImg = await imageUpload(file);
        imageURL = uploadImg;
      }
      
      const deadline = new Date(data.applicationDeadline);

      const scholarshipInfo = {
        ...data,
        universityImage: imageURL,
        applicationDeadline: format(deadline, 'dd/MM/yyyy')
      };

      setIsSending(true);
      await axiosSecure.post("/scholarships", scholarshipInfo);

      toast.success("Scholarship added successfully");
    } catch (err) {
      console.log(err.message);
      toast.error("Something went wrong");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-primary rounded-t-lg px-6 py-8 sm:px-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-white text-center">
            Add New Scholarship
          </h1>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-b-lg shadow-lg p-6 sm:p-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Scholarship Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Scholarship Name
                </label>
                <input
                  type="text"
                  placeholder="Enter scholarship name"
                  className={`w-full px-4 py-3 border ${
                    errors.scholarshipName
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary`}
                  {...register("scholarshipName", {
                    required: "Scholarship name is required",
                  })}
                />
                {errors.scholarshipName && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.scholarshipName.message}
                  </p>
                )}
              </div>

              {/* University Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  University Name
                </label>
                <input
                  type="text"
                  placeholder="Enter university name"
                  className={`w-full px-4 py-3 border ${
                    errors.universityName ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary`}
                  {...register("universityName", {
                    required: "University name is required",
                  })}
                />
                {errors.universityName && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.universityName.message}
                  </p>
                )}
              </div>

              {/* University Image */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  University Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  {...register("universityImage")}
                />
              </div>

              {/* University Country */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  University Country
                </label>
                <input
                  type="text"
                  placeholder="Enter country"
                  className={`w-full px-4 py-3 border ${
                    errors.universityCountry
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary`}
                  {...register("universityCountry", {
                    required: "Country is required",
                  })}
                />
                {errors.universityCountry && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.universityCountry.message}
                  </p>
                )}
              </div>

              {/* University City */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  University City
                </label>
                <input
                  type="text"
                  placeholder="Enter city"
                  className={`w-full px-4 py-3 border ${
                    errors.universityCity ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary`}
                  {...register("universityCity", {
                    required: "City is required",
                  })}
                />
                {errors.universityCity && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.universityCity.message}
                  </p>
                )}
              </div>

              {/* University World Rank */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  University World Rank
                </label>
                <input
                  type="text"
                  placeholder="Enter world rank"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  {...register("universityRank")}
                />
              </div>

              {/* Subject Category */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Subject Category
                </label>
                <select
                  className={`w-full px-4 py-3 border ${
                    errors.subjectCategory
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary appearance-none bg-white`}
                  {...register("subjectCategory", {
                    required: "Subject category is required",
                  })}
                >
                  <option value="">Select Subject</option>
                  <option value="engineering">Engineering</option>
                  <option value="medicine">Medicine</option>
                  <option value="business">Business</option>
                  <option value="arts">Arts</option>
                  <option value="science">Science</option>
                </select>
                {errors.subjectCategory && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.subjectCategory.message}
                  </p>
                )}
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6.5">
              {/* Degree */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Degree
                </label>
                <select
                  className={`w-full px-4 py-3 border ${
                    errors.degree ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary appearance-none bg-white`}
                  {...register("degree", { required: "Degree is required" })}
                >
                  <option value="">Select Degree</option>
                  <option value="Bachelor">Bachelor</option>
                  <option value="Master's">Master's</option>
                  <option value="Diploma">Diploma</option>
                </select>
                {errors.degree && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.degree.message}
                  </p>
                )}
              </div>

              {/* Scholarship Category */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Scholarship Category
                </label>
                <select
                  className={`w-full px-4 py-3 border ${
                    errors.scholarshipCategory
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary appearance-none bg-white`}
                  {...register("scholarshipCategory", {
                    required: "Scholarship category is required",
                  })}
                >
                  <option value="">Select Category</option>
                  <option value="Full-fund">Full-fund</option>
                  <option value="Partial">Partial</option>
                  <option value="Self-fund">Self-fund</option>
                </select>
                {errors.scholarshipCategory && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.scholarshipCategory.message}
                  </p>
                )}
              </div>

              {/* Tuition Fees */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Tuition Fees
                </label>
                <input
                  type="text"
                  placeholder="Enter tuition fees"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  {...register("tuitionFees")}
                />
              </div>

              {/* Application Fees */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Application Fees
                </label>
                <input
                  type="text"
                  placeholder="Enter application fees"
                  className={`w-full px-4 py-3 border ${
                    errors.applicationFees
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary`}
                  {...register("applicationFees", {
                    required: "Application fees is required",
                  })}
                />
                {errors.applicationFees && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.applicationFees.message}
                  </p>
                )}
              </div>

              {/* Service Charge */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Service Charge
                </label>
                <input
                  type="text"
                  placeholder="Enter service charge"
                  className={`w-full px-4 py-3 border ${
                    errors.serviceCharge ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary`}
                  {...register("serviceCharge", {
                    required: "Service charge is required",
                  })}
                />
                {errors.serviceCharge && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.serviceCharge.message}
                  </p>
                )}
              </div>

              {/* Application Deadline */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Application Deadline
                </label>
                <input
                  type="date"
                  placeholder="MM/DD/YYYY"
                  className={`w-full px-4 py-3 border ${
                    errors.applicationDeadline
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary`}
                  {...register("applicationDeadline", {
                    required: "Application deadline is required",
                  })}
                />
                {errors.applicationDeadline && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.applicationDeadline.message}
                  </p>
                )}
              </div>

              {/* User Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  User Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  readOnly
                  defaultValue={user?.email}
                  className={`w-full px-4 py-3 border ${
                    errors.userEmail ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary`}
                  {...register("userEmail", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.userEmail && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.userEmail.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-primary cursor-pointer hover:bg-blue-900 text-white font-semibold py-4 px-6 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
            >
              {isSending ? "Sending..." : "Submit Scholarship"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddScholarshipForm;
