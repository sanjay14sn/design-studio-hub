import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Users, Award } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Floating Shapes */}
      <div className="floating-shape w-72 h-72 -top-20 -right-20 blur-3xl" />
      <div className="floating-shape w-96 h-96 -bottom-32 -left-32 blur-3xl animate-float-delayed" />
      <div className="floating-shape w-48 h-48 top-1/3 right-1/4 blur-2xl animate-float" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="section-badge">
              <Award className="w-4 h-4" />
              <span>Established 1934</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
              Advancing{" "}
              <span className="gradient-text">Women's Healthcare</span>{" "}
              in Southern India
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              The Obstetric and Gynaecological Society of Southern India is committed to 
              promoting safe motherhood, advancing maternal care, and empowering medical 
              professionals through continuous education.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/about" className="btn-primary-gradient inline-flex items-center gap-2">
                Discover More
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/events" className="btn-outline-hover">
                View Events
              </Link>
            </div>

            {/* Stats Mini */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-serif font-bold">90+</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-serif font-bold">5000+</div>
                  <div className="text-sm text-muted-foreground">Active Members</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image/Visual */}
          <div className="relative animate-fade-in">
            <div className="relative z-10">
              <div className="aspect-square max-w-lg mx-auto rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80"
                  alt="Healthcare professionals"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-6 shadow-xl border border-border animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full gradient-bg-secondary flex items-center justify-center">
                    <Award className="w-7 h-7 text-secondary-foreground" />
                  </div>
                  <div>
                    <div className="font-serif font-bold text-lg">Trusted Since</div>
                    <div className="text-muted-foreground">1934</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 rounded-3xl gradient-bg opacity-20 transform rotate-6 scale-105" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
