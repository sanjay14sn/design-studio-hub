import { Link } from "react-router-dom";
import { ArrowRight, Shield, Target, Eye, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="floating-shape w-96 h-96 -top-48 -right-48 blur-3xl" />
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
                  alt="About OGSSI"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              
              {/* Stats Card */}
              <div className="absolute -bottom-8 -right-8 bg-card rounded-2xl p-8 shadow-xl border border-border">
                <div className="text-center">
                  <div className="stats-number">1934</div>
                  <div className="text-muted-foreground mt-2">Established</div>
                </div>
              </div>

              {/* Decorative Badge */}
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full gradient-bg flex items-center justify-center shadow-lg animate-float">
                <Heart className="w-10 h-10 text-primary-foreground" />
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 rounded-3xl gradient-bg-secondary opacity-20 transform -rotate-3 scale-105" />
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div className="section-badge">
              <Shield className="w-4 h-4" />
              <span>About OGSSI</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight">
              Who We <span className="gradient-text">Are</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              The Obstetric and Gynaecological Society of Southern India (OGSSI) is committed 
              to advancing maternal and child health, promoting safe motherhood, and supporting 
              family welfare. Through continuous education and training, we strive to improve 
              healthcare outcomes and empower medical professionals.
            </p>

            {/* Vision & Mission */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 card-hover">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-serif font-bold text-lg mb-2">Our Vision</h3>
                <p className="text-muted-foreground text-sm">
                  To be a leading organization in women's healthcare and medical education.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary/5 border border-secondary/20 card-hover">
                <div className="w-12 h-12 rounded-full gradient-bg-secondary flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-secondary-foreground" />
                </div>
                <h3 className="font-serif font-bold text-lg mb-2">Our Mission</h3>
                <p className="text-muted-foreground text-sm">
                  To enhance maternal care, advocate for women's health, and promote safe birth practices.
                </p>
              </div>
            </div>

            <Link to="/about" className="btn-primary-gradient inline-flex items-center gap-2">
              Discover More
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
