import { Link } from "react-router-dom";
import { ArrowRight, Shield, Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Dr. Sampath Kumari S",
    role: "President",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Dr. M.G Dhanalakshmi",
    role: "Vice President",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Dr. M. Meena",
    role: "Hon. Secretary",
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    name: "Dr. Meenakshi Sundaram",
    role: "Hon. Treasurer",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80",
  },
];

const TeamSection = () => {
  return (
    <section className="py-24 section-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-badge mx-auto bg-primary/20">
            <Shield className="w-4 h-4" />
            <span>Our Leadership</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-6">
            Meet the <span className="text-primary">Team</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Our dedicated team of healthcare professionals leading the society 
            towards excellence in women's healthcare.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="team-card group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="team-card-overlay p-6">
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-primary-foreground hover:text-primary"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-primary-foreground hover:text-primary"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 text-center">
                <h3 className="font-serif font-bold text-lg mb-1">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/team" className="btn-secondary-gradient inline-flex items-center gap-2">
            View All Team Members
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
