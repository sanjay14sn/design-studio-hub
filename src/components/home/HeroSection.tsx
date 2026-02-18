import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-[#fcfcfd]">

      {/* ================= BACKGROUND IMAGE ================= */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/ddibq0tya/image/upload/v1771408370/DSC08861_duszf9.jpg"
          alt="CGSI Professional Background"
          className="w-full h-full object-cover opacity-60"
        />

        {/* Light Overlay - keeps it bright but makes text readable */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px]" />

        {/* Soft White Gradient to blend with the rest of the page */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white" />

        {/* Decorative Light Blobs */}
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-purple-100/30 rounded-full blur-[100px] pointer-events-none" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="container mx-auto px-6 relative z-10 flex items-center justify-center min-h-[95vh]">
        <div className="max-w-4xl mx-auto text-center space-y-8">

          {/* SOCIETY NAME */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-tight"
          >
            Cosmetic Gynecology <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-500">
              Society of India
            </span>
          </motion.h1>

          {/* PROFESSIONAL DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-slate-700"
          >
            The Cosmetic Gynecology Society of India (CGSI) is a national professional
            organization dedicated to advancing cosmetic and functional gynecology
            through <span className="font-semibold text-slate-900">education, ethical practice,
              clinical training, and evidence-based standards</span> to improve women’s
            intimate health care across India.
          </motion.p>

          {/* SECOND LINE FOR AUTHORITY */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Established to support clinicians, promote responsible innovation,
            and ensure safe, high-quality cosmetic and functional gynecological care.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="pt-6 flex justify-center"
          >
            <Link
              to="/about"
              className="group px-8 py-4 rounded-full flex items-center gap-3 bg-slate-900 text-white font-bold transition-all hover:scale-105 hover:bg-slate-800 hover:shadow-xl"
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