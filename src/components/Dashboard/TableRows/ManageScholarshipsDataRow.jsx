import React, { useRef } from "react";
import EditScholarship from "../../Modal/EditScholarship";

const ManageScholarshipsDataRow = ({ scholarship, index, refetch }) => {
  const myModal = useRef();

  return (
    <>
      <tr>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900">{index + 1}.</p>
        </td>

        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900">{scholarship.scholarshipName}</p>
        </td>

        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900">{scholarship.universityName}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900">{scholarship.degree}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900">{scholarship.scholarshipCategory}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900">{scholarship.applicationDeadline}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900">{scholarship.universityCountry}</p>
        </td>

        <td className="space-x-3 py-5 border-b border-gray-200 bg-white text-sm">
          <div className="flex flex-nowrap gap-3">
            <button onClick={() => myModal.current.showModal()} className="py-1 cursor-pointer px-2 rounded-full bg-primary text-white">
            Update
          </button>
          <button className="py-1 px-2 rounded-full cursor-pointer bg-red-600 text-white">
            Delete
          </button>
          </div>
          <EditScholarship myModal={myModal} scholarship={scholarship} refetch={refetch}/>
        </td>
      </tr>

      
    </>
  );
};

export default ManageScholarshipsDataRow;
