
import React from "react";
import WhyIm from "../assets/Image/tree.png";

const WhyUs = () => {
  return (
    <section className="w-full bg-white px-4 md:px-20 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left Image */}
        <div data-aos="fade-right" className="flex justify-center">
          <img
            src={WhyIm}
            alt="Why Us Illustration"
            className="w-full h-auto object-contain rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div data-aos="fade-left">
          <div className="bg-gray-50 p-8 rounded-2xl shadow-md mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
              WHY CHOOSE US
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              At Kaizen IT Solutions, we are dedicated to empowering businesses
              with cutting-edge technology and unparalleled support. Our
              commitment to excellence, proactive approach, and customer-centric
              values set us apart.
            </p>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Feature Card 1: Expertise & Experience */}
            <div data-aos="fade-up" data-aos-delay="100" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <h3 className="text-xl font-semibold text-red-600 mb-2">
                Expertise & Experience
              </h3>
              <p className="text-gray-600">
                Our team of certified professionals brings years of experience
                in delivering robust and scalable IT solutions.
              </p>
            </div>

            {/* Feature Card 2: Customer-Centric Approach */}
            <div data-aos="fade-up" data-aos-delay="200" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <h3 className="text-xl font-semibold text-red-600 mb-2">
                Customer-Centric Approach
              </h3>
              <p className="text-gray-600">
                We prioritize your needs, offering personalized solutions and
                responsive support to ensure your satisfaction.
              </p>
            </div>

            {/* Feature Card 3: Proactive & Reliable */}
            <div data-aos="fade-up" data-aos-delay="300" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <h3 className="text-xl font-semibold text-red-600 mb-2">
                Proactive & Reliable
              </h3>
              <p className="text-gray-600">
                We monitor your systems 24/7 to prevent issues before they
                impact your business, ensuring maximum uptime.
              </p>
            </div>

            {/* Feature Card 4: Innovative Solutions */}
            <div data-aos="fade-up" data-aos-delay="400" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <h3 className="text-xl font-semibold text-red-600 mb-2">
                Innovative Solutions
              </h3>
              <p className="text-gray-600">
                We leverage the latest technologies to provide you with a
                competitive edge and drive your business forward.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
