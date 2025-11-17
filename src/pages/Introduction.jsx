import React from "react";
import { CheckBadgeIcon } from '@heroicons/react/24/solid'; 

import banner from "../assets/cover_valmiki.png"; 
import officeImg from "../assets/valmikibuilding.png"; 
import buildingImg from "../assets/valmiki.jpg"; 
import VisionMissionSection from "../components/VisionMissionSection"; 
import CTA from "../components/CTA"; 

const stats = [
  { value: "15+", label: "Years of Trust & Legacy" },
  { value: "500+", label: "Students Graduated Annually" },
  { value: "95%", label: "A/A+ Grade Achievers" },
  { value: "40+", label: "Qualified Teaching Staff" },
];

const values = [
  { label: "Student-Centered Learning", color: "#3575b6" },
  { label: "Character & Leadership", color: "#CC0033" },
  { label: "Academic Rigor", color: "#3575b6" },
  { label: "Community Engagement", color: "#CC0033" },
  { label: "Integrity & Respect", color: "#3575b6" },
  { label: "Holistic Development", color: "#CC0033" },
];

const Introduction = () => {
  return (
    <>
      {/* Hero Section */}
      <header
        className="relative h-[270px] flex flex-col items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-0 bg-[#3575b6]/70"></div>
        <div className="relative z-10 text-white text-center pt-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Introduction</h1>
          <nav className="text-sm font-light">
            <a href="#" className="hover:underline">Home</a>
            <span className="mx-2">/</span>
            <a href="#" className="hover:underline">About Us</a>
          </nav>
        </div>
      </header>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">About Valmiki Shiksha Sadan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Valmiki Shiksha Sadan is committed to providing excellent academic and co-curricular programs to nurture responsible, global citizens.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Image - officeImg */}
          {/* Increased height with 'h-[400px]' and adjusted max-w for overall size */}
          <div className="relative mx-auto lg:mx-0 w-full max-w-md md:max-w-lg lg:max-w-xl h-[400px] md:h-[050px] lg:h-[400px]"> 
            <img
              src={officeImg}
              // Ensured image covers the new height
              className="w-full h-full object-cover rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300"
              alt="Valmiki Shiksha Sadan Campus"
            />
            {/* These overlays will still respect the image boundaries */}
            <div className="absolute top-5 right-5 bg-white text-blue-600 font-bold p-3 rounded-lg shadow-lg text-center text-sm">
              <span className="block text-2xl">20+</span>
              Years of Excellence
            </div>
            <div className="absolute bottom-5 left-5 bg-white text-blue-600 font-bold p-3 rounded-lg shadow-lg text-center text-sm">
              <span className="block text-2xl">100+</span>
              National Toppers
            </div>
          </div>

          {/* Right Text */}
          <div className="text-gray-700 leading-relaxed space-y-4 text-sm md:text-base">
            <p>
              <strong>Valmiki Shiksha Sadan</strong> is dedicated to transforming the potential of every student into success by providing expert education and holistic development. Established with a strong commitment to <strong>academic excellence and moral integrity</strong>, we have grown to become a cornerstone institution trusted by parents and students across the region.
            </p>
            <p>
              Located in a serene learning environment, Valmiki Shiksha Sadan offers comprehensive educational facilities from primary level up to higher secondary (+2) science and management. With decades of experience and a team of <strong>highly qualified educators</strong>, we ensure that every student receives the necessary guidance and resources tailored to their academic aspirations and personal growth.
            </p>
            <p>
              Our curriculum goes beyond textbooks, emphasizing <strong>critical thinking, leadership, and community service</strong>. We prepare students not just for exams, but for life, ensuring they emerge as confident, capable, and responsible citizens ready to face global challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Excellence Section */}
      <section className="max-w-7xl mx-auto px-6 pb-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ fontFamily: 'Oswald', color: '#172983' }}>
          Our Track Record of Academic Excellence
        </h2>
        <div className="relative w-full rounded-2xl overflow-hidden shadow-lg">
          <img src={banner} alt="Excellence Background" className="w-full h-auto object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex flex-col md:flex-row items-center justify-around text-white text-center p-8 md:p-12 space-y-4 md:space-y-0">
            {stats.map((stat, index) => (
              <div key={index}>
                <h3 className="text-4xl font-bold">{stat.value}</h3>
                <p className="text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-t border-gray-200 mx-6" />

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            <span className="text-[#CC0033]">OUR</span> CORE VALUES
          </h2>
          <p className="text-gray-600 text-sm">Nurturing Minds, Building Character, Inspiring Futures</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* buildingImg */}
          {/* Increased height with 'h-[400px]' and adjusted max-w for overall size */}
          <div className="mx-auto lg:mx-0 w-full max-w-md md:max-w-lg lg:max-w-xl h-[300px] md:h-[300px] lg:h-[300px]"> 
            <img
              src={buildingImg}
              // Ensured image covers the new height
              className="w-full h-full object-cover rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
              alt="Valmiki Shiksha Sadan School Building"
            />
          </div>

          <div>
            <p className="text-[#CC0033] text-sm font-semibold mb-2">Our Foundation</p>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Empowering Knowledge, <br />Building Character
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              At Valmiki Shiksha Sadan, our mission extends beyond academics. We are dedicated to instilling strong moral values and fostering a culture of curiosity and respect.
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm font-medium">
              {values.map((value, index) => (
                <p key={index} className="flex items-center text-gray-700">
                  {/* CheckBadgeIcon added here */}
                  <CheckBadgeIcon className="w-5 h-5 mr-2" style={{ color: value.color }} /> 
                  {value.label}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <div className="pb-20">
        <VisionMissionSection />
        
      </div>

      {/* CTA */}
      <CTA />
    </>
  );
};

export default Introduction;