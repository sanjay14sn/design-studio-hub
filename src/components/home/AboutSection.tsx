import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Target, Eye, Heart } from "lucide-react";

const AboutSection = () => {
  // Your Official Brand Palette
  const brand = {
    royalBlue: "#2436A8", // 60% - Core Trust
    softWhite: "#FAFAFD", // 20% - Main Background
    softLavender: "#C6B7E2", // 15% - Card backgrounds
    blushPink: "#F4A7B9", // 5%  - Emotional Accents
    textDarkBlue: "#1E245C", // Readability
  };

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: brand.softWhite }}
    >
      {/* Background Decorative Shape */}
      <div
        className="absolute w-96 h-96 -top-48 -right-48 blur-[120px] rounded-full opacity-20"
        style={{ backgroundColor: brand.softLavender }}
      />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ================= IMAGE SIDE ================= */}
          <div className="relative">
            <div className="relative z-10">
              <div
                className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4"
                style={{ borderColor: "white" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
                  alt="About COSMETIC GYNECOLOGY
SOCIETY OF INDIA Medical Team"
                  className="w-full h-[550px] object-cover"
                />
              </div>

              {/* Stats Card - Using Royal Blue for authority */}
              <div
                className="absolute -bottom-8 -right-4 bg-white rounded-3xl p-8 shadow-2xl border transition-transform hover:scale-105"
                style={{ borderColor: brand.softLavender }}
              >
                <div className="text-center">
                  <div
                    className="text-4xl font-serif font-bold"
                    style={{ color: brand.royalBlue }}
                  >
                    1934
                  </div>
                  <div className="text-xs uppercase tracking-widest font-bold opacity-60 mt-1">
                    Year Established
                  </div>
                </div>
              </div>

              {/* Decorative Heart Badge - The 5% Pink Accent */}
              <div
                className="absolute -top-6 -left-6 w-24 h-24 rounded-full flex items-center justify-center shadow-lg animate-bounce"
                style={{
                  backgroundColor: brand.blushPink,
                  animationDuration: "3s",
                }}
              >
                <Heart className="w-10 h-10 text-white fill-current" />
              </div>
            </div>

            {/* Background Decorative Frame */}
            <div
              className="absolute inset-0 rounded-[2.5rem] opacity-20 transform -rotate-3 scale-105 -z-10"
              style={{ backgroundColor: brand.softLavender }}
            />
          </div>

          {/* ================= CONTENT SIDE ================= */}
          <div className="space-y-8">
            <div
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full border"
              style={{
                backgroundColor: `${brand.royalBlue}10`,
                borderColor: `${brand.royalBlue}20`,
                color: brand.royalBlue,
              }}
            >
              <Shield className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-widest">
                Our Legacy
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl font-serif font-bold leading-tight"
              style={{ color: brand.royalBlue }}
            >
              Who We <span style={{ color: brand.blushPink }}>Are</span>
            </h2>

            <p
              className="text-lg leading-relaxed opacity-90"
              style={{ color: brand.textDarkBlue }}
            >
              The Obstetric and Gynaecological Society of Southern India (OGSSI)
              is dedicated to advancing maternal and child health. For nearly a
              century, we have been the pulse of clinical excellence in the
              region.
            </p>

            {/* Vision & Mission - Using the 15% Lavender for Soft Backgrounds */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div
                className="p-8 rounded-[2rem] border transition-all hover:shadow-lg"
                style={{
                  backgroundColor: `${brand.softLavender}30`,
                  borderColor: brand.softLavender,
                }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-sm"
                  style={{ backgroundColor: brand.royalBlue }}
                >
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3
                  className="font-serif font-bold text-xl mb-3"
                  style={{ color: brand.royalBlue }}
                >
                  Our Vision
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: brand.textDarkBlue }}
                >
                  To lead the transformation of women's healthcare through
                  innovation and education.
                </p>
              </div>

              <div
                className="p-8 rounded-[2rem] border transition-all hover:shadow-lg"
                style={{
                  backgroundColor: `${brand.softLavender}30`,
                  borderColor: brand.softLavender,
                }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-sm"
                  style={{ backgroundColor: brand.royalBlue }}
                >
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3
                  className="font-serif font-bold text-xl mb-3"
                  style={{ color: brand.royalBlue }}
                >
                  Our Mission
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: brand.textDarkBlue }}
                >
                  To advocate for safe birth practices and empower practitioners
                  across Southern India.
                </p>
              </div>
            </div>

            {/* Action Button - 5% Pink Pull */}
            <Link
              to="/about"
              className="group inline-flex items-center gap-3 px-10 py-4 rounded-full text-white font-bold transition-all hover:scale-105 shadow-xl shadow-pink-100"
              style={{ backgroundColor: brand.blushPink }}
            >
              Discover More
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
