import React from "react";
import Layout from "@/components/layout/Layout";
import { Shield, Calendar, MapPin, ArrowRight, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

// --- Decorative SVG Component (Ported from your source) ---
const AnimatedBackgroundSVG = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
    {/* Top Arrow Animation */}
    <div className="absolute top-0 left-[-5em] z-0 hidden lg:block">
      <svg xmlns="http://www.w3.org/2000/svg" width="270.11" height="649.9" overflow="visible">
        <style>{`
          .geo-arrow { fill: none; stroke: #2436A8; stroke-width: 2; stroke-miterlimit: 10 }
          .draw-in { stroke-dasharray: 1000; stroke-dashoffset: 10; animation: draw 15s ease-in-out alternate infinite; }
          @keyframes draw { from { stroke-dashoffset: 1000; } to { stroke-dashoffset: 0; } }
          .bounce-1 { animation: bounce-1 10s infinite ease; transform-origin: bottom; }
          .bounce-2 { animation: bounce-2 10s infinite ease; transform-origin: bottom; }
          .bounce-3 { animation: bounce-3 10s infinite ease; transform-origin: bottom; }
          @keyframes bounce-1 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(50px); } }
          @keyframes bounce-2 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-30px); } }
          @keyframes bounce-3 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(30px); } }
        `}</style>
        <g className="bounce-1">
          <path className="geo-arrow draw-in" d="M135.06 142.564L267.995 275.5 135.06 408.434 2.125 275.499z" />
        </g>
        <circle className="geo-arrow bounce-2" cx="194.65" cy="69.54" r="7.96" />
        <circle className="geo-arrow draw-in" cx="194.65" cy="39.5" r="7.96" />
        <circle className="geo-arrow bounce-3" cx="194.65" cy="9.46" r="7.96" />
        <g className="geo-arrow bounce-2">
          <path className="draw-in" d="M181.21 619.5l13.27 27 13.27-27zM194.48 644.5v-552" />
        </g>
      </svg>
    </div>

    {/* Dotted Circle Animation */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" className="animate-[spin_38s_linear_infinite]" width="352" height="352" overflow="visible">
          <circle cx="176" cy="176" r="174" fill="none" stroke="#C6B7E2" strokeWidth="2" strokeMiterlimit="10" strokeDasharray="12.921,11.9271"/>
        </svg>
    </div>
  </div>
);

const upcomingEvents = [
  {
    id: 1,
    title: "Mid-Year Conference 2025",
    description: "Annual mid-year conference featuring workshops, presentations, and networking opportunities.",
    date: "July 15-17, 2025",
    location: "Chennai",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=600&q=80",
    type: "Conference",
  },
  {
    id: 2,
    title: "CME Program on High Risk Pregnancy",
    description: "Continuing Medical Education program focusing on managing high-risk pregnancies.",
    date: "August 10, 2025",
    location: "Chennai",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
    type: "CME",
  },
  {
    id: 3,
    title: "Gynobotics Workshop",
    description: "Hands-on training on robotic-assisted gynecological procedures.",
    date: "September 5, 2025",
    location: "Chennai",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80",
    type: "Workshop",
  },
  {
    id: 4,
    title: "World Population Day Event",
    description: "Poster and slogan contest celebrating World Population Day.",
    date: "July 11, 2025",
    location: "Online",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=600&q=80",
    type: "Event",
  },
];

const hasEvents = true; 

const Events = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden bg-[#FAFAFD]">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C6B7E2] opacity-20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#F4A7B9] opacity-10 blur-[100px] rounded-full" />
        
        {/* Background SVG Animations */}
        <AnimatedBackgroundSVG />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial="initial" 
            animate="animate" 
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2436A8]/10 text-[#2436A8] mb-6 border border-[#2436A8]/20">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold uppercase tracking-wider">Academic Excellence</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-[#1E245C]">
              Our <span className="text-[#2436A8]">Events</span>
            </h1>
            <p className="text-lg text-muted-foreground italic">
              Empowering healthcare through knowledge, connection, and care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Events Grid */}
      <section className="py-16 bg-[#C6B7E2]/10 min-h-[400px] relative">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            {hasEvents ? (
              <motion.div 
                key="event-grid"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="grid md:grid-cols-2 gap-8"
              >
                {upcomingEvents.map((event, index) => (
                  <motion.div 
                    key={`${event.id}-${index}`} 
                    variants={fadeInUp}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#C6B7E2]/30 flex flex-col md:flex-row group"
                  >
                    <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-8 md:w-2/3 flex flex-col justify-center">
                      <span className="inline-block px-3 py-1 rounded-lg text-xs font-bold bg-[#F4A7B9]/20 text-[#2436A8] mb-4 w-fit uppercase tracking-tighter">
                        {event.type}
                      </span>
                      <h3 className="text-2xl font-serif font-bold mb-3 text-[#1E245C] group-hover:text-[#2436A8] transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                        {event.description}
                      </p>
                      <div className="flex flex-wrap gap-5 text-sm font-medium mt-auto">
                        <span className="flex items-center gap-2 text-[#2436A8]">
                          <Calendar className="w-4 h-4 text-[#F4A7B9]" />
                          {event.date}
                        </span>
                        <span className="flex items-center gap-2 text-[#2436A8]">
                          <MapPin className="w-4 h-4 text-[#F4A7B9]" />
                          {event.location}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="no-events"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <div className="w-64 h-64 mb-8">
                  <DotLottieReact
                    src="https://lottie.host/79075778-d05c-4861-9c60-a549c4021239/R3sWwM3f3G.lottie"
                    loop
                    autoplay
                  />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#1E245C] mb-2">No Upcoming Events</h3>
                <p className="text-muted-foreground max-w-md mb-8">
                  We're currently planning some exciting new sessions. Check back soon or subscribe to our newsletter for updates!
                </p>
                <button className="bg-[#2436A8] hover:bg-[#F4A7B9] text-white px-8 py-3 rounded-full transition-all duration-300 font-medium shadow-lg hover:shadow-[#F4A7B9]/40">
                  Notify Me
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-serif font-bold text-[#1E245C] border-l-4 border-[#F4A7B9] pl-4">
              Legacy <span className="text-[#2436A8]">& Past Milestones</span>
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <motion.div 
                key={item}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-[#FAFAFD] border border-[#C6B7E2]/20 hover:border-[#F4A7B9]/50 transition-all shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-[#2436A8]/5 flex items-center justify-center mb-4 text-[#2436A8]">
                  <Info className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#1E245C] mb-2">Annual Meet {2024 - item}</h4>
                <p className="text-sm text-muted-foreground mb-4">Successful completion of the regional medical symposium.</p>
                <button className="text-sm font-bold text-[#2436A8] flex items-center gap-2 hover:text-[#F4A7B9] transition-colors">
                  View Gallery <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;