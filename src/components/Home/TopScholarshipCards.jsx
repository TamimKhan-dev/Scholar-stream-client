import React from "react";
import { Link } from 'react-router';

const TopScholarshipCards = ({ scholarship }) => {

  return (
    <div className="card p-6 space-y-5">
      <div>
        <img src={scholarship.universityImage} className="bg-gray-500 rounded-full w-10 h-10" />
        <h3 className="text-lg font-medium">{scholarship.universityName}</h3>
        <p className="text-gray-300 text-md">{scholarship.universityCountry}</p>
      </div>

      <h2 className="text-2xl font-semibold pb-3 border-b-2 border-gray-300">{scholarship.scholarshipName}</h2>
      
      <div className="bg-gray-200 rounded-sm overflow-hidden flex items-center">
        <h5 className="bg-green-500 w-1/2 text-white text-center py-1 font-semibold">{scholarship.scholarshipCategory}</h5>
        <p className="w-1/2 text-center text-red-400">{scholarship.applicationDeadline}</p>
      </div>

      <Link to={`/scholarship/${scholarship._id}`} className="bg-primary py-2 w-full text-white font-medium text-center rounded-3xl">View Details</Link>
    </div>
  );
};

export default TopScholarshipCards;
