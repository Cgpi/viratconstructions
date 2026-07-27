import { Link } from "react-router-dom";
import { Home, KeyRound, Briefcase, TrendingUp, FileText, Scale, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";

export default function ServicesPage() {
  const services = [
    { icon: Home, title: "Property Buying", text: "Off-market access, neighborhood deep-dives, and white-glove buyer representation from first viewing to final keys." },
    { icon: KeyRound, title: "Property Selling", text: "Cinematic photography, targeted marketing, and qualified buyer outreach that maximises your asking price." },
    { icon: Briefcase, title: "Rental Services", text: "Long-stay leases, short-stay placements, and full tenant management for landlords seeking effortless income." },
    { icon: TrendingUp, title: "Property Investment", text: "Data-led market analysis, yield modelling, and portfolio construction tailored to your time horizon." },
    { icon: FileText, title: "Documentation Assistance", text: "Title verification, drafting, and end-to-end paperwork handled by our in-house transaction team." },
    { icon: Scale, title: "Legal Guidance", text: "In-house counsel reviews every contract, easement, and disclosure — so you sign with absolute confidence." },
  ];

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Six disciplines. One standard."
        subtitle="Every service is delivered by senior specialists — not handed off, never outsourced."
      />

      <section className="section-pad">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="group card-luxury p-8 relative overflow-hidden">
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/10 transition-all group-hover:scale-150" />
                  <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-navy text-gold">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="relative mt-6 font-display text-xl font-semibold text-navy">{s.title}</h3>
                  <p className="relative mt-3 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                  <Link to="/contact" className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-gold">
                    Enquire <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-navy text-navy-foreground">
        <div className="container-px mx-auto max-w-4xl text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold">Not sure where to start?</h2>
          <p className="mt-5 text-white/70">Book a 30-minute discovery call with a senior advisor — no obligation.</p>
          <Link to="/contact" className="btn-gold mt-8 inline-flex">Book a Consultation</Link>
        </div>
      </section>
    </>
  );
}
