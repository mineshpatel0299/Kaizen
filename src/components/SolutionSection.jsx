import React from "react";

export default function SolutionSection({
  title,
  description,
  features,
  image,
  reverse,
}) {
  return (
    <section className="py-10">
      <div
        className={`container mx-auto flex flex-col shadow-2xl rounded-2xl  ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } items-center gap-12 px-8`}
      >
        {/* Text Content */}
        <div className="flex-1 ">
          <h2 className="text-2xl font-bold text-[#B81616] mb-4">{title}</h2>
          <p className="text-black mb-8">{description}</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feat, i) => (
              <div key={i}>
                <div className="flex items-center gap-2 mb-2 text-black">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#B81616] text-white rounded-full">
                    {feat.icon}
                  </div>
                  <h3 className="font-semibold text-[#B81616]">{feat.title}</h3>
                </div>
                <p className="text-sm text-black">{feat.text}</p>
                <button className="mt-3 text-black border border-[#B81616] px-3 py-1 rounded hover:bg-[#B81616] hover:text-white transition">
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="flex-1">
          <img
            src={image}
            alt={title}
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
