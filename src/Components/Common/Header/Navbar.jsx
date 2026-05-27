import React, { useEffect , useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import PopupForm from "./PopupForm"



const Navbar = () => {

  
  const [showPopup, setShowPopup] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileDrop, setMobileDrop] = useState(null);
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
  fetch("https://langmainternational.com/api/international-languages")
    .then((res) => res.json())
    .then((data) => {
      if (data.status) {
        setLanguages(data.languages);
      }
    })
    .catch((err) => console.log(err));
}, []);
const formatText = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

  return (
    <>
    
     {showPopup && (
        <PopupForm onClose={() => setShowPopup(false)} />
      )}

      
    <header className="w-full bg-white  sticky top-0 z-50">
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-around h-16">
          <Link to="/" className="shrink-0">
            <img
              src="/langma/images/Logo.png"
              alt="Langma International"
              className="h-10 sm:h-17 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8 text-[17px] font-medium text-[#4D5756]">
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-teal-700">
                <Link to="/" className="cursor-pointer">
               Home
               </Link>
               {/* <ChevronDown size={14} /> */}
              </button>

              <div
                className="absolute left-0 top-full mt-3 w-56 bg-white rounded-md shadow-xl
                opacity-0 invisible group-hover:opacity-100 group-hover:visible
                transition-all duration-200"
              >
              </div>
            </div>
 <div className="relative group">
      
      <button className="flex items-center gap-0 hover:text-teal-700">
        <Link to="/languages">
        International Languages
        </Link>
        <ChevronDown size={14} />
      </button>

      <div
        className="absolute left-0 top-full mt-3 w-[420px] bg-white rounded-xl shadow-xl
        opacity-0 invisible group-hover:opacity-100 group-hover:visible
        transition-all duration-200 z-50"
      >
        <ul className="grid grid-cols-3 gap-2 p-4">
         {languages.map((lang) => (
 <Link
  key={lang.id}
  to={`/${lang.url}`}
  onClick={() => setOpen(false)}
  className="py-1"
>
  {formatText(lang.title)}
</Link>
))}
        </ul>
      </div>
    </div>
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-teal-700">
               <Link
  to="/study-abroad"
  className="flex items-center gap-1 hover:text-teal-700"
>
  Study Abroad 
</Link>

              </button>
            </div>
           
             <div className="relative group">
      <NavLink
        to="/work-abroad"
        className="hover:text-teal-700 flex items-center gap-1"
      >
        Work Abroad
      
      </NavLink>

    </div>
   

            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-teal-700">
                <Link to="/global-assist">
                 Global Assist
                 </Link>
                 <ChevronDown size={14} />
              </button>


              <div
                className="absolute left-0 top-full mt-3 w-64 bg-white rounded-md shadow-xl
                opacity-0 invisible group-hover:opacity-100 group-hover:visible
                transition-all duration-200"
              >
                <Link to="/investment" className="block px-4 py-2 hover:bg-gray-100">
                  PR by Investment
                </Link>
                <Link to="/programs" className="block px-4 py-2 hover:bg-gray-100">
                  Cultural Infusion Programs
                </Link>
                <Link to="/holidays" className="block px-4 py-2 hover:bg-gray-100">
                  Cultural Holidays
                </Link>
                <Link to="/business_Programs" className="block px-4 py-2 hover:bg-gray-100">
                  Business Exchange
                </Link>
                <Link
                  to="/business_delegation_programs"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Business Delegation 
                </Link>
                <Link to="/lagmabusinesshub" className="block px-4 py-2 hover:bg-gray-100">
                  Langma Business Hub
                </Link>
              </div>
            </div>
          </nav>

        
          <button onClick={() => setOpen(true)} className="lg:hidden">
            <Menu size={26} />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/40 z-50">
          <div className="bg-white w-72 h-full p-5 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <Link to="/" onClick={() => setOpen(false)}>
                <img src="/langma/images/Logo.png" alt="logo" className="h-8" />
              </Link>
              <button onClick={() => setOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col gap-4 text-sm text-[#4D5756]">
              <button
                onClick={() =>
                  setMobileDrop(mobileDrop === "global" ? null : "global")
                }
                className="flex justify-between items-center"
              >
                <Link to="/" className="cursor-pointer">
                Home
                </Link>
              </button>

              

              <button
  onClick={() =>
    setMobileDrop(mobileDrop === "languages" ? null : "languages")
  }
  className="flex justify-between items-center"
>
  <Link to="/languages">
  International Languages
  </Link>
  <ChevronDown size={16} />
</button>

{/* MOBILE MENU */}
<div
  className={`
    fixed inset-0 z-50 lg:hidden
    transition-all duration-500
    ${open ? "visible opacity-100" : "invisible opacity-0"}
  `}
>

  {/* Overlay */}
  <div
    className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
    onClick={() => setOpen(false)}
  ></div>

  {/* Sidebar */}
  <div
    className={`
      absolute top-0 left-0
      w-72 h-full bg-white
      shadow-2xl overflow-y-auto

      transform transition-all duration-500 ease-in-out

      ${open
        ? "translate-x-0"
        : "-translate-x-full"}
    `}
    onClick={(e) => e.stopPropagation()}
  >

    {/* Top */}
    <div className="flex justify-between items-center p-5 border-b">

      <Link to="/" onClick={() => setOpen(false)}>
        <img
          src="/langma/images/Logo.png"
          alt="logo"
          className="h-8"
        />
      </Link>

      <button
        onClick={() => setOpen(false)}
        className="hover:rotate-90 transition duration-300"
      >
        <X size={24} />
      </button>

    </div>

    {/* Nav Links */}
    <nav className="flex flex-col p-5 text-[15px] text-[#4D5756]">

      <Link
        to="/"
        onClick={() => setOpen(false)}
        className="py-3 border-b hover:text-teal-700 transition"
      >
        Home
      </Link>

      {/* Languages */}
      <button
        onClick={() =>
          setMobileDrop(
            mobileDrop === "languages"
              ? null
              : "languages"
          )
        }
        className="py-3 border-b flex justify-between items-center hover:text-teal-700 transition"
      >
        <Link
      to="/languages"
      onClick={() => setOpen(false)}
      className="hover:text-teal-700 transition"
    >
      International Language
    </Link>

        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${
            mobileDrop === "languages"
              ? "rotate-180"
              : ""
          }`}
        />
      </button>

      <div
        className={`
          overflow-hidden transition-all duration-500
          ${
            mobileDrop === "languages"
              ? "max-h-[700px] opacity-100 mt-2"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <div className="grid grid-cols-2 gap-2 pl-2 pb-3 text-sm">

          {languages.map((lang) => (
            <Link
              key={lang.id}
              to={`/${lang.url}`}
              onClick={() => setOpen(false)}
              className="py-1 hover:text-teal-700"
            >
              {formatText(lang.title)}
            </Link>
          ))}

        </div>
      </div>

      <Link
        to="/study-abroad"
        onClick={() => setOpen(false)}
        className="py-3 border-b hover:text-teal-700 transition"
      >
        Study Abroad
      </Link>

      <Link
        to="/work-abroad"
        onClick={() => setOpen(false)}
        className="py-3 border-b hover:text-teal-700 transition"
      >
        Work Abroad
      </Link>

      {/* Global Assist */}
      <button
        onClick={() =>
          setMobileDrop(
            mobileDrop === "assist"
              ? null
              : "assist"
          )
        }
        className="py-3 border-b flex justify-between items-center hover:text-teal-700 transition"
      >
        <Link
      to="/global-assist"
      onClick={() => setOpen(false)}
      className="hover:text-teal-700 transition"
    >
      Global Assist 
    </Link>

        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${
            mobileDrop === "assist"
              ? "rotate-180"
              : ""
          }`}
        />
      </button>

      <div
        className={`
          overflow-hidden transition-all duration-500
          ${
            mobileDrop === "assist"
              ? "max-h-[500px] opacity-100 mt-2"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <div className="flex flex-col gap-3 pl-2 pb-3 text-sm">

          <Link
            to="/investment"
            onClick={() => setOpen(false)}
          >
            PR by Investment
          </Link>

          <Link
            to="/programs"
            onClick={() => setOpen(false)}
          >
            Cultural Infusion Programs
          </Link>

          <Link
            to="/holidays"
            onClick={() => setOpen(false)}
          >
            Cultural Holidays
          </Link>

          <Link
            to="/business_Programs"
            onClick={() => setOpen(false)}
          >
            Business Exchange
          </Link>

          <Link
            to="/business_delegation_programs"
            onClick={() => setOpen(false)}
          >
            Business Delegation
          </Link>

          <Link
            to="/lagmabusinesshub"
            onClick={() => setOpen(false)}
          >
            Langma Business Hub
          </Link>

        </div>
      </div>

    </nav>
  </div>
</div>
            </nav>
          </div>
        </div>
      )}
    </header>
    </>
  );
};

export default Navbar;
