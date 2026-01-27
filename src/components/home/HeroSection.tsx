import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Activity, ShieldCheck } from "lucide-react";

const HeroSection = () => {
  // Official Brand Palette
  const brand = {
    royalBlue: "#2436A8",
    softWhite: "#FAFAFD",
    softLavender: "#C6B7E2",
    blushPink: "#F4A7B9",
    textDarkBlue: "#1E245C",
  };

  return (
    <section
      className="relative min-h-[95vh] flex items-center overflow-hidden font-sans bg-cover bg-center"
      style={{
        backgroundImage: `
          linear-gradient(
            135deg,
            ${brand.softWhite}ee 35%,
            ${brand.softLavender}66 100%
          ),
          url("https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1600&q=80")
        `,
      }}
    >
      {/* Floating Animation Styles */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
          .animate-float { animation: float 6s ease-in-out infinite; }
          .animate-float-delayed { animation: float 6s ease-in-out 2s infinite; }
        `}
      </style>

      {/* Optional Soft Glow */}
      <div
        className="absolute -top-[10%] -right-[5%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
        style={{ backgroundColor: brand.softLavender }}
      />

      {/* ================= CONTENT ================= */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-7 space-y-8">

            {/* Trust Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm"
              style={{
                backgroundColor: `${brand.royalBlue}10`,
                borderColor: `${brand.royalBlue}30`,
                color: brand.royalBlue,
              }}
            >
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-widest">
                90 Years of Clinical Excellence
              </span>
            </div>

            {/* Heading */}
            <h1
              className="text-5xl md:text-7xl font-bold leading-[1.1]"
              style={{ color: brand.royalBlue }}
            >
              Advancing <br />
              <span className="italic font-serif opacity-90">Women's</span> Health
              <br />
              <span
                className="text-4xl md:text-5xl block mt-2 opacity-80"
                style={{ color: brand.textDarkBlue }}
              >
                In Southern India
              </span>
            </h1>

            {/* Description */}
            <p
              className="text-lg md:text-xl max-w-xl leading-relaxed"
              style={{ color: brand.textDarkBlue }}
            >
              COSMETIC GYNECOLOGY SOCIETY OF INDIA is the cornerstone of maternal
              excellence, uniting thousands of professionals to shape the future
              of healthcare.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/membership"
                className="group px-8 py-4 rounded-full flex items-center justify-center gap-3 transition-all hover:brightness-110 shadow-lg shadow-pink-200 text-white"
                style={{ backgroundColor: brand.blushPink }}
              >
                <span className="font-bold">Join the Legacy</span>
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </Link>

              <Link
                to="/events"
                className="px-8 py-4 rounded-full border-2 bg-white/60 backdrop-blur-md font-bold transition-all hover:bg-white flex items-center justify-center gap-2"
                style={{
                  borderColor: brand.softLavender,
                  color: brand.royalBlue,
                }}
              >
                Upcoming Events
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-3 gap-4 p-8 rounded-3xl mt-12"
              style={{ backgroundColor: `${brand.softLavender}55` }}
            >
              <div>
                <p className="text-3xl font-bold" style={{ color: brand.royalBlue }}>
                  90+
                </p>
                <p className="text-[10px] uppercase font-bold opacity-60">Years</p>
              </div>
              <div
                className="border-x px-4"
                style={{ borderColor: `${brand.royalBlue}20` }}
              >
                <p className="text-3xl font-bold" style={{ color: brand.royalBlue }}>
                  5k+
                </p>
                <p className="text-[10px] uppercase font-bold opacity-60">
                  Members
                </p>
              </div>
              <div className="pl-4">
                <p className="text-3xl font-bold" style={{ color: brand.royalBlue }}>
                  24/7
                </p>
                <p className="text-[10px] uppercase font-bold opacity-60">
                  Support
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <div className="relative">

              {/* Image */}
              <div
                className="relative rounded-[3rem] overflow-hidden aspect-[4/5] shadow-2xl border-8"
                style={{ borderColor: brand.softWhite }}
              >
                <img
                  src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1000&q=80"
                  alt="Professional Care"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Live Badge */}
              <div
                className="absolute -top-6 -right-4 bg-white p-4 rounded-2xl shadow-xl border animate-float"
                style={{ borderColor: brand.softLavender }}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-3 w-3 relative">
                    <span
                      className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                      style={{ backgroundColor: brand.blushPink }}
                    />
                    <span
                      className="relative inline-flex rounded-full h-3 w-3"
                      style={{ backgroundColor: brand.blushPink }}
                    />
                  </span>
                  <span
                    className="text-sm font-bold"
                    style={{ color: brand.royalBlue }}
                  >
                    CME Live Today
                  </span>
                </div>
              </div>

              {/* Info Card */}
              <div
                className="absolute -bottom-8 -left-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border animate-float-delayed max-w-[220px]"
                style={{ borderColor: brand.softLavender }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${brand.blushPink}30` }}
                >
                  <Activity
                    className="w-6 h-6"
                    style={{ color: brand.royalBlue }}
                  />
                </div>
                <p
                  className="text-sm font-semibold leading-snug"
                  style={{ color: brand.textDarkBlue }}
                >
                  Promoting Safe Motherhood across the region.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
