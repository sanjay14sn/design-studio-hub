import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 1934, label: "Established in", suffix: "" },
  { value: 5000, label: "Members Leading", suffix: "+" },
  { value: 10000, label: "Professionals Trained", suffix: "+" },
  { value: 90, label: "Years of Excellence", suffix: "+" },
];

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section ref={sectionRef} className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full gradient-bg" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stats-item"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CountUp
                end={stat.value}
                suffix={stat.suffix}
                isVisible={isVisible}
              />
              <div className="text-muted-foreground mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface CountUpProps {
  end: number;
  suffix: string;
  isVisible: boolean;
}

const CountUp = ({ end, suffix, isVisible }: CountUpProps) => {
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
    <span className="stats-number">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export default StatsSection;
