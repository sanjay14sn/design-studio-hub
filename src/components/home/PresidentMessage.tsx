import { Link } from "react-router-dom";
import { ArrowRight, Shield, Quote } from "lucide-react";

const PresidentMessage = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="section-badge">
              <Shield className="w-4 h-4" />
              <span>Leadership</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight">
              President's <span className="gradient-text">Message</span>
            </h2>

            <div className="relative">
              <Quote className="absolute -top-4 -left-4 w-12 h-12 text-primary/20" />
              <blockquote className="text-lg text-muted-foreground leading-relaxed pl-8 border-l-4 border-primary">
                It is indeed satisfying, rather gratifying that in the 91st year of OGSSI 
                I am given the onerous task of leading it from the front! Thanks to all members, 
                seniors and past EC members for having reposed their faith in me.
                <br /><br />
                1934 - the year saw the genesis of OGSSI, the First official OG professional 
                body in India had been the nest for very many doyens and stalwarts over the years 
                and continues to be the nursery bed for many more future leaders!
              </blockquote>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-primary/20">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=100&q=80"
                  alt="Dr. Sampath Kumari S"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-serif font-bold text-lg">Dr. Sampath Kumari S</div>
                <div className="text-primary">President, OGSSI 2025-2026</div>
              </div>
            </div>

            <Link to="/about" className="btn-primary-gradient inline-flex items-center gap-2">
              Read More
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Image Side */}
          <div className="relative order-1 lg:order-2">
            <div className="relative z-10">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80"
                  alt="President"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 rounded-3xl gradient-bg opacity-20 transform rotate-3 scale-105" />
            
            {/* Floating Element */}
            <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground rounded-2xl p-6 shadow-xl animate-float">
              <div className="text-3xl font-serif font-bold">2025-26</div>
              <div className="text-sm opacity-80">Theme Year</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresidentMessage;
