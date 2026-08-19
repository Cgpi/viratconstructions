import { Link, NavLink } from "react-router-dom";
import { Menu, X, Home } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  // { to: "/properties", label: "Properties" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  // { to: "/blog", label: "Blog" },
  // { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_-8px_rgba(15,23,42,0.15)]" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container-px mx-auto flex h-20 max-w-7xl items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-navy text-gold">
            <Home className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-l font-bold text-navy">Virat Constructions</span>
            <span className="font-display text-l font-bold text-navy">And Associates</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-navy relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gold after:transition-all hover:after:w-full ${
                  isActive ? "text-navy after:w-full" : "text-foreground/80"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact" className="btn-gold">Book Site Visit</Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden grid h-10 w-10 place-items-center rounded-full border border-border text-navy"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white animate-fade-in">
          <nav className="container-px mx-auto flex max-w-7xl flex-col py-4">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-3 text-base font-medium border-b border-border/60 last:border-0 ${isActive ? "text-navy" : "text-foreground/80"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-gold mt-4">
              Book Site Visit
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
