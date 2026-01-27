import React from "react";
import Layout from "@/components/layout/Layout";
import { Shield, Calendar, MapPin, ArrowRight, Info, Clock, Award, History } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

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

const pastEvents = [
  {
    id: "p1",
    year: "2024",
    title: "Annual Global Summit",
    summary: "Over 500 delegates participated in the 2024 summit.",
    icon: <Award className="w-5 h-5" />
  },
  {
    id: "p2",
    year: "2023",
    title: "Maternal Health Drive",
    summary: "Successfully reached 10+ rural districts for screening.",
    icon: <History className="w-5 h-5" />
  },
  {
    id: "p3",
    year: "2023",
    title: "Digital Health Expo",
    summary: "Exploring the future of AI in gynecological diagnostics.",
    icon: <Clock className="w-5 h-5" />
  },
  {
    id: "p4",
    year: "2022",
    title: "Silver Jubilee Celebration",
    summary: "Marking 25 years of excellence in medical training.",
    icon: <Shield className="w-5 h-5" />
  }
];

// Set this to false to see the empty state
const hasEvents = true; 

const Events = () => {
  // Animation Variants
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
      {/* Hero Section - Using Soft White & Lavender Background */}
      <section className="py-24 relative overflow-hidden bg-[#FAFAFD]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C6B7E2] opacity-20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#F4A7B9] opacity-10 blur-[100px] rounded-full" />
        
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

      {/* Conditional Rendering Logic */}
      <section className="py-16 bg-[#C6B7E2]/10 min-h-[400px]">
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
                      <span className="inline-block px-3 py-1 rounded-lg text-xs font-bold bg-[#F4A7B9]/20 text-[#2436A8] mb-4 w-fit">
                        {event.type}
                      </span>
                      <h3 className="text-2xl font-serif font-bold mb-3 text-[#1E245C] group-hover:text-[#2436A8] transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                        {event.description}
                      </p>
                      <div className="flex flex-wrap gap-5 text-sm font-medium">
                        <span className="flex items-center gap-2 text-[#2436A8]">
                          <Calendar className="w-4 h-4" />
                          {event.date}
                        </span>
                        <span className="flex items-center gap-2 text-[#2436A8]">
                          <MapPin className="w-4 h-4" />
                          {event.location}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              /* No Events - Lottie State */
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

      {/* Past Events Section - Enhanced Container */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#C6B7E2_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-20" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-end justify-between mb-12">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-serif font-bold text-[#1E245C] mb-4">
                Legacy <span className="text-[#2436A8]">& Past Milestones</span>
              </h2>
              <div className="w-24 h-1.5 bg-[#F4A7B9] rounded-full mb-6" />
              <p className="text-muted-foreground">
                Reflecting on our journey and the significant milestones that have shaped our community over the years.
              </p>
            </div>
            <div className="hidden lg:block">
               <History className="w-16 h-16 text-[#C6B7E2] opacity-40" />
            </div>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {pastEvents.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                className="relative group cursor-default"
              >
                <div className="h-full p-8 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 transition-all duration-300 group-hover:border-[#C6B7E2] group-hover:shadow-2xl group-hover:shadow-[#C6B7E2]/20">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 rounded-2xl bg-[#2436A8]/5 text-[#2436A8] group-hover:bg-[#2436A8] group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                    <span className="text-3xl font-serif font-black text-slate-200 group-hover:text-[#F4A7B9]/30 transition-colors">
                      {item.year}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-[#1E245C] mb-3">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.summary}
                  </p>
                  
                  {/* Subtle Arrow Decor */}
                  <div className="mt-6 flex items-center text-[#2436A8] font-semibold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    View Archive <ArrowRight className="ml-2 w-3 h-3" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;