import React, { useEffect, useState, useRef } from "react";

const stats = [
  { value: 1934, label: "Founded in", suffix: "" },
  { value: 5000, label: "Active Members", suffix: "+" },
  { value: 10000, label: "Doctors Trained", suffix: "+" },
  { value: 91, label: "Legacy Years", suffix: "+" },
];

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const brand = {
    royalBlue: "#2436A8",
    softWhite: "#FAFAFD",
    softLavender: "#C6B7E2",
    blushPink: "#F4A7B9",
    textDarkBlue: "#1E245C",
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: brand.softWhite }}
    >
      {/* Background Decoration - 15% Soft Lavender */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] opacity-20 pointer-events-none"
        style={{ backgroundColor: brand.softLavender }} 
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-1000 transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Decorative Dot - 5% Blush Pink */}
              <div 
                className="w-2 h-2 rounded-full mx-auto mb-4" 
                style={{ backgroundColor: brand.blushPink }}
              />

              <div className="relative inline-block">
                <CountUp
                  end={stat.value}
                  suffix={stat.suffix}
                  isVisible={isVisible}
                  color={brand.royalBlue}
                  suffixColor={brand.blushPink}
                />
              </div>
              
              <p 
                className="text-xs uppercase tracking-[0.2em] font-bold mt-4 opacity-70"
                style={{ color: brand.textDarkBlue }}
              >
                {stat.label}
              </p>

              {/* Mobile/Tablet Divider */}
              <div 
                className="w-12 h-[2px] mx-auto mt-6 lg:hidden" 
                style={{ backgroundColor: `${brand.softLavender}60` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CountUp = ({ end, suffix, isVisible, color, suffixColor }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [end, isVisible]);

  return (
    <span 
      className="text-5xl md:text-6xl font-serif font-bold tracking-tight"
      style={{ color: color }}
    >
      {count.toLocaleString()}
      <span style={{ color: suffixColor }}>{suffix}</span>
    </span>
  );
};

export default StatsSection;