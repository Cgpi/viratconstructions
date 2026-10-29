import {
  Building2,
  Construction,
  Factory,
  Home,
  Paintbrush,
  Warehouse,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/motion-elements";

const industries = [
  {
    icon: Factory,
    title: "Industrial Facilities",
    text: "Construction of re-rolling mills, dal mills, production units, and industrial infrastructure.",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    text: "Modern warehouse construction designed for efficient storage and logistics.",
  },
  {
    icon: Construction,
    title: "Infrastructure",
    text: "Trimix roads and layout development for industrial, commercial, and residential projects.",
  },
  {
    icon: Building2,
    title: "Commercial Buildings",
    text: "Construction solutions for offices, retail spaces, and commercial developments.",
  },
  {
    icon: Home,
    title: "Residential Projects",
    text: "Quality construction services for homes and residential developments.",
  },
  {
    icon: Paintbrush,
    title: "Interior Projects",
    text: "Professional interior construction and finishing solutions.",
  },
];

export function IndustriesSection() {
  return (
    <section className="section-pad">
      <div className="container-px mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto">
          <FadeIn direction="up" delay={0.05}>
            <span className="eyebrow">Industries Served</span>
          </FadeIn>
          <FadeIn direction="up" delay={0.15}>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-navy">
              Delivering solutions across diverse sectors
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.25}>
            <p className="mt-4 text-muted-foreground">
              We provide reliable construction services for industrial, commercial, and residential projects with a focus on quality, durability, and timely execution.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer
          staggerDelay={0.1}
          delayChildren={0.2}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {industries.map((industry) => (
            <StaggerItem key={industry.title}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="card-luxury p-7 h-full group"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-brand-dark transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                  <industry.icon className="h-6 w-6 transition-colors duration-200" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy transition-colors duration-200 group-hover:text-primary">
                  {industry.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {industry.text}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
