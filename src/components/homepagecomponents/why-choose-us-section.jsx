import { Building2, Clock3, HardHat, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/motion-elements";

const reasons = [
  {
    icon: Building2,
    title: "Industrial Expertise",
    text: "Specialized experience in re-rolling mills, dal mills, warehousing, and industrial infrastructure projects.",
  },
  {
    icon: HardHat,
    title: "Quality Construction",
    text: "Every project is executed using quality materials, skilled workmanship, and proven construction practices.",
  },
  {
    icon: Clock3,
    title: "On-Time Delivery",
    text: "We follow efficient project planning and execution to deliver projects within committed timelines.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Solutions",
    text: "From Trimix roads and layout development to interiors and commercial projects, we provide dependable end-to-end construction services.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="section-pad">
      <div className="container-px mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto">
          <FadeIn direction="up" delay={0.05}>
            <span className="eyebrow">Why Choose Us</span>
          </FadeIn>
          <FadeIn direction="up" delay={0.15}>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-navy">
              Building excellence with every project
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.25}>
            <p className="mt-4 text-muted-foreground">
              We deliver quality construction through expertise, precision, timely execution, and a commitment to lasting value.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer
          staggerDelay={0.12}
          delayChildren={0.2}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {reasons.map((reason) => (
            <StaggerItem key={reason.title}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="card-luxury p-7 text-center h-full group"
              >
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-navy text-gold transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-navy/20">
                  <reason.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy transition-colors duration-200 group-hover:text-primary">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {reason.text}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
