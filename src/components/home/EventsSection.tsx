import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MapPin, Shield } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Mid-Year Conference 2026",
    description: "Annual mid-year conference featuring workshops and networking opportunities for healthcare professionals.",
    date: "July 15-17, 2026",
    location: "Chennai",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "CME on High Risk Pregnancy",
    description: "Continuing Medical Education program focusing on latest developments in maternal-fetal medicine.",
    date: "August 10, 2026",
    location: "Madurai",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Gynobotics Workshop",
    description: "Hands-on training workshop on robotic-assisted gynecological procedures and surgical innovation.",
    date: "September 5, 2026",
    location: "Chennai",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80",
  },
];

const EventsSection = () => {
  const brand = {
    royalBlue: "#2436A8",
    softWhite: "#FAFAFD",
    softLavender: "#C6B7E2",
    blushPink: "#F4A7B9",
    textDarkBlue: "#1E245C",
  };

  return (
    <section className="py-24" style={{ backgroundColor: brand.softWhite }}>
      <div className="container mx-auto px-6">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mx-auto"
            style={{ 
              backgroundColor: `${brand.royalBlue}10`, 
              borderColor: `${brand.royalBlue}20`,
              color: brand.royalBlue 
            }}
          >
            <Shield className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-widest">Academic Calendar</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold" style={{ color: brand.royalBlue }}>
            Upcoming <span style={{ color: brand.blushPink }}>Events</span>
          </h2>
          
          <p className="text-lg opacity-80" style={{ color: brand.textDarkBlue }}>
            Join our conferences and educational programs designed to advance 
            medical knowledge and clinical skills.
          </p>
        </div>

        {/* ================= EVENTS GRID ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="group rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl bg-white border border-transparent"
              style={{ 
                backgroundColor: "white",
                boxShadow: `0 10px 30px -15px ${brand.royalBlue}30`
              }}
            >
              {/* Image Header */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Date Badge */}
                <div className="absolute bottom-4 left-6 flex items-center gap-2 text-white">
                  <Calendar className="w-4 h-4" style={{ color: brand.blushPink }} />
                  <span className="text-sm font-medium">{event.date}</span>
                </div>
              </div>

              {/* Content - Using 15% Lavender for the inner card feel */}
              <div className="p-8 space-y-4" style={{ backgroundColor: `${brand.softLavender}15` }}>
                <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider" style={{ color: brand.blushPink }}>
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>
                
                <h3 className="text-2xl font-serif font-bold leading-tight transition-colors group-hover:text-blue-700" style={{ color: brand.royalBlue }}>
                  {event.title}
                </h3>
                
                <p className="text-sm leading-relaxed opacity-70" style={{ color: brand.textDarkBlue }}>
                  {event.description}
                </p>

                <Link
                  to={`/events/${event.id}`}
                  className="inline-flex items-center gap-2 font-bold text-sm pt-4 group/link"
                  style={{ color: brand.royalBlue }}
                >
                  Learn More 
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ================= VIEW ALL BUTTON (The 5% Pink Accent) ================= */}
        <div className="text-center mt-16">
          <Link 
            to="/events" 
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-white font-bold transition-all hover:scale-105 shadow-xl shadow-pink-100"
            style={{ backgroundColor: brand.blushPink }}
          >
            Explore Full Calendar
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;