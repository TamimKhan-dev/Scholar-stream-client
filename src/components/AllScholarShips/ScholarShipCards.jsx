import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { Link } from 'react-router';

const ScholarShipCards = ({ scholarship }) => {
    return (
        <div className='border rounded-xl border-gray-300 p-3 space-y-3'>
            <img src={scholarship.universityImage} alt="" className='rounded-lg w-full max-h-40'/>
            <h3 className='text-xl md:text-2xl font-bold'>{scholarship.universityName}</h3>
            <p className='p-1 px-2 text-sm bg-green-200 text-green-600 rounded-3xl w-fit'>{scholarship.scholarshipCategory}</p>
            <div className='flex items-center gap-1 font-semibold'>
               <IoLocationOutline />
               <p>{scholarship.universityCity}, {scholarship.universityCountry}</p>
            </div>
            <p><span className='font-bold'>Application fees:</span> ${scholarship.applicationFees}</p>
            <Link to={`/scholarship/${scholarship._id}`} className='btn w-full text-white bg-primary rounded-lg'>View Details</Link>
        </div>
    );
};

export default ScholarShipCards;