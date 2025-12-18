import HorizontalBarChart from "../Statistics/HorizontalBarChart";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

const AdminStatistics = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const { data: scholarships = [] } = useQuery({
    queryKey: ["scholarships"],
    queryFn: async () => {
      const res = await axiosSecure.get("/scholarships");
      return res.data;
    },
  });

  const { data: applications = [] } = useQuery({
    queryKey: ["applications"],
    queryFn: async () => {
      const res = await axiosSecure("applications");
      return res.data;
    },
  });

  const total = useMemo(() => {
    let sum = 0;
    for (const key of applications) {
      if (key.paymentStatus === "paid") {
        sum += Number(key.applicationFees || 0);
      }
    }
    return sum;
  }, [applications]);

  const scholarshipsCategory = useMemo(() => {
    let partial = 0;
    let selfFund = 0;
    let fullFund = 0;
    for (const key of applications) {
      switch (key.scholarshipCategory) {
        case "Self-fund":
          selfFund++;
          break;
        case "Full-fund":
          fullFund++;
          break;
        default:
          partial++;
          break;
      }
    }
    return { partial, selfFund, fullFund };
  }, [applications]);


  return (
    <div>
      <div className="mt-12">
        <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 grow">
          {/* Total users */}
          <div className="relative bg-linear-to-r from-[#89caf9] to-[#695cab] flex justify-center items-center rounded-xl shadow-md p-1">
            <div className="p-4 text-center w-full rounded-lg bg-linear-to-r from-[#cae4f5] to-[#cae4f5] text-black">
              <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                Total Users
              </p>
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                {users.length}
              </h4>
            </div>
          </div>
          {/* Total Fees collected */}
          <div className="relative bg-linear-to-r from-[#abdf78] to-[#648a5d] flex justify-center items-center rounded-xl shadow-md p-1">
            <div className="p-4 text-center w-full rounded-lg bg-linear-to-r from-[#d5f1c9] to-[#d8dee0] text-black">
              <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                Total Fees Collected
              </p>
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                ${total}
              </h4>
            </div>
          </div>
          {/* Total Scholarships */}
          <div className="relative bg-linear-to-r from-[#f1a268] to-[#a06f55] flex justify-center items-center rounded-xl shadow-md p-1">
            <div className="p-4 text-center w-full rounded-lg bg-linear-to-r from-[#fadfc2] to-[#eadcdb]">
              <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                Total Scholarships
              </p>
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                {scholarships.length}
              </h4>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <div className="relative bg-white rounded-xl shadow-md overflow-hidden xl:col-span-2">
            <div className="w-full h-96">
              <HorizontalBarChart scholarshipsCategory={scholarshipsCategory}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminStatistics;
