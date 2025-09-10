import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-[#B81616] text-white px-6 md:px-16 lg:px-24 py-12">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Solutions */}
        <div>
          <h3 className="font-semibold mb-4">Solutions</h3>
          <ul className="space-y-2 text-white text-sm">
            <li>
              {" "}
              <Link to="/itsolutions">Cybersecurity Solutions</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/itsolutions">Networking Solutions</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/itsolutions">Data Center Solutions</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/itsolutions">IT Infrastructure</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/itsolutions">
                ELV (Extra Low Voltage) Solutions
              </Link>{" "}
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-white text-sm">
            <li>
              {" "}
              <Link to="/itservices"> IT Consulting</Link>
            </li>
            <li>
              {" "}
              <Link to="/itservices">IT Solution Design</Link>
            </li>
            <li>
              {" "}
              <Link to="/itservices">IT Implementation</Link>
            </li>
            <li>
              {" "}
              <Link to="/itservices">IT Support Service</Link>
            </li>
            <li>
              {" "}
              <Link to="/itservices">IT Network Operations</Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-white text-sm">
            <li>
              {" "}
              <Link to="/about">About Us</Link>{" "}
            </li>

            <li>
              <Link to="/contact">Contact Us</Link>{" "}
            </li>
            <li>
              <Link to="/product">Product</Link>{" "}
            </li>
          </ul>
        </div>

        {/* Follow & Contact */}
        <div>
          <h3 className="font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 mb-6">
            <FaLinkedin className="w-6 h-6 hover:text-blue-500 cursor-pointer" />
            <FaFacebook className="w-6 h-6 hover:text-blue-400 cursor-pointer" />
            <FaTwitter className="w-6 h-6 hover:text-sky-400 cursor-pointer" />
            <FaInstagram className="w-6 h-6 hover:text-pink-500 cursor-pointer" />
          </div>

          <h3 className="font-semibold mb-4">Contact Info</h3>
          <p className="text-bl text-sm">
            Crystal Tower. <br />
            Business Bay. P.O. Box 413325 <br />
            Dubai, UAE
          </p>
          <p className="mt-2 text-white text-sm">
            Phone: +971 4 429 3690 <br />
            Email: info@kaizennetworks.com
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-white text-sm">
        Copyright © 2025 | Kaizen Networks L.L.C
      </div>
    </footer>
  );
}
