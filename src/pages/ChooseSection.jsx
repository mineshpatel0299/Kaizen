import { useNavigate } from "react-router-dom";
import chooseImage from "../assets/Image/empowering.png";
import VisionGif from "../assets/Image/vission.gif";
import MissionGif from "../assets/Image/mission.gif";

const ChooseSection = () => {
  const navigate = useNavigate();
  const handleReadMore = () => {
    navigate("/about"); // Example navigation
    window.scrollTo(0, 0);
  };

  return (
    <section className="bg-white py-16 px-4 md:px-16 flex flex-col lg:flex-row items-center justify-center">
      {/* Image Section */}
      <div data-aos="fade-right" className="w-full lg:w-[50%] flex justify-center lg:justify-end mb-8 lg:mb-0 lg:pr-16 relative z-0">
        <div className="relative w-[100%] md:w-[80%] lg:w-[100%] xl:w-[90%] rounded-lg overflow-hidden shadow-lg">
          <img
            src={chooseImage}
            alt="Innovative Ideas"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Content Section */}
      <div data-aos="fade-left" className="w-full lg:w-[55%] px-4 md:px-6 py-6 lg:-ml-32 relative z-10">
        <div className="bg-white p-8 rounded-lg shadow-xl mx-auto lg:mx-0">
          <h2 className="text-4xl md:text-5xl font-bold text-[#B81616] leading-tight mb-6">
            WHO WE ARE?
          </h2>
          <p className="text-gray-700 text-base leading-relaxed mb-8">
            At Kaizen IT Solutions, we specialise in delivering tailored IT
            services and solutions that drive continuous improvement and peak
            performance. Our expert team is dedicated to helping your business
            thrive in the digital age, ensuring sustainable growth and success.
          </p>

          {/* Vision & Mission */}
          <ul className="space-y-6 mb-8">
            {/* Vision */}
            <li className="flex items-start space-x-4">
              <img
                src={VisionGif}
                alt="Vision Icon"
                className="w-8 h-8 flex-shrink-0"
              />
              <div>
                <h4 className="font-semibold text-lg text-[#B81616]">Vision</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  To be a trusted leader in IT services and solutions, known for
                  innovation, reliability, and customer success. We strive to
                  foster lasting partnerships with our clients and cultivate a
                  workplace where individuals are motivated to grow and thrive.
                </p>
              </div>
            </li>

            {/* Mission */}
            <li className="flex items-start space-x-4">
              <img
                src={MissionGif}
                alt="Mission Icon"
                className="w-8 h-8 flex-shrink-0"
              />
              <div>
                <h4 className="font-semibold text-lg text-[#B81616]">Mission</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  To drive continuous improvement by delivering reliable,
                  innovative, and tailored IT services and solutions that empower
                  businesses to grow, adapt, and succeed in the digital age. We are
                  committed to ensuring our clients achieve their strategic goals.
                </p>
              </div>
            </li>
          </ul>

       

          {/* Stats Section */}
          
        </div>
      </div>
    </section>
  );
};

export default ChooseSection;
