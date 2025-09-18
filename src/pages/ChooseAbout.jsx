import VisionGif from "../assets/Image/vission.gif";
import MissionGif from "../assets/Image/mission.gif";

const ChooseAbout = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 md:px-16 flex flex-col items-center relative overflow-hidden" data-aos="fade-up">
      {/* Text */}
      <div className="relative w-full md:w-3/4 px-4 md:px-6 py-6 rounded-lg z-10 flex flex-col items-center">
        {/* Heading */}
        <div className="w-full flex justify-center">
          <h2 className="text-3xl font-bold text-[#B81616] mb-4 text-center">
            WHO WE ARE?
          </h2>
        </div>

        {/* Intro */}
        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-8 text-center">
          At Kaizen IT Solutions, we specialise in delivering tailored IT
          services and solutions that drive continuous improvement and peak
          performance. Our expert team is dedicated to helping your business
          thrive in the digital age, ensuring sustainable growth and success.
        </p>

        {/* Vision & Mission */}
        <ul className="flex flex-col md:flex-row gap-10 md:gap-16 w-full md:w-3/4">
          {/* Vision */}
          <li className="flex-1 flex flex-col items-center p-6 rounded-lg shadow-lg bg-white text-center" data-aos="fade-right">
            <div className="flex items-center justify-center mb-4">
              <img
                src={VisionGif}
                alt="Vision Icon"
                className="w-10 h-10 flex-shrink-0 mr-2"
              />
              <h3 className="font-semibold text-xl text-[#B81616]">Vision</h3>
            </div>
            <div className="flex-1">
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                To be a trusted leader in IT services and solutions, known for
                innovation, reliability, and customer success. We strive to
                foster lasting partnerships with our clients and cultivate a
                workplace where individuals are motivated to grow and thrive.
                Our commitment is to deliver excellence and drive progress.
              </p>
            </div>
          </li>

          {/* Mission */}
          <li className="flex-1 flex flex-col items-center p-6 rounded-lg shadow-lg bg-white text-center" data-aos="fade-left">
            <div className="flex items-center justify-center mb-4">
              <img
                src={MissionGif}
                alt="Mission Icon"
                className="w-10 h-10 flex-shrink-0 mr-2"
              />
              <h3 className="font-semibold text-xl text-[#B81616]">Mission</h3>
            </div>
            <div className="flex-1">
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                To drive continuous improvement by delivering reliable,
                innovative, and tailored IT services and solutions that empower
                businesses to grow, adapt, and succeed in the digital age. We
                are committed to fostering strong client relationships and
                enabling their success through cutting-edge technology.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ChooseAbout;
