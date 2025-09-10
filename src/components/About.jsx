import Background from "../assets/about2.jpg";
import Image from "../assets/about1.jpg";
import Image1 from "../assets/about3.jpg";
import Image2 from "../assets/about4.jpg";
import Image3 from "../assets/1.png";
import Image4 from "../assets/2.png";
import Image5 from "../assets/3.png";
import Image6 from "../assets/4.png";
import Background1 from "../assets/AboutBack.png";
import ChooseAbout from "../pages/ChooseAbout";
const About = () => {
  return (
    <div className="font-sans text-gray-800 ">
      {/* Hero Section */}

      <section
        className="relative  text-white py-40 px-6 md:px-20"
        style={{
          backgroundImage: `url(${Image2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
        }}
        data-aos="fade-up"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
          <p className="mt-4 text-lg">
            Empowering Growth Through Intelligent IT Integration
          </p>
          <button className="mt-6 bg-gray-500 hover:bg-gray-700 text-white px-6 py-3 rounded-lg shadow-lg transition">
            Call (451) 350-3992
          </button>
        </div>
      </section>
      <ChooseAbout />
      {/* About Section */}
      <section
        className="min-h-1/2 flex items-center justify-center px-6 md:px-20 py-16"
        style={{
          backgroundImage: `url(${Background1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto" data-aos="fade-right">
            <div className="col-span-1">
              <img
                src={Image}
                alt="Main showcase"
                className="w-full h-48 object-cover rounded-lg shadow"
              />
            </div>
            <img
              src={Image1}
              alt="Gallery 1"
              className="w-full h-48 object-cover rounded-lg shadow"
            />
            <img
              src={Image2}
              alt="Gallery 2"
              className="w-full h-48 object-cover rounded-lg shadow"
            />
            <div className="col-span-1">
              <img
                src={Background}
                alt="Background showcase"
                className="w-full h-48 object-cover rounded-lg shadow"
              />
            </div>
          </div>

          {/* Content */}
          <div className="max-w-lg" data-aos="fade-left">
            <h2 className="text-4xl font-extrabold mb-6 leading-snug">
              Empowering Growth Through Intelligent IT Integration
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Kaizen is a leading system integrator, delivering end-to-end IT
              solutions designed for modern business demands. We specialize in
              building secure, scalable, and high-performing infrastructures by
              integrating top-tier technologies from trusted vendors — tailored
              to fit your unique operational needs.
            </p>
            <p className="font-medium text-gray-700 leading-relaxed">
              Our mission is simple: to help growing businesses thrive by
              aligning technology with their goals. From design to deployment
              and ongoing management, we ensure your IT backbone is
              future-ready, resilient, and built for success.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50 px-6 md:px-20 text-center" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-10">Why Choose Us?</h2>
        <div className="grid md:grid-cols-4 gap-2 max-w-5xl mx-auto">
          <div className="bg-white text-black p-4 rounded-2xl shadow-lg text-left" data-aos="fade-up" data-aos-delay="100">
            <div className="p-2">
              <img src={Image3} alt="Adm" className="h-14" />
            </div>
            <div className="">
              <h3 className="text-m  font-bold mb-2 ">
                Integrated IT Infrastructure
              </h3>
            </div>

            <p className="text-sm mb-6">
              We design and deploy secure, scalable, and high-performance IT
              environments using best-in-class technologies.
            </p>
            <button className="underline">Learn More</button>
          </div>
          <div className="bg-white text-black p-6 rounded-2xl shadow-lg text-left" data-aos="fade-up" data-aos-delay="200">
            <div className="p-2">
              <img src={Image6} alt="Adm" className="h-14 " />
            </div>
            <h3 className="text font-bold mb-2">
              End-to-End System Integration
            </h3>
            <p className="text-sm mb-4">
              From consultation to implementation, we connect hardware,
              software, and networks into seamless, business-ready solutions.
            </p>
            <button className="underline">Learn More</button>
          </div>
          <div className="bg-white text-black p-6 rounded-2xl shadow-lg text-left" data-aos="fade-up" data-aos-delay="300">
            <div className="p-2">
              <img src={Image4} alt="Adm" className="h-14 " />
            </div>
            <h3 className="text font-semibold mb-2">
              Managed IT Services & Support
            </h3>
            <p className="text-sm mb-4">
              We offer ongoing monitoring, maintenance, and optimization to
              ensure your systems run smoothly — today and tomorrow.
            </p>
            <button className="underline">Learn More</button>
          </div>
          <div className="bg-white text-black p-6 rounded-2xl shadow-lg text-left" data-aos="fade-up" data-aos-delay="400">
            <div className="p-2">
              <img src={Image5} alt="Adm" className="h-14" />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Managed IT Services & Support
            </h3>
            <p className="text-sm mb-4">
              We offer ongoing monitoring, maintenance, and optimization to
              ensure your systems run smoothly — today and tomorrow.
            </p>
            <button className="underline">Learn More</button>
          </div>
        </div>
        <button className="mt-8 bg-[#B81616] hover:bg-blue-800 text-white px-6 py-3 rounded-lg shadow">
          Learn More
        </button>
      </section>
    </div>
  );
};

export default About;
