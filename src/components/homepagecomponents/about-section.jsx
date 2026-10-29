import { Handshake, Crosshair, Users } from "lucide-react";
import { motion } from "framer-motion";
import ctaImg from "@/assets/cta.jpg";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/motion-elements";
import { SMOOTH_EASE } from "@/components/animations/constants";

const values = [
  {
    icon: Handshake,
    title: "Integrity",
    text: "Transparent dealings and ethical practices.",
  },
  {
    icon: Crosshair,
    title: "Precision",
    text: "Attention to detail in every project.",
  },
  {
    icon: Users,
    title: "Commitment",
    text: "On-time delivery and long-term partnerships.",
  },
];

export function AboutSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="container-px mx-auto max-w-[1400px] grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        {/* Visual composition with smooth motion */}
        <div className="relative w-full aspect-[4/3]">
          {/* Gold accent block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, delay: 0.2, ease: SMOOTH_EASE }}
            className="absolute right-0 bottom-0 top-[14%] left-[60%] bg-gold rounded-2xl"
          />

          {/* Teal block with number + vertical words */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: SMOOTH_EASE }}
            className="absolute left-0 top-0 h-[90%] w-[31%] bg-primary rounded-2xl overflow-hidden shadow-lg"
          >
            <span
              className="absolute left-[14%] top-[26%] font-display text-6xl sm:text-8xl font-light leading-none select-none"
              style={{
                WebkitTextStroke: "1.5px rgba(255,255,255,0.75)",
                color: "transparent",
              }}
            >
              01
            </span>
            <ul className="absolute bottom-[8%] left-[14%] space-y-1 text-[10px] sm:text-xs font-medium uppercase tracking-[0.3em] text-white/85">
              <li>People</li>
              <li>Plans</li>
              <li>Progress</li>
            </ul>
          </motion.div>

          {/* Photo with smooth reveal & subtle hover scale */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.15, ease: SMOOTH_EASE }}
            className="absolute left-[22%] top-[10%] h-[88%] w-[73%] overflow-hidden rounded-2xl shadow-2xl"
          >
            <motion.img
              src={ctaImg}
              alt="Construction team reviewing plans at an industrial site"
              width={960}
              height={720}
              loading="lazy"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7, ease: SMOOTH_EASE }}
              className="h-full w-full object-cover will-change-transform"
            />
          </motion.div>
        </div>

        {/* Content */}
        <div>
          <FadeIn direction="right" delay={0.1}>
            <div className="flex items-center gap-4">
              <span className="h-[3px] w-12 bg-gold" />
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-navy">
                About Us
              </span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <h2 className="mt-5 font-display text-4xl md:text-5xl xl:text-6xl font-extrabold leading-[1.1] tracking-tight">
              <span className="block text-navy">Built on Trust.</span>
              <span className="block text-primary">Driven by Quality.</span>
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
              We are a construction company focused on delivering reliable and efficient
              solutions for industrial, commercial and infrastructure projects. With a
              commitment to quality, safety and timely execution, we turn ideas into
              long-lasting structures that create real value.
            </p>
          </FadeIn>

          <StaggerContainer
            staggerDelay={0.12}
            delayChildren={0.35}
            className="mt-8 grid gap-6 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-border"
          >
            {values.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem
                  key={item.title}
                  className="flex items-start gap-3 sm:px-5 first:sm:pl-0 last:sm:pr-0 group"
                >
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-9 w-9 shrink-0 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-navy transition-colors duration-200 group-hover:text-primary">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm leading-snug text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
