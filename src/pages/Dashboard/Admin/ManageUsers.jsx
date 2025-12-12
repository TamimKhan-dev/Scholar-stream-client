import { useQuery } from "@tanstack/react-query";
import UserDataRow from "../../../components/Dashboard/TableRows/UserDataRow";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useMemo, useState } from "react";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const [filterValue, setFilterValue] = useState(null);

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const filteredUsers = useMemo(() => {
    if (!filterValue || filterValue === 'all') {
      return users;
    }

    return users.filter((user) => user.role === filterValue);
  }, [filterValue, users]);


  return (
    <>
      <div className="container relative mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      No
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Image
                    </th>
                    <th
                      scope="col"
                      className="py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Role
                    </th>

                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user, index) => (
                    <UserDataRow
                      key={user._id}
                      user={user}
                      index={index}
                      refetch={refetch}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 sm:right-8 items-center flex gap-2">
          <p className="text-nowrap font-semibold">Filter Users:</p>
          <select
            defaultValue="Select a role"
            className="select min-w-50"
            onChange={(e) => setFilterValue(e.target.value)}
          >
            <option disabled={true}>Select a role</option>
            <option value='all'>All</option>
            <option value='student'>Student</option>
            <option value='moderator'>Moderator</option>
            <option value='admin'>Admin</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default ManageUsers;
