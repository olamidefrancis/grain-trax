import './About.css';


import React from "react";

const AboutUs = () => {
  const stats = [
    { value: "Agricultural Tractors & Machinery", text:<p>
                                            We are committed to empowering agriculture by delivering reliable,
                                            fuel-efficient machinery for farmers and agricultural enterprises.
                                  
                                              Our <span class="em">tractors and farm implements</span> are built for performance,
                                              efficiency, and durability, suitable for <span class="em">Africa’s varied terrain</span>
                                              and <span class="em">Europe’s high production standards</span>.
                                          </p>
                                          
    },
    { value: "Precious Metals", 
      text: <p>
                <span class="em">Grain &amp; Trax inc</span> supplies high-quality, ethically sourced
                <span class="em">precious metals</span> to clients in manufacturing, jewelry,
                 and investment sectors.
                   We ensure compliance with <span class="em">OECD Due Diligence Guidance</span> and
                  maintain transparent, responsible sourcing chains.
                  </p>


    },
    { value: "Medical Equipment & Accessories",
      text: <p>
                  At <span class="em">Grain &amp; Trax inc</span>, we specialize in sourcing and supplying
                  <span class="em">medical devices, accessories, and consumables</span> for healthcare
                  providers, NGOs, and government institutions.
                          
                  Our products meet international standards (<span class="em">ISO, CE, WHO</span>) and are
                  designed for both modern hospitals and field clinics across <span class="em">Africa and Europe</span>.
                  </p> 
    
    }
  ];



  const links = [
    { label: "Financial institutions", href: "#" },
    { label: "Jewellers and refiners", href: "#" },
    { label: "Industrial manufacturers", href: "#" },
    { label: "Private investors and collectors", href: "#" },
    
  ];

  return (
    <section className="bg-[#022b49] text-white min-h-screen w-full flex items-center justify-center px-4 sm:px-4 lg:px-16">
      <div className="w-full min-h-screen flex flex-col md:flex-row justify-center md:justify-between items-center md:items-stretch  max-w-[1600px] mx-auto  bg-gray-800 p-4 ">
        {/* Left section */}
        <div className="flex-1 flex flex-col justify-center items-center text-center md:text-left 
                 max-[500px]:h-fit max-[500px]:p-12 paddyyy ">

          <h2 className="text-3xl md:text-5xl font-bold leading-snug mb-4">
            Who we serve ?{" "}
            <span className="text-teal-400"> All you need to know</span>{" "}
            
          </h2>
          <p className="text-gray-300 mb-6 text-base md:text-xl max-w-xl mx-auto md:mx-0">
            Our expert guidance and tools enable faster, smarter decisions and
            stronger performance on an organization’s mission-critical priorities.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mt-6">
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="text-teal-400 hover:underline text-xl md:text-2xl"
              >
                {link.label} 
              </a>
            ))}
          </div>
        </div>

        {/* Right section */}
        <div className="flex-1 flex flex-col gap-y-6 items-center justify-center  min-h-screen text-center md:text-left padds  max-[500px]:justify-start   ">
          <h1 className=" text-3xl md:text-4xl font-bold  text-gray-300 mb-6">
            About GrainTraxs
          </h1>
          <div className="grid sm:grid-cols-2 gap-8">
                {stats.map((item, i) => (
                  <div className=' flex flex-col  gap-y-4 p-1' key={i}>
                      <p className="text-3xl md:text-4xl font-bold text-teal-400 mb-2">
                        {item.value}
                      </p>
                      <p className="text-gray-300 text-l md:text-xl">
                        {item.text}
                      </p>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
