import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MapPin, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";

const events = [
  {
    id: 1,
    title: "Mid-Year Conference 2026",
    description: "Annual mid-year conference featuring workshops and networking opportunities for healthcare professionals.",
    date: "July 15-17, 2026",
    location: "Chennai",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=600&q=80",
    category: "Conference"
  },
  {
    id: 2,
    title: "CME on High Risk Pregnancy",
    description: "Continuing Medical Education program focusing on latest developments in maternal-fetal medicine.",
    date: "August 10, 2026",
    location: "Madurai",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
    category: "Workshop"
  },
  {
    id: 3,
    title: "Gynobotics Workshop",
    description: "Hands-on training workshop on robotic-assisted gynecological procedures and surgical innovation.",
    date: "September 5, 2026",
    location: "Chennai",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80",
    category: "Training"
  },
];

const EventsSection = () => {
  return (
    <section data-section="events" className="py-24 relative overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-1/2 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary mx-auto"
          >
            <Zap className="w-4 h-4 fill-primary" />
            <span className="text-xs font-bold uppercase tracking-widest">Global Gathering</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Simulations</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground opacity-80"
          >
            Join our expert-led conferences and educational programs designed to advance
            medical knowledge through immersive experiences.
          </motion.p>
        </div>

        {/* ================= EVENTS GRID ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-[2rem] overflow-hidden bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Image Header */}
              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none mix-blend-overlay" />
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Date Badge */}
                <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white border-t border-white/20 pt-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{event.date}</span>
                  </div>
                  <span className="px-2 py-1 rounded bg-white/20 text-[10px] font-bold uppercase backdrop-blur-md">{event.category}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-4">
                <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-accent/80 group-hover:text-accent transition-colors">
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>

                <h3 className="text-2xl font-bold leading-tight group-hover:text-primary transition-colors text-foreground">
                  {event.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground opacity-70">
                  {event.description}
                </p>

                <div className="pt-4 flex items-center justify-between">
                  <Link
                    to={`/events/${event.id}`}
                    className="inline-flex items-center gap-2 font-bold text-sm text-foreground hover:text-primary transition-colors group/link"
                  >
                    Register Now
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-2" />
                  </Link>
                  <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-white -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= VIEW ALL BUTTON ================= */}
        <div className="text-center mt-16">
          <Link
            to="/events"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-primary-foreground font-bold transition-all hover:scale-105 shadow-xl shadow-primary/20 bg-primary hover:bg-primary/90 hover:glow"
          >
            Access All Protocols
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;