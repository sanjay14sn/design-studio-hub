import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Quote } from "lucide-react";

const PresidentMessage = () => {
  // Your Official Brand Palette
  const brand = {
    royalBlue: "#2436A8",    // 60%
    softWhite: "#FAFAFD",    // 20%
    softLavender: "#C6B7E2", // 15%
    blushPink: "#F4A7B9",    // 5%
    textDarkBlue: "#1E245C",
  };

  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: brand.softWhite }}>
      
      {/* Decorative background element */}
      <div 
        className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none"
        style={{ backgroundColor: brand.softLavender }}
      />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* ================= CONTENT SIDE ================= */}
          <div className="space-y-8 order-2 lg:order-1">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border"
              style={{ 
                backgroundColor: `${brand.royalBlue}10`, 
                borderColor: `${brand.royalBlue}20`,
                color: brand.royalBlue 
              }}
            >
              <Shield className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-widest">Leadership</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight" style={{ color: brand.royalBlue }}>
              President's <span style={{ color: brand.blushPink }}>Message</span>
            </h2>

            <div className="relative">
              {/* Large Quote Mark - Using 15% Lavender tone */}
              <Quote 
                className="absolute -top-6 -left-6 w-16 h-16 opacity-20" 
                style={{ color: brand.softLavender }}
              />
              <blockquote 
                className="text-lg leading-relaxed pl-8 border-l-4 italic"
                style={{ 
                  color: brand.textDarkBlue,
                  borderColor: brand.royalBlue 
                }}
              >
                "It is indeed satisfying, rather gratifying that in the 91st year of OGSSI 
                I am given the onerous task of leading it from the front! Thanks to all members, 
                seniors and past EC members for having reposed their faith in me."
                <br /><br />
                "1934 saw the genesis of OGSSI—the first official OG professional body in India. 
                It has been the nest for many doyens and stalwarts over the years."
              </blockquote>
            </div>

            {/* Signature Area */}
            <div className="flex items-center gap-5 pt-4">
              <div 
                className="w-20 h-20 rounded-full overflow-hidden border-4 shadow-md"
                style={{ borderColor: brand.softLavender }}
              >
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80"
                  alt="Dr. Sampath Kumari S"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-serif font-bold text-xl" style={{ color: brand.royalBlue }}>
                  Dr. Sampath Kumari S
                </div>
                <div className="text-sm font-bold uppercase tracking-wide opacity-70" style={{ color: brand.textDarkBlue }}>
                  President, OGSSI 2025-2026
                </div>
              </div>
            </div>

            <Link 
              to="/about" 
              className="group inline-flex items-center gap-3 px-10 py-4 rounded-full text-white font-bold transition-all hover:brightness-110 shadow-lg"
              style={{ backgroundColor: brand.royalBlue }}
            >
              Full Address
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          {/* ================= IMAGE SIDE ================= */}
          <div className="relative order-1 lg:order-2">
            <div className="relative z-10">
              <div 
                className="rounded-[3rem] overflow-hidden shadow-2xl border-8"
                style={{ borderColor: "white" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80"
                  alt="Presidential Desk"
                  className="w-full h-[550px] object-cover"
                />
              </div>
            </div>

            {/* Background Decorative Frame - 15% Lavender */}
            <div 
              className="absolute inset-0 rounded-[3rem] opacity-30 transform rotate-3 scale-105 -z-10"
              style={{ backgroundColor: brand.softLavender }}
            />
            
            {/* Floating Theme Element - 5% Pink Pull */}
            <div 
              className="absolute -bottom-8 -left-8 rounded-3xl p-8 shadow-2xl animate-float-delayed"
              style={{ backgroundColor: brand.blushPink }}
            >
              <div className="text-4xl font-serif font-bold text-white">2025-26</div>
              <div className="text-xs font-bold uppercase tracking-widest text-white/90 mt-1">
                The Theme Year
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PresidentMessage;