import {
  Target,
  Eye,
  Heart,
  Award,
  Building2,
  Users2,
  Sparkles,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Mission",
      text: "To deliver dependable construction and infrastructure solutions through quality workmanship, transparent practices, and timely execution.",
    },
    {
      icon: Eye,
      title: "Vision",
      text: "To be a trusted name in construction and infrastructure — recognized for quality, reliability, and lasting value across every project.",
    },
    {
      icon: Heart,
      title: "Core Values",
      text: "Integrity, quality, commitment, and attention to detail guide every project we undertake, from planning and development to final execution.",
    },
  ];

  const stats = [
    { icon: Award, value: "2011", label: "Established" },
    { icon: Building2, value: "15+", label: "Years of Experience" },
    { icon: Users2, value: "100+", label: "Projects Delivered" },
    { icon: Sparkles, value: "6+", label: "Areas of Expertise" },
  ];

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Building with purpose. Creating lasting value."
        description="A trusted construction and infrastructure company delivering quality projects across Jalna, Maharashtra and beyond."
      />

      <section className="section-pad">
        <div className="container-px mx-auto max-w-7xl grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80"
              alt="Construction project"
              loading="lazy"
              className="rounded-3xl shadow-[var(--shadow-luxury)] aspect-[4/5] object-cover"
            />

            <div className="absolute -bottom-8 -right-4 md:-right-8 hidden sm:block bg-gold text-navy rounded-2xl p-6 shadow-[var(--shadow-gold)] max-w-xs">
              <p className="font-display text-4xl font-bold">2011</p>
              <p className="text-sm font-semibold mt-1">
                Building trust through quality and commitment.
              </p>
            </div>
          </div>

          <div>
            <span className="eyebrow">Our Story</span>

            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-navy">
              Built on experience. Driven by quality.
            </h2>

            <p className="mt-6 text-muted-foreground leading-relaxed">
              Established in 2011 and based in Jalna, Maharashtra, we have
              grown with a commitment to delivering reliable construction and
              infrastructure solutions. From industrial infrastructure and
              warehouses to residential and commercial projects, our work is
              built around quality, functionality, and long-term value.
            </p>

            <p className="mt-4 text-muted-foreground leading-relaxed">
              Over the years, we have developed expertise across Trimix roads,
              layout development, interior works, industrial projects, and
              complete construction solutions. Every project is approached
              with careful planning, attention to detail, and a commitment to
              delivering work that stands the test of time.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-secondary/50">
        <div className="container-px mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">What We Stand For</span>

            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-navy">
              Mission, vision & values
            </h2>
          </div>

          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {values.map((v) => {
              const Icon = v.icon;

              return (
                <div key={v.title} className="card-luxury p-8">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-navy text-gold">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-semibold text-navy">
                    {v.title}
                  </h3>

                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {v.text}
                  </p>
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

                  <p className="mt-5 font-display text-4xl md:text-5xl font-bold text-gradient-gold">
                    {s.value}
                  </p>

                  <p className="mt-2 text-sm text-white/70">
                    {s.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-px mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="flex justify-center">
              <div className="h-64 w-64 md:h-72 md:w-72 rounded-full bg-navy flex items-center justify-center border-8 border-secondary shadow-[var(--shadow-luxury)]">
                <div className="text-center">
                  <p className="font-display text-5xl font-bold text-gradient-gold">
                    AA
                  </p>
                  <p className="mt-2 text-sm text-white/70">
                    Construction & Infrastructure
                  </p>
                </div>
              </div>
            </div>

            <div>
              <span className="eyebrow">Leadership</span>

              <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-navy">
                Driven by experience. Focused on execution.
              </h2>

              <p className="mt-6 text-muted-foreground leading-relaxed">
                Under the leadership of{" "}
                <span className="font-semibold text-navy">
                  Annurag Agarwal
                </span>
                , the company has continued to build its reputation through
                dependable execution, strong professional relationships, and
                an unwavering focus on quality.
              </p>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                With a practical understanding of construction and
                infrastructure requirements, the focus remains on creating
                spaces and developments that are functional, durable, and
                built to deliver long-term value.
              </p>

              <div className="mt-6 h-px w-20 bg-gold" />

              <p className="mt-4 font-display text-xl font-semibold text-navy">
                Annurag Agarwal
              </p>

              <p className="text-sm text-muted-foreground">
                Founder &amp; Director
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-secondary/50">
        <div className="container-px mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <span className="eyebrow">Our Expertise</span>

            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-navy">
              From foundations to finished spaces.
            </h2>

            <p className="mt-5 text-muted-foreground leading-relaxed">
              Our experience spans a wide range of construction and
              infrastructure requirements, enabling us to deliver solutions
              across industrial, commercial, residential, and development
              projects.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Industrial Infrastructure",
              "Warehouses",
              "Trimix Roads",
              "Layout Development",
              "Interior Works",
              "Residential & Commercial Projects",
            ].map((service) => (
              <div
                key={service}
                className="card-luxury p-7 flex items-center gap-4"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy text-gold">
                  <Building2 className="h-5 w-5" />
                </div>

                <h3 className="font-display text-lg font-semibold text-navy">
                  {service}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}