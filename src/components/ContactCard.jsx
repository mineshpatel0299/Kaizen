import { Phone, Mail, Globe } from "lucide-react";
import Support from "../assets/Image/34.png";
import Logo from "../assets/Logo.png";
export default function ContactCard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center">
        {/* Left Section */}
        <div data-aos="fade-right" className="text-center space-y-6">
          {/* Logo */}
          {/* <div className="flex justify-start">
            <img
              src={Logo}
              alt="Kaizen IT Solutions"
              className="h-10 md:h-12"
            />
          </div> */}

          {/* Illustration */}
          <div className="flex justify-center">
            <img
              src={Support}
              alt="Support Illustration"
              className="w-48 md:w-64"
            />
          </div>

          {/* Description */}
          <div className="text-gray-700">
            <h2 className="text-lg md:text-xl font-bold mb-2">
              Have questions? Need a custom IT service or solution?
            </h2>
            <p className="text-sm md:text-base">
              We’re here to help. Whether you're looking to upgrade your
              infrastructure, secure your network, or plan a digital
              transformation, Kaizen IT Solutions is ready to partner with you.
            </p>
          </div>
        </div>

        {/* Right Section (Contact Info) */}
        <div data-aos="fade-left" className="bg-gray-100 rounded-2xl p-6 md:p-8 shadow-md space-y-20">
          {/* Phone */}
          <div className="flex items-start gap-3">
            <Phone className="text-red-500 mt-1" />
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Phone</h3>
              <p className="text-sm md:text-base">+971-50-262 6894</p>
              <p className="text-sm md:text-base">+971-56-599 7338</p>
            </div>
          </div>

          <hr />

          {/* Email */}
          <div className="flex items-start gap-3">
            <Mail className="text-red-500 mt-1" />
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Email</h3>
              <p className="text-sm md:text-base">
                info@kaizenitsolutionsllc.com
              </p>
            </div>
          </div>

          <hr />

          {/* Website */}
          <div className="flex items-start gap-3">
            <Globe className="text-red-500 mt-1" />
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Website</h3>
              <p className="text-sm md:text-base">
                www.kaizenitsolutionsllc.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
