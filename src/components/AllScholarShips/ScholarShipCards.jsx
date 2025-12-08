import React from 'react';
import collegeImg from '../../assets/images/college.webp';
import { IoLocationOutline } from 'react-icons/io5';
import { Link } from 'react-router';

const ScholarShipCards = () => {
    return (
        <div className='border rounded-xl border-gray-300 p-3 space-y-3'>
            <img src={collegeImg} alt="" className='rounded-lg w-full max-h-40'/>
            <h3 className='text-xl md:text-2xl font-bold'>Harvard University</h3>
            <p className='p-1 px-2 text-sm bg-green-200 text-green-600 rounded-3xl w-fit'>Full Fund</p>
            <div className='flex items-center gap-1 font-semibold'>
               <IoLocationOutline />
               <p>Cambridge, USA</p>
            </div>
            <p><span className='font-bold'>Application fees:</span> $50</p>
            <Link to='/scholarship/1' className='btn w-full text-white bg-primary rounded-lg'>View Details</Link>
        </div>
    );
};

export default ScholarShipCards;