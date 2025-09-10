import Image from "../assets/Image/20.png";
import Image1 from "../assets/Image/21.png";
import Image2 from "../assets/Image/22.png";
import Image3 from "../assets/Image/23.png";
import Image4 from "../assets/Image/24.png";

const Services = () => {
  
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
    {
      title: "IT NETWORK OPERATIONS",
      description: `24/7 monitoring and management of your IT networks
to maintain optimal uptime and security.
Kaizen ensures your critical operations remain
connected and protected.`,
      icon: <img src={Image3} className="w-20 h-20 rounded-xl bg-[#B81616] p-2" />,
    },

    {
      title: "MANAGED SERVICES",
      description: `End-to-end IT management solutions that let you
focus on your core business.
From infrastructure monitoring to regular
maintenance, we handle your tech backbone.`,
      icon: <img src={Image4} className="w-20 h-20 rounded-xl bg-[#B81616] p-2" />,
    },
  ];

  return (
    <section className="min-h-screen bg-white text-black px-6 py-16 mt-20" data-aos="fade-up">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-5xl font-bold tracking-tight text-[#B81616]">
          Our <span className="text-[#B81616]"> Services</span>
        </h1>
        <p className="mt-4 text-lg text-black">
          Technology that moves your business forward.
        </p>

        {/* Intro Text */}
        <section className="bg-via-gray-900 text-black text-center py-16 px-6 md:px-20 text-base md:text-lg" data-aos="fade-up" data-aos-delay="100">
          <p className="max-w-6xl mx-auto leading-relaxed">
            IT infrastructure and IT services are the basis of every modern
            business. To achieve their maximal efficiency, their design and
            implementation should be specific to the requirements of every
            single organization. Kaizen Networks is one of the leading IT
            Services company in Dubai, UAE and provides a broad portfolio of
            end-to-end IT services and support that help customers reduce total
            cost of ownership, increase business value and accelerate return on
            investment.
          </p>
        </section>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up" data-aos-delay={index * 100}
              className="bg-white/60 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-red-900/100 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-[#B81616]">
                {service.title}
              </h3>
              <p className="mt-3 text-black">{service.description}</p>

              <div className="mt-8 ">
                <button
                  className="bg-[#B81616] w-full h-10 rounded-xl text-white text-xl "
                  
                >
                  Get In Toch
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
