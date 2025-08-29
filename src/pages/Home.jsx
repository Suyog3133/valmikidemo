import React from "react";
import { Target, Flag, BookOpen, Users, Award, Atom, Briefcase, Handshake, Shapes, Lightbulb } from "lucide-react"; // added icons
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";


import valmikibuilding from "../assets/valmikibuilding.png";
import graduation from "../assets/graduation.png";
import vector from "../assets/vector.png";
import aa from "../assets/aa.png";
import valmikicollegebuilding from "../assets/valmikicollegebuilding.jpg";

// NEW assets for the added section
import bell from "../assets/bell.png";
import tt from "../assets/tt.png";
import volunteer from "../assets/volunteer.png";
import corevalues from "../assets/corevalues.png"; 
import first from "../assets/first.png";
import second from "../assets/second.png";
import third from "../assets/third.png";
import forth from "../assets/forth.png";
import cloud from "../assets/cloud.png";


// ✅ Counter Box Component
const CounterBox = ({ end, label, suffix = "+" }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className="text-center text-white">
      <h3 className="text-4xl md:text-5xl font-bold">
        {inView && <CountUp end={end} duration={3} />} {suffix}
      </h3>
      <p className="mt-2 text-lg">{label}</p>
    </div>
  );
};

const Home = () => {
  return (
    <>
      {/* ====== HERO (unchanged except colors) ====== */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={valmikibuilding}
            alt="Valmiki Building"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-opacity-65"></div>
        </div>

        <div className="relative text-center text-white max-w-3xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F75BD]">
            VALMIKI SHIKSHA SADAN
          </h1>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3">
            Where Excellence Prevails
          </h2>
          <p className="mt-4 text-lg text-[#FCA61B] leading-relaxed">
            Since 1996, empowering students from Play Group to +2 with academic
            brilliance, holistic growth, and inclusive education.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="bg-[#0F75BD] hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg">
              Explore Our Streams
            </button>
            <button className="bg-[#007B19] hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg">
              Request Admission Info
            </button>
          </div>
        </div>
      </section>

      {/* ====== WAVE / CAP SECTION ====== */}
      <section className="relative isolate overflow-hidden bg-white">
        <div className="relative bg-[#0F75BD]">
          <div className="mx-auto max-w-7xl py-16 md:py-20 flex items-center justify-center">
            <img
              src={graduation}
              alt="Graduation Cap"
              className="w-24 md:w-32 object-contain drop-shadow"
            />
          </div>

          <div className="pointer-events-none absolute inset-0 opacity-90">
            <div className="absolute left-10 top-8">
              <div className="relative">
                <div className="w-24 h-8 bg-white rounded-full shadow-md"></div>
                <div className="w-8 h-8 bg-white rounded-full shadow-md absolute -top-3 left-3"></div>
                <div className="w-10 h-10 bg-white rounded-full shadow-md absolute -top-4 left-10"></div>
                <div className="w-7 h-7 bg-white rounded-full shadow-md absolute -top-2 left-18"></div>
              </div>
            </div>
            <div className="absolute right-10 top-10">
              <div className="relative">
                <div className="w-20 h-7 bg-white rounded-full shadow-md"></div>
                <div className="w-7 h-7 bg-white rounded-full shadow-md absolute -top-3 left-2"></div>
                <div className="w-8 h-8 bg-white rounded-full shadow-md absolute -top-4 left-9"></div>
              </div>
            </div>
          </div>

          <svg
            className="absolute -bottom-px left-0 w-full h-24 md:h-28"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              fill="#ffffff"
              d="M0,224 C160,176 320,96 480,96 C640,96 800,176 960,202.7 C1120,229.3 1280,213.3 1440,170.7 L1440,320 L0,320 Z"
            />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-24 md:pt-24 md:pb-28">
          <div className="flex justify-center">
            <div className="relative inline-block">
              <span className="absolute inset-0 translate-x-2 translate-y-2 rounded-full bg-black/10"></span>
              <button className="relative rounded-full px-10 md:px-12 py-4 md:py-5 bg-[#FCA61B] text-white font-semibold tracking-wide shadow-md">
                Join Us Now
              </button>
            </div>
          </div>

          <img
            className="hidden sm:block pointer-events-none select-none absolute left-4 bottom-2 w-28 md:w-36"
            src="https://openclipart.org/download/194824/kid-jump.svg"
            alt="Kid jumping (left)"
          />
          <img
            className="hidden sm:block pointer-events-none select-none absolute right-4 bottom-2 w-28 md:w-36"
            src="https://openclipart.org/download/204130/jumping-girl.svg"
            alt="Kid jumping (right)"
          />
        </div>
      </section>

      {/* ====== VISION & MISSION SECTION ====== */}
      <section className="relative bg-white py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F75BD]">
            Our Vision & Mission
          </h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Founded in 1996 (2053 B.S.), Valmiki Shiksha Sadan (VSS) has grown
            into one of Chitwan’s most trusted institutions for quality
            education. With over two decades of consistent results and
            innovation, VSS is recognized as a hub for academic excellence and
            holistic development.
          </p>
        </div>

        <div className="relative mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Vision Card */}
          <div className="group bg-white shadow-lg rounded-2xl p-8 transition hover:bg-[#0F75BD]">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#0F75BD] text-white group-hover:bg-white group-hover:text-[#0F75BD] transition mb-6">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-[#0F75BD] group-hover:text-white">
              Vision
            </h3>
            <p className="mt-3 text-gray-600 group-hover:text-gray-200">
              To be the first choice for guardians and students seeking academic
              excellence and all-round personal growth.
            </p>
            <button className="mt-6 bg-[#FCA61B] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-yellow-600 transition">
              Learn More
            </button>
          </div>

          {/* Mission Card */}
          <div className="group bg-white shadow-lg rounded-2xl p-8 transition hover:bg-[#0F75BD]">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#0F75BD] text-white group-hover:bg-white group-hover:text-[#0F75BD] transition mb-6">
              <Flag className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-[#0F75BD] group-hover:text-white">
              Mission
            </h3>
            <p className="mt-3 text-gray-600 group-hover:text-gray-200">
              To nurture well-rounded learners through experienced educators,
              modern facilities, and a value-driven ethos that prepares students
              for future challenges.
            </p>
            <button className="mt-6 bg-[#FCA61B] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-yellow-600 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Decorative Images */}
        <img
          src={aa}
          alt="A+ logo"
          className="absolute bottom-10 left-10 w-20 opacity-80"
        />
        <img
          src={vector}
          alt="Vector design"
          className="absolute top-1/2 right-5 w-28 opacity-80"
        />
      </section>

      {/* ====== COUNTER SECTION ====== */}
      <section className="relative py-20 px-6">
        <div className="relative max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-lg">
          {/* Background Image with Overlay */}
          <img
            src={valmikicollegebuilding}
            alt="Valmiki College Building"
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute inset-0 bg-[#0F75BD] opacity-90"></div>

          {/* Content */}
          <div className="relative px-6 py-12 md:py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/30 text-center text-white">
              <CounterBox end={5000} label="Students Enrolled" />
              <CounterBox end={800} label="Lecturers" suffix="" />
              <CounterBox end={18} label="Programs" />
              <CounterBox end={600} label="Graduated" />
            </div>
          </div>
        </div>
      </section>

      {/* ====== OUR PROGRAMS / STREAMS SECTION ====== */}
      <section className="relative bg-white py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F75BD]">
            Our Programs
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            At Valmiki Shiksha Sadan, we offer a range of programs designed to
            meet the academic needs of students from early years to higher
            secondary education.
          </p>
        </div>

        <div className="relative mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Early Childhood - Grade 10 */}
          <div className="group bg-white shadow-lg rounded-2xl p-8 transition hover:bg-[#0F75BD]">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#0F75BD] text-white group-hover:bg-white group-hover:text-[#0F75BD] transition mb-6">
              <BookOpen className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-[#0F75BD] group-hover:text-white">
              Early Childhood – Grade 10
            </h3>
            <p className="mt-3 text-gray-600 group-hover:text-gray-200">
              A solid foundation with modern teaching methods, nurturing
              creativity, discipline, and holistic development from the early
              years up to secondary level.
            </p>
            <button className="mt-6 bg-[#FCA61B] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-yellow-600 transition">
              Learn More
            </button>
          </div>

          {/* +2 Science */}
          <div className="group bg-white shadow-lg rounded-2xl p-8 transition hover:bg-[#0F75BD]">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#0F75BD] text-white group-hover:bg-white group-hover:text-[#0F75BD] transition mb-6">
              <Atom className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-[#0F75BD] group-hover:text-white">
              +2 Science
            </h3>
            <p className="mt-3 text-gray-600 group-hover:text-gray-200">
              Designed for students aiming to pursue careers in medicine,
              engineering, IT, and applied sciences, supported by experienced
              faculty and modern labs.
            </p>
            <button className="mt-6 bg-[#FCA61B] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-yellow-600 transition">
              Learn More
            </button>
          </div>

          {/* +2 Management */}
          <div className="group bg-white shadow-lg rounded-2xl p-8 transition hover:bg-[#0F75BD]">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#0F75BD] text-white group-hover:bg-white group-hover:text-[#0F75BD] transition mb-6">
              <Briefcase className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-[#0F75BD] group-hover:text-white">
              +2 Management
            </h3>
            <p className="mt-3 text-gray-600 group-hover:text-gray-200">
              Equipping students with business, leadership, and management
              skills, preparing them for careers in commerce, entrepreneurship,
              and administration.
            </p>
            <button className="mt-6 bg-[#FCA61B] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-yellow-600 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* ====== WELL-BALANCED WELL-BEING SECTION (NEW) ====== */}
<section className="relative bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
  {/* Side decorative icons */}
  <img
    src={bell}
    alt="Bell"
    className="pointer-events-none select-none absolute -top-2 left-6 w-14 md:w-16"
    style={{ filter: "hue-rotate(330deg) saturate(1.2) brightness(1)" }} // keeps it warm/yellow
  />
  <img
    src={tt}
    alt="Top Right Icon"
    className="pointer-events-none select-none absolute -top-3 right-8 w-14 md:w-16"
  />
  <img
    src={graduation}
    alt="Graduation Icon"
    className="pointer-events-none select-none hidden md:block absolute top-1/2 -translate-y-1/2 right-6 w-28 opacity-80"
  />

  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F75BD]">
      Well-Balanced Well-Being
    </h2>
    <p className="mt-4 text-gray-600 leading-relaxed">
      You are no one thing. Here, we make balance a priority so you can bring your full self to every
      opportunity. Because when you are happy and fulfilled, you are the best version of yourself and bring
      out the best in everyone.
    </p>
  </div>

  {/* Tabs */}
  <div className="mt-8 flex items-center justify-center gap-10 text-[#0F75BD]">
    <button className="underline underline-offset-4">Student Life</button>
    <button className="hover:underline underline-offset-4">Leadership</button>
    <button className="hover:underline underline-offset-4">Athletics</button>
    <button className="hover:underline underline-offset-4">Travel</button>
  </div>

  {/* Cards Row */}
  <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
    {/* Card 1 */}
    <div className="rounded-2xl overflow-hidden shadow-md group hover:shadow-xl hover:shadow-blue-200 transition duration-500">
      <div className="relative overflow-hidden">
        <img
          src={volunteer}
          alt="Volunteer"
          className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-500 ease-in-out"
        />
        <div className="absolute bottom-4 left-4 bg-[#0F75BD] text-white text-sm px-4 py-2 rounded transform group-hover:translate-y-[-8px] transition duration-500">
          Healthy Connections
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="rounded-2xl overflow-hidden shadow-md group hover:shadow-xl hover:shadow-blue-200 transition duration-500">
      <div className="relative overflow-hidden">
        <img
          src={volunteer}
          alt="Volunteer"
          className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-500 ease-in-out"
        />
        <div className="absolute bottom-4 left-4 bg-[#0F75BD] text-white text-sm px-4 py-2 rounded transform group-hover:translate-y-[-8px] transition duration-500">
          A Vibrant Community
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="rounded-2xl overflow-hidden shadow-md group hover:shadow-xl hover:shadow-blue-200 transition duration-500">
      <div className="relative overflow-hidden">
        <img
          src={volunteer}
          alt="Volunteer"
          className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-500 ease-in-out"
        />
        <div className="absolute bottom-4 left-4 bg-[#0F75BD] text-white text-sm px-4 py-2 rounded transform group-hover:translate-y-[-8px] transition duration-500">
          Try Something New
        </div>
      </div>
    </div>
  </div>
</section>

<section className="bg-white py-20">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 md:px-12">
    {/* Left - Image */}
    <div data-aos="fade-right" className="flex justify-center">
      <img
        src={corevalues}
        alt="Core Values"
        className="rounded-lg shadow-lg w-full max-w-md"
      />
    </div>

    {/* Right - Content */}
    <div data-aos="fade-left" className="space-y-8">
      <div>
        <p className="text-[#0F75BD] font-semibold uppercase tracking-wider">
          Our Values
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          The Core Values That <br /> Shapes Us
        </h2>
      </div>

      {/* Excellence */}
      <div className="flex items-start gap-4">
        <div className="bg-gray-100 p-3 rounded-full transition-all duration-300 hover:bg-[#0F75BD]/10 hover:scale-110 hover:shadow-lg">
          <Handshake className="text-[#0F75BD] w-7 h-7" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">Excellence</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Pursuing the highest standards in education and research
            with our cutting-edge technology and expert lectures.
          </p>
        </div>
      </div>

      {/* Diversity */}
      <div className="flex items-start gap-4">
        <div className="bg-gray-100 p-3 rounded-full transition-all duration-300 hover:bg-[#0F75BD]/10 hover:scale-110 hover:shadow-lg">
          <Shapes className="text-[#0F75BD] w-7 h-7" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">Diversity</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Fostering inclusively, celebrating differences, and respecting
            worldwide cultures in and beyond the academic ground.
          </p>
        </div>
      </div>

      {/* Innovation */}
      <div className="flex items-start gap-4">
        <div className="bg-gray-100 p-3 rounded-full transition-all duration-300 hover:bg-[#0F75BD]/10 hover:scale-110 hover:shadow-lg">
          <Lightbulb className="text-[#0F75BD] w-7 h-7" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">Innovation</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Encouraging creativity and pursuing boundaries within the campus
            by giving them the best environment for ideas.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ================== NEWS UPDATES SECTION ================== */}
<section className="bg-white py-20">
  <div className="container mx-auto px-6 md:px-12">
    {/* Header */}
    <div className="flex justify-between items-center mb-10">
      <div>
        <p className="text-[#0F75BD] font-semibold uppercase tracking-wider">
          News Updates
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
          Latest News <br /> About Us
        </h2>
      </div>
      <button className="bg-[#0F75BD] text-white px-6 py-2 rounded-md shadow transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        See More Articles
      </button>
    </div>

    {/* News Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Card 1 */}
      <div className="bg-white rounded-xl shadow overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
        <img src={first} alt="News 1" className="w-full h-52 object-cover" />
        <div className="p-5">
          <h3 className="font-semibold text-gray-800 text-lg">
            VSS Students Shine in SEE Results 2081
          </h3>
          <p className="text-gray-600 text-sm mt-2">
            Our Grade 10 students have achieved outstanding results in the SEE exams ...
          </p>
          <div className="mt-4 flex justify-between items-center text-sm">
            <a href="#" className="text-[#0F75BD] font-medium hover:underline flex items-center gap-1">
              Learn More →
            </a>
            <span className="text-gray-500">September 2024</span>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-xl shadow overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
        <img src={second} alt="News 2" className="w-full h-52 object-cover" />
        <div className="p-5">
          <h3 className="font-semibold text-gray-800 text-lg">
            Admission Open for Academic Session 2082 (2025/26)
          </h3>
          <p className="text-gray-600 text-sm mt-2">
            VSS announces admissions open for Grade 12 (+2 in Science,...
          </p>
          <div className="mt-4 flex justify-between items-center text-sm">
            <a href="#" className="text-[#0F75BD] font-medium hover:underline flex items-center gap-1">
              Learn More →
            </a>
            <span className="text-gray-500">September 2024</span>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-xl shadow overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
        <img src={third} alt="News 3" className="w-full h-52 object-cover" />
        <div className="p-5">
          <h3 className="font-semibold text-gray-800 text-lg">
            Inter-School Science & Innovation Fair 2025
          </h3>
          <p className="text-gray-600 text-sm mt-2">
            We proudly hosted the annual Science & Innovation Fair, in...
          </p>
          <div className="mt-4 flex justify-between items-center text-sm">
            <a href="#" className="text-[#0F75BD] font-medium hover:underline flex items-center gap-1">
              Learn More →
            </a>
            <span className="text-gray-500">September 2024</span>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="bg-white rounded-xl shadow overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
        <img src={forth} alt="News 4" className="w-full h-52 object-cover" />
        <div className="p-5">
          <h3 className="font-semibold text-gray-800 text-lg">
            Teachers’ Training & Development Workshop
          </h3>
          <p className="text-gray-600 text-sm mt-2">
            To ensure academic excellence, VSS recently conducted a ...
          </p>
          <div className="mt-4 flex justify-between items-center text-sm">
            <a href="#" className="text-[#0F75BD] font-medium hover:underline flex items-center gap-1">
              Learn More →
            </a>
            <span className="text-gray-500">September 2024</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


{/* ================== SUBSCRIBE SECTION ================== */}
<section className="relative py-20 px-6">
  <div className="relative max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-lg bg-[#0F75BD]">
    {/* Clouds */}
    <img
      src={cloud}
      alt="cloud"
      className="absolute top-6 left-10 w-20 opacity-70 animate-floatRight" // 👈 custom animation
    />
    <img
      src={cloud}
      alt="cloud"
      className="absolute bottom-10 right-16 w-24 opacity-60 animate-pulse"
    />
    <img
      src={cloud}
      alt="cloud"
      className="absolute top-1/2 left-1/4 w-16 opacity-50 animate-bounce-slow"
    />

    {/* Content */}
    <div className="relative px-6 py-12 md:py-20 text-center text-white z-10">
      <h2 className="text-2xl md:text-4xl font-bold mb-4">
        Take The First Step Towards Your Bright Future
      </h2>
      <p className="mb-8 text-gray-100 max-w-2xl mx-auto">
        Be the first to know about admissions, academic programs, events, and achievements.
      </p>

      {/* Subscribe Form */}
      <form className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-3xl mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full md:flex-1 px-5 py-3 rounded-lg bg-white text-black shadow focus:outline-none focus:ring-2 focus:ring-white transition"
        />
        <button
          type="submit"
          className="bg-white text-[#0F75BD] px-8 py-3 rounded-lg font-semibold shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
        >
          Subscribe
        </button>
      </form>

      <p className="mt-6 text-sm text-gray-200 opacity-90 max-w-2xl mx-auto">
        Join our mailing list today and receive updates that help you stay informed about your child's future.
      </p>
    </div>
  </div>
</section>







    </>
  );
};

export default Home;
