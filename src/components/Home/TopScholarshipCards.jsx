import React from "react";
import { Link } from 'react-router';

const TopScholarshipCards = () => {
  return (
    <div className="card p-6 space-y-5">
      <div>
        <div className="bg-gray-500 rounded-full w-10 h-10"></div>
        <h3 className="text-lg font-medium">Imperial College London</h3>
        <p className="text-gray-300 text-md">United States of America</p>
      </div>

      <h2 className="text-2xl font-semibold pb-3 border-b-2 border-gray-300">Global Leader Graduate Fellowship</h2>
      
      <div className="bg-gray-200 rounded-sm overflow-hidden flex items-center">
        <h5 className="bg-green-500 w-1/2 text-white text-center py-1 font-semibold">Full Fund</h5>
        <p className="w-1/2 text-center text-red-400">December 07, 2025</p>
      </div>

      <Link to={`/scholarship/1`} className="bg-primary py-2 w-full text-white font-medium text-center rounded-3xl">View Details</Link>
    </div>
  );
};

export default TopScholarshipCards;
