import React, { useRef } from "react";
import EditScholarship from "../../Modal/EditScholarship";

const ManageScholarshipsDataRow = ({ scholarship, index }) => {
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
          <button onClick={() => myModal.current.showModal()} className="py-1 cursor-pointer px-2 rounded-3xl bg-green-400 text-white">
            Edit
          </button>
          <button className="py-1 px-2 rounded-3xl cursor-pointer bg-red-400 text-white">
            Delete
          </button>
          <EditScholarship myModal={myModal} scholarship={scholarship} />
        </td>
      </tr>

      
    </>
  );
};

export default ManageScholarshipsDataRow;
