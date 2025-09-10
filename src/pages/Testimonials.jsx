import React from "react";
import Camera from "../assets/Cam1.png";
import { FaStar } from "react-icons/fa";
const Testimonials = () => {
  return (
    <section className="w-full bg-white" data-aos="fade-up">
      <div className="max-w-3/4 mx-auto px-4 ">
        {/* 🔹 MOBILE VIEW : Heading + Camera in one row */}
        <div className="flex items-center justify-between w-full md:hidden mb-6">
          {/* Heading */}
          <h2 className="text-gray-500 uppercase tracking-wide text-sm flex flex-col text-left">
            LOOK WHAT
            <span className="text-black text-lg">OUR CLIENTS</span>
            <span className="text-gray-500 text-sm">HAVE TO SAY.</span>
          </h2>

          {/* Camera Image - Mobile */}
          <div className="w-20 h-28 sm:w-28 sm:h-40">
            <img
              src={Camera}
              alt="Camera Mobile"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* 🔹 TABLET & DESKTOP VIEW */}
        <div className="hidden md:flex flex-row items-center justify-between gap-4">
          {/* Heading */}
          <h2 className="text-gray-500 uppercase tracking-wide text-base flex flex-col text-left w-auto">
            LOOK WHAT
            <span className="text-black text-2xl">OUR CLIENTS</span>
            <span className="text-gray-500 text-lg">HAVE TO SAY.</span>
          </h2>

          {/* Camera Image - Tablet & Desktop */}
          <div className="w-72 h-72 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
            <img
              src={Camera}
              alt="Camera"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Highlight Card */}
          <div className="bg-gray-100 rounded-xl shadow-sm p-6 text-left w-64 md:w-80">
            <h3 className="font-semibold text-lg mb-6">Highly Recommend!</h3>
            <p className="text-gray-700 text-base">
              Working with Kaizen IT Solutions has been a fantastic experience.
              Their dedication to our success is evident in every interaction.
            </p>
            <div className="flex space-x-1 mt-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} className="text-red-600" />
              ))}
            </div>
          </div>
        </div>

        {/* 🔹 Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 ">
          {/* Left big block */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-1 flex justify-center" data-aos="fade-up" data-aos-delay="100">
            <div className="max-w-sm rounded-lg shadow-md h-auto sm:h-80 bg-gray-100 p-6 text-left">
              <h3 className="text-lg mb-4">Outstanding Service!</h3>
              <p className="text-gray-700">
                The team at Kaizen IT Solutions provided exceptional service and
                support.
              </p>
              <div className="flex space-x-1 mt-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} className="text-red-600" />
              ))}
            </div>
            </div>
          </div>

          {/* Two stacked blocks */}
          <div className="flex flex-col gap-6 col-span-1 sm:col-span-2 lg:col-span-2" data-aos="fade-up" data-aos-delay="200">
            <div className="rounded-lg shadow-md flex-1 bg-gray-100 p-6 text-left">
              <h3 className="text-lg mb-2">Exceptional IT Solutions!</h3>
              <p className="text-gray-700">They exceeded expectations!</p>
              <div className="flex space-x-1 mt-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} className="text-red-600" />
              ))}
            </div>
            </div>
            <div className="rounded-lg shadow-md flex-1 bg-gray-100 p-6 text-left">
              <h3 className="text-lg mb-2">Professional Team</h3>
              <p className="text-gray-700">
                Always responsive and reliable to work with.
              </p>
              <div className="flex space-x-1 mt-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} className="text-red-600" />
              ))}
            </div>
            </div>
          </div>

          {/* Big vertical block */}
          <div className="col-span-1 flex justify-center" data-aos="fade-up" data-aos-delay="300">
            <div className="rounded-lg shadow-md h-auto sm:h-80 bg-gray-100 p-6 text-left max-w-sm">
              <h3 className="text-lg mb-4">A Game Changer for Us!</h3>
              <p className="text-gray-700">
                The expertise and support from Kaizen IT Solutions have been
                invaluable. They helped us enhance our cybersecurity and
                streamline operations effectively.
              </p>
              <div className="flex space-x-1 mt-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} className="text-red-600" />
              ))}
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
