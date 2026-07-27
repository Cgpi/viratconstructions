import { Link } from "react-router-dom";
import { Home, Globe2, Send, MapPin, Phone, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gold text-navy">
                <Home className="h-5 w-5" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-xl font-bold">Virat Constructions</span>
                <span className="text-[10px] tracking-[0.25em] text-white/60 uppercase">Estates</span>
              </span>
            </Link>
            <p className="mt-5 text-sm text-white/70 leading-relaxed">
              Curating premium residential and commercial spaces for discerning clients since 2011.
            </p>
            <div className="mt-6 flex gap-3">
              {[Globe2, Send, Send, Send].map((Icon, i) => (
                <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-white/80 transition-all hover:bg-gold hover:text-navy hover:border-gold">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold text-gold">Quick Links</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { to: "/", l: "Home" },
                { to: "/about", l: "About Us" },
                { to: "/properties", l: "Properties" },
                { to: "/blog", l: "Blog" },
                { to: "/faq", l: "FAQ" },
              ].map((i) => (
                <li key={i.to}>
                  <Link to={i.to} className="text-white/70 hover:text-gold transition-colors">{i.l}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold text-gold">Services</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>Property Buying</li>
              <li>Property Selling</li>
              <li>Rental Assistance</li>
              <li>Investment Consultation</li>
              <li>Legal Guidance</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold text-gold">Get in Touch</h4>
            <ul className="mt-5 space-y-4 text-sm text-white/70">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-gold" />
                <span>Plot No 10 Subhadra  <br />Vyankatesh Nagar Jalna</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 shrink-0 mt-0.5 text-gold" />
                <a href="tel:7020999781" className="hover:text-gold"> 7020999781</a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 shrink-0 mt-0.5 text-gold" />
                <a href="anurag1801agrawal@gmail.com" className="hover:text-gold">anurag1801agrawal@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/50">
          <p>© 2026 Virat Constructions. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold">Privacy Policy</a>
            <a href="#" className="hover:text-gold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
