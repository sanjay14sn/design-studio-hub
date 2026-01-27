import { Link } from "react-router-dom";
import { ArrowRight, Shield, BookOpen, Users, Heart } from "lucide-react";

const programs = [
  {
    id: 1,
    title: "Provisional Workshops",
    description: "Colposcopy, Hysteroscopy, Adolescent Health workshops and more.",
    icon: BookOpen,
    items: ["Colposcopy Workshop", "6P's Workshop", "Adolescent Workshop", "Hysteroscopy Workshop"],
  },
  {
    id: 2,
    title: "Outreach Programmes",
    description: "Community health initiatives and awareness campaigns.",
    icon: Users,
    items: ["National Girls Child Day", "Cancer Awareness", "Women Health Check-up", "Health Screening"],
  },
  {
    id: 3,
    title: "Public Forum",
    description: "Health education and public awareness initiatives.",
    icon: Heart,
    items: ["Breastfeeding Promotion", "Gynec Oncology Awareness", "Nutrition Programs", "Yoga & Exercise"],
  },
];

const ProgramsSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-badge mx-auto">
            <Shield className="w-4 h-4" />
            <span>Our Programs</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            Monthly <span className="gradient-text">Programs</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Regular educational programs and community outreach initiatives 
            to advance healthcare knowledge and practice.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={program.id}
              className="program-card group text-primary-foreground"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-primary-foreground/20 flex items-center justify-center mb-6">
                <program.icon className="w-8 h-8" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-serif font-bold mb-4">
                {program.title}
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                {program.description}
              </p>

              {/* Items */}
              <ul className="space-y-2 mb-8">
                {program.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-primary-foreground/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground/50" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 text-primary-foreground font-semibold hover:gap-3 transition-all"
              >
                View Details
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
