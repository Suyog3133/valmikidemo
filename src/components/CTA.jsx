// (CTA.jsx content as provided in the previous absolute final step)
import React from "react";

const MailIcon = () => (
    <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.893 3.947L21 8"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 8v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8"></path>
    </svg>
);

const CTA = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6"> 
        <div className="bg-[#1C7FBC] text-white py-10 px-16 rounded-xl shadow-2xl flex justify-between items-center">
          <div className="text-left w-1/2 pr-10">
            <h3 className="text-3xl font-bold leading-tight">
              TAKE THE FIRST STEP TOWARDS YOUR <br /> BRIGHT FUTURE
            </h3>
            <p className="mt-2 text-white text-sm font-light">
              Be the first to know about admissions, academic programs, events, and achievements.
            </p>
          </div>

          <div className="w-1/2 pl-10 flex flex-col items-center">
            <div className="w-full max-w-sm"> 
              <div className="relative flex items-center bg-white rounded-full overflow-hidden h-9">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="pl-9 py-1 text-black flex-grow focus:outline-none placeholder-gray-400 text-sm"
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
                    <MailIcon />
                </span>
                <button className="px-5 py-1 bg-[#007BFF] text-white hover:bg-blue-600 font-semibold text-sm rounded-full h-full flex items-center justify-center whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <p className="mt-3 text-[10px] text-white w-full text-center leading-relaxed">
                  Join our mailing list today and receive updates that help you stay informed about your child's future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;