import Layout from "@/components/layout/Layout";
import { Shield, Target, Eye, Heart, Award, Users, BookOpen } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="floating-shape w-96 h-96 -top-48 -right-48 blur-3xl" />
        
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="section-badge mx-auto">
              <Shield className="w-4 h-4" />
              <span>About Us</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              About <span className="gradient-text">OGSSI</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              The Obstetric and Gynaecological Society of Southern India has been 
              at the forefront of women's healthcare since 1934.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
                alt="OGSSI History"
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold">
                Our <span className="gradient-text">History</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Founded in 1934, OGSSI was the first official Obstetric and Gynaecological 
                professional body in India. Over the decades, it has been the nurturing ground 
                for many doyens and stalwarts in the field of women's healthcare.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The society has grown from a small group of dedicated professionals to a 
                thriving community of over 5000 members, all committed to advancing 
                maternal and child health in Southern India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-primary/5 border border-primary/20 card-hover">
              <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be a leading organization in women's healthcare and medical education, 
                setting the gold standard for obstetric and gynaecological practices 
                in Southern India and beyond.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-secondary/5 border border-secondary/20 card-hover">
              <div className="w-16 h-16 rounded-2xl gradient-bg-secondary flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To enhance maternal care, advocate for women's health, and promote 
                safe birth practices through continuous education, research, and 
                community outreach programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 section-dark">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-6">
              Our Core <span className="text-primary">Values</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: "Compassion", desc: "Caring for every patient with empathy" },
              { icon: Award, title: "Excellence", desc: "Striving for the highest standards" },
              { icon: Users, title: "Collaboration", desc: "Working together for better outcomes" },
              { icon: BookOpen, title: "Education", desc: "Continuous learning and growth" },
            ].map((value, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-primary-foreground/5 card-hover">
                <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-serif font-bold text-lg text-primary-foreground mb-2">{value.title}</h3>
                <p className="text-primary-foreground/70 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
