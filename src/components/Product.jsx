import { motion } from "framer-motion";

// Import logos
import CiscoLogo from "../assets/Image/1.png";
import FortigateLogo from "../assets/Image/2.png";
import MicrosoftLogo from "../assets/Image/5.jpg";
import LenovoLogo from "../assets/Image/3.jpg";
import DellLogo from "../assets/Image/4.jpg";
import VeeamLogo from "../assets/Image/6.jpg";

const products = [
  {
    name: "CISCO",
    desc: "Advanced networking and cybersecurity solutions for enterprises worldwide.",
    logo: CiscoLogo,
  },
  {
    name: "FORTIGATE",
    desc: "Next-generation firewall and security solutions to safeguard your IT infrastructure.",
    logo: FortigateLogo,
  },
  {
    name: "MICROSOFT",
    desc: "Empower your business with Office 365, Azure Cloud, and collaboration tools.",
    logo: MicrosoftLogo,
  },
  {
    name: "LENOVO",
    desc: "Reliable enterprise hardware and smart devices designed for performance.",
    logo: LenovoLogo,
  },
  {
    name: "DELL",
    desc: "High-performance servers, laptops, and storage solutions for modern businesses.",
    logo: DellLogo,
  },
  {
    name: "VEEAM",
    desc: "Industry-leading backup, disaster recovery, and data management software.",
    logo: VeeamLogo,
  },
];

const Product = () => {
  return (
    <div className="relative min-h-screen bg-white flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Animated Background Gradient Blobs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
        className="absolute top-0 left-0 w-40 h-40 sm:w-72 sm:h-72 bg-blue-400 rounded-full blur-3xl opacity-40 animate-pulse"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-0 right-0 w-52 h-52 sm:w-96 sm:h-96 bg-purple-400 rounded-full blur-3xl opacity-40 animate-pulse"
      />

      {/* Page Content */}
      <div className="relative z-10 text-center max-w-6xl">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-gray-900 mb-4"
        >
          Our <span className="text-[#B81616]">Products</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12 px-2"
        >
          Innovative IT solutions designed to scale with your business
        </motion.p>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-16 md:mb-0">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="bg-white border border-gray-200 shadow-lg rounded-2xl p-4 sm:p-6 hover:shadow-2xl hover:shadow-red-900/100 hover:-translate-y-2 transition-all duration-300 flex flex-col items-center"
            >
              <img
                src={product.logo}
                alt={product.name}
                className="h-14 sm:h-16 w-auto mb-3 sm:mb-4 object-contain"
              />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">
                {product.name}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 text-center">
                {product.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
