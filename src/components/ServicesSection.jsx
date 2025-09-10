import { useNavigate } from "react-router-dom";
import Background from "../assets/Back.png";
import Image from "../assets/Image/20.png";
import Image1 from "../assets/Image/21.png";
import Image2 from "../assets/Image/22.png";
const ServicesSection = () => {
 const navigate = useNavigate();

  const handleClick = () => {
    navigate("/itservices");
    window.scrollTo(0, 0); 
  };
  const services = [
  {
        title: "IT SERVICES & CONSULTING",
        description: `Expert guidance to align your IT strategy with business
  goals and future-proof your tech landscape.
  From audits to roadmap development, we help you make
  informed IT investments.`,
        icon: <img src={Image} className="w-20 h-20 rounded-xl bg-[#B81616] p-2" />,
      },
      {
        title: "IT SOLUTION DESIGN & IMPLEMENTATION",
        description: `Custom IT solutions tailored to your specific business
  challenges and operational goals.
  We plan, deploy, and integrate systems that drive
  performance and productivity.`,
        icon: <img src={Image1} className="w-20 h-20 rounded-xl bg-[#B81616] p-2" />,
      },
      {
        title: "SUPPORT SERVICES",
        description: `Reliable technical support to ensure your IT systems run
  smoothly without interruptions.
  We offer on-site and remote assistance to resolve
  issues promptly and efficiently.`,
        icon: <img src={Image2} className="w-20 h-20 rounded-xl bg-[#B81616] p-2" />,
      },
];

  return (
    <section data-aos="fade-up" className="min-h-96 bg-[#B81616] text-black px-6 py-10 mt-20"
     style={{
              backgroundImage: `url(${Background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              
            }}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-5xl font-bold tracking-tight text-white">
         Our <span className="text-white">Services</span>
        </h1>
        <p className="mt-4 text-lg text-white">
          IT Services which enable organizations reduce TCO, increase business
          value & accelerate ROI
        </p>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up" data-aos-delay={index * 100}
              className="bg-white backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-white/100 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-[#B81616]">
                {service.title}
              </h3>
              <p className="mt-3 text-black">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className=" flex justify-center mt-10">
  <button className="h-10 flex justify-center items-center px-6 rounded-lg shadow-md bg-gray-200" onClick={handleClick}>
    See More
  </button>
</div>

    </section>
  );
};
export default ServicesSection;
