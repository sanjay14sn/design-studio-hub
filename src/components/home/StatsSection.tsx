import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Award, Calendar } from "lucide-react";

const stats = [
  { value: 1934, label: "Founded in", suffix: "", icon: Calendar, color: "from-blue-500 to-cyan-500" },
  { value: 5000, label: "Active Members", suffix: "+", icon: Users, color: "from-primary to-orange-500" },
  { value: 10000, label: "Doctors Trained", suffix: "+", icon: Award, color: "from-purple-500 to-pink-500" },
  { value: 91, label: "Legacy Years", suffix: "+", icon: TrendingUp, color: "from-accent to-teal-500" },
];

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
      className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background"
    >
      {/* Background Tech Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                           linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full blur-[100px] opacity-20 bg-primary pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] opacity-20 bg-accent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative group"
            >
              {/* Card Container */}
              <div className="relative p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50 hover:border-primary/30 transition-all duration-500 overflow-hidden">

                {/* Animated Border Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-10 blur-xl`} />
                </div>

                {/* Icon */}
                <div className="relative mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} p-0.5 mx-auto`}>
                    <div className="w-full h-full bg-background rounded-xl flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Counter */}
                <div className="relative">
                  <CountUp
                    end={stat.value}
                    suffix={stat.suffix}
                    isVisible={isVisible}
                    gradient={stat.color}
                  />
                </div>

                {/* Label */}
                <p className="text-xs uppercase tracking-[0.2em] font-bold mt-4 opacity-60 text-muted-foreground">
                  {stat.label}
                </p>

                {/* Scan Line Effect */}
                <motion.div
                  animate={{ y: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: index * 0.5 }}
                  className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CountUp = ({ end, suffix, isVisible, gradient }) => {
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
    <div className="font-mono">
      <span className={`text-4xl md:text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br ${gradient}`}>
        {count.toLocaleString()}
        <span className="text-foreground/80">{suffix}</span>
      </span>
    </div>
  );
};

export default StatsSection;