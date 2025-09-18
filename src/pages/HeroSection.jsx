import React, { useState, useEffect } from 'react';
import { FaThumbsUp, FaHeadset, FaSmile } from "react-icons/fa";
import Background from "../assets/kaizenwebBg.mp4";
import { useNavigate } from "react-router-dom";
import Arrow from "../assets/Arrow.png";

const HeroSection = () => {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate("/contact");
    window.scrollTo(0, 0);
  };
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-[80vh] px-4 mt-32">
        <video
          src={Background}
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover rounded-[30px]"
        />

        {/* Content Box */}
        <div data-aos="fade-up" className="relative bg-white/90 shadow-lg rounded-[20px] p-6 sm:p-8 md:p-10 lg:p-12 max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-[1319px] mx-auto text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#B81616]">
            KAIZEN IT SOLUTIONS
          </h1>
          <p className="mt-4 text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-4 sm:px-6 md:px-0">
            At Kaizen IT Solutions, we specialize in delivering tailored IT
            services that drive continuous improvement and peak performance. Our
            expert team is dedicated to helping your business thrive in the
            digital age, ensuring sustainable growth and success.
          </p>
          
        </div>
      </section>

      {/*  Stats Section */}
      <section data-aos="fade-up" className="text-white py-6 md:py-10 grid grid-cols-1 md:grid-cols-[0.5fr_2.5fr] gap-6 items-center text-center">
        {/* Left Side - Image */}
        <div className="hidden md:flex justify-center items-center">
          <img src={Arrow} alt="Arrow" className="w-40 h-40 md:w-48 md:h-40" />
        </div>

        {/* Right Side - Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#B81616] w-full p-6">
          <div className="flex flex-row items-center justify-center gap-3 p-6 rounded-2xl">
            <div className=" white flex flex-row gap-4 p-2">
            <FaSmile className="text-5xl text-white" />
            <div className="flex items-center justify-center gap-2 text-center">
              <Counter target={99} duration={2000} />%
              </div>
              </div>
              <p className="text-xl flex flex-col">
                <span className="block">HAPPY</span>
                <span className="block">CLIENTS</span>
              </p>
            
          </div>

          {/* New Counter for Projects Completed */}
          <div className="flex flex-row items-center justify-center gap-3 p-6 rounded-2xl">
            <div className=" white flex flex-row gap-4 p-2">
            <FaThumbsUp className="text-5xl text-white" /> {/* Reusing FaThumbsUp for now, can be changed to a more appropriate icon if available */}
            <div className="flex items-center justify-center gap-2 text-center">
              <Counter target={200} duration={2000} />+
              </div>
              </div>
              <p className="text-xl flex flex-col">
                <span className="block">PROJECTS</span>
                <span className="block">COMPLETED</span>
              </p>
            
          </div>

          <div className="flex flex-row items-center justify-center gap-3 p-6 rounded-2xl ">
            <div className=" white flex flex-row gap-4 p-2">
            <FaHeadset className="text-5xl text-white" />
            <div className="flex items-center justify-center gap-2 text-center">
              <p className="text-2xl font-bold">24/7</p>
              </div>
              </div>
              <p className="text-xl flex flex-col">
                SUPPORT <span className="ml-1">AVAILABLE</span>
              </p>
            
          </div>
        </div>
      </section>
    </div>
  );
};

const Counter = ({ target, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const incrementTime = (duration / end);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <p className="text-2xl font-bold">{count}</p>;
};

export default HeroSection;
