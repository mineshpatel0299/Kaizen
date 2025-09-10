import FlipCard from "./FlipCard";
import Image from "../assets/1.jpeg";
import Image1 from "../assets/about1.jpg";

const styles = `
.perspective {
  perspective: 1000px;
}
.preserve-3d {
  transform-style: preserve-3d;
}
.backface-hidden {
  backface-visibility: hidden;
}
`;

const WhyChooseUs = () => {
  return (
    <>
      {/* Inject extra styles */}
      <style>{styles}</style>

      <section className="bg-gray-100 py-16 px-4">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose Us?
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto my-4 rounded"></div>
          <p className="text-gray-600">
            Accomplished in developing scalable solutions that employ resilient,
            enriched, and futuristic platforms
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Card 1 */}
          <FlipCard
            bgImage={Image}
            frontContent={
              <div className="text-center p-4 bg-black/50 w-full h-full flex flex-col justify-center">
                <h3 className="text-2xl font-semibold mb-2">
                  Highly Skilled Engineers
                </h3>
                <p className="text-sm">Proactive NOC/SOC</p>
              </div>
            }
            backContent={
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">More Info</h3>
                <p className="text-sm">Our engineers are certified experts.</p>
              </div>
            }
          />

          {/* Card 2 */}
          <FlipCard
            className="bg-red-700"
            frontContent={
              <div className="text-center p-6">
                <h3 className="text-2xl font-semibold mb-2">
                  Strong Vendor Partnerships
                </h3>
                <p className="text-sm">
                  Vendor Accreditation & Certifications
                </p>
              </div>
            }
            backContent={
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Details</h3>
                <p className="text-sm">Trusted partnerships worldwide.</p>
              </div>
            }
          />

          {/* Card 3 */}
          <FlipCard
            frontContent={
              <div className="w-full h-full flex flex-col justify-end bg-black/60 p-6 text-center">
                <h3 className="text-2xl font-semibold mb-2">
                  Productivity Improvement
                </h3>
                <p className="text-sm">Optimize IT Infrastructure</p>
              </div>
            }
            backContent={
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Insight</h3>
                <p className="text-sm">
                  Helping you achieve better efficiency.
                </p>
              </div>
            }
            bgImage={Image1}
          />

          {/* Card 4 */}
          <FlipCard
            className="bg-red-700"
            frontContent={
              <div className="text-center p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Rich Customer Portfolio
                </h3>
                <p className="text-sm">
                  Highest levels of Quality, Service & Value
                </p>
              </div>
            }
            backContent={
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Clients</h3>
                <p className="text-sm">
                  Trusted by leading global enterprises.
                </p>
              </div>
            }
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <button className="bg-red-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-800 transition">
            DOWNLOAD OUR BROCHURE
          </button>
          <button className="bg-red-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-800 transition">
            VIEW OUR COMPANY PROFILE
          </button>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
