import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, BookOpen, Users, Heart } from "lucide-react";

const programs = [
  {
    id: 1,
    title: "Clinical Workshops",
    description: "Specialized training in modern surgical and diagnostic techniques.",
    icon: BookOpen,
    items: ["Colposcopy Mastery", "6P's Framework", "Adolescent Health", "Advanced Hysteroscopy"],
  },
  {
    id: 2,
    title: "Community Outreach",
    description: "Extending care and awareness to the heart of the community.",
    icon: Users,
    items: ["National Girls Child Day", "Cancer Screening Camps", "Women's Health Check-ups", "Village Health Initiatives"],
  },
  {
    id: 3,
    title: "Public Health Forums",
    description: "Empowering the public through medical education and awareness.",
    icon: Heart,
    items: ["Breastfeeding Promotion", "Gynec-Oncology Awareness", "Maternal Nutrition", "Antenatal Yoga Sessions"],
  },
];

const ProgramsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">

        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary mx-auto">
            <Shield className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-widest">Our Portfolio</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
            Monthly <span className="text-accent">Programs</span>
          </h2>

          <p className="text-lg text-muted-foreground opacity-80">
            Regular educational programs and community outreach initiatives
            designed to bridge the gap between medical expertise and public health.
          </p>
        </div>

        {/* ================= PROGRAMS GRID ================= */}
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div
              key={program.id}
              className="relative p-10 rounded-[3rem] transition-all duration-500 hover:-translate-y-3 group overflow-hidden shadow-xl bg-primary"
            >
              {/* Decorative Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[80px] opacity-20 bg-secondary" />

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-inner transition-transform group-hover:rotate-6 bg-white/20">
                <program.icon className="w-8 h-8 text-accent" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-serif font-bold mb-4 text-white">
                {program.title}
              </h3>

              <p className="text-sm leading-relaxed mb-8 opacity-80 text-white/90">
                {program.description}
              </p>

              {/* Items List */}
              <ul className="space-y-4 mb-10">
                {program.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-secondary">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Action Link */}
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 font-bold text-white transition-all group/link"
              >
                View Details
                <ArrowRight className="w-5 h-5 transition-transform group-hover/link:translate-x-2 text-accent" />
              </Link>
            </div>
          ))}
        </div>

        {/* ================= BOTTOM CTA ================= */}
        <div className="mt-16 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-6 opacity-60 text-muted-foreground">
            Want to participate in our programs?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-white font-bold transition-all hover:scale-105 shadow-xl shadow-pink-100 bg-accent"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;