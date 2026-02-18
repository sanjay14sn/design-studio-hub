import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
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
      { name: "Activities", path: "/events" },
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

  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const logo =
    "https://res.cloudinary.com/ddibq0tya/image/upload/v1771404636/ChatGPT_Image_Feb_18_2026_02_20_16_PM_dtmwyu.png";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setMobileOpen(null);
  }, [location.pathname]);

  const isLinkActive = (item: NavItem): boolean => {
    if (item.path && location.pathname === item.path) return true;
    if (item.dropdown) return item.dropdown.some(sub => isLinkActive(sub));
    return false;
  };

  const openNow = (name: string) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setOpenMenu(name);
  };

  const closeLater = () => {
    timerRef.current = setTimeout(() => setOpenMenu(null), 120);
  };

  const RenderDropdownItems = (items: NavItem[]) =>
    items.map(item => {

      if (item.dropdown) {
        return (
          <DropdownMenuSub key={item.name}>
            <DropdownMenuSubTrigger className="px-3 py-2 text-sm font-semibold rounded-lg hover:bg-primary/10">
              {item.name}
            </DropdownMenuSubTrigger>

            <DropdownMenuSubContent className="p-2">
              {RenderDropdownItems(item.dropdown)}
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        );
      }

      return (
        <DropdownMenuItem key={item.name} asChild>
          <Link
            to={item.path || "#"}
            className="px-3 py-2 text-sm font-semibold rounded-lg hover:bg-primary/10"
          >
            {item.name}
          </Link>
        </DropdownMenuItem>
      );
    });

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-background/80 backdrop-blur-xl shadow-lg"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6">

        {/* NAVBAR */}
        <div className="flex items-center justify-between h-20 lg:h-24">

          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-14 lg:h-20 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP */}
          <nav className="hidden lg:flex items-center gap-10">

            {navItems.map(item => {

              const active = isLinkActive(item);

              if (item.dropdown) {
                return (
                  <DropdownMenu
                    key={item.name}
                    open={openMenu === item.name}
                    onOpenChange={(o) => !o && setOpenMenu(null)}
                  >
                    <DropdownMenuTrigger asChild>
                      <div
                        onMouseEnter={() => openNow(item.name)}
                        onMouseLeave={closeLater}
                        className={`flex items-center gap-1 cursor-pointer text-sm font-bold uppercase tracking-widest py-2 ${active
                          ? "text-primary"
                          : "text-foreground/80 hover:text-primary"
                          }`}
                      >
                        {item.name}
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                      align="start"
                      className="p-2 min-w-[200px]"
                      onMouseEnter={() => openNow(item.name)}
                      onMouseLeave={closeLater}
                    >
                      {RenderDropdownItems(item.dropdown)}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }

              return (
                <Link
                  key={item.name}
                  to={item.path || "#"}
                  className={`text-sm font-bold uppercase tracking-widest py-2 ${active
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                    }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/become-member"
              className="px-6 py-2 rounded-full font-bold text-sm bg-primary text-white flex items-center gap-2"
            >
              Become a Member <ArrowRight size={16} />
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="lg:hidden p-2 bg-primary/10 rounded-xl"
            onClick={() => setIsMenuOpen(p => !p)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-card border-t shadow-xl">

            <div className="flex flex-col p-6 gap-2">

              {navItems.map(item => {

                if (!item.dropdown) {
                  return (
                    <Link
                      key={item.name}
                      to={item.path || "#"}
                      className="py-3 font-semibold border-b"
                    >
                      {item.name}
                    </Link>
                  );
                }

                return (
                  <div key={item.name} className="border-b">

                    <button
                      onClick={() =>
                        setMobileOpen(
                          mobileOpen === item.name ? null : item.name
                        )
                      }
                      className="w-full flex justify-between items-center py-3 font-semibold"
                    >
                      {item.name}
                      <ChevronDown
                        className={`transition ${mobileOpen === item.name ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    {mobileOpen === item.name && (
                      <div className="pl-4 pb-3 flex flex-col gap-2">

                        {item.dropdown.map(sub => {

                          if (sub.dropdown) {
                            return (
                              <div key={sub.name}>
                                <div className="font-semibold text-sm text-muted-foreground">
                                  {sub.name}
                                </div>

                                <div className="pl-3 mt-1 flex flex-col gap-2">
                                  {sub.dropdown.map(inner => (
                                    <Link
                                      key={inner.name}
                                      to={inner.path || "#"}
                                      className="text-sm py-1"
                                    >
                                      {inner.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            );
                          }

                          return (
                            <Link
                              key={sub.name}
                              to={sub.path || "#"}
                              className="text-sm py-1"
                            >
                              {sub.name}
                            </Link>
                          );
                        })}

                      </div>
                    )}

                  </div>
                );
              })}

              <Link
                to="/become-member"
                className="mt-4 px-6 py-3 rounded-full font-bold text-center bg-primary text-white"
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