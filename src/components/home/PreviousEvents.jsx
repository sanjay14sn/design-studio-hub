"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const events = [
  {
    id: 1,
    title: "High Risk Pregnancy",
    date: "11th May 2025",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    pdfLink: "#",
  },
  {
    id: 2,
    title: "CME Program",
    description: "SOUTHERN INDIA",
    date: "13th April 2025",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    pdfLink: "#",
  },
  {
    id: 3,
    title: "Anemia Screening Camp",
    description: "39 detected as anemic; 42 provided with ABHA IDs.",
    date: "Ongoing 2025",
    image: "https://images.unsplash.com/photo-1584515606965-300483849925?auto=format&fit=crop&w=800&q=80",
    pdfLink: "#",
  },
  {
    id: 4,
    title: "Anemia Screening Camp",
    description: "39 detected as anemic; 42 provided with ABHA IDs.",
    date: "Ongoing 2025",
    image: "https://images.unsplash.com/photo-1584515606965-300483849925?auto=format&fit=crop&w=800&q=80",
    pdfLink: "#",
  },
  {
    id: 5,
    title: "Anemia Screening Camp",
    description: "39 detected as anemic; 42 provided with ABHA IDs.",
    date: "Ongoing 2025",
    image: "https://images.unsplash.com/photo-1584515606965-300483849925?auto=format&fit=crop&w=800&q=80",
    pdfLink: "#",
  },
];

const PreviousEvents = () => {
  const scrollRef = useRef(null);
  const rafRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const itemWidth = 380 + 24; // card width + gap
  const totalItems = events.length;

  // Smooth continuous auto-scroll using RAF
  const autoScroll = useCallback(() => {
    if (scrollRef.current && !isPaused) {
      scrollRef.current.scrollLeft += 0.8; // Continuous smooth scroll speed
      
      // Infinite loop logic
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      if (scrollLeft >= scrollWidth * 0.5) { // Halfway through duplicates
        scrollRef.current.scrollLeft = scrollLeft - (itemWidth * totalItems);
      }
      
      rafRef.current = requestAnimationFrame(autoScroll);
    }
  }, [isPaused, itemWidth, totalItems]);

  // Duplicate items for seamless infinite scroll
  const infiniteEvents = [...events, ...events, ...events];

  useEffect(() => {
    // Start auto-scroll
    rafRef.current = requestAnimationFrame(autoScroll);
    
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [autoScroll]);

  // Pause/Resume handlers
  const handleMouseEnter = () => {
    setIsPaused(true);
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    rafRef.current = requestAnimationFrame(autoScroll);
  };

  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * itemWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 px-6 bg-[#FAFAFD] relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="h-[2px] w-8 bg-[#F4A7B9]" />
              <span className="text-[#2436A8] text-xs font-bold tracking-widest uppercase">Archive</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1E245C]">
              Our <span className="text-[#2436A8]">Previous</span> Events
            </h2>
          </div>

          <div className="flex gap-3">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToIndex(Math.max(0, currentIndex - 1))}
              className="p-3 rounded-full border border-[#C6B7E2] text-[#2436A8] hover:bg-white hover:shadow-md transition-all duration-200"
              aria-label="Previous event"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M15 19l-7-7 7-7"/>
              </svg>
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToIndex(currentIndex + 1)}
              className="p-3 rounded-full bg-[#2436A8] text-white shadow-md hover:shadow-lg transition-all duration-200"
              aria-label="Next event"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7"/>
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mb-8 gap-2">
          {events.map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index ? 'bg-[#2436A8] scale-125 shadow-md' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              onClick={() => scrollToIndex(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to event ${index + 1}`}
            />
          ))}
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-hidden" // Changed from overflow-x-auto to overflow-hidden
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleMouseEnter}
          onTouchEnd={handleMouseLeave}
        >
          {infiniteEvents.map((event, index) => (
            <motion.div 
              key={`${event.id}-${index}`}
              className="min-w-[300px] md:min-w-[380px] flex-shrink-0"
              initial={{ opacity: 0.7, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02, zIndex: 10 }}
            >
              <div className="group relative h-[480px] rounded-3xl overflow-hidden bg-[#1E245C] shadow-xl hover:shadow-2xl transition-all duration-500 cursor-grab active:cursor-grabbing">
                <img
                  src={event.image}
                  alt={event.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                  onError={(e) => { 
                    e.target.src = 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=800'; 
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E245C]/90 via-transparent to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="text-[#F4A7B9] text-[10px] font-bold tracking-tighter uppercase">{event.date}</span>
                  <h3 className="text-xl md:text-2xl font-bold mt-1 mb-4 leading-tight">{event.title}</h3>
                  {event.description && (
                    <p className="text-sm opacity-90 mb-6 leading-relaxed line-clamp-2">{event.description}</p>
                  )}
                  <a
                    href={event.pdfLink}
                    className="flex items-center justify-center w-full py-3 bg-white/90 backdrop-blur-sm text-[#1E245C] rounded-xl font-bold text-sm hover:bg-white hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group-hover:translate-y-[-2px]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VIEW EVENT PDF →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default PreviousEvents;
