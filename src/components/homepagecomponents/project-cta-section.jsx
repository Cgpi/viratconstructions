import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ctaImg from "@/assets/cta.jpg";
import { FadeIn } from "@/components/animations/motion-elements";
import { SMOOTH_EASE } from "@/components/animations/constants";

export function ProjectCtaSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image with subtle scale on reveal */}
      <motion.img
        src={ctaImg}
        alt="Construction project"
        width={1920}
        height={1080}
        loading="lazy"
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.4, ease: SMOOTH_EASE }}
        className="absolute inset-0 h-full w-full object-cover will-change-transform"
      />
      <div className="absolute inset-0 bg-navy/85 backdrop-blur-[2px]" />

      <div className="container-px relative mx-auto max-w-5xl py-24 md:py-32 text-center text-white">
        <FadeIn direction="up" delay={0.05}>
          <span className="eyebrow text-gold">Let's Build Together</span>
        </FadeIn>

        <FadeIn direction="up" delay={0.15}>
          <h2 className="mt-4 font-display text-3xl md:text-5xl lg:text-6xl font-bold">
            Ready to start your <span className="text-gradient-gold">construction project?</span>
          </h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.25}>
          <p className="mt-5 max-w-xl mx-auto text-white/80 leading-relaxed">
            Whether it's an industrial facility, warehouse, Trimix road, interior project, or residential and commercial construction, our team is ready to bring your vision to life.
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.35}>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Get a Free Consultation
            </Link>
            <Link to="/contact" className="btn-outline-light">
              Contact Us
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
