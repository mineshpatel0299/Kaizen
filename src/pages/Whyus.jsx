import React from "react";
import WhyIm from "../assets/Whyus1.png";

const WhyUs = () => {
  return (
    <section className="w-full bg-white px-4 md:px-20 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left Image */}
        <div data-aos="fade-right" className="flex justify-center">
          <img
            src={WhyIm}
            alt="Team Illustration"
            className="w-[500px] h-[500px] md:w-[600px] md:h-[600px] object-contain rounded-2xl"
          />
        </div>

        {/* Right Content */}
        <div data-aos="fade-left">
          <div className="bg-gray-100 min-h-[200px] p-6 md:p-10 rounded-2xl mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-red-600 mb-4">
              WHY US
            </h2>

            <p className="text-gray-700 mb-8 leading-relaxed">
              Kaizen IT Solutions provides end-to-end IT services and solutions,
              including consulting, infrastructure, managed services,
              networking, cybersecurity, and cloud solutions. With reliable
              support and tailored strategies, we help businesses stay secure,
              efficient, and ready for growth.
            </p>
          </div>

          {/* 3 Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 ">
            {/* Card 1 */}
            <div data-aos="fade-up" data-aos-delay="100" className="bg-gray-100 p-4 rounded-2xl shadow hover:shadow-lg transition">
              <div className="w-10 h-10 bg-black rounded-full mx-auto mb-3"></div>
              <h3 className="text-center text-red-600 font-semibold">
                Trusted & Reliable
              </h3>
              <p className="text-center text-sm text-gray-600 mt-2">
                Delivering results you can count on.
              </p>
            </div>

            {/* Card 2 */}
            <div data-aos="fade-up" data-aos-delay="200" className="bg-gray-100 p-4 rounded-2xl shadow hover:shadow-lg transition">
              <div className="w-10 h-10 bg-black rounded-full mx-auto mb-3"></div>
              <h3 className="text-center text-red-600 font-semibold">
                Fast & Focused
              </h3>
              <p className="text-center text-sm text-gray-600 mt-2">
                Dedicated to helping small businesses succeed.
              </p>
            </div>

            {/* Card 3 */}
            <div data-aos="fade-up" data-aos-delay="300" className="bg-gray-100 p-4 rounded-2xl shadow hover:shadow-lg transition">
              <div className="w-10 h-10 bg-black rounded-full mx-auto mb-3"></div>
              <h3 className="text-center text-red-600 font-semibold">
                Proactive IT Care
              </h3>
              <p className="text-center text-sm text-gray-600 mt-2">
                Keep your business running smoothly at all times.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
