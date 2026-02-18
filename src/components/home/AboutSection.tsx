import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart, Activity } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Background Decorative Shape */}
      <div className="absolute w-[800px] h-[800px] -top-[400px] -right-[200px] blur-[120px] rounded-full opacity-10 bg-gradient-to-br from-primary to-accent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ================= IMAGE SIDE ================= */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 group">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-[0_0_50px_-12px_rgba(var(--primary),0.3)] border-2 border-white/10 group-hover:border-primary/50">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay z-10 pointer-events-none" />
                <img
                  src="https://res.cloudinary.com/ddibq0tya/image/upload/v1771400725/WhatsApp_Image_2026-02-10_at_12.42.33_PM_hpkzxg.jpg"
                  alt="Cosmetic Gynecology Society of India Medical Team"
                  className="w-full h-[550px] object-cover filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Stats Card */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-8 -right-4 bg-background/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-primary/20"
              >
                <div className="text-center">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    CGSI
                  </div>
                  <div className="text-xs uppercase tracking-widest font-bold opacity-60 mt-1 text-foreground">
                    Established Platform
                  </div>
                </div>
              </motion.div>

              {/* Decorative Pulse */}
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full flex items-center justify-center shadow-lg bg-background/50 backdrop-blur-sm border border-primary/20">
                <div className="relative flex items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-20"></span>
                  <Heart className="w-8 h-8 text-primary fill-primary/20 relative z-10" />
                </div>
              </div>
            </div>

            {/* Background Grid */}
            <div className="absolute inset-0 rounded-[2.5rem] border border-primary/10 transform rotate-6 scale-105 -z-10 opacity-50" />
            <div className="absolute inset-0 rounded-[2.5rem] border border-accent/10 transform -rotate-3 scale-105 -z-20 opacity-50" />
          </motion.div>

          {/* ================= CONTENT SIDE ================= */}
          <div className="space-y-8">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary"
            >
              <Activity className="w-4 h-4 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest">
                About CGSI
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold leading-tight text-foreground"
            >
              Cosmetic Gynecology Society of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                India
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg leading-relaxed opacity-80 text-muted-foreground border-l-2 border-primary/20 pl-6"
            >
              The Cosmetic Gynecology Society of India (CGSI) has been formed
              with a shared vision to develop this evolving subspecialty in a
              structured, ethical, and evidence-based manner. The society aims to
              promote scientific education, formulate clinical guidelines,
              encourage research, and create a strong academic and professional
              platform for clinicians practicing or aspiring to practice cosmetic
              gynecology in India, while always prioritizing patient safety and
              ethical medical practice.
            </motion.p>

            {/* Vision & Mission */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {[
                {
                  icon: Eye,
                  title: "Our Vision",
                  desc: "To advance cosmetic gynecology in India through structured education, ethical practice, and evidence-based clinical excellence."
                },
                {
                  icon: Target,
                  title: "Our Mission",
                  desc: "To promote research, develop clinical guidelines, support practitioner training, and ensure patient safety while building a strong academic Society."
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-[2rem] border transition-all duration-300 hover:shadow-lg bg-card/40 backdrop-blur-sm border-border hover:border-primary/30 group"
                >
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-sm bg-gradient-to-br from-primary to-accent group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="font-bold text-xl mb-2 text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-muted-foreground opacity-90">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Link
                to="/about"
                className="group inline-flex items-center gap-3 px-10 py-4 rounded-full text-primary-foreground font-bold transition-all hover:scale-105 shadow-xl shadow-primary/20 bg-primary hover:bg-primary/90"
              >
                Discover More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;