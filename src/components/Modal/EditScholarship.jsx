import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { imageUpload } from "../../utils/imageUpload";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";
import { format, parse } from "date-fns";
import '../../index.css'

const EditScholarship = ({ myModal, scholarship, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (scholarship) {
      reset({
        ...scholarship,
        applicationDeadline: scholarship.applicationDeadline
          ? format(
              parse(scholarship.applicationDeadline, "dd/MM/yyyy", new Date()),
              "yyyy-MM-dd"
            )
          : "",
      });
    }
  }, [reset, scholarship]);

  const closeModal = () => {
    myModal.current?.close();
  };

  const onSubmit = async (data) => {
    try {
      const updateScholarshipInfo = {};

      if (data.applicationDeadline) {
        updateScholarshipInfo.applicationDeadline = format(
          new Date(data.applicationDeadline),
          "dd/MM/yyyy"
        );
      }

      for (const key in data) {
        if (key === "universityImage" || key === "applicationDeadline")
          continue;

        if (data[key] !== scholarship[key]) {
          updateScholarshipInfo[key] = data[key];
        }
      }

      const file = data.universityImage;
      if (file && typeof file !== "string") {
        updateScholarshipInfo.universityImage = await imageUpload(file[0]);
      }

      await axiosSecure.patch(
        `/scholarships/${data._id}`,
        updateScholarshipInfo
      );

      toast.success("Scholarship updated successfully!");
      refetch();
    } catch (err) {
      console.log(err.message);
    } finally {
      closeModal();
    }
  };

  return (
    <dialog ref={myModal} className="modal modal-bottom sm:modal-middle">
      <div className="modal-box max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-xl">Edit Scholarship Details</h3>
        </div>

        {/* Form Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Column */}
          <div className="space-y-4">
            {/* Scholarship Name */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Scholarship Name
              </label>
              <input
                type="text"
                className={`input input-bordered w-full ${
                  errors.scholarshipName ? "input-error" : ""
                }`}
                {...register("scholarshipName", {
                  required: "Scholarship name is required",
                })}
              />
              {errors.scholarshipName && (
                <p className="mt-1 text-sm text-error">
                  {errors.scholarshipName.message}
                </p>
              )}
            </div>

            {/* University Name */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                University Name
              </label>
              <input
                type="text"
                className={`input input-bordered w-full ${
                  errors.universityName ? "input-error" : ""
                }`}
                {...register("universityName", {
                  required: "University name is required",
                })}
              />
              {errors.universityName && (
                <p className="mt-1 text-sm text-error">
                  {errors.universityName.message}
                </p>
              )}
            </div>

            {/* University Image */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                University Image
              </label>
              <div className="flex items-center gap-3">
                <img
                  src={
                    scholarship?.universityImage ||
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUhIEOpEBie-LYpu0KOJUPokK5A0qM1wj6iw&s"
                  }
                  alt="University"
                  className="w-16 h-16 object-cover rounded border border-base-300"
                />
                <input
                  type="file"
                  className="file-input file-input-bordered file-input-sm w-full"
                  {...register("universityImage")}
                />
              </div>
            </div>

            {/* University Country */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                University Country
              </label>
              <input
                type="text"
                className={`input input-bordered w-full ${
                  errors.universityCountry ? "input-error" : ""
                }`}
                {...register("universityCountry", {
                  required: "Country is required",
                })}
              />
              {errors.universityCountry && (
                <p className="mt-1 text-sm text-error">
                  {errors.universityCountry.message}
                </p>
              )}
            </div>

            {/* University City */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                University City
              </label>
              <input
                type="text"
                className={`input input-bordered w-full ${
                  errors.universityCity ? "input-error" : ""
                }`}
                {...register("universityCity", {
                  required: "City is required",
                })}
              />
              {errors.universityCity && (
                <p className="mt-1 text-sm text-error">
                  {errors.universityCity.message}
                </p>
              )}
            </div>

            {/* University World Rank */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                University World Rank
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                {...register("universityRank")}
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {/* Subject Category */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Subject Category
              </label>
              <select
                className={`select select-bordered w-full ${
                  errors.subjectCategory ? "select-error" : ""
                }`}
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
                <p className="mt-1 text-sm text-error">
                  {errors.subjectCategory.message}
                </p>
              )}
            </div>

            {/* Scholarship Category */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Scholarship Category
              </label>
              <select
                className={`select select-bordered w-full ${
                  errors.scholarshipCategory ? "select-error" : ""
                }`}
                {...register("scholarshipCategory", {
                  required: "Scholarship category is required",
                })}
              >
                <option value="">Select Category</option>
                <option value="Full-fund">Full-Fund</option>
                <option value="Partial">Partial</option>
                <option value="Self-fund">Self-fund</option>
              </select>
              {errors.scholarshipCategory && (
                <p className="mt-1 text-sm text-error">
                  {errors.scholarshipCategory.message}
                </p>
              )}
            </div>

            {/* Degree */}
            <div>
              <label className="block text-sm font-semibold mb-2">Degree</label>
              <select
                className={`select select-bordered w-full ${
                  errors.degree ? "select-error" : ""
                }`}
                {...register("degree", { required: "Degree is required" })}
              >
                <option value="">Select Degree</option>
                <option value="Bachelor">Bachelor's</option>
                <option value="Master's">Masters</option>
                <option value="Diploma">Diploma</option>
              </select>
              {errors.degree && (
                <p className="mt-1 text-sm text-error">
                  {errors.degree.message}
                </p>
              )}
            </div>

            {/* Tuition Fees */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Tuition Fees
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                {...register("tuitionFees")}
              />
            </div>

            {/* Application Fees and Service Charge */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Application Fees
                </label>
                <input
                  type="number"
                  className={`input no-spinner input-bordered w-full ${
                    errors.applicationFees ? "input-error" : ""
                  }`}
                  {...register("applicationFees", {
                    required: "Application fees is required",
                  })}
                />
                {errors.applicationFees && (
                  <p className="mt-1 text-sm text-error">
                    {errors.applicationFees.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Service Charge
                </label>
                <input
                  type="text"
                  className={`input input-bordered w-full ${
                    errors.serviceCharge ? "input-error" : ""
                  }`}
                  {...register("serviceCharge", {
                    required: "Service charge is required",
                  })}
                />
                {errors.serviceCharge && (
                  <p className="mt-1 text-sm text-error">
                    {errors.serviceCharge.message}
                  </p>
                )}
              </div>
            </div>

            {/* Application Deadline */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Application Deadline
              </label>
              <input
                type="date"
                className={`input input-bordered w-full ${
                  errors.applicationDeadline ? "input-error" : ""
                }`}
                {...register("applicationDeadline", {
                  required: "Deadline is required",
                })}
              />
              {errors.applicationDeadline && (
                <p className="mt-1 text-sm text-error">
                  {errors.applicationDeadline.message}
                </p>
              )}
            </div>

            {/* User Email */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                User Email
              </label>
              <input
                type="email"
                className={`input input-bordered w-full ${
                  errors.userEmail ? "input-error" : ""
                }`}
                {...register("userEmail", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.userEmail && (
                <p className="mt-1 text-sm text-error">
                  {errors.userEmail.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="modal-action mt-6">
          <button
            type="button"
            onClick={() => myModal.current?.close()}
            className="btn btn-ghost"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSubmit(onSubmit)}
            className="btn btn-primary"
          >
            Save Changes
          </button>
        </div>
      </div>

      {/* Backdrop */}
      <div className="modal-backdrop" onClick={closeModal}>
        <button>close</button>
      </div>
    </dialog>
  );
};

export default EditScholarship;
