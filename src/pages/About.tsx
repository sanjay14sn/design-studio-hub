import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Target,
  Eye,
  Heart,
  Award,
  Users,
  BookOpen,
  ChevronRight,
  Activity,
  Globe,
} from "lucide-react";
import Layout from "@/components/layout/Layout";

// Color Palette Reference:
// Primary Royal Blue: #2436A8
// Blush Pink: #F4A7B9
// Soft Lavender: #C6B7E2
// Soft White: #FAFAFD
// Text Dark Blue: #1E245C

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <Layout>
      <div className="min-h-screen bg-[#FAFAFD] text-[#1E245C] font-sans selection:bg-[#F4A7B9] selection:text-white">

        {/* --- HERO SECTION --- */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-[#2436A8]">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[#C6B7E2] opacity-10 rounded-l-full blur-3xl translate-x-1/2" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#F4A7B9] opacity-10 rounded-full blur-3xl" />

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div
                variants={fadeIn}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F4A7B9]/20 border border-[#F4A7B9]/30 text-[#F4A7B9] mb-6 shadow-sm"
              >
                <Shield className="w-4 h-4" />
                <span className="text-sm font-bold uppercase tracking-widest">
                  Est. 1934
                </span>
              </motion.div>

              <motion.h1
                variants={fadeIn}
                className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight"
              >
                Pioneering{" "}
                <span className="text-[#F4A7B9]">Women's Wellness</span> for Nearly
                a Century
              </motion.h1>

              <motion.p
                variants={fadeIn}
                className="text-xl text-[#FAFAFD]/80 leading-relaxed mb-10"
              >
                The Obstetric and Gynaecological Society of Southern India (OGSSI)
                stands as a beacon of clinical excellence and compassionate care.
              </motion.p>

              <motion.div variants={fadeIn}>
                <button className="bg-[#F4A7B9] hover:bg-[#ef92a8] text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center gap-2 mx-auto group">
                  Join Our Community
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* --- STATS STRIP --- */}
        <section className="relative -mt-10 z-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Members", value: "5,000+" },
                { label: "Years of Legacy", value: "90+" },
                { label: "Annual Events", value: "50+" },
                { label: "Lives Impacted", value: "1M+" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-2xl shadow-xl border border-[#C6B7E2]/30 text-center"
                >
                  <div className="text-2xl font-bold text-[#2436A8]">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#1E245C]/60 uppercase tracking-tighter">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- HISTORY SECTION --- */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                className="lg:w-1/2 relative"
              >
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#C6B7E2] rounded-3xl translate-x-4 translate-y-4 -z-10" />
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
                  alt="Medical History"
                  className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>

              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 50 }}
                className="lg:w-1/2 space-y-8"
              >
                <h2 className="text-4xl font-serif font-bold text-[#2436A8]">
                  The First of Its Kind: <br />
                  <span className="text-[#F4A7B9]">Our 1934 Legacy</span>
                </h2>

                <p className="text-lg leading-relaxed text-[#1E245C]/80">
                  OGSSI was the first official Obstetric and Gynaecological
                  professional body in India. What started as a small gathering
                  of visionaries has evolved into a powerhouse of research,
                  advocacy, and training.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex gap-4 items-start">
                    <div className="mt-1 bg-[#C6B7E2]/30 p-2 rounded-lg text-[#2436A8]">
                      <Activity size={20} />
                    </div>
                    <p className="text-sm font-medium">
                      Standards of maternal care optimization
                    </p>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="mt-1 bg-[#C6B7E2]/30 p-2 rounded-lg text-[#2436A8]">
                      <Globe size={20} />
                    </div>
                    <p className="text-sm font-medium">
                      Global collaboration with FIGO & FOGSI
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* --- VISION & MISSION (LAVENDER CARDS) --- */}
      <section className="py-24 bg-[#C6B7E2]/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-10 rounded-[2rem] bg-[#C6B7E2]/20 border border-[#C6B7E2] group transition-colors hover:bg-white"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#2436A8] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-serif font-bold mb-4 text-[#2436A8]">Our Vision</h3>
              <p className="text-lg text-[#1E245C]/70 leading-relaxed">
                To be a leading organization in women’s healthcare and medical education, 
                setting the gold standard for practices in Southern India and beyond, 
                ensuring every woman has access to dignified and elite medical care.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="p-10 rounded-[2rem] bg-[#2436A8] text-white group"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#F4A7B9] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-serif font-bold mb-4">Our Mission</h3>
              <p className="text-lg text-[#FAFAFD]/80 leading-relaxed">
                To enhance maternal care, advocate for women’s health, and promote 
                safe birth practices through continuous education, rigorous research, 
                and extensive community outreach programs across the region.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

        {/* --- CTA SECTION --- */}
        <section className="py-20 bg-[#F4A7B9]/10 border-t border-[#F4A7B9]/20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">
              Ready to be part of the legacy?
            </h2>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-[#2436A8] text-white px-10 py-4 rounded-full font-bold hover:shadow-xl transition-all">
                Register as Member
              </button>
              <button className="bg-white border-2 border-[#2436A8] text-[#2436A8] px-10 py-4 rounded-full font-bold hover:bg-[#2436A8] hover:text-white transition-all">
                View Events
              </button>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default About;
