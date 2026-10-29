import { ClipboardList, HardHat, PaintBucket, Ruler } from "lucide-react";
import { motion } from "framer-motion";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/motion-elements";

const processSteps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Consultation",
    text: "We assess your goals, site, and budget to shape a clear brief.",
  },
  {
    icon: Ruler,
    step: "02",
    title: "Design & Planning",
    text: "Architects and engineers translate the brief into detailed plans.",
  },
  {
    icon: HardHat,
    step: "03",
    title: "Construction",
    text: "Our crews execute with safety, quality control, and daily tracking.",
  },
  {
    icon: PaintBucket,
    step: "04",
    title: "Finishing & Handover",
    text: "Interior works, inspections, and a smooth, documented handover.",
  },
];

export function ProcessSection() {
  return (
    <section className="section-pad bg-navy text-white overflow-hidden">
      <div className="container-px mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto">
          <FadeIn direction="up" delay={0.05}>
            <span className="eyebrow text-gold">Our Process</span>
          </FadeIn>
          <FadeIn direction="up" delay={0.15}>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold">
              From blueprint to handover
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.25}>
            <p className="mt-4 text-white/70">
              A disciplined, four-stage process built for predictability.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer
          staggerDelay={0.14}
          delayChildren={0.2}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {processSteps.map((processStep, index) => (
            <StaggerItem key={processStep.title} className="relative group">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10 border border-white/15 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-navy group-hover:scale-110">
                  <processStep.icon className="h-6 w-6" />
                </div>
                <span className="mt-5 block font-display text-4xl font-bold text-white/20 transition-colors duration-300 group-hover:text-gold/50">
                  {processStep.step}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold text-white">
                  {processStep.title}
                </h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">
                  {processStep.text}
                </p>
              </motion.div>

              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-full w-8 border-t border-dashed border-white/20" />
              )}
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
