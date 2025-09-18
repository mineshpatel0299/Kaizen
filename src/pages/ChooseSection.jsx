import Robot from "../assets/RobMob.png";
import RobotSmall from "../assets/RobMob.png";
import Eye from "../assets/eye.png";
import Target from "../assets/target.png";
import { useNavigate } from "react-router-dom";
const ChooseSection = () => {
const navigate = useNavigate();
  const handleKnowMore = () => {
    navigate("/about");
    window.scrollTo(0, 0);
  };
  return (
    <section className="bg-gray-50 py-12 px-4 md:px-16 flex flex-col md:flex-row items-center relative overflow-hidden">
      {/* Text */}
      <div data-aos="fade-right" className="relative w-full md:w-3/4 px-4 md:px-6 py-6 rounded-lg z-10">
        {/* Heading */}
        <h2 className="text-3xl md:text-3xl font-bold text-[#B81616] mb-4 text-center md:text-left">
          WHO WE ARE?
        </h2>

        {/* Intro */}
        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-8 text-center md:text-left">
          At Kaizen IT Solutions, we specialise in delivering tailored IT
          services and solutions that drive continuous improvement and peak
          performance. Our expert team is dedicated to helping your business
          thrive in the digital age, ensuring sustainable growth and success.
        </p>

        {/* Vision & Mission */}
        <ul className="space-y-8">
          {/* Vision */}
          <li className="flex flex-col md:flex-row items-start space-x-0 md:space-x-6 bg-white p-4 rounded-lg shadow-md md:bg-transparent md:p-0 md:shadow-none">
            <img
              src={Eye}
              alt="Vision Icon"
              className="w-10 h-10 flex-shrink-0 mb-2 md:mb-0"
            />
            <div>
              <h3 className="font-semibold text-xl text-[#B81616]">Vision</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                To be a trusted leader in IT services and solutions, known for
                innovation, reliability, and customer success. We strive to
                foster lasting partnerships with our clients and cultivate a
                workplace where individuals are motivated to grow and thrive.
              </p>
            </div>
          </li>

          {/* Mission */}
          <li className="flex flex-col md:flex-row items-start space-x-0 md:space-x-6 bg-white p-4 rounded-lg shadow-md md:bg-transparent md:p-0 md:shadow-none">
            <img
              src={Target}
              alt="Mission Icon"
              className="w-10 h-10 flex-shrink-0 mb-2 md:mb-0"
            />
            <div>
              <h3 className="font-semibold text-xl text-[#B81616]">Mission</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                To drive continuous improvement by delivering reliable,
                innovative, and tailored IT services and solutions that empower
                businesses to grow, adapt, and succeed in the digital age.
              </p>
            </div>
          </li>
        </ul>

        {/* Button */}
        <div className="flex justify-center md:justify-start">
          <button className="mt-8 bg-[#B81616] hover:bg-red-700 text-white px-6 py-3 rounded-lg shadow-lg transition" onClick={handleKnowMore}>
            Know More
          </button>
        </div>
      </div>

      {/* Robot Image */}
      <div data-aos="fade-left" className="hidden md:flex w-full md:w-1/2 justify-center md:justify-end mt-6 md:mt-0">
        {/* Desktop Image */}
        <img
          src={Robot}
          alt="Robot"
          className="relative max-h-[600px] w-auto object-contain"
        />
      </div>
    </section>
  );
};

export default ChooseSection;
