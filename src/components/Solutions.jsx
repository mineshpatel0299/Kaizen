import React from "react";
import SolutionSection from "./SolutionSection";
import cyberImg from "../assets/Solution/1.jpg";
import networkImg from "../assets/Solution/2.jpg";
import Unifo from "../assets/Solution/3.jpg";
import Itinfo from "../assets/Solution/4.jpg";
import Evn from "../assets/Solution/5.jpg";
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
  return (
    <div className="font-sans bg-white">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center text-black px-6 h-96 mt-8 bg-cover bg-center" style={{ backgroundImage: `url(${cyberImg})` }} data-aos="fade-up">
        <div className="bg-black/50 absolute inset-0"></div>
        <div className="relative z-10 text-white">
          <h1 className="text-3xl md:text-5xl font-bold">Our Solutions</h1>
          <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg">
            Smart Technology. Scalable Infrastructure. Seamless Integration.  
            Empowering your business with tailored IT solutions designed for
            performance, security, and growth.
          </p>
        </div>
      </section>

      {/* Intro Text */}
      <section className="bg-[#B81616] text-center py-16 px-6 md:px-20 text-base md:text-lg" data-aos="fade-up" data-aos-delay="100">
        <p className="max-w-6xl mx-auto leading-relaxed text-white">
          In today’s dynamic business environment, technology forms the backbone
          of every successful organization. At Kaizen Networks, we deliver
          customized IT solutions built on security, scalability, and
          performance — enabling your business to operate smarter, safer, and
          faster.
        </p>
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

      {/* ELV Solutions */}
      <div data-aos="fade-right">
        <SolutionSection
          title="ELV Solutions"
          description="Extra-Low Voltage (ELV) solutions that improve safety, communication, and automation in modern workplaces."
          image={Evn}
          features={[
            {
              icon: <Shield className="w-6 h-6 text-white" />,
              title: "Access Control",
              text: "Protect facilities with smart access control and integrated surveillance.",
            },
            {
              icon: <Search className="w-6 h-6 text-white" />,
              title: "System Integration",
              text: "Centralized monitoring and control for multiple ELV systems.",
            },
          ]}
        />
      </div>

      {/* Server & Storage */}
      <div data-aos="fade-left">
        <SolutionSection
          title="Server & Storage"
          description="High-performance servers and storage solutions to support business growth and manage expanding data needs."
          image={Itinfo}
          reverse
          features={[
            {
              icon: <HardDrive className="w-6 h-6 text-white" />,
              title: "Enterprise Storage",
              text: "Scalable storage systems built for speed, security, and accessibility.",
            },
            {
              icon: <Database className="w-6 h-6 text-white" />,
              title: "Server Solutions",
              text: "Reliable servers designed for high availability and optimized performance.",
            },
          ]}
        />
      </div>

      {/* Data Center Solutions */}
      <div data-aos="fade-right">
        <SolutionSection
          title="Data Center Solutions"
          description="Design and implementation of high-availability, energy-efficient, and secure data centers tailored to your business scale."
          image={Evn}
          features={[
            {
              icon: <Server className="w-6 h-6 text-white" />,
              title: "High Availability",
              text: "Infrastructure designed to eliminate downtime and ensure business continuity.",
            },
            {
              icon: <Shield className="w-6 h-6 text-white" />,
              title: "Data Security",
              text: "Layered protection against cyber threats and unauthorized access.",
            },
          ]}
        />
      </div>

      {/* Structured Cabling */}
      <div data-aos="fade-left">
        <SolutionSection
          title="Structured Cabling"
          description="Organized, future-proof cabling infrastructure that supports high-speed data and communication systems."
          image={Itinfo}
          reverse
          features={[
            {
              icon: <Cable className="w-6 h-6 text-white" />,
              title: "Scalable Design",
              text: "Flexible cabling systems built to adapt to future IT requirements.",
            },
            {
              icon: <Server className="w-6 h-6 text-white" />,
              title: "Reliable Performance",
              text: "Improved connectivity and minimized downtime through standardized solutions.",
            },
          ]}
        />
      </div>

      {/* Video Surveillance */}
      <div data-aos="fade-right">
        <SolutionSection
          title="Video Surveillance"
          description="Intelligent surveillance systems for real-time monitoring, incident detection, and advanced analytics."
          image={Evn}
          features={[
            {
              icon: <Video className="w-6 h-6 text-white" />,
              title: "Smart Cameras",
              text: "AI-powered video monitoring for improved safety and efficiency.",
            },
            {
              icon: <Search className="w-6 h-6 text-white" />,
              title: "Centralized Monitoring",
              text: "Seamlessly integrate surveillance into one secure management platform.",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Solutions;
