import React from "react";
import checkmark from "../../assets/checkmark.svg";
import { frontend_data, backend_data } from "../../assets/services_data";

const Services = () => {
  return (
    <section
      id="experience"
      className="py-16 px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto text-white"
    >
      {/* Section Header */}
      <div className="text-left md:text-center mb-12">
        <p className="text-lg font-semibold text-gray-400">Explore My</p>
        <h2 className="text-4xl font-bold text-white">
          Experience
        </h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Frontend Development */}
        <div className="bg-[#1f1f1f] p-8 rounded-3xl border border-gray-700 shadow-md">
          <h3 className="text-2xl font-semibold text-center mb-6 text-gray-300">
            Frontend Development
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {frontend_data.map((item, index) => (
              <article
                key={index}
                className="flex items-start gap-4 p-3 bg-[#2a2a2a] rounded-xl hover:shadow-lg transition-all"
              >
                <img
                  src={checkmark}
                  alt="Checkmark"
                  className="w-5 h-5 mt-1"
                />
                <div>
                  <h4 className="text-lg font-medium">{item.s_name}</h4>
                  <p className="text-sm text-gray-400">{item.s_type}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Backend Development */}
        <div className="bg-[#1f1f1f] p-8 rounded-3xl border border-gray-700 shadow-md">
          <h3 className="text-2xl font-semibold text-center mb-6 text-gray-300">
            Backend Development
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {backend_data.map((item, index) => (
              <article
                key={index}
                className="flex items-start gap-4 p-3 bg-[#2a2a2a] rounded-xl hover:shadow-lg transition-all"
              >
                <img
                  src={checkmark}
                  alt="Checkmark"
                  className="w-5 h-5 mt-1"
                />
                <div>
                  <h4 className="text-lg font-medium">{item.s_name}</h4>
                  <p className="text-sm text-gray-400">{item.s_type}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
