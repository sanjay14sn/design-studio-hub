import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Quote } from "lucide-react";

const PresidentMessage = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none bg-secondary" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ================= CONTENT SIDE ================= */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary">
              <Shield className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-widest">Leadership</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-primary">
              President's <span className="text-accent">Message</span>
            </h2>

            <div className="relative">
              {/* Large Quote Mark */}
              <Quote className="absolute -top-6 -left-6 w-16 h-16 opacity-20 text-secondary" />
              <blockquote className="text-lg leading-relaxed pl-8 border-l-4 italic text-muted-foreground border-primary">
                "The Cosmetic Gynecology Society of India (CGSI) has been formed with a shared vision to develop this evolving subspecialty in a structured, ethical, and evidence-based manner."
                <br />
                <br />
                "The primary goal of the society is to promote scientific education, formulate clinical guidelines, encourage research, and create a strong academic and professional platform for clinicians who are practicing or aspiring to practice cosmetic gynecology in India, while prioritizing patient safety and ethical practice."
              </blockquote>
            </div>

            {/* Signature Area */}
            <div className="flex items-center gap-5 pt-4">
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 shadow-md border-secondary flex-shrink-0">
                <img
                  src="/deepa.png"
                  alt="Dr. Deepa Ganesh"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://ui-avatars.com/api/?name=Deepa+Ganesh&background=0D1B2A&color=fff";
                  }}
                />
              </div>
              <div>
                <div className="font-serif font-bold text-xl text-primary">
                  Dr. Deepa Ganesh
                </div>
                <div className="text-sm font-bold uppercase tracking-wide opacity-70 text-muted-foreground">
                  President, OGSSI 2025-2026
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className="group inline-flex items-center gap-3 px-10 py-4 rounded-full text-white font-bold transition-all hover:brightness-110 shadow-lg bg-primary"
            >
              Full Address
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          {/* ================= IMAGE SIDE ================= */}
          <div className="relative order-1 lg:order-2">
            <div className="relative z-10">
              {/* Added aspect-square or specific height with better object fit */}
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-white">
                <img
                  src="https://res.cloudinary.com/ddibq0tya/image/upload/v1771400393/DOT01099_2_gtshvq.jpg"
                  alt="Presidential Portrait"
                  className="w-full h-[500px] lg:h-[600px] object-cover object-top"
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/600x800?text=President+Message";
                  }}
                />
              </div>
            </div>

            {/* Background Decorative Frame */}
            <div className="absolute inset-0 rounded-[3rem] opacity-30 transform rotate-3 scale-105 -z-10 bg-secondary" />

            {/* Floating Theme Element */}
            <div className="absolute -bottom-6 -left-6 md:-left-8 rounded-3xl p-6 md:p-8 shadow-2xl bg-accent z-20">
              <div className="text-3xl md:text-4xl font-serif font-bold text-white">
                2025-26
              </div>
              <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/90 mt-1">
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