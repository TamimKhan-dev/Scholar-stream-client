import React from "react";
import { MdEmail } from "react-icons/md";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { BsFillTelephoneFill, BsChatDots } from "react-icons/bs";

const ContactUs = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-8">Contact Us</h2>
      <div className="mb-20 w-full bg-primary text-white min-h-85 rounded-xl py-7 px-10">
      <div className="mb-5">
        <p className="bg-[#243f6c] p-2 rounded-3xl w-fit text-sm mb-2">
          Reach Out To Us
        </p>
        <h2 className="text-xl md:text-3xl font-bold mb-2">
          We'd Love to Hear From You.
        </h2>
        <p>
          Or just reach manually to{" "}
          <span className="underline underline-offset-1 cursor-pointer">
            hello@ScholarStream.com
          </span>
        </p>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap justify-center gap-5 lg:gap-0 lg:justify-between">
        <div className="flex flex-col items-center gap-2">
          <MdEmail size={50} style={{backgroundColor: '#f2c300', borderRadius: '100%', padding: '10px'}}/>
          <h3 className="text-xl font-semibold">Email Support</h3>
          <p className="text-gray-300">Our team can respond in real time.</p>
          <span className="cursor-pointer text-blue-300">
            hello@ScholarStream.com
          </span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <HiOutlineBuildingOffice2  size={50} style={{backgroundColor: '#f2c300', borderRadius: '100%', padding: '10px'}}/>
          <h3 className="text-xl font-semibold">Visit Our Office</h3>
          <p className="text-gray-300">Visit our location in real life.</p>
          <span className="cursor-pointer text-blue-300">
            221b Elementary Avenue, NY
          </span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <BsFillTelephoneFill size={50} style={{backgroundColor: '#f2c300', borderRadius: '100%', padding: '10px'}}/>
          <h3 className="text-xl font-semibold">Call Us Directly</h3>
          <p className="text-gray-300">Available during working hours.</p>
          <span className="cursor-pointer text-blue-300">
            (+1)234-4567-789
          </span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <BsChatDots  size={50} style={{backgroundColor: '#f2c300', borderRadius: '100%', padding: '10px'}}/>
          <h3 className="text-xl font-semibold">Email Support</h3>
          <p className="text-gray-300">Chat with an agent instantly.</p>
          <span className="cursor-pointer text-blue-300">
            Start a chat now
          </span>
        </div>

      </div>

    </div>
    </div>
  );
};

export default ContactUs;
