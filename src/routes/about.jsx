import { Target, Eye, Heart, Award, Building2, Users2, Sparkles } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { team } from "@/lib/data";

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Mission",
      text: "To make extraordinary properties accessible through unmatched service, transparency, and craftsmanship.",
    },
    {
      icon: Eye,
      title: "Vision",
      text: "To be the most respected name in luxury real estate — defined by trust, not transactions.",
    },
    {
      icon: Heart,
      title: "Core Values",
      text: "Integrity, discretion, excellence, and an obsession with the details that compound into something rare.",
    },
  ];

  const stats = [
    { icon: Award, value: "10+", label: "Years of Experience" },
    { icon: Building2, value: "1,000+", label: "Projects Completed" },
    { icon: Users2, value: "500+", label: "Happy Customers" },
    { icon: Sparkles, value: "$2.4B", label: "Property Transacted" },
  ];

  return (
    <>
      <PageHero
        eyebrow="About Aurelia"
        title="A decade of quietly remarkable real estate."
        subtitle="Founded in 2014, Aurelia Estates was born from a simple belief — that finding a home should feel as considered as designing one."
      />

      <section className="section-pad">
        <div className="container-px mx-auto max-w-7xl grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
              alt="Our office"
              loading="lazy"
              className="rounded-3xl shadow-[var(--shadow-luxury)] aspect-[4/5] object-cover"
            />
            <div className="absolute -bottom-8 -right-4 md:-right-8 hidden sm:block bg-gold text-navy rounded-2xl p-6 shadow-[var(--shadow-gold)] max-w-xs">
              <p className="font-display text-4xl font-bold">10+</p>
              <p className="text-sm font-semibold mt-1">Years curating extraordinary properties.</p>
            </div>
          </div>
          <div>
            <span className="eyebrow">Our Story</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-navy">
              Built on relationships. Refined by results.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              What started as a boutique advisory in a single neighborhood has grown into a trusted partner for buyers, sellers, and investors across three continents. We didn't grow by being the loudest — we grew by being the most reliable.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Today, every Aurelia agent is hand-selected, every listing personally vetted, and every client treated as our only one. That hasn't changed in ten years. It won't.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-secondary/50">
        <div className="container-px mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">What We Stand For</span>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-navy">Mission, vision & values</h2>
          </div>
          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="card-luxury p-8">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-navy text-gold">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-navy">{v.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{v.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-navy text-navy-foreground">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="text-center">
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-gold/40 text-gold">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="mt-5 font-display text-4xl md:text-5xl font-bold text-gradient-gold">{s.value}</p>
                  <p className="mt-2 text-sm text-white/70">{s.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-px mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">The Team</span>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-navy">People behind the practice</h2>
          </div>
          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <div key={m.name} className="group">
                <div className="overflow-hidden rounded-2xl aspect-[3/4]">
                  <img src={m.image} alt={m.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy">{m.name}</h3>
                <p className="text-sm text-gold font-medium">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
