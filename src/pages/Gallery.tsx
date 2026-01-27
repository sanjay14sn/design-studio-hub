"use client";

import React, { useRef } from "react";
import Layout from "@/components/layout/Layout";
import { Shield, ArrowUpRight, Camera, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";

/* -------------------------------------------------------------------------- */
/* GALLERY DATA                                                               */
/* -------------------------------------------------------------------------- */
const galleryItems = [
  {
    id: 1,
    title: "Annual Conference",
    tag: "Academic",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Clinical Workshop",
    tag: "Practical",
    image: "https://images.unsplash.com/photo-1580281657521-6c1b1a6b7d91?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Awareness Camp",
    tag: "Community",
    image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Leadership Meet",
    tag: "Executive",
    image: "https://images.unsplash.com/photo-1515168833906-d2a3b82b302a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Training Session",
    tag: "Education",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "CME Program",
    tag: "Medical",
    image: "https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=800&q=80",
  },
];

/* -------------------------------------------------------------------------- */
/* ANIMATIONS                                                                 */
/* -------------------------------------------------------------------------- */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

/* -------------------------------------------------------------------------- */
/* PAGE                                                                       */
/* -------------------------------------------------------------------------- */
const GalleryPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const xLeft = useTransform(scrollYProgress, [0, 1], [0, -600]);

  return (
    <Layout>
      <div ref={containerRef}>
        {/* ================= HERO ================= */}
        <section className="relative min-h-[85vh] flex items-center bg-[#FAFAFD] overflow-hidden pt-20">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#C6B7E2]/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#F4A7B9]/15 rounded-full blur-[120px]" />

          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2436A8]/5 border border-[#2436A8]/10 text-[#2436A8] mb-8">
                <Sparkles className="w-4 h-4 text-[#F4A7B9]" />
                <span className="text-xs font-bold uppercase tracking-widest">Our Visual Legacy</span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-serif font-bold text-[#1E245C] leading-[1.1] mb-8">
                Keep Up About Your <br />
                <span className="text-[#2436A8] italic">Health & Fitness</span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-lg text-[#1E245C]/60 max-w-md">
                Capturing moments of innovation, community care, and clinical excellence.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white">
                <img
                  src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80"
                  alt="Doctor"
                  className="w-full h-auto object-cover"
                />
              </div>

              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#2436A8] rounded-full flex items-center justify-center text-white">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-black text-[#F4A7B9]">Certified Care</p>
                    <p className="text-[#1E245C] font-bold">Excellence Since 1934</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ================= SCROLL TEXT ================= */}
        <div className="py-7 bg-[#1E245C] overflow-hidden">
          <motion.div style={{ x: xLeft }} className="whitespace-nowrap flex gap-20">
            {[1, 2, 3,4].map((i) => (
              <span key={i} className="text-6xl md:text-8xl font-serif font-black text-white/10 uppercase italic">
                COSMETIC • GYNECOLOGY • SOCIETY OF • INDIA •
              </span>
            ))}
          </motion.div>
        </div>

        {/* ================= GALLERY ================= */}
        <section className="py-32 bg-[#FAFAFD]">
          <div className="container mx-auto px-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {galleryItems.map((item) => (
                <motion.div key={item.id} variants={fadeInUp} whileHover={{ y: -15 }} className="group">
                  <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-white shadow-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#2436A8] via-[#2436A8]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all flex items-end p-10">
                      <div className="text-white">
                        <h3 className="text-2xl font-serif font-bold mb-4">{item.title}</h3>
                        <button className="flex items-center gap-2 text-[#F4A7B9] font-bold text-xs uppercase tracking-widest">
                          Expand Gallery <ArrowUpRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default GalleryPage;