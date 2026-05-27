import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-white via-[#f4fffe] to-[#dff7f4] flex items-center justify-center z-[9999] overflow-hidden">

      {/* Animated Background Circles */}
      <div className="absolute w-[500px] h-[500px] bg-[#80CBC4]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute w-[300px] h-[300px] bg-[#296166]/10 rounded-full blur-3xl animate-bounce"></div>

      {/* Loader Container */}
      <div className="relative flex flex-col items-center">

        {/* Outer Rotating Ring */}
        {/* <div className="absolute w-40 h-40 border-[6px] border-[#80CBC4]/20 border-t-[#296166] rounded-full animate-spin"></div> */}

        {/* Inner Rotating Ring */}
        <div
          className="absolute w-28 h-28 border-[4px] border-[#296166]/20 border-b-[#80CBC4] rounded-full animate-spin"
          style={{ animationDirection: "reverse", animationDuration: "3s" }}
        ></div>

        {/* Glow Effect */}
        <div className="absolute w-24 h-24 bg-[#80CBC4]/40 rounded-full blur-2xl animate-pulse"></div>

        {/* Logo */}
        <div className="relative bg-white p-4 rounded-full shadow-2xl border border-[#80CBC4]/30">
          <img
            src="/langma/images/Logo.png"
            alt="Loader Logo"
            className="w-20 h-20 object-contain animate-[bounce_2s_infinite]"
          />
        </div>

        {/* Loading Text */}
        <div className="mt-10 flex gap-1 text-[#296166] font-bold tracking-[6px] text-sm">
          <span className="animate-bounce">L</span>
          <span className="animate-bounce [animation-delay:0.1s]">O</span>
          <span className="animate-bounce [animation-delay:0.2s]">A</span>
          <span className="animate-bounce [animation-delay:0.3s]">D</span>
          <span className="animate-bounce [animation-delay:0.4s]">I</span>
          <span className="animate-bounce [animation-delay:0.5s]">N</span>
          <span className="animate-bounce [animation-delay:0.6s]">G</span>
          <span className="animate-bounce [animation-delay:0.7s]">.</span>
          <span className="animate-bounce [animation-delay:0.8s]">.</span>
          <span className="animate-bounce [animation-delay:0.9s]">.</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;