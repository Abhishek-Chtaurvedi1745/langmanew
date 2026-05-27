import React from "react";

const StatsCards = () => {
  return (
   <section className="w-full py-12 bg-white overflow-hidden">
  <div className="max-w-6xl mx-auto px-4">

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 items-end">

      {/* CARD 1 */}
      <div className="group relative bg-[#006064] text-white rounded-[26px] p-5 sm:p-6 shadow-[0_10px_40px_rgba(0,0,0,0.08)] h-[250px] sm:h-[321px] flex flex-col justify-between overflow-hidden hover:-translate-y-2 transition-all duration-500">

        {/* Glow */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>

        <div className="relative z-10">
          <div className="w-11 h-11 rounded-2xl bg-white/10 backdrop-blur-md mb-5 border border-white/10 flex items-center justify-center shadow-lg">
            <img
              src="/langma/images/Mask group.png"
              alt=""
              className="w-6 h-6 object-contain"
            />
          </div>

          <h2 className="text-3xl font-bold tracking-tight">
            50+
          </h2>

          <p className="text-[11px] sm:text-sm mt-4 leading-[1.7] text-white/90 max-w-[90%]">
            Master a new language. We offer certified training across four
            continents.
          </p>
        </div>

        <div className="absolute bottom-0 right-0 w-20 h-20 bg-white/5 rounded-full translate-x-6 translate-y-6"></div>
      </div>

      {/* CARD 2 */}
      <div className="group relative bg-[#80CBC4] text-[#004D40] rounded-[26px] p-5 sm:p-6 shadow-[0_10px_40px_rgba(0,0,0,0.06)] h-[180px] sm:h-[186px] flex flex-col justify-between overflow-hidden hover:-translate-y-2 transition-all duration-500">

        <div className="absolute top-0 left-0 w-20 h-20 bg-white/20 rounded-full blur-2xl"></div>

        <div className="relative z-10">
          <h2 className="text-3xl font-bold tracking-tight">
            300+
          </h2>

          <p className="text-[11px] sm:text-sm mt-4 leading-[1.7] max-w-[95%]">
            Learn from experienced certified trainers who are experts in
            fluency and culture.
          </p>
        </div>

        <div className="absolute bottom-0 right-0 w-16 h-16 bg-white/10 rounded-full translate-x-5 translate-y-5"></div>
      </div>

      {/* CARD 3 */}
      <div className="group relative bg-[#E0F7FA] text-[#004D40] rounded-[26px] p-5 sm:p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] h-[200px] sm:h-[225px] flex flex-col justify-between overflow-hidden hover:-translate-y-2 transition-all duration-500">

        <div className="absolute top-0 right-0 w-20 h-20 bg-white/40 rounded-full blur-2xl"></div>

        <div className="relative z-10">
          <h2 className="text-3xl font-bold tracking-tight">
            50k+
          </h2>

          <p className="text-[11px] sm:text-sm mt-4 leading-[1.7] max-w-[95%]">
            Students empowered globally, achieving their educational and
            professional aspirations with Langma.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/20 rounded-full -translate-x-4 translate-y-4"></div>
      </div>

      {/* CARD 4 */}
      <div className="group relative bg-[#80CBC4] text-[#004D40] rounded-[26px] p-5 sm:p-6 shadow-[0_10px_40px_rgba(0,0,0,0.06)] h-[220px] sm:h-[270px] flex flex-col justify-between overflow-hidden hover:-translate-y-2 transition-all duration-500">

        <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/20 rounded-full blur-2xl"></div>

        <div className="relative z-10">
          <h2 className="text-3xl font-bold tracking-tight">
            100k+
          </h2>

          <p className="text-[11px] sm:text-sm mt-4 leading-[1.7] max-w-[95%]">
            Successful career placements worldwide, matching talent with top
            international companies.
          </p>
        </div>

        {/* Bottom Green Box */}
        {/* <div className="absolute bottom-4 right-4 w-10 h-10 bg-[#00D84A] rounded-xl shadow-lg"></div> */}
      </div>

    </div>
  </div>
</section>
  );
};

export default StatsCards;