import Layout from "@/components/layout/Layout";
import { Shield, Linkedin, Mail } from "lucide-react";

const leadership = [
  { name: "Dr. Sampath Kumari S", role: "President", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80" },
  { name: "Dr. M.G Dhanalakshmi", role: "Vice President", image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&q=80" },
  { name: "Dr. M. Meena", role: "Hon. Secretary", image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=400&q=80" },
  { name: "Dr. Meenakshi Sundaram", role: "Hon. Treasurer", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80" },
  { name: "Dr. Mala Raj", role: "Hon. Joint Secretary", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" },
  { name: "Dr. Sumathy Prem Anand", role: "Hon. Joint Treasurer", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80" },
];

const committee = [
  { name: "Dr. S. Vijaya", role: "Imm. Past President" },
  { name: "Dr. Vanitha A", role: "Managing Committee" },
  { name: "Dr. Uma Ram", role: "Managing Committee" },
  { name: "Dr. K. Balakumari", role: "Executive Committee" },
  { name: "Dr. Deepa Thangamani", role: "Executive Committee" },
  { name: "Dr. P. Josephin Rosy", role: "Executive Committee" },
  { name: "Dr. Karpagambal Sairam", role: "Executive Committee" },
  { name: "Dr. Meera V V Ragavan", role: "Executive Committee" },
];

const Team = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="floating-shape w-96 h-96 -top-48 -right-48 blur-3xl" />
        
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="section-badge mx-auto">
              <Shield className="w-4 h-4" />
              <span>Our Team</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Meet the <span className="gradient-text">Team</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Our dedicated leadership team committed to advancing women's healthcare.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">
            Leadership <span className="gradient-text">Team</span>
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((member, index) => (
              <div key={index} className="team-card group">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="team-card-overlay p-6">
                    <div className="flex gap-3">
                      <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-primary-foreground hover:text-primary">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-primary-foreground hover:text-primary">
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-serif font-bold text-lg mb-1">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Committee Members */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">
            Committee <span className="gradient-text">Members</span>
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {committee.map((member, index) => (
              <div key={index} className="p-6 rounded-2xl bg-card border border-border card-hover text-center">
                <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4 text-2xl font-serif font-bold text-primary-foreground">
                  {member.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                </div>
                <h3 className="font-serif font-bold mb-1">{member.name}</h3>
                <p className="text-sm text-primary">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
