"use client";

import React, { useRef } from "react";
import Layout from "@/components/layout/Layout";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

/* -------------------------------------------------------------------------- */
/* GALLERY DATA                                                               */
/* -------------------------------------------------------------------------- */
const galleryImages = [
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408324/83a943f7-cca7-48cd-8906-50ef77cc73b2_3_e8isky.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408323/79ec1af2-98c1-4f41-97c1-1a9a0f5f54db_3_l2gld2.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408322/73b294a4-3026-47f9-ba0f-0c0489a72de6_3_cairep.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408327/DOT01099_vy0py7.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408340/DOT09612_gb0s41.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408343/DSC00013_qhgfu6.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408343/DOT08396_wlbrvi.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408343/DOT01146_jumznb.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408346/DSC00156_clynjk.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408345/DSC00204_hssqvw.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408347/DSC00211_n37f7h.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408348/DSC08137_pehprk.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408354/DSC08580_isqbnj.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408356/DSC08546_mgcbiu.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408360/DSC00256_ri7bbi.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408362/DSC08658_qmqnav.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408369/DSC09006_bepop5.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408368/DSC08883_opfqhu.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408370/DSC08861_duszf9.jpg",
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408371/DSC08569_koxmvs.jpg",
];

const GalleryItem = ({ src, index }: { src: string; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  // Alternating heights and widths for that "International" editorial look
  const isLarge = index % 7 === 0;
  const isTall = index % 4 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: (index % 3) * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
      className={`relative overflow-hidden group bg-secondary/10 
        ${isLarge ? "md:col-span-2 md:row-span-2" : ""} 
        ${isTall ? "md:row-span-2" : ""} 
        rounded-sm`}
    >
      <motion.img
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6 }}
        src={src}
        alt={`Gallery Exhibit ${index + 1}`}
        className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-700"
      />
      {/* Sophisticated Overlay */}
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
        <span className="text-white text-xs tracking-[0.2em] uppercase font-light">Exhibit No. {index + 1}</span>
      </div>
    </motion.div>
  );
};

const GalleryPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  // Subtle Parallax for the Background Text
  const xLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <Layout>
      <div className="bg-[#f8f8f8] min-h-screen pb-32">
        {/* ================= MINIMALIST HEADER ================= */}
        <header className="pt-32 pb-16 px-6 container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline gap-4 border-b border-black/10 pb-8">
            <h1 className="text-6xl md:text-8xl font-serif tracking-tighter">
              Archive<span className="text-primary">.</span>
            </h1>
            <p className="max-w-xs text-sm uppercase tracking-widest text-muted-foreground leading-relaxed">
              A visual documentation of clinical excellence and aesthetic mastery by the Cosmetic Gynecology Society of India.
            </p>
          </div>
        </header>

        {/* ================= TICKER (International Style) ================= */}
        <div className="py-4 border-b border-black/10 bg-white overflow-hidden">
          <motion.div style={{ x: xLeft }} className="whitespace-nowrap flex gap-12 items-center">
            {[1, 2, 3].map((i) => (
              <span key={i} className="text-sm tracking-[0.5em] font-light uppercase">
                Global Standards • Clinical Precision • Aesthetic Innovation •
              </span>
            ))}
          </motion.div>
        </div>

        {/* ================= MASONRY-STYLE GRID ================= */}
        <section className="mt-16 px-6 container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[250px] gap-4">
            {galleryImages.map((src, index) => (
              <GalleryItem key={index} src={src} index={index} />
            ))}
          </div>
        </section>

        {/* ================= FOOTER CTA ================= */}
        <footer className="mt-32 text-center">
          <button className="px-12 py-4 border border-black text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-colors duration-500">
            View Full Archive
          </button>
        </footer>
      </div>
    </Layout>
  );
};

export default GalleryPage;