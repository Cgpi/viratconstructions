import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/motion-elements";
import { SMOOTH_EASE } from "@/components/animations/constants";

const faqs = [
  {
    q: "What types of construction projects do you undertake?",
    a: "We specialize in industrial construction, including re-rolling mills, dal mills, warehousing facilities, Trimix roads, layout development, interior projects, and residential and commercial buildings.",
  },
  {
    q: "Do you handle both industrial and commercial projects?",
    a: "Yes. Our team has experience delivering industrial, commercial, and residential construction projects with a focus on quality, safety, and timely execution.",
  },
  {
    q: "Can you manage projects from planning to completion?",
    a: "Yes. We provide end-to-end construction solutions, from project planning and execution to quality inspections and final handover.",
  },
  {
    q: "How do you ensure construction quality?",
    a: "We use quality materials, skilled professionals, and established construction practices while maintaining strict quality checks throughout every stage of the project.",
  },
  {
    q: "Do you undertake interior and infrastructure work?",
    a: "Yes. Along with building construction, we also execute interior projects, Trimix road construction, and layout development for various sectors.",
  },
];

export function FaqSection() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="section-pad">
      <div className="container-px mx-auto max-w-4xl">
        <div className="text-center max-w-2xl mx-auto">
          <FadeIn direction="up" delay={0.05}>
            <span className="eyebrow">FAQs</span>
          </FadeIn>
          <FadeIn direction="up" delay={0.15}>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-navy">
              Common questions
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.25}>
            <p className="mt-4 text-muted-foreground">
              Find answers to common questions about our construction services and project execution.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer
          staggerDelay={0.08}
          delayChildren={0.15}
          className="mt-12 space-y-4"
        >
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <StaggerItem key={faq.q}>
                <div className="card-luxury overflow-hidden transition-all duration-300">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base md:text-lg font-semibold text-navy transition-colors duration-200 hover:text-primary">
                      {faq.q}
                    </span>
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "bg-primary text-white rotate-180"
                          : "bg-secondary text-brand-dark"
                      }`}
                    >
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: SMOOTH_EASE }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed border-t border-border/40 pt-3">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
