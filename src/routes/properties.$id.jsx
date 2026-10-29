import { Link, useParams, Navigate } from "react-router-dom";
import { useState } from "react";
import {
  ArrowLeft,
  Bed,
  Bath,
  Maximize,
  Car,
  Sofa,
  MapPin,
  Calendar,
  Phone,
  Check,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { properties } from "@/lib/data";
import { FadeIn } from "@/components/animations/motion-elements";
import { SMOOTH_EASE } from "@/components/animations/constants";

export default function PropertyDetailsPage() {
  const { id } = useParams();
  const [active, setActive] = useState(0);
  const property = properties.find((p) => p.id === id);

  if (!property) {
    return <Navigate to="/properties" replace />;
  }

  const p = property;
  const gallery = p.gallery.length > 0 ? p.gallery : [p.image];

  return (
    <>
      <div className="bg-secondary/40 border-b border-border">
        <div className="container-px mx-auto max-w-7xl py-6">
          <Link
            to="/properties"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-navy transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4" /> Back to properties
          </Link>
        </div>
      </div>

      <section className="section-pad">
        <div className="container-px mx-auto max-w-7xl">
          {/* GALLERY */}
          <div className="grid gap-4 md:grid-cols-4">
            <div className="md:col-span-3 aspect-[16/10] overflow-hidden rounded-3xl relative bg-muted shadow-[var(--shadow-luxury)]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active}
                  src={gallery[active]}
                  alt={p.title}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: SMOOTH_EASE }}
                  className="h-full w-full object-cover"
                />
              </AnimatePresence>
            </div>
            <div className="grid grid-cols-4 md:grid-cols-1 gap-3">
              {gallery.slice(0, 4).map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`overflow-hidden rounded-2xl aspect-square md:aspect-[4/3] transition-all duration-300 cursor-pointer ${
                    active === i
                      ? "ring-2 ring-gold ring-offset-2 scale-[1.02]"
                      : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-3">
            <FadeIn direction="up" delay={0.1} className="lg:col-span-2">
              <div className="flex gap-2">
                <span className="rounded-full bg-navy text-navy-foreground px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                  For {p.listing}
                </span>
                <span className="rounded-full bg-gold text-navy px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                  {p.category}
                </span>
              </div>
              <h1 className="mt-5 font-display text-3xl md:text-5xl font-bold text-navy">
                {p.title}
              </h1>
              <p className="mt-3 flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-gold" /> {p.location}
              </p>
              <p className="mt-6 text-4xl md:text-5xl font-display font-bold text-gradient-gold">
                {p.price}
              </p>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { icon: Bed, label: "Bedrooms", value: p.beds || "—" },
                  { icon: Bath, label: "Bathrooms", value: p.baths || "—" },
                  { icon: Maximize, label: "Floor Area", value: `${p.area.toLocaleString()} sqft` },
                  { icon: Car, label: "Parking", value: p.parking },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="rounded-2xl border border-border p-4 text-center transition-all duration-300 hover:border-primary/50"
                  >
                    <m.icon className="h-5 w-5 text-gold mx-auto" />
                    <p className="mt-2 font-semibold text-navy text-sm">{m.value}</p>
                    <p className="text-xs text-muted-foreground">{m.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <h2 className="font-display text-2xl font-semibold text-navy">Description</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{p.description}</p>
              </div>

              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="font-display text-xl font-semibold text-navy">Features</h3>
                  <ul className="mt-4 space-y-2.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-3 text-sm text-foreground/80">
                        <Check className="h-5 w-5 text-gold shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-navy">Amenities</h3>
                  <ul className="mt-4 space-y-2.5">
                    {p.amenities.map((a) => (
                      <li key={a} className="flex gap-3 text-sm text-foreground/80">
                        <Check className="h-5 w-5 text-gold shrink-0" /> {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-secondary/60 p-5">
                  <Sofa className="h-5 w-5 text-gold" />
                  <p className="mt-3 text-xs text-muted-foreground uppercase tracking-wider">Furnishing</p>
                  <p className="font-semibold text-navy">{p.furnishing}</p>
                </div>
                <div className="rounded-2xl bg-secondary/60 p-5">
                  <Car className="h-5 w-5 text-gold" />
                  <p className="mt-3 text-xs text-muted-foreground uppercase tracking-wider">Parking</p>
                  <p className="font-semibold text-navy">{p.parking}</p>
                </div>
              </div>
            </FadeIn>

            {/* CTA SIDEBAR */}
            <aside className="lg:sticky lg:top-28 self-start">
              <FadeIn direction="left" delay={0.2}>
                <div className="rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
                  <h3 className="font-display text-xl font-semibold text-navy">
                    Interested in this property?
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Speak with a senior advisor or book a private viewing.
                  </p>
                  <Link to="/contact" className="btn-primary w-full mt-6">
                    <Calendar className="h-4 w-4" /> Schedule Visit
                  </Link>
                  <Link to="/contact" className="btn-outline w-full mt-3">
                    <Phone className="h-4 w-4" /> Contact Agent
                  </Link>
                  <div className="mt-6 pt-6 border-t border-border flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80"
                      alt=""
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-navy text-sm">Alexander Vance</p>
                      <p className="text-xs text-muted-foreground">Senior Advisor</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </aside>
          </div>

          {/* MAP */}
          <FadeIn direction="up" delay={0.2} className="mt-16">
            <h2 className="font-display text-2xl font-semibold text-navy">Location</h2>
            <div className="mt-5 relative aspect-[21/9] overflow-hidden rounded-3xl bg-secondary border border-border">
              <div
                className="absolute inset-0 grid place-items-center text-center"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-background-alt), color-mix(in srgb, var(--color-primary) 8%, white))",
                  backgroundImage:
                    "radial-gradient(circle at 30% 40%, color-mix(in srgb, var(--color-primary) 18%, transparent), transparent 40%), radial-gradient(circle at 70% 60%, color-mix(in srgb, var(--color-accent) 20%, transparent), transparent 40%)",
                }}
              >
                <div>
                  <MapPin className="h-12 w-12 text-gold mx-auto" />
                  <p className="mt-3 font-display text-xl text-navy font-semibold">{p.location}</p>
                  <p className="text-sm text-muted-foreground">Interactive map placeholder</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
