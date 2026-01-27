import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";

// Team Data
const teamMembers = [
  { id: 1, name: "Dr. Sampath Kumari S", role: "President", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80" },
  { id: 2, name: "Dr. M.G Dhanalakshmi", role: "Vice President", image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&q=80" },
  { id: 3, name: "Dr. M. Meena", role: "Hon. Secretary", image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=400&q=80" },
  { id: 4, name: "Dr. Meenakshi Sundaram", role: "Hon. Treasurer", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80" },
  { id: 5, name: "Dr. Rajeshwari G", role: "Joint Secretary", image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&q=80" },
  { id: 6, name: "Dr. Aniruddha Verma", role: "Academic Chairperson", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80" },
  { id: 7, name: "Dr. Kavita Reddy", role: "Clinical Director", image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=400&q=80" },
  { id: 8, name: "Dr. S. Karthik", role: "Public Relations Officer", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80" },
];

const TeamSection = () => {
  const brand = {
    royalBlue: "#2436A8",    // 60%
    softWhite: "#FAFAFD",    // 20%
    softLavender: "#C6B7E2", // 15%
    blushPink: "#F4A7B9",    // 5%
    textDarkBlue: "#1E245C",
  };

  return (
    <section className="py-24" style={{ backgroundColor: brand.softWhite }}>
      <div className="container mx-auto px-6">
        
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20 space-y-4"
        >
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mx-auto"
            style={{ 
              backgroundColor: `${brand.royalBlue}10`, 
              borderColor: `${brand.royalBlue}20`,
              color: brand.royalBlue 
            }}
          >
            <Shield className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-widest">Leadership 2025-26</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-serif font-bold" style={{ color: brand.royalBlue }}>
            The <span style={{ color: brand.blushPink }}>Leadership</span> Council
          </h2>
          
          <div 
            className="h-[1px] w-40 mx-auto" 
            style={{ background: `linear-gradient(to right, transparent, ${brand.softLavender}, transparent)` }}
          />
        </motion.div>

        {/* ================= TEAM GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Image Container */}
              <div 
                className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border-4 shadow-xl group-hover:shadow-2xl transition-all duration-500"
                style={{ borderColor: "white" }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                />

                {/* Royal Blue Overlay (60%) */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t opacity-0 group-hover:opacity-90 transition-opacity duration-500" 
                  style={{ backgroundImage: `linear-gradient(to top, ${brand.royalBlue}, transparent)` }}
                />
                
                {/* Reveal Info */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-serif font-bold text-white mb-1">
                        {member.name}
                    </h3>
                    <p className="text-xs uppercase tracking-widest font-bold" style={{ color: brand.blushPink }}>
                        {member.role}
                    </p>
                    <div className="w-full h-[1px] bg-white/20 mt-4" />
                </div>
              </div>

              {/* Static Labels (Fades out on hover) */}
              <div className="mt-6 text-center group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-lg font-serif font-bold leading-tight" style={{ color: brand.royalBlue }}>
                  {member.name}
                </h3>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] mt-2 opacity-60" style={{ color: brand.textDarkBlue }}>
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= ELEGANT CTA ================= */}
        <div className="text-center mt-20">
          <Link
            to="/team"
            className="group relative inline-flex items-center gap-4 px-12 py-5 rounded-full text-white font-bold transition-all hover:scale-105 shadow-xl shadow-pink-100"
            style={{ backgroundColor: brand.blushPink }}
          >
            Explore Full Council
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;