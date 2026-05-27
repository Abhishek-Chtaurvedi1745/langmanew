import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState, lazy, Suspense } from "react";

import TopBar from "./Components/Common/Header/TopBar";
import Footer from "./Pages/HomePages/Footer";
import ScrollToTop from "./Pages/HomePages/Loader/ScrollToTop";
import Loader from "./Pages/HomePages/Loader/Loader";
import FloatingCallButton from "./Components/Floatingcalbutton";
import WhatsAppButton from "./Components/WhatsappButton";
import ApplyCertificate from "./Pages/HomePages/Certificate";

// Lazy Loaded Components
const HeroSection = lazy(() => import("./Pages/HomePages/HeroSection"));
const AboutHeroSection = lazy(() => import("./Pages/HomePages/Aboutpage/AboutHeroSection"));
const AbrotHeroSection = lazy(() => import("./Components/Common/WorkAbrot/AbrotHeroSection"));
const StudyAbrotHeroSection = lazy(() => import("./Components/Common/StudyAbortSection/StudyAbrotHeroSection"));
const InternationalHeroSection = lazy(() => import("./Components/InternationlHeroSection/InternationalHeroSection"));
const GlobleHeroSection = lazy(() => import("./Components/GlobleHeroSection/GlobleHeroSection"));
const Investment = lazy(() => import("./Components/InvestmentPage/Investment"));
const Cultural_Programs = lazy(() => import("./Components/Cultural_Infusion_Programs/Cultural_Programs"));
const CulturalHolidays = lazy(() => import("./Components/Cultural Holidays/CulturalHolidays"));
const BusinessPrograms = lazy(() => import("./Components/Business Exchange Programs/BusinessPrograms"));
const Business_Delegation_Programs = lazy(() => import("./Components/Business Delegation Programs/Business_Delegation_Programs"));
const Lagmabusinesshub = lazy(() => import("./Components/LagmabusinessHub/Lagmabusinesshub"));
const Greece = lazy(() => import("./Components/Common/GracePages/Greece"));
const Cyprus = lazy(() => import("./Components/Common/Cyprus/Cyprus"));
const Latvia = lazy(() => import("./Components/Common/Latvia/Latvia"));
const Canada = lazy(() => import("./Components/Common/Canadapage/Canada"));
const UnitedStates = lazy(() => import("./Components/Common/UnitedStates Page/UnitedStates"));
const CostaRica = lazy(() => import("./Components/Common/CostaRica Page/CostaRica"));
const HongKong = lazy(() => import("./Components/Common/HongKong/HongKong"));
const Malaysia = lazy(() => import("./Components/Common/Malaysiapage/Malaysia"));
const Singapore = lazy(() => import("./Components/Common/SingaporePage/Singapore"));
const Thailand = lazy(() => import("./Components/Common/ThailandPage/Thailand"));
const Australia = lazy(() => import("./Components/Common/Aust/Australia"));
const UnitedArabEmirates = lazy(() => import("./Components/Common/UnitedArabEmirates Page/UnitedArabEmirates"));
const Mauritius = lazy(() => import("./Components/Common/Mauritius Page/Mauritius"));
const Arabic = lazy(() => import("./Components/Common/ArabicPages/Arabic"));
const BalkanLanguage = lazy(() => import("./Components/Common/BalkanLanguage page/BalkanLanguage"));
const Chinese = lazy(() => import("./Components/Common/Chinesepage/Chinese"));
const Frame = lazy(() => import("./Components/Common/FramePage/Frame"));
const French = lazy(() => import("./Components/Common/FrenchPage/French"));
const German = lazy(() => import("./Components/Common/GermanPage/German"));
const Hindi = lazy(() => import("./Components/Common/HindiPage/Hindi"));
const ItalianLanguage = lazy(() => import("./Components/Common/ItalianLanguage Page/ItalianLanguage"));
const Japanese = lazy(() => import("./Components/Common/JapanesePage/Japanese"));
const Korean = lazy(() => import("./Components/Common/KoreanPage/Korean"));
const Russian = lazy(() => import("./Components/Common/RussianPage/Russian"));
const Persian = lazy(() => import("./Components/Common/PersianPage/Persian"));
const Polish = lazy(() => import("./Components/Common/PolishPage/Polish"));
const Sanskrit = lazy(() => import("./Components/Common/SanskritPage/Sanskrit"));
const Asia = lazy(() => import("./Components/Common/Asia/Asia"));
const Europe = lazy(() => import("./Components/Common/Europe/Europe"));
const America = lazy(() => import("./Components/Common/America/America"));
const BlogPage = lazy(() => import("./Pages/HomePages/BlogPage"));
const BlogDetailPage = lazy(() => import("./Pages/HomePages/BlogDetails"));
const Poland = lazy(() => import("./Pages/HomePages/Poland"));
const ContactUs = lazy(() => import("./Pages/HomePages/ContactUs"));
const Career = lazy(() => import("./Pages/HomePages/Career"));
const Privacy = lazy(() => import("./Pages/HomePages/Privacy"));
const Payment = lazy(() => import("./Pages/HomePages/Payment"));
const Event = lazy(() => import("./Pages/HomePages/Event"));
const Transcription = lazy(() => import("./Pages/HomePages/Transcription"));
const Translational = lazy(() => import("./Pages/HomePages/Translational"));
const Localization = lazy(() => import("./Pages/HomePages/Localization"));
const Multilanguage = lazy(() => import("./Pages/HomePages/Multilanguage"));
const Profreding = lazy(() => import("./Pages/HomePages/Profreding"));
const Voiceover = lazy(() => import("./Pages/HomePages/Voiceover"));
const Contentwriting = lazy(() => import("./Pages/HomePages/Contentwriting"));
const Dubbing = lazy(() => import("./Pages/HomePages/Dubbing"));
const Subtitle = lazy(() => import("./Pages/HomePages/Subtitle"));
const Workabroad = lazy(() => import("./Pages/HomePages/Workabroad"));
const Test = lazy(() => import("./Components/Common/Header/Test"));
const Termscondition = lazy(() => import("./Pages/HomePages/Termscondition"));
const Test1 = lazy(() => import("./Pages/HomePages/Test1"));

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <div className="w-full overflow-x-hidden">
        <WhatsAppButton />
        <TopBar />
        <ScrollToTop />
        <FloatingCallButton />

        {loading && <Loader />}

        {!loading && (
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<HeroSection />} />
              <Route path="/about" element={<AboutHeroSection />} />
              <Route path="/work-abroad" element={<AbrotHeroSection />} />
              <Route path="/study-abroad" element={<StudyAbrotHeroSection />} />
              <Route path="/languages" element={<InternationalHeroSection />} />
              <Route path="/global-assist" element={<GlobleHeroSection />} />
              <Route path="/investment" element={<Investment />} />
              <Route path="/programs" element={<Cultural_Programs />} />
              <Route path="/holidays" element={<CulturalHolidays />} />
              <Route path="/business_Programs" element={<BusinessPrograms />} />
              <Route path="/business_delegation_programs" element={<Business_Delegation_Programs />} />
              <Route path="/lagmabusinesshub" element={<Lagmabusinesshub />} />
              <Route path="/greece" element={<Greece />} />
              <Route path="/cyprus" element={<Cyprus />} />
              <Route path="/latvia" element={<Latvia />} />
              <Route path="/canada" element={<Canada />} />
              <Route path="/unitedstate" element={<UnitedStates />} />
              <Route path="/costaRica" element={<CostaRica />} />
              <Route path="/hongkong" element={<HongKong />} />
              <Route path="/malasiya" element={<Malaysia />} />
              <Route path="/singapore" element={<Singapore />} />
              <Route path="/thailand" element={<Thailand />} />
              <Route path="/australia" element={<Australia />} />
              <Route path="/unitedarab" element={<UnitedArabEmirates />} />
              <Route path="/mauritius" element={<Mauritius />} />
              <Route path="/:slug" element={<Arabic />} />
              <Route path="" element={<BalkanLanguage />} />
              <Route path="" element={<Chinese />} />
              <Route path="/frame" element={<Frame />} />
              <Route path="/:slug" element={<French />} />
              <Route path="/" element={<German />} />
              <Route path="/hind" element={<Hindi />} />
              <Route path="/online-italian-la" element={<ItalianLanguage />} />
              <Route path="/online-japanese-la" element={<Japanese />} />
              <Route path="/online-ko" element={<Korean />} />
              <Route path="/:slug" element={<Russian />} />
              <Route path="/persian" element={<Persian />} />
              <Route path="/polish" element={<Polish />} />
              <Route path="/sanskrit" element={<Sanskrit />} />
              <Route path="/asia" element={<Asia />} />
              <Route path="/europe" element={<Europe />} />
              <Route path="/aust" element={<Australia />} />
              <Route path="/america" element={<America />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog-detail/:slug" element={<BlogDetailPage />} />
              <Route path="/poland" element={<Poland />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/career" element={<Career />} />
              <Route path="/privacy-policy" element={<Privacy />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/events" element={<Event />} />
              <Route path="/transcription" element={<Transcription />} />
              <Route path="/translational" element={<Translational />} />
              <Route path="/localization" element={<Localization />} />
              <Route path="/multilanguage" element={<Multilanguage />} />
              <Route path="/profreding" element={<Profreding />} />
              <Route path="/voiceover" element={<Voiceover />} />
              <Route path="/content-writing" element={<Contentwriting />} />
              <Route path="/dubbing" element={<Dubbing />} />
              <Route path="/subtitle" element={<Subtitle />} />
              <Route path="/work-abroad1" element={<Workabroad />} />
              <Route
                path="/course-details/:languageSlug/:courseSlug"
                element={<Test />}
              />
              <Route path="/terms-and-conditions" element={<Termscondition />} />
              <Route path="/tt" element={<Test1 />} />
              <Route path="/certificate" element={<ApplyCertificate />} />
            </Routes>
          </Suspense>
        )}

        <Footer />
      </div>
    </>
  );
}

export default App;


// import { Routes, Route, useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";

// import TopBar from "./Components/Common/Header/TopBar";
// import HeroSection from "./Pages/HomePages/HeroSection";
// import AboutHeroSection from "./Pages/HomePages/Aboutpage/AboutHeroSection";
// import Footer from "./Pages/HomePages/Footer";
// import AbrotHeroSection from "./Components/Common/WorkAbrot/AbrotHeroSection";
// import StudyAbrotHeroSection from "./Components/Common/StudyAbortSection/StudyAbrotHeroSection";
// import InternationalHeroSection from "./Components/InternationlHeroSection/InternationalHeroSection";
// import GlobleHeroSection from "./Components/GlobleHeroSection/GlobleHeroSection";
// import ScrollToTop from "./Pages/HomePages/Loader/ScrollToTop";
// import Loader from "./Pages/HomePages/Loader/Loader";
// import Investment from "./Components/InvestmentPage/Investment";
// import Cultural_Programs from "./Components/Cultural_Infusion_Programs/Cultural_Programs";
// import CulturalHolidays from "./Components/Cultural Holidays/CulturalHolidays";
// import BusinessPrograms from "./Components/Business Exchange Programs/BusinessPrograms";
// import Business_Delegation_Programs from "./Components/Business Delegation Programs/Business_Delegation_Programs";
// import Lagmabusinesshub from "./Components/LagmabusinessHub/Lagmabusinesshub";
// import Greece from "./Components/Common/GracePages/Greece";
// import Cyprus from "./Components/Common/Cyprus/Cyprus";
// import Latvia from "./Components/Common/Latvia/Latvia";
// import Canada from "./Components/Common/Canadapage/Canada";
// import UnitedStates from "./Components/Common/UnitedStates Page/UnitedStates";
// import CostaRica from "./Components/Common/CostaRica Page/CostaRica";
// import HongKong from "./Components/Common/HongKong/HongKong";
// import Malaysia from "./Components/Common/Malaysiapage/Malaysia";
// import Singapore from "./Components/Common/SingaporePage/Singapore";
// import Thailand from "./Components/Common/ThailandPage/Thailand";
// // import Australia from "./Components/Common/AustraliaPage/Australia";
// import UnitedArabEmirates from "./Components/Common/UnitedArabEmirates Page/UnitedArabEmirates";
// import Mauritius from "./Components/Common/Mauritius Page/Mauritius";
// import Arabic from "./Components/Common/ArabicPages/Arabic";
// import BalkanLanguage from "./Components/Common/BalkanLanguage page/BalkanLanguage";
// import Chinese from "./Components/Common/Chinesepage/Chinese";
// import Frame from "./Components/Common/FramePage/Frame";
// import French from "./Components/Common/FrenchPage/French";
// import German from "./Components/Common/GermanPage/German";
// import Hindi from "./Components/Common/HindiPage/Hindi";
// import ItalianLanguage from "./Components/Common/ItalianLanguage Page/ItalianLanguage";
// import Japanese from "./Components/Common/JapanesePage/Japanese";
// import Korean from "./Components/Common/KoreanPage/Korean";
// import Russian from "./Components/Common/RussianPage/Russian";
// import Persian from "./Components/Common/PersianPage/Persian";
// import Polish from "./Components/Common/PolishPage/Polish";
// import Sanskrit from "./Components/Common/SanskritPage/Sanskrit";
// import Asia from "./Components/Common/Asia/Asia";
// import Europe from "./Components/Common/Europe/Europe";
// import Australia from "./Components/Common/Aust/Australia";
// import America from "./Components/Common/America/America";
// import BlogPage from "./Pages/HomePages/BlogPage";
// import BlogDetailPage from "./Pages/HomePages/BlogDetails";
// import Poland from "./Pages/HomePages/Poland";
// import PopupForm from "./Components/PopupForm";
// import ContactUs from "./Pages/HomePages/ContactUs";
// import Career from "./Pages/HomePages/Career";
// import Privacy from "./Pages/HomePages/Privacy";
// import Payment from "./Pages/HomePages/Payment";
// import Event from "./Pages/HomePages/Event";
// import Transcription from "./Pages/HomePages/Transcription";
// import Translational from "./Pages/HomePages/Translational";
// import Localization from "./Pages/HomePages/Localization";
// import Multilanguage from "./Pages/HomePages/Multilanguage";
// import Profreding from "./Pages/HomePages/Profreding";
// import Voiceover from "./Pages/HomePages/Voiceover";
// import Contentwriting from "./Pages/HomePages/Contentwriting";
// import Dubbing from "./Pages/HomePages/Dubbing";
// import Subtitle from "./Pages/HomePages/Subtitle";
// import Workabroad from "./Pages/HomePages/Workabroad";
// import FloatingCallButton from "./Components/Floatingcalbutton";
// import Test from "./Components/Common/Header/Test";
// import Termscondition from "./Pages/HomePages/Termscondition";
// import Test1 from "./Pages/HomePages/Test1";
// import WhatsAppButton from "./Components/WhatsappButton";



// function App() {``
//   const location = useLocation();
//   const [loading, setLoading] = useState(false);
//    const [open, setOpen] = useState(false);

//   useEffect(() => {
//     setLoading(true);

//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 1000); 
//     return () => clearTimeout(timer);
//   }, [location.pathname]); 

//   return (
//     <>
//     <div className="w-full overflow-x-hidden">
//       <WhatsAppButton />
//       <TopBar />
//       <ScrollToTop />
//       <FloatingCallButton/>
//       {loading && <Loader />}

//       {!loading && (
//         <Routes>
//           <Route path="/" element={<HeroSection />} />
//           <Route path="/about" element={<AboutHeroSection />} />
//           <Route path="/work-abroad" element={<AbrotHeroSection />} />
//           <Route path="/study-abroad" element={<StudyAbrotHeroSection />} />
//           <Route path="/languages" element={<InternationalHeroSection />} />
//           <Route path="/global-assist" element={<GlobleHeroSection />} />
//           <Route path="/investment" element={<Investment />} />
//           <Route path="/programs" element={<Cultural_Programs />} />
//           <Route path="/holidays" element={<CulturalHolidays />} />
//           <Route path="/business_Programs" element={<BusinessPrograms />} />
//           <Route path="/business_delegation_programs" element={<Business_Delegation_Programs />} />
//           <Route path="/lagmabusinesshub" element={<Lagmabusinesshub />} />
//           <Route path="/greece" element={<Greece />} />
//           <Route path="/cyprus" element={<Cyprus />} />
//           <Route path="/latvia" element={<Latvia />} />
//           <Route path="/canada" element={<Canada />} />
//           <Route path="/unitedstate" element={<UnitedStates />} />
//           <Route path="/costaRica" element={<CostaRica />} />
//           <Route path="/hongkong" element={<HongKong />} />
//           <Route path="/malasiya" element={<Malaysia/>} />
//           <Route path="/singapore" element={<Singapore/>} />
//           <Route path="/thailand" element={<Thailand/>} />
//           <Route path="/australia" element={<Australia/>} />
//           <Route path="/unitedarab" element={<UnitedArabEmirates/>} />
//           <Route path="/mauritius" element={<Mauritius/>} />
//           <Route path="/:slug" element={<Arabic/>} />
//           <Route path="" element={<BalkanLanguage/>} />
//           <Route path="" element={<Chinese/>} />
//           <Route path="/frame" element={<Frame/>} />
//           <Route path="/:slug" element={<French/>} />
//           <Route path="/" element={<German/>} />
//           <Route path="/hind" element={<Hindi/>} />
//           <Route path="/online-italian-la" element={<ItalianLanguage/>} />
//           <Route path="/online-japanese-la" element={<Japanese/>} />
//           <Route path="/online-ko" element={<Korean/>} />
//           <Route path="/:slug" element={<Russian/>} />
//           <Route path="/persian" element={<Persian/>} />
//           <Route path="/polish" element={<Polish/>} />
//           <Route path="/sanskrit" element={<Sanskrit/>} />
//           <Route path="/asia" element={<Asia/>} />
//           <Route path="/europe" element ={<Europe/>} />
//           <Route path="/aust" element={<Australia/>} />
//           <Route path="/america" element={<America/>} />
//           <Route path="/blog" element={<BlogPage/>} />
//           <Route path="/blog-detail/:slug" element={<BlogDetailPage />} />
//           <Route path="/poland" element={<Poland/>} />
//           <Route path="/contact" element={<ContactUs/>} />
//           <Route path="/career" element={<Career/>} />
//           <Route path="/privacy-policy" element={<Privacy/>} />
//           <Route path="/payment" element={<Payment />} />
//           <Route path="/events" element={<Event />} />
//           <Route path="/transcription" element={<Transcription />} />
//           <Route path="/translational" element={<Translational />} />
//           <Route path="/localization" element={<Localization />} />
//           <Route path="/multilanguage" element={<Multilanguage />} />
//           <Route path="/profreding" element={<Profreding />} />
//           <Route path="/voiceover" element={<Voiceover />} />
//           <Route path="/content-writing" element={<Contentwriting />} />
//           <Route path="/dubbing" element={<Dubbing />} />
//           <Route path="/subtitle" element={<Subtitle />} />
//           <Route path="/work-abroad1" element={<Workabroad />} />
//           <Route
//   path="/course-details/:languageSlug/:courseSlug"
//   element={<Test />}
// />
//           <Route path="/terms-and-conditions" element={<Termscondition />} />
//           <Route path="/tt" element={<Test1 />} />
//         </Routes>
//       )}

//       <Footer />
//       </div>
//     </>
//   );
// }

// export default App;
