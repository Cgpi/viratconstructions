import { Link } from "react-router-dom";
import { ChevronRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { servicesData } from "@/lib/services-data";
import { useServicesWithApiImages } from "@/hooks/use-service-images";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/motion-elements";
import { SMOOTH_EASE } from "@/components/animations/constants";

export function ServicesSection() {
  const services = useServicesWithApiImages(servicesData);

  return (
    <section className="section-pad bg-secondary/50">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <FadeIn direction="up" delay={0.05}>
              <span className="eyebrow">Our Services</span>
            </FadeIn>
            <FadeIn direction="up" delay={0.15}>
              <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-navy">
                Comprehensive construction solutions
              </h2>
            </FadeIn>
          </div>
          <FadeIn direction="left" delay={0.2}>
            <Link
              to="/services"
              className="text-sm font-semibold text-navy inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-gold group"
            >
              All services{" "}
              <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </FadeIn>
        </div>

        <div className="mt-12 overflow-x-auto pb-5">
          <StaggerContainer
            staggerDelay={0.08}
            delayChildren={0.1}
            className="flex gap-6 min-w-full px-5 sm:px-0"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <StaggerItem
                  key={service.id}
                  className="min-w-[min(80vw,290px)] sm:min-w-[calc(50%-0.75rem)] lg:min-w-[calc(25%-0.75rem)]"
                >
                  <Link to={`/services/${service.id}`} className="block h-full">
                    <motion.div
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.35, ease: SMOOTH_EASE }}
                      className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:border-primary hover:shadow-[var(--shadow-card)] flex flex-col justify-between"
                    >
                      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gold/10 transition-transform duration-500 group-hover:scale-150" />
                      
                      <div>
                        <div className="relative transition-transform duration-300 group-hover:scale-110 origin-left">
                          <Icon className="h-9 w-9 text-primary" />
                        </div>
                        <h3 className="relative mt-5 font-display text-lg font-semibold text-navy transition-colors duration-200 group-hover:text-primary">
                          {service.title}
                        </h3>
                        <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                          {service.summary}
                        </p>
                      </div>

                      <div className="relative mt-5 pt-3 border-t border-border/60 flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:text-primary-dark">
                        <span>Explore details</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                      </div>
                    </motion.div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
