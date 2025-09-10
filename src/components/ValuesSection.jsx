import { useState } from "react";
import { FaUserTie, FaHandshake, FaLightbulb, FaHeadset } from "react-icons/fa";
import Customer from "../assets/Customer.jpg";
import Inte from "../assets/Inte2.jpg";
import Respect from "../assets/Respect-1.jpg";
import Wirel from "../assets/Wirel-curetn.jpg";
const  ValuesSection = () => {
  const [open, setOpen] = useState("integrity");

  const values = [
    {
      id: "integrity",
      title: "Integrity",
      icon: <FaUserTie />,
      content: (
        <>
          <img
            src={Inte}
            alt="Integrity"
            className="rounded-lg shadow-md w-full md:w-1/2"
          />
          <p className="mt-4 md:mt-0 md:ml-6 text-gray-700 text-base leading-relaxed flex items-center justify-center p-4">
            We strongly believe in having integrity in all our transactions
            whether they are internal or external. Transparent communication is
            the core of our values and it’s encouraged throughout our company.
            We are highly ethical, committed and we always hold ourselves
            accountable for our work.
          </p>
        </>
      ),
    },
    {
      id: "respect",
      title: "Respect",
      icon: <FaHandshake />,
      content: (
        <>
          <img
            src={Respect}
            alt="Respect"
            className="rounded-lg shadow-md w-full md:w-1/2"
          />
          <p className="mt-4 md:mt-0 md:ml-6 text-gray-700 text-base leading-relaxed flex justify-center items-center p-4">
            We are respectful and treat others in the same way we want to be
            treated. We acknowledge everyone’s contributions and ensure we build
            harmonious working environments by promoting collaboration and
            working as a diverse team.
          </p>
        </>
      ),
    },
    {
      id: "innovation",
      title: "Innovation",
      icon: <FaLightbulb />,
      content: (
        <>
          <img
            src={Wirel}
            alt="Innovation"
            className="rounded-lg shadow-md w-full md:w-1/2"
          />
          <p className="mt-4 md:mt-0 md:ml-6 text-gray-700 text-base leading-relaxed flex justify-center items-center p-4">
            We understand the importance of meeting business needs of our
            clients. We work to protect our client’s investment by innovatively
            using existing technologies and preparing for future needs.
          </p>
        </>
      ),
    },
    {
      id: "customer",
      title: "Customer Relations",
      icon: <FaHeadset />,
      content: (
        <>
          <img
            src={Customer}
            alt="Customer Relations"
            className="rounded-lg shadow-md w-full md:w-1/2"
          />
          <p className="mt-4 md:mt-0 md:ml-6 text-gray-700 text-base leading-relaxed flex justify-center items-center p-4">
            We truly think about the success of our clients. We partner with
            them to build long-term relationships, understand their businesses
            and deliver high-quality solutions.
          </p>
        </>
      ),
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="relative text-center text-6xl font-bold mb-8 
  after:content-[''] after:block after:h-1 after:w-1/5 
  after:mx-auto after:mt-2 after:rounded-full 
  after:bg-gradient-to-r after:from-gray-300 after:to-gray-600 
  after:shadow-md after:shadow-gray-500/50">Our Values</h2>

      {/* Accordion */}
      <div className="space-y-3 mt-20">
        {values.map((item) => (
          <div key={item.id}>
            <button
              className={`w-full flex items-center justify-center px-4 py-6 text-left font-semibold text-white rounded transition-colors duration-300 ${
                open === item.id ? "bg-red-700" : "bg-black"
              }`}
              onClick={() => setOpen(open === item.id ? "" : item.id)}
            >
              <span className="flex items-center gap-2 justify-center">
                {item.icon} {item.title}
              </span>
              <span>{open === item.id }</span>
            </button>

            {/* Content */}
            {open === item.id && (
              <div className="mt-4 bg-gray-50  rounded-lg shadow-md justify-center items-center flex">
                <div className="flex flex-col md:flex-row">{item.content}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
export default ValuesSection;
