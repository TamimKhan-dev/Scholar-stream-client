import React from "react";
import Container from "../../components/Shared/Container";
import collegeImg from "../../assets/images/college.webp";
import { GoTrophy } from "react-icons/go";
import { SlCalender } from "react-icons/sl";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdStar } from "react-icons/io";

const ScholarshipDetails = () => {
  return (
    <div>
      <Container>
        <div className="relative w-full h-[400px] rounded-xl mt-8 mb-18 overflow-hidden">
          <img src={collegeImg} alt="" className="w-full h-full object-start" />
          <div className="absolute inset-0 bg-linear-to-t from-black to-transparent rounded-xl"></div>
          <div className="absolute z-50 left-1/2 -translate-x-[50%] bottom-20 space-y-8">
            <h3 className="text-2xl md:text-4xl text-center font-bold text-white">
              Global Future Leaders Fellowship
            </h3>
            <ul className="flex flex-col gap-2 md:flex-row">
              <li className="bg-primary px-3 py-1.5 text-white flex items-center text-nowrap w-fit gap-0.5 rounded-3xl">
                <GoTrophy /> University World Rank: #8
              </li>
              <li className="bg-primary px-3 py-1.5 text-white flex items-center text-nowrap w-fit gap-0.5 rounded-3xl">
                <SlCalender /> Deadline: March 18, 2026
              </li>
              <li className="bg-primary px-3 py-1.5 text-white flex items-center text-nowrap w-fit gap-0.5 rounded-3xl">
                <IoLocationOutline /> Location: London, UK
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-20 xl:flex gap-8">
          {/* About Scholarship section */}
          <div className="w-full mb-8">
            <div className="mb-3">
              <h4 className="text-xl md:text-3xl font-bold mb-3">
                About the Scholarship
              </h4>
              <p className="text-gray-500">
                The Global Future Leaders Fellowship is a prestigious program
                created to empower young people who show strong leadership
                potential, academic dedication, and a commitment to creating
                positive change in their communities. The fellowship provides
                financial support, mentorship, and access to an international
                network of professionals and scholars.
              </p>
            </div>

            <div className="w-full flex flex-col md:flex-row gap-3 mb-3">
              <div className="bg-gray-100 border-2 w-full border-gray-200 rounded-xl py-2 px-4">
                <h5 className="font-bold">Stipend & Coverage:</h5>
                <p>Full Tuition + $5000 Anual Living Stipend</p>
              </div>
              <div className="bg-gray-100 border-2 w-full border-gray-200 rounded-xl py-2 px-4">
                <h5 className="font-bold">Application Fees:</h5>
                <p>$50(Non-refundable)</p>
              </div>
            </div>

            <button className="btn w-full bg-primary text-white rounded-lg">
              Apply for Scholarship
            </button>
          </div>

          {/* Scholarship Reviews section */}
          <div>
            <h4 className="text-xl font-bold mb-3">
              Reviews & Experiences (3)
            </h4>

            <div className="max-h-96 overflow-y-auto space-y-3">

              <div className="border-2 p-3 border-gray-100 rounded-lg">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                    <div>
                      <h5 className="font-bold">Alice chen</h5>
                      <p className="text-gray-500">oct 25, 2026</p>
                    </div>
                  </div>

                  <div className="flex gap-0.5 text-xl text-yellow-400">
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                  </div>
                </div>

                <p className="font-semibold">An incredible opportunity! The application process was straightforward, and the funding is a huge relief.</p>
              </div>

              <div className="border-2 p-3 border-gray-100 rounded-lg">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                    <div>
                      <h5 className="font-bold">Alice chen</h5>
                      <p className="text-gray-500">oct 25, 2026</p>
                    </div>
                  </div>

                  <div className="flex gap-0.5 text-xl text-yellow-400">
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                  </div>
                </div>

                <p className="font-semibold">An incredible opportunity! The application process was straightforward, and the funding is a huge relief.</p>
              </div>

              <div className="border-2 p-3 border-gray-100 rounded-lg">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                    <div>
                      <h5 className="font-bold">Alice chen</h5>
                      <p className="text-gray-500">oct 25, 2026</p>
                    </div>
                  </div>

                  <div className="flex gap-0.5 text-xl text-yellow-400">
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                  </div>
                </div>

                <p className="font-semibold">An incredible opportunity! The application process was straightforward, and the funding is a huge relief.</p>
              </div>

            </div>


          </div>
        </div>
      </Container>
    </div>
  );
};

export default ScholarshipDetails;
