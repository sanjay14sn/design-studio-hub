import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, ChevronDown, ChevronRight } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";

interface NavItem {
  name: string;
  path?: string;
  dropdown?: NavItem[];
}

const navItems: NavItem[] = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  {
    name: "Member",
    dropdown: [
      { name: "Member list", path: "/team" },
      { name: "Become a member", path: "/become-member" },
    ],
  },
  {
    name: "Conference",
    dropdown: [
      {
        name: "CGCON",
        dropdown: [
          { name: "2025", path: "/conference-2025" },
          { name: "2024", path: "/conference-2024" },
        ],
      },
    ],
  },
  { name: "Newsletter", path: "/newsletter" },
  {
    name: "Gallery",
    dropdown: [
      { name: "Photos", path: "/gallery" },
      { name: "Videos", path: "/gallery-videos" },
      { name: "Media", path: "/gallery-media" },
    ],
  },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const isLinkActive = (item: NavItem): boolean => {
    if (item.path && location.pathname === item.path) return true;
    if (item.dropdown) return item.dropdown.some(sub => isLinkActive(sub));
    return false;
  };

  const RenderDropdownItems = (items: NavItem[]) => {
    return items.map((item) => {
      if (item.dropdown) {
        return (
          <DropdownMenuSub key={item.name}>
            <DropdownMenuSubTrigger className="flex items-center gap-2 px-3 py-2 text-sm font-semibold rounded-lg hover:bg-primary/10 hover:text-primary transition-all cursor-pointer outline-none">
              {item.name}
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent className="p-2 min-w-[150px] bg-background/95 backdrop-blur-md border border-white/10 shadow-2xl z-[100]">
              {RenderDropdownItems(item.dropdown)}
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        );
      }
      return (
        <DropdownMenuItem key={item.name} asChild>
          <Link
            to={item.path || "#"}
            className="flex items-center gap-2 px-3 py-2 text-sm font-semibold rounded-lg hover:bg-primary/10 hover:text-primary transition-all cursor-pointer"
          >
            {item.name}
          </Link>
        </DropdownMenuItem>
      );
    });
  };

  const RenderMobileItems = (item: NavItem, depth: number = 0) => {
    if (item.dropdown) {
      return (
        <div key={item.name} className={`flex flex-col gap-3 ${depth > 0 ? 'pl-4 border-l-2 border-primary/20' : ''}`}>
          <span className={`font-bold uppercase tracking-widest ${depth === 0 ? 'text-primary/60 text-sm' : 'text-muted-foreground text-xs'}`}>
            {item.name}
          </span>
          {item.dropdown.map(sub => RenderMobileItems(sub, depth + 1))}
        </div>
      );
    }
    return (
      <Link
        key={item.name}
        to={item.path || "#"}
        className={`text-lg font-serif font-bold ${location.pathname === item.path ? "text-primary" : "text-foreground"}`}
      >
        {item.name}
      </Link>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-background/80 backdrop-blur-xl shadow-lg border-b border-white/10"
        : "bg-transparent"
        }`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-700" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group relative">
            <div className="absolute -inset-2 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
            <div className="relative flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-white/10 flex items-center justify-center shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                <img src="/cgsl.png" alt="CGSI Logo" className="w-8 h-8 object-contain" onError={(e) => { e.currentTarget.style.display = "none"; }} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  OGS<span className="text-accent">CHENNAI</span>
                </h1>
                <p className="text-[8px] text-muted-foreground uppercase tracking-[0.2em] font-semibold">Academic Excellence</p>
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => {
              const active = isLinkActive(item);
              if (item.dropdown) {
                return (
                  <DropdownMenu key={item.name}>
                    <DropdownMenuTrigger className="flex items-center gap-1 relative text-sm font-bold uppercase tracking-widest py-2 group transition-colors outline-none text-foreground/80 hover:text-primary data-[state=open]:text-primary">
                      {item.name}
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                      <span className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 bg-primary ${active ? "w-full" : "w-0 group-hover:w-full"}`} />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="p-2 min-w-[200px] bg-background/95 backdrop-blur-md border border-white/10 shadow-2xl animate-in fade-in zoom-in-95 duration-200 overflow-visible">
                      {RenderDropdownItems(item.dropdown)}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }
              return (
                <Link
                  key={item.name}
                  to={item.path || "#"}
                  className={`relative text-sm font-bold uppercase tracking-widest py-2 group transition-colors ${active ? "text-primary" : "text-foreground/80 hover:text-primary"}`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 bg-primary ${active ? "w-full" : "w-0 group-hover:w-full"}`} />
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <ModeToggle />
            <Link to="/become-member" className="relative group px-6 py-2.5 rounded-full font-bold text-sm overflow-hidden bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className="relative z-10 flex items-center gap-2">Join Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
            </Link>
          </div>

          <button className="lg:hidden p-2 rounded-xl transition-colors text-primary bg-primary/10" onClick={() => setIsMenuOpen((prev) => !prev)} aria-label="Toggle Menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 p-6 shadow-2xl animate-in slide-in-from-top duration-300 bg-white border-t border-border dark:bg-card max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <span className="text-lg font-serif font-bold text-foreground">Theme</span>
                <ModeToggle />
              </div>
              {navItems.map((item) => RenderMobileItems(item))}
              <Link to="/become-member" className="w-full py-4 rounded-2xl text-center text-white font-bold bg-primary shadow-lg shadow-primary/20">Become a Member</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
