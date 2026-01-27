import { Link } from "react-router-dom";
import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="section-dark text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/30">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <span className="text-2xl font-serif font-bold text-primary-foreground">OGSSI</span>
            </Link>
            <p className="text-primary-foreground/70 leading-relaxed">
              The Obstetric and Gynaecological Society of Southern India - Advancing women's healthcare since 1934.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center transition-all duration-300 hover:bg-primary hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Events", "Team", "Programs", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-primary-foreground/70 hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Our Programs</h4>
            <ul className="space-y-3">
              {[
                "CME Meetings",
                "Clinical Workshops",
                "Health Camps",
                "Awareness Programs",
                "Training Sessions",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/programs"
                    className="text-primary-foreground/70 hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/70">
                  Chennai, Tamil Nadu, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:ogssi@yahoo.com"
                  className="text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  ogssi@yahoo.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+918220028556"
                  className="text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  +91 82200 28556
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} OGSSI. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-primary-foreground/60 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
