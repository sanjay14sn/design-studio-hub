"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import EventsSection from "@/components/home/EventsSection";
import AboutSection from "@/components/home/AboutSection";
import PresidentMessage from "@/components/home/PresidentMessage";
import TeamSection from "@/components/home/TeamSection";
import StatsSection from "@/components/home/StatsSection";
import ProgramsSection from "@/components/home/ProgramsSection";
import PreviousEvents from "@/components/home/PreviousEvents";

const SplashScreen = () => (
  <motion.div
    initial={{ opacity: 1 }}
    exit={{
      opacity: 0,
      scale: 1.05,
      transition: { duration: 0.5, ease: "easeInOut" },
    }}
    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FAFAFD]"
  >
    <div className="relative z-10 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-32 h-32 mb-6"
      >
        {/* Fallback if cgsl.png is missing */}
        <img
          src="/cgsl.png"
          alt="Logo"
          className="w-full h-full object-contain"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </motion.div>

      <h2 className="text-2xl font-serif font-bold text-[#1E245C]">
        OGS<span className="text-[#2436A8]">CHENNAI</span>
      </h2>
      <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-[0.3em] mt-2">
        Academic Excellence
      </p>
    </div>
  </motion.div>
);

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Reduced to 2s for better UX
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#FAFAFD] min-h-screen">
      <AnimatePresence mode="wait">
        {loading && <SplashScreen key="loader" />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Layout>
            <HeroSection />
            {/* Added a wrapper with z-index to ensure it sits above any layout backgrounds */}
            <div className="relative z-10">
              <PreviousEvents />
            </div>
            <EventsSection />
            <AboutSection />
            <PresidentMessage />
            <StatsSection />
            <TeamSection />
            <ProgramsSection />
          </Layout>
        </motion.div>
      )}
    </div>
  );
};

export default Index;
