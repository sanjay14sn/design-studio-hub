import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Shield } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Events", path: "/events" },
  { name: "Leadership", path: "/team" },
  { name: "Programs", path: "/programs" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const brand = {
    royalBlue: "#2436A8",
    softWhite: "#FAFAFD",
    softLavender: "#C6B7E2",
    blushPink: "#F4A7B9",
    textDarkBlue: "#1E245C",
  };

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 shadow-lg" : "py-5"
      }`}
      style={{ 
        backgroundColor: scrolled ? "rgba(250, 250, 253, 0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled ? `1px solid ${brand.softLavender}40` : "1px solid transparent"
      }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          
          {/* ================= LOGO ================= */}
          <Link to="/" className="flex items-center gap-3 group">
            <div 
              className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:rotate-[360deg]"
              style={{ backgroundColor: brand.royalBlue }}
            >
              <Shield className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-serif font-bold tracking-tight" style={{ color: brand.royalBlue }}>
                CGSOI
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60" style={{ color: brand.textDarkBlue }}>
                Est. 1934
              </span>
            </div>
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className="relative text-sm font-bold uppercase tracking-widest transition-colors duration-300 py-2 group"
                  style={{ color: isActive ? brand.royalBlue : brand.textDarkBlue }}
                >
                  {item.name}
                  {/* Hover/Active Underline - 5% Pink */}
                  <span 
                    className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                    style={{ backgroundColor: brand.blushPink }}
                  />
                </Link>
              );
            })}
          </nav>

          {/* ================= CTA BUTTON ================= */}
          <div className="hidden lg:block">
            <Link 
              to="/contact" 
              className="px-8 py-3 rounded-full text-white font-bold text-sm transition-all hover:scale-105 shadow-md"
              style={{ 
                backgroundColor: brand.royalBlue,
                boxShadow: `0 4px 14px 0 ${brand.royalBlue}40`
              }}
            >
              Join the Society
            </Link>
          </div>

          {/* ================= MOBILE TOGGLE ================= */}
          <button
            className="lg:hidden p-2 rounded-xl transition-colors"
            style={{ color: brand.royalBlue, backgroundColor: `${brand.softLavender}30` }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {isMenuOpen && (
          <div 
            className="lg:hidden absolute top-full left-0 right-0 p-6 shadow-2xl animate-in slide-in-from-top duration-300"
            style={{ backgroundColor: brand.softWhite }}
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-lg font-serif font-bold"
                  style={{ color: location.pathname === item.path ? brand.blushPink : brand.royalBlue }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="w-full py-4 rounded-2xl text-center text-white font-bold"
                style={{ backgroundColor: brand.blushPink }}
                onClick={() => setIsMenuOpen(false)}
              >
                Become a Member
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;