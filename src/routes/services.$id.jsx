import { useParams, Link, Navigate } from "react-router-dom";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Phone,
  Calendar,
  ShieldCheck,
  Clock3,
  HardHat,
  Sparkles,
  Layers,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { servicesData } from "@/lib/services-data";
import { useSingleServiceWithApiImages } from "@/hooks/use-service-images";
import { PageHero } from "@/components/page-hero";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/motion-elements";
import { SMOOTH_EASE } from "@/components/animations/constants";

export default function ServiceDetailsPage() {
  const { id } = useParams();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const rawService = servicesData.find((s) => s.id === id);
  const service = useSingleServiceWithApiImages(rawService);

  if (!rawService || !service) {
    return <Navigate to="/services" replace />;
  }

  const IconComponent = service.icon;
  const gallery = service.gallery && service.gallery.length > 0
    ? service.gallery
    : [service.image];

  // Other services for discovery
  const otherServices = servicesData.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={service.category}
        title={service.title}
        subtitle={service.summary}
      >
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
          >
            <ArrowLeft className="h-4 w-4" /> All Services
          </Link>
          <Link
            to={`/contact?service=${encodeURIComponent(service.title)}`}
            className="btn-primary"
          >
            Request Quotation
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="tel:7020999781"
            className="inline-flex items-center gap-2 rounded-xl border border-gold/40 px-5 py-3 text-sm font-semibold text-gold transition hover:bg-gold/10"
          >
            <Phone className="h-4 w-4" /> +91 7020999781
          </a>
        </div>
      </PageHero>

      {/* Breadcrumb Bar */}
      <div className="border-b border-border bg-secondary/40 py-3.5">
        <div className="container-px mx-auto flex max-w-7xl items-center gap-2 text-xs text-muted-foreground sm:text-sm">
          <Link to="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link to="/services" className="hover:text-primary transition-colors">
            Services
          </Link>
          <span>/</span>
          <span className="font-semibold text-navy">{service.title}</span>
        </div>
      </div>

      <section className="section-pad">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Main Content Column */}
            <div className="lg:col-span-8">
              {/* Primary Image Showcase */}
              <div className="space-y-4">
                <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-muted shadow-[var(--shadow-luxury)] border border-border">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeImageIndex}
                      src={gallery[activeImageIndex]}
                      alt={`${service.title} view ${activeImageIndex + 1}`}
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, ease: SMOOTH_EASE }}
                      className="h-full w-full object-cover"
                    />
                  </AnimatePresence>
                  <div className="absolute left-4 top-4 rounded-full bg-navy/85 backdrop-blur-md px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
                    {service.shortTag}
                  </div>
                </div>

                {/* Thumbnail selector */}
                {gallery.length > 1 && (
                  <div className="grid grid-cols-3 gap-3 sm:gap-4">
                    {gallery.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`group relative aspect-[16/10] overflow-hidden rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                          activeImageIndex === idx
                            ? "border-primary shadow-md scale-[1.02]"
                            : "border-transparent opacity-75 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={img}
                          alt=""
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Service Detailed Narrative */}
              <FadeIn direction="up" delay={0.1} className="mt-12">
                <span className="eyebrow">Service Overview</span>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-navy">
                  Engineered for excellence and longevity.
                </h2>
                <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
                  {service.intro.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </FadeIn>

              {/* Key Features / Solutions Checkpoints */}
              <FadeIn direction="up" delay={0.15} className="mt-14">
                <div className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-[var(--shadow-card)]">
                  <div className="flex items-center gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-navy text-gold">
                      <IconComponent className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-navy">
                        {service.listTitle}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        End-to-end execution backed by quality control and supervision
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {service.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-start gap-3 rounded-xl bg-secondary/50 p-3.5 transition-colors hover:bg-secondary"
                      >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span className="text-sm font-medium text-navy">{point}</span>
                      </div>
                    ))}
                  </div>

                  {service.outro && (
                    <div className="mt-8 border-t border-border pt-6 text-sm text-muted-foreground leading-relaxed">
                      {service.outro}
                    </div>
                  )}
                </div>
              </FadeIn>

              {/* 4-Step Process Section */}
              <FadeIn direction="up" delay={0.2} className="mt-14">
                <span className="eyebrow">Project Lifecycle</span>
                <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-navy">
                  How we deliver this service
                </h3>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  {[
                    {
                      step: "01",
                      title: "Consultation & Requirement Analysis",
                      text: "In-depth review of operational needs, floor area ratio, load demands, and local municipal regulations.",
                      icon: Calendar,
                    },
                    {
                      step: "02",
                      title: "Architectural & Engineering Plan",
                      text: "Detailed 2D/3D layouts, structural drawings, material specifications, and scheduled budget timelines.",
                      icon: Layers,
                    },
                    {
                      step: "03",
                      title: "Quality Construction & Supervision",
                      text: "On-site precision execution using tested materials, skilled craftspeople, and daily milestone checks.",
                      icon: HardHat,
                    },
                    {
                      step: "04",
                      title: "Final Inspection & Turnkey Handover",
                      text: "Rigorous quality audits, functional commissioning, and structured handover of complete documentation.",
                      icon: ShieldCheck,
                    },
                  ].map((s) => (
                    <div
                      key={s.step}
                      className="card-luxury p-6 flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="font-display text-3xl font-bold text-gold">
                            {s.step}
                          </span>
                          <s.icon className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                        </div>
                        <h4 className="mt-3 font-display text-base font-semibold text-navy">
                          {s.title}
                        </h4>
                        <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          {s.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Sidebar Column */}
            <aside className="lg:col-span-4 space-y-8">
              {/* Technical Specifications Card */}
              <FadeIn direction="left" delay={0.15}>
                <div className="rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
                  <div className="flex items-center gap-3 border-b border-border pb-4">
                    <Sparkles className="h-5 w-5 text-gold" />
                    <h3 className="font-display text-lg font-bold text-navy">
                      Key Highlights
                    </h3>
                  </div>

                  <dl className="mt-5 space-y-4">
                    {service.specifications?.map((spec) => (
                      <div
                        key={spec.label}
                        className="border-b border-border/50 pb-3 last:border-0 last:pb-0"
                      >
                        <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          {spec.label}
                        </dt>
                        <dd className="mt-1 text-sm font-semibold text-navy">
                          {spec.value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-6 pt-5 border-t border-border">
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      All projects are built to national safety and building code standards with guaranteed structural reliability.
                    </p>
                  </div>
                </div>
              </FadeIn>

              {/* Consultation Card */}
              <FadeIn direction="left" delay={0.2}>
                <div className="rounded-3xl bg-navy p-7 text-white shadow-xl">
                  <span className="eyebrow text-gold">Free Estimate</span>
                  <h3 className="mt-2 font-display text-xl font-bold text-white">
                    Planning a {service.title} project?
                  </h3>
                  <p className="mt-3 text-sm text-white/75 leading-relaxed">
                    Discuss your plot dimensions, budget, and construction timeline directly with our senior project engineers.
                  </p>

                  <div className="mt-6 space-y-3">
                    <Link
                      to={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="btn-primary w-full text-center"
                    >
                      Book Site Consultation
                    </Link>
                    <a
                      href="tel:7020999781"
                      className="btn-outline-light w-full text-center"
                    >
                      Call +91 7020999781
                    </a>
                  </div>

                  <div className="mt-6 flex items-center gap-3 border-t border-white/15 pt-5 text-xs text-white/70">
                    <Clock3 className="h-4 w-4 text-gold shrink-0" />
                    <span>Response within 24 hours guaranteed</span>
                  </div>
                </div>
              </FadeIn>

              {/* Other Services Navigation List */}
              <FadeIn direction="left" delay={0.25}>
                <div className="rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
                  <h3 className="font-display text-lg font-bold text-navy">
                    Other Specialized Services
                  </h3>
                  <div className="mt-5 space-y-3">
                    {otherServices.map((other) => {
                      const OtherIcon = other.icon;
                      return (
                        <Link
                          key={other.id}
                          to={`/services/${other.id}`}
                          className="group flex items-center justify-between rounded-xl border border-border/70 p-3.5 transition-all hover:border-primary hover:bg-secondary/40"
                        >
                          <div className="flex items-center gap-3">
                            <span className="grid h-9 w-9 place-items-center rounded-lg bg-navy text-gold transition-transform group-hover:scale-110">
                              <OtherIcon className="h-4 w-4" />
                            </span>
                            <span className="text-sm font-semibold text-navy group-hover:text-primary transition-colors">
                              {other.title}
                            </span>
                          </div>
                          <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                        </Link>
                      );
                    })}
                  </div>

                  <div className="mt-6 text-center">
                    <Link
                      to="/services"
                      className="text-xs font-semibold text-primary hover:text-navy transition-colors inline-flex items-center gap-1"
                    >
                      View all 9 construction services <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="section-pad bg-navy text-navy-foreground">
        <div className="container-px mx-auto max-w-4xl text-center">
          <FadeIn direction="up" delay={0.05}>
            <span className="eyebrow text-gold">Ready to build?</span>
          </FadeIn>
          <FadeIn direction="up" delay={0.15}>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold">
              Turn your {service.title.toLowerCase()} into reality.
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.25}>
            <p className="mt-5 text-white/75 max-w-2xl mx-auto leading-relaxed">
              From site feasibility to final handover, Virat Constructions & Associates ensures total transparency, superior craftsmanship, and on-schedule completion.
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.35}>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to={`/contact?service=${encodeURIComponent(service.title)}`}
                className="btn-primary"
              >
                Start a Conversation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="btn-outline-light">
                Explore Other Services
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

