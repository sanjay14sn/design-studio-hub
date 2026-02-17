import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Brain } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden font-sans bg-[#fcfcfd] selection:bg-primary/20">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 z-0 overflow-hidden">

        {/* VIDEO BACKGROUND */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-[0.4] mix-blend-multiply"
        >
          <source
            src="https://res.cloudinary.com/dhdvbty7e/video/upload/q_auto,f_auto/AI_anim_-_S2_vnjnfq.mp4"
            type="video/mp4"
          />
        </video>

        {/* Light Frost Overlays */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/80" />

        {/* Animated Gradient Orbs - Soft Pastels */}
        <div className="absolute top-[-10%] left-[-5%] w-[700px] h-[700px] bg-primary/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-[100px] animate-float" />

        {/* Grid Pattern Overlay - Subtle Grey */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="light-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-400" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#light-grid)" />
        </svg>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="container mx-auto px-6 relative z-10 flex items-center justify-center min-h-[95vh]">
        <div className="max-w-4xl mx-auto w-full">

          <div className="space-y-8 text-center flex flex-col items-center justify-center">

            {/* AI Trust Badge - Light Glassmorphism */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white/50 shadow-sm backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-600">
                Next-Gen Healthcare
              </span>
            </motion.div>

            {/* Futuristic Heading - Darker Text for Contrast */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] text-slate-900"
            >
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-600 to-indigo-500">Future</span> <br />
              of <span className="font-serif italic font-light text-slate-500">Cosmetic Gynecology Society of India</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-slate-600"
            >
              Merging 90 years of clinical excellence with <span className="text-slate-900 font-bold">Cutting-Edge AI</span> innovations to shape the next century of women's health.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-6 justify-center items-center"
            >
              <Link
                to="/membership"
                className="group relative px-8 py-4 rounded-full flex items-center justify-center gap-3 overflow-hidden bg-slate-900 text-white font-bold transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/20"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary via-purple-500 to-primary opacity-0 group-hover:opacity-20 transition-opacity" />
                <span className="relative z-10">Explore Intelligence</span>
                <Brain className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform" />
              </Link>

              <Link
                to="/events"
                className="px-8 py-4 rounded-full border border-slate-200 bg-white/80 backdrop-blur-sm font-bold transition-all hover:bg-slate-50 flex items-center justify-center gap-2 text-slate-700 hover:scale-105 shadow-sm"
              >
                View Analytics
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Tech Partner Logos - Soft Grayscale */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex gap-8 pt-8 grayscale contrast-125 justify-center items-center"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" className="h-8 object-contain" alt="React" />
            </motion.div>

            {/* Floating Medical Doodles - Recalibrated for Light Theme */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute inset-0 pointer-events-none overflow-hidden"
            >
              {/* Individual SVG Doodles (Re-tinted for Light Mode) */}
              {/* DNA Helix */}
              <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-[10%] left-[5%] opacity-15">
                <svg width="80" height="120" viewBox="0 0 80 120" fill="none">
                  <path d="M20 10 Q40 30 20 50 Q40 70 20 90" stroke="#6366f1" strokeWidth="3" />
                  <path d="M60 10 Q40 30 60 50 Q40 70 60 90" stroke="#a855f7" strokeWidth="3" />
                </svg>
              </motion.div>

              {/* Heartbeat Line */}
              <motion.div animate={{ opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-[20%] left-[10%] opacity-20">
                <svg width="150" height="60" viewBox="0 0 150 60">
                  <path d="M0 30 L30 30 L40 10 L50 50 L60 30 L150 30" stroke="#6366f1" strokeWidth="3" />
                </svg>
              </motion.div>

              {/* Medical Cross */}
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute bottom-[25%] right-[12%] opacity-10">
                <svg width="60" height="60" viewBox="0 0 60 60">
                  <rect x="22" y="5" width="16" height="50" rx="3" stroke="#64748b" strokeWidth="2" />
                  <rect x="5" y="22" width="50" height="16" rx="3" stroke="#64748b" strokeWidth="2" />
                </svg>
              </motion.div>

              {/* Pill */}
              <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-[50%] right-[5%] opacity-20">
                <svg width="80" height="40" viewBox="0 0 80 40">
                  <rect x="5" y="5" width="70" height="30" rx="15" stroke="#a855f7" strokeWidth="3" />
                  <line x1="40" y1="5" x2="40" y2="35" stroke="#6366f1" strokeWidth="2" />
                </svg>
              </motion.div>

              {/* Add more icons similarly with stroke="#64748b" (slate-500) or primary/accent colors */}
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 5s ease infinite;
        }
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;