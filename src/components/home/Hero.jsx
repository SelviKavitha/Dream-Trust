import { FaArrowRight, FaHandsHelping } from "react-icons/fa";
import hero from "../../assets/hero.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full pt-24 pb-10 overflow-hidden bg-gradient-to-r from-emerald-900 via-green-800 to-teal-700 shadow-lg flex items-center">

      {/* Background Effects */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-cyan-400/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-400/20 rounded-full blur-3xl pointer-events-none"></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12 w-full">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">

            <span className="inline-block bg-orange-500 text-white px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold shadow-lg mb-3">
              🌍 Together We Can Make a Difference
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-white">
              Empowering <span className="text-yellow-300">Lives</span>, Building Better Tomorrows
            </h1>

            <p className="mt-3 text-sm sm:text-base text-green-100 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Dreams Trust empowers children, youth, women, and communities
              through quality education, healthcare, skill development, and
              sustainable livelihood opportunities.
            </p>

            {/* Buttons */}
            <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <button className="bg-orange-500 hover:bg-orange-600 transition-all duration-300 hover:scale-105 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 font-semibold shadow-xl text-sm sm:text-base">
                Donate Now
                <FaArrowRight />
              </button>

              <button className="bg-white hover:bg-gray-100 transition-all duration-300 hover:scale-105 text-blue-700 px-6 py-3 rounded-xl flex items-center justify-center gap-2 font-semibold shadow-xl text-sm sm:text-base">
                <FaHandsHelping />
                Become Volunteer
              </button>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-5">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-3 border border-white/25">
                <h2 className="text-2xl sm:text-3xl font-bold text-yellow-300">800+</h2>
                <p className="text-blue-100 text-xs sm:text-sm mt-1">Womens Beneficiaries</p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-3 border border-white/25">
                <h2 className="text-2xl sm:text-3xl font-bold text-yellow-300">250+</h2>
                <p className="text-green-100 text-xs sm:text-sm mt-1">Children Beneficiaries</p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-3 border border-white/25">
                <h2 className="text-2xl sm:text-3xl font-bold text-yellow-300">3</h2>
                <p className="text-blue-100 text-xs sm:text-sm mt-1">Learning Centres</p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-3 border border-white/25">
                <h2 className="text-2xl sm:text-3xl font-bold text-yellow-300">100</h2>
                <p className="text-blue-100 text-xs sm:text-sm mt-1">Elderly Care</p>
              </div>
            </div>

          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="relative hidden lg:flex items-center w-full">
            <img
              src={hero}
              alt="Dreams Trust Children"
              className="w-full max-w-[650px] h-[380px] xl:h-[440px] object-cover rounded-xl shadow-xl"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;