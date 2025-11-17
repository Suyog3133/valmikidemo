import React from "react";

// Ensure these paths are correct for your project structure
import banner from "../assets/banner.png";
import principalImg from "../assets/principal.png";
import CTA from "../components/CTA";

const Principal = () => {
  return (
    <>
      {/* Hero Section (Unchanged) */}
      <section
        className="relative h-[270px] flex flex-col items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-0 bg-[#3575b6]/70"></div>

        <div className="relative z-10 text-white text-center pt-8">
          <h1 className="text-4xl font-bold mb-3">Message from Principal</h1>
          <div className="text-sm font-light">
            <a href="#" className="text-white hover:underline">
              Home
            </a>
            <span className="mx-2">/</span>
            <a href="#" className="text-white hover:underline">
              About Us
            </a>
            <span className="mx-2">/</span>
            <span className="font-medium text-white">
              Message from Principal
            </span>
          </div>
        </div>
      </section>

      {/* Main Title Section (Unchanged) */}
      <div className="max-w-6xl mx-auto px-6 mt-20 mb-12">
        <h2 className="text-4xl font-light text-center">
          <span className="text-[#3575b6] font-bold">Message from the</span>
          <span className="text-[#CC0033] font-bold"> Principal</span> 
        </h2>
      </div>

      {/* Main Content - Two Column Layout */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column - Principal Photo */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="w-[280px] relative mb-12 lg:mb-0">
              <img
                src={principalImg}
                className="w-full h-[350px] object-cover rounded-2xl relative z-0"
                alt="Principal"
              />

              {/* NAME CARD - Smaller and Overlapping */}
              <div
                // Reduced padding (px-3 py-2) and width (w-[220px])
                className="absolute left-1/2 -translate-x-1/2 px-3 py-2 text-center rounded-lg w-[150px] z-10"
                style={{
                  bottom: "-30px",
                  background: "#FFFFFF",
                  boxShadow: "0 4px 12px rgba(255,255,255,0.15)",
                }}
              >
                {/* Reduced font sizes */}
                <p className="font-semibold text-sm text-gray-800">
                  Pradip Poudel
                </p>
                <p className="text-[#CC0033] text-xs font-semibold uppercase mt-1">
                  Principal
                </p>
                <p className="text-[#3575b6] text-[10px] tracking-wider uppercase mt-1">
                  VALMIKI SHIKSHA SADAN
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Text Content (Text Justified) */}
          {/* Added text-justify class here */}
          <div className="lg:col-span-8 text-[#666666] leading-relaxed text-[15px] text-justify">
            <p>
              VALMIKI SHIKSHA SADAN, a flourishing academic institution,
              established in 2053 B.S., by a determined effort of a perpetuity
              educators group; an experienced team of academicians who have a long
              history in academia and administration. The group is highly
              committed for quality of education to carry a deep-seated change in
              the field of academia. Valmiki has played a distinguished role in
              enhancing academic structure of Nepal since its inception in the year
              2053 BS and it has been leading in providing the best education. Now,
              it has become the platform for the students to best their academic
              excellence and bright future.
            </p>

            <p className="mt-4">
              The school has upgraded to higher secondary level (+2 level) since
              2069 BS with the competent and highly academic team serving in 12
              and university levels. Our students have gone forth and excelled in
              various fields. We have been successful to make history by securing
              the best result at both district and national levels.
            </p>

            <p className="mt-4">
              We welcome all the well wishers and prospective students to our
              premises. We expect your sincere co-operation in the days to come as
              in the previous years.
            </p>

            <p className="mt-6 text-[#999999] font-normal">Thank you.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </>
  );
};

export default Principal;