import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const logo =
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771404636/ChatGPT_Image_Feb_18_2026_02_20_16_PM_dtmwyu.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-start overflow-hidden bg-[#fcfcfd] pt-20 md:pt-28 pb-12">

      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/ddibq0tya/image/upload/v1771408370/DSC08861_duszf9.jpg"
          alt="CGSI Professional Background"
          className="w-full h-full object-cover opacity-60"
        />

        <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white" />

        <div className="hidden md:block absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[100px]" />
        <div className="hidden md:block absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-purple-100/30 rounded-full blur-[100px]" />
      </div>

      {/* CONTENT */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 -mt-6 md:-mt-10">
        <div className="max-w-5xl mx-auto text-center space-y-6">

          {/* LOGO + TITLE */}
          <div className="flex flex-col items-center gap-4">

            <motion.img
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              src={logo}
              alt="CGSI Logo"
              className="w-72 sm:w-80 md:w-96 lg:w-[450px] max-w-[95vw] h-auto drop-shadow-2xl"
            />

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.05]"
            >
              Cosmetic Gynecology <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-500">
                Society of India
              </span>
            </motion.h1>

          </div>

          {/* DESCRIPTION */}
          <div className="space-y-4 md:space-y-5">

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-slate-700 px-2"
            >
              The Cosmetic Gynecology Society of India (CGSI) is a national professional
              organization dedicated to advancing cosmetic and functional gynecology
              through <span className="font-semibold text-slate-900">
                education, ethical practice, clinical training, and evidence-based standards
              </span> to improve women’s intimate health care across India.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto px-4"
            >
              Established to support clinicians, promote responsible innovation,
              and ensure safe, high-quality cosmetic and functional gynecological care.
            </motion.p>

          </div>

          {/* BUTTON */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="pt-4 flex justify-center"
          >
            <Link
              to="/about"
              className="group w-full sm:w-auto px-8 py-4 rounded-full flex items-center justify-center gap-3 bg-slate-900 text-white font-bold transition-all active:scale-95 sm:hover:scale-105 sm:hover:bg-slate-800 sm:hover:shadow-xl"
            >
              Learn About CGSI
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;