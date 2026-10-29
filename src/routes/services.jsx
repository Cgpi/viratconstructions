import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { PageHero } from "@/components/page-hero";
import { servicesData } from "@/lib/services-data";
import { useServicesWithApiImages } from "@/hooks/use-service-images";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/motion-elements";
import { SMOOTH_EASE } from "@/components/animations/constants";

export default function ServicesPage() {
  const services = useServicesWithApiImages(servicesData);

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Construction solutions built around your vision."
        description="From industrial infrastructure and warehouses to Trimix roads, layouts, interiors, and complete residential and commercial developments."
      />

      <section className="section-pad">
        <div className="container-px mx-auto max-w-7xl">
          <StaggerContainer
            staggerDelay={0.08}
            delayChildren={0.1}
            className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((s) => {
              const Icon = s.icon;

              return (
                <StaggerItem key={s.id}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.35, ease: SMOOTH_EASE }}
                    className="group card-luxury relative overflow-hidden flex flex-col h-full bg-card border border-border"
                  >
                    {/* Related Free Image Showcase with smooth hover zoom */}
                    <Link
                      to={`/services/${s.id}`}
                      className="block relative aspect-[16/10] overflow-hidden bg-muted"
                    >
                      <motion.img
                        src={s.image}
                        alt={s.title}
                        loading="lazy"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.7, ease: SMOOTH_EASE }}
                        className="h-full w-full object-cover will-change-transform"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                      
                      {/* Category tag */}
                      <span className="absolute left-4 top-4 rounded-full bg-navy/90 backdrop-blur-md px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-gold shadow-sm">
                        {s.shortTag}
                      </span>

                      {/* Icon overlay badge */}
                      <span className="absolute right-4 bottom-4 grid h-11 w-11 place-items-center rounded-xl bg-white/95 text-primary shadow-md backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </span>
                    </Link>

                    {/* Card Body */}
                    <div className="p-7 flex-1 flex flex-col justify-between">
                      <div>
                        <Link to={`/services/${s.id}`} className="block">
                          <h3 className="font-display text-xl font-bold text-navy transition-colors duration-200 group-hover:text-primary">
                            {s.title}
                          </h3>
                        </Link>

                        <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                          {s.summary}
                        </p>

                        {/* Quick preview highlights */}
                        <div className="mt-5 space-y-2 border-t border-border/60 pt-4">
                          {s.points.slice(0, 3).map((pt) => (
                            <div key={pt} className="flex items-center gap-2 text-xs text-foreground/80">
                              <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                              <span className="truncate">{pt}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Read More button navigating to dedicated page */}
                      <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between">
                        <Link
                          to={`/services/${s.id}`}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-primary-dark transition-colors"
                        >
                          Read More
                          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </Link>
                        <span className="text-xs text-muted-foreground">
                          Detailed View →
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Planning Next Project Section */}
      <section className="section-pad bg-navy text-navy-foreground">
        <div className="container-px mx-auto max-w-4xl text-center">
          <FadeIn direction="up" delay={0.1}>
            <span className="eyebrow text-gold">Consultation</span>
            <h2 className="mt-2 font-display text-3xl md:text-5xl font-bold">
              Planning your next construction project?
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <p className="mt-5 text-white/70 leading-relaxed max-w-2xl mx-auto">
              Talk to our engineering team about your construction, infrastructure,
              industrial, or interior requirements and receive expert guidance on specifications, costing, and execution.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Start a Conversation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="tel:7020999781" className="btn-outline-light">
                Call +91 7020999781
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
