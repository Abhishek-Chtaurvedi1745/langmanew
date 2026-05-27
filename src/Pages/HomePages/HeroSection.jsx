import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Helmet } from "react-helmet-async";
import "swiper/css";
import { Search, Play } from "lucide-react";
import StatsCards from "./StatsCards";
import GlobalOpportunity from "./GlobalOpportunity";
import GlobalPlacement from "./GlobalPlacement";
import { useEffect } from "react";
import StudyAbroad from "./StudyAbroad";
import ExperienceSection from "./ExperienceSection";
import AboutSection from "./AboutSection";
import PopularCourses from "./PopularCourses";
import PopupForm from "./PopupForm";
import StudyDestinations from "./StudyDestinations";
import BlogSection from "./BlogSection";
import LangmaSection from "./LangmaSection";
import FAQ from "./FAQ";
import ContactForm from "./ContactForm";
import InvestmentOption from "../../Components/InvestmentPage/InvestmentOption";
import { Link } from "react-router-dom";

const destinations = [
  { name: "Kingdom of Saudi Arabia", flag: "https://flagcdn.com/w320/sa.png", link: "/" },
  { name: "Israel", flag: "https://flagcdn.com/w320/il.png", link: "/" },
  { name: "Qatar", flag: "/langma/images/qt1.jpg", link: "/" },
  { name: "Australia", flag: "/langma/images/ast.jpg", link: "/" },
  { name: "Germany", flag: "https://flagcdn.com/w320/de.png", link: "/" },
  { name: "Japan", flag: "https://flagcdn.com/w320/jp.png", link: "/" },
  { name: "Mauritius", flag: "https://flagcdn.com/w320/mu.png", link: "/" },
  { name: "Austria", flag: "https://flagcdn.com/w320/at.png", link: "/" },
  { name: "United Arab Emirates", flag: "/langma/images/ua.jpg", link: "/" },
  { name: "Bahrain", flag: "https://flagcdn.com/w320/bh.png", link: "/" },
  { name: "United Kingdom", flag: "/langma/images/amm.jpg", link: "/" },
  { name: "Oman", flag: "/langma/images/omn.jpg", link: "/" },
  { name: "Kuwait", flag: "/langma/images/kw.jpg", link: "/" },
  { name: "France", flag: "https://flagcdn.com/w320/fr.png", link: "/" },
  { name: "Italy", flag: "https://flagcdn.com/w320/it.png", link: "/" },
  { name: "Jordan", flag: "/langma/images/jd.jpg", link: "/" },
  { name: "Portugal", flag: "https://flagcdn.com/w320/pt.png", link: "/" },
  { name: "Taiwan", flag: "https://flagcdn.com/w320/tw.png", link: "/" },
  { name: "Poland", flag: "https://flagcdn.com/w320/pl.png", link: "/poland" },
];


const HeroSection = () => {
const [playVideo, setPlayVideo] = useState(false);
  const [apiData, setApiData] = useState(null);
const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  // const [playVideo, setPlayVideo] = useState(false);

  const videoId = "wToP5K9CNF8";

  const overlayImages = [
    "/langma/images/overlay1.png",
    "/langma/images/overlay2.png",
    "/langma/images/overlay3.png",
  ];

  useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await fetch("https://langmainternational.com/api/home");
      const data = await res.json();

      setApiData(data);
    } catch (error) {
      console.log("API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, []);

// if (loading) return <h2>Loading...</h2>;
// if (!apiData || !apiData.status) return <h2>API Failed</h2>;

  const randomImage =
    overlayImages[Math.floor(Math.random() * overlayImages.length)];

    
    if (loading) return <h2 >Loading...</h2>;
if (!apiData || !apiData.status) return <h2>API Failed</h2>;

if (loading) {
  return (
    <div className="h-screen flex justify-center items-center">
      <h2>Loading...</h2>
    </div>
  );
}

if (!apiData || !apiData.status) {
  return (
    <div className="h-screen flex justify-center items-center">
      <h2>API Failed</h2>
    </div>
  );
}

  return (
    <>
      <Helmet>
      <title>Foreign Language Courses, Foreign Language Classes, Study Abroad, Work Abroad Delhi, India</title>
<meta name="description" content="Langma International offers foreign language courses, international language training, study abroad, work abroad, PR by investment, foreign language classes Delhi NCR, India."></meta>
    </Helmet>
      <section className="w-full bg-white py-8  relative">
        <div className="max-w-7xl mx-auto px-4 grid gap-10 lg:grid-cols-2 items-center relative">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left z-10">
            <span className="inline-block bg-[#E6F8F3] text-[#2FC7A1] px-3 py-1 rounded-sm text-[11px]">
              Learn & Get Certificates
            </span>

            <h1 className="mt-4 font-bold text-[#15224C] leading-tight text-[28px] sm:text-[36px] lg:text-[48px]">
              Langma international- {" "}
              <span className="relative inline-block">
                <span className="bg-yellow-300 px-2 rounded-md">Where Education, Employment</span>
               <img
  src="/langma/images/Journyicon.png"
  alt=""
  className="absolute left-[95%] sm:left-[82%] lg:left-[76%] -top-10 sm:-top-12 lg:-top-17 w-8 sm:w-10 lg:w-12"
/>
              </span>
              <br />
              and Investment create  <span className="text-[#4FA3D1]">Global Futures.</span>
              <br />
              <span className="text-[#4FA3D1]">Wellness & Beyond</span>
            </h1>
            {/* <div className="mt-6 mx-auto lg:mx-0 flex items-center bg-white shadow-md rounded-full w-full max-w-md xl:max-w-lg px-4 py-2">
              <div className="relative">
                <button
                  onClick={() => setOpen(!open)}
                  className="text-gray-600 text-sm flex items-center gap-1"
                >
                  Categories ▾
                </button>
                {open && (
                  <div className="absolute mt-2 bg-white shadow-lg rounded-lg w-44 py-2 z-50">
                    {[
                      "Language Courses",
                      "Study Abroad",
                      "Work Abroad",
                      "Global Placement",
                    ].map((item) => (
                      <p
                        key={item}
                        className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                )}
              </div>

              <div className="h-5 w-px bg-gray-300 mx-3"></div>

              <input
                type="text"
                placeholder="Search For Course..."
                className="flex-1 outline-none text-[13px] sm:text-sm"
              />
              <button className="bg-[#2FC7A1] p-2 rounded-full">
                <Search size={16} color="white" />
              </button>
            </div> */}

            {/* CTA BUTTON */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
  <button onClick={() => setOpen(!open)} className="bg-[#0A6B64] text-white px-6 py-3 rounded-full text-sm sm:text-base font-medium shadow-md cursor-pointer">
    Let's Connect →
  </button>
  <button onClick={() => setOpen(!open)} className="bg-[#4FA3D1] text-white px-6 py-3 rounded-full text-sm sm:text-base font-medium shadow-md cursor-pointer">
    Book Instant Online Counselling
  </button>
</div>

          </div>

          {/* RIGHT VIDEO */}
          <div className="relative  lg:justify-end">
  <div className="relative border-2 border-[#333931] rounded-[26px] p-2">

    {/* VIDEO CONTAINER */}
    <div className="relative w-full h-[333px] rounded-2xl overflow-hidden bg-black mx-auto">

  <video
  controls
  playsInline
  autoPlay
  preload="metadata"
  className="w-full h-full object-cover"
>
  <source
    src="https://res.cloudinary.com/dzv9zcrlz/video/upload/q_auto/f_auto/v1779520185/Website_Final_Video_Updated_01_f4npde.mp4"
    type="video/mp4"
  />
</video>

</div>

    {/* STUDENT BADGE */}
    <div className="absolute -top-10 left-0 bg-white shadow-md px-3 py-4 rounded-[30px] flex items-center gap-2 text-xs sm:text-sm lg:text-base">
      <span className="font-semibold text-[#704FE6] text-[18px]">200k+</span>
      <span className="text-[#17254E] text-[18px]">Student</span>

      <div className="flex -space-x-2">
        <img
          src="https://i.pravatar.cc/40?img=1"
          alt="Avatar 1"
          className="w-6 h-6 rounded-full object-cover border-2 border-white"
        />
        <img
          src="https://i.pravatar.cc/40?img=2"
          alt="Avatar 2"
          className="w-6 h-6 rounded-full object-cover border-2 border-white"
        />
        <img
          src="https://i.pravatar.cc/40?img=3"
          alt="Avatar 3"
          className="w-6 h-6 rounded-full object-cover border-2 border-white"
        />
      </div>
    </div>

    {/* SUCCESS BADGE */}
    <div className="absolute -bottom-4 -right-5 bg-white shadow-md px-3 py-1.5 rounded-[30px] text-center text-xs sm:text-sm">
      <span className="text-[#2FC7A1] font-bold block text-[19px]">
        5.8k
      </span>
      <span className="text-[#333931] block">
        Success Courses
      </span>
    </div>

  </div>
</div>
        </div>
      </section>

      <StatsCards />
      <GlobalOpportunity />
      <GlobalPlacement />
      <StudyAbroad />
      <ExperienceSection />
      <AboutSection />
      <PopularCourses data={apiData?.languages} />
      <div className="py-10 bg-gray-100">
  <h2 className="text-center  text-[28px] lg:text-[32px] font-semibold text-[#296166] mb-8">
    Explore Your Study Destinations
  </h2>

  <div className="px-2"> {/* reduced padding */}
    <Swiper
      modules={[Autoplay]}
      spaceBetween={8}   // 🔥 reduced gap
      slidesPerView={2}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop={true}
      breakpoints={{
        640: { slidesPerView: 3, spaceBetween: 10 },
        768: { slidesPerView: 4, spaceBetween: 10 },
        1024: { slidesPerView: 9, spaceBetween: 10 },
      }}
    >
      {destinations.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="text-center">
            
            {/* Bigger Image Box */}
            <div className="w-full flex items-center justify-center">
              <Link to={item.link}>
              <img
                src={item.flag}
                alt={item.name}
                className="w-32 h-24 object-contain mx-auto"
              />
              </Link>
            </div>

            <p className="text-sm font-medium mt-2">
              {item.name}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</div>
      <StudyDestinations data={apiData?.study_destinations} />
      <InvestmentOption/>
      <div className="py-10 bg-gray-100">
  <h2 className="text-center text-[28px] lg:text-[32px] font-semibold text-[#296166] mb-8">
    Explore Your Work Destinations
  </h2>

  <div className="px-2"> {/* reduced padding */}
    <Swiper
      modules={[Autoplay]}
      spaceBetween={8}   // 🔥 reduced gap
      slidesPerView={2}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop={true}
      breakpoints={{
        640: { slidesPerView: 3, spaceBetween: 10 },
        768: { slidesPerView: 4, spaceBetween: 10 },
        1024: { slidesPerView: 9, spaceBetween: 10 },
      }}
    >
      {destinations.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="text-center">
            
            {/* Bigger Image Box */}
            <div className="w-full flex items-center justify-center">
              <Link to={item.link}>
              <img
                src={item.flag}
                alt={item.name}
                className="w-32 h-24 object-contain mx-auto"
              />
              </Link>
            </div>

            <p className="text-sm font-medium mt-2">
              {item.name}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</div>
      <BlogSection  data={apiData?.blogs} />
      <LangmaSection />
      <FAQ />
      <ContactForm />
      <PopupForm open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default HeroSection;
