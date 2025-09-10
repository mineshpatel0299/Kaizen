import React from "react";
import SolutionSection from "./SolutionSection";
import cyberImg from "../assets/Solution/1.jpg";
import networkImg from "../assets/Solution/2.jpg";
import Unifo from "../assets/Solution/3.jpg";
import Itinfo from "../assets/Solution/4.jpg";
import { useNavigate } from "react-router-dom";
// ✅ Import Lucide icons
import {
  Shield,
  Search,
  Wifi,
  Router,
  Server,
  Phone,
  Cable,
  HardDrive,
  Database,
  Video,
} from "lucide-react";

const Solutions = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/itsolutions");
    window.scrollTo(0, 0);
  };
  return (
    <div className="font-sans bg-white">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center text-black px-6 h-96 " data-aos="fade-up">
        <div className="bg-white/50 absolute inset-0"></div>
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold text-[#B81616]">Our Soltions</h1>
          <p className="mt-4 max-w-2xl mx-auto text-black text-base md:text-lg">
            Smart Technology. Scalable Infrastructure. Seamless Integration.
            Empowering your business with tailored IT solutions designed for
            performance, security, and growth.
          </p>
        </div>
      </section>

      {/* Backup Solutions */}
      <div data-aos="fade-right">
      <SolutionSection
        title="Backup Solutions"
        description="Reliable and automated backup systems that protect your data and ensure business continuity in the event of failures or disasters."
        image={cyberImg}
        features={[
          {
            icon: <Shield className="w-6 h-6 text-white" />,
            title: "Data Protection",
            text: "Automated backup systems that safeguard business-critical files and applications.",
          },
          {
            icon: <Search className="w-6 h-6 text-white" />,
            title: "Disaster Recovery",
            text: "Rapid restoration options to minimize downtime and ensure smooth recovery.",
          },
        ]}
      />
      </div>

      {/* Networking & Security */}
      <div data-aos="fade-left">
      <SolutionSection
        title="Network & Security"
        description="Secure, scalable, and efficient networks designed to withstand evolving cyber threats and ensure seamless connectivity."
        image={networkImg}
        reverse
        features={[
          {
            icon: <Router className="w-6 h-6 text-white" />,
            title: "Routers & Switches",
            text: "High-performance devices for fast and reliable data transfer across your infrastructure.",
          },
          {
            icon: <Wifi className="w-6 h-6 text-white" />,
            title: "Enterprise Mobility",
            text: "Secure access for employees across devices, locations, and networks.",
          },
        ]}
      />
      </div>

      {/* Cloud & Virtualization */}
      <div data-aos="fade-right">
      <SolutionSection
        title="Cloud & Virtualization"
        description="Leverage the power of cloud and virtual systems to reduce IT costs, improve flexibility, and enable scalability."
        image={Unifo}
        features={[
          {
            icon: <Server className="w-6 h-6 text-white" />,
            title: "Virtual Servers",
            text: "Run multiple environments on a single machine for efficiency and cost savings.",
          },
          {
            icon: <Phone className="w-6 h-6 text-white" />,
            title: "Cloud Collaboration",
            text: "Empower teams with secure cloud platforms for communication and productivity.",
          },
        ]}
      />
      </div>

      {/* IT Infrastructure */}
      <div data-aos="fade-left">
      <SolutionSection
        title="IT Infrastructure"
        description="Robust, scalable, and future-ready IT infrastructures designed for seamless business operations."
        image={Itinfo}
        reverse
        features={[
          {
            icon: <Server className="w-6 h-6 text-white" />,
            title: "Servers & Racks",
            text: "Efficient solutions for housing, securing, and managing IT hardware.",
          },
          {
            icon: <Cable className="w-6 h-6 text-white" />,
            title: "Structured Cabling",
            text: "Standardized cabling systems to improve reliability and scalability.",
          },
        ]}
      />
      </div>
<div className=" flex justify-center mt-10 mb-10">
 <button
        className="h-10 flex justify-center items-center px-6 rounded-lg shadow-md bg-red-600 text-white "
        onClick={handleClick}
      >
        See More
      </button>
</div>
     
    </div>
  );
};

export default Solutions;
