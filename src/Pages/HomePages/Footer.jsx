import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      className="text-gray-300 mt-10 relative bg-cover bg-center bg-no-repeat bg-gray-900"
      style={{ backgroundImage: "url('/langma/images/pngwing.com 2.png')" }}
    >
      {/* Top contact info */}
    <div className="flex flex-col md:flex-row justify-between items-start lg:items-center border-b border-gray-500 px-6 md:px-20 ">
  {/* ADDRESS */}
  <div className="flex items-center mb-3 md:mb-0 mt-5 md:mt-0">
    <span className="flex items-center justify-center border rounded-full h-[50px] w-[50px] mr-3">
      <FaMapMarkerAlt className="text-[#80CBC4]" />
    </span>
    <span className="text-sm">
      <strong className="text-[#80CBC4]">Address-</strong> E 73, South Extension Part-1, <br />
      New Delhi - 110049, India
    </span>
  </div>

  {/* VERTICAL DIVIDER */}
  <div className="hidden md:block border-l border-gray-500 h-20 mx-4"></div>

  {/* PHONE */}
  <a href="tel:+919810117094">
<div className="flex items-center mb-3 md:mb-0">
  
  <span className="flex items-center justify-center border rounded-full h-[50px] w-[50px] mr-3">
    <FaPhone className="text-[#80CBC4] -rotate-263 transform" />
  </span>
  
  <span className="text-sm">+91-9810117094</span>
  
</div>
</a>

  {/* VERTICAL DIVIDER */}
  <div className="hidden md:block border-l border-gray-500 h-20 mx-4"></div>

  {/* EMAIL */}
  <a href="mailto:info@langmainternational.com">
  <div className="flex items-center mb-6 md:mb-0">
    <span className="flex items-center justify-center border rounded-full h-[50px] w-[50px] mr-3">
      <FaEnvelope className="text-[#80CBC4]" />
    </span>
    
    <span className="text-sm">info@langmainternational.com</span>
    
  </div>
  </a>
</div>


      <div className="px-6 md:px-20 py-10 grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-8 text-gray-300">
        {/* Logo + Description */}
        <div>
          <img
            src="/langma/images/Whitelogo.png"
            alt="Langma International"
            className="w-32 mb-4"
          />
          <p className="text-sm leading-relaxed">
            At Langma we offer you a complete insight into the language and the
            culture. We provide tailored programmes which cater to the needs of
            all the learners.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4 space-y-2 text-sm">Our Expertise</h3>
          <ul className="space-y-2 text-sm flex flex-col">
            <Link to="/" className="hover:text-[#80CBC4]">  
                Home            
            </Link>
            <Link to="/languages" className="hover:text-[#80CBC4]"> 
                International Languages           
           </Link>
            <Link to="/study-abroad" className="hover:text-[#80CBC4]"> 
                Study Abroad       
            </Link>
            <Link to="/work-abroad" className="hover:text-[#80CBC4]"> 
                Work Abroad     
            </Link>
            <Link to="/global-assist" className="hover:text-[#80CBC4]"> 
               Global Assist      
            </Link>
             <Link to="/events" className="hover:text-[#80CBC4]"> 
               Event     
            </Link>
             <Link to="/certificate"
>
  Apply for Certificate
</Link>
            
            
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Site Links</h3>
          <ul className="space-y-2 text-sm flex flex-col">

  <Link to="/investment" className="hover:text-[#80CBC4]">
    PR by Investment
  </Link>

  <Link to="/programs" className="hover:text-[#80CBC4]">
    Cultural Infusion Programs
  </Link>

  {/* <Link to="/study-abroad" className="hover:text-[#80CBC4]">
    Study Abroad
  </Link> */}

  <Link to="/holidays" className="hover:text-[#80CBC4]">
    Cultural Holidays
  </Link>

  <Link to="/business_Programs" className="hover:text-[#80CBC4]">
    Business Exchange
  </Link>
  <Link to="/business_delegation_programs" className="hover:text-[#80CBC4]">
    Business Delegation
  </Link>
  <Link to="/lagmabusinesshub" className="hover:text-[#80CBC4]">
    Langma Business Hub
  </Link>
    <Link to="/payment" className="hover:text-[#80CBC4]">
    Pay Now
  </Link>

</ul>
        </div>

          <div>
          <h3 className="text-white font-semibold mb-4 space-y-2 text-sm">Our Services</h3>
          <ul className="space-y-2 text-sm flex flex-col">
            <Link to="/transcription" className="hover:text-[#80CBC4]">  
                Transcription           
            </Link>
            <Link to="/translational" className="hover:text-[#80CBC4]"> 
                Translational           
           </Link>
            <Link to="/localization" className="hover:text-[#80CBC4]"> 
               Localization Service      
            </Link>
            <Link to="/multilanguage" className="hover:text-[#80CBC4]"> 
                Multilanguage DTP     
            </Link>
            <Link to="/profreding" className="hover:text-[#80CBC4]"> 
                Proofreading      
            </Link>
             <Link to="/voiceover" className="hover:text-[#80CBC4]"> 
               Voice Over Services    
            </Link>
          <Link to="/content-writing" className="hover:text-[#80CBC4]"> 
               Content Writing    
            </Link>
            <Link to="/dubbing" className="hover:text-[#80CBC4]"> 
               Dubbing   
            </Link>
            <Link to="/subtitle" className="hover:text-[#80CBC4]"> 
               Subtitle    
            </Link>
            </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Reach Us</h3>
          <ul className="space-y-2 text-sm mb-4 flex flex-col">

  <Link to="/career" className="hover:text-[#80CBC4]">
    Careers
  </Link>

  <Link to="/contact" className="hover:text-[#80CBC4]">
    Contact Us
  </Link>

  <Link to="/blog" className="hover:text-[#80CBC4]">
    Blog
  </Link>
<Link to="/terms-and-conditions" className="hover:text-[#80CBC4]">
    Terms and condition
  </Link>
  <Link to="/privacy-policy" className="hover:text-[#80CBC4]">
    Privacy Policy
  </Link>

</ul>
          <div className="flex space-x-3 mt-2">
            <a
              href="https://www.facebook.com/officiallangma"
              className="p-2 bg-gray-800 rounded-full hover:bg-[#80CBC4]"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/officiallangma"
              className="p-2 bg-gray-800 rounded-full hover:bg-[#80CBC4]"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@langmaInternational"
              className="p-2 bg-gray-800 rounded-full hover:bg-[#80CBC4]"
            >
              <FaYoutube />
            </a>
           {/* X (Twitter) */}
<a
  href="https://x.com/official_langma"
  target="_blank"
  rel="noopener noreferrer"
  className="p-2 bg-gray-800 rounded-full hover:bg-[#80CBC4] transition"
>
  <FaXTwitter />
</a>

{/* LinkedIn */}
<a
  href="https://www.linkedin.com/school/langma-international"
  target="_blank"
  rel="noopener noreferrer"
  className="p-2 bg-gray-800 rounded-full hover:bg-[#80CBC4] transition"
>
  <FaLinkedinIn />
</a>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 bg-opacity-80 text-center py-3 text-sm text-gray-400">
        Copyrights © 2026, Langma International
      </div>
    </footer>
  );
};

export default Footer;
