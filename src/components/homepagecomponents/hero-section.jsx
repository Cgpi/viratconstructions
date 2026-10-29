import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, HardHat, Users } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero1.jpg";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/motion-elements";
import { SMOOTH_EASE } from "@/components/animations/constants";

const features = [
  { icon: ShieldCheck, title: "Quality First", text: "No compromise" },
  { icon: HardHat, title: "Built to Last", text: "Durable & Reliable" },
  { icon: Users, title: "Trusted Expertise", text: "On-time Delivery" },
];

const sideWords = ["Ideas", "Structure", "Progress", "Together"];

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center text-white overflow-hidden bg-[#07131a]">
      {/* Background image with cinematic smooth scale-in */}
      <motion.img
        src={heroImg}
        alt="Industrial building under construction at sunset"
        width={1920}
        height={1280}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: SMOOTH_EASE }}
        className="absolute inset-0 h-full w-full object-cover object-right will-change-transform"
      />

      {/* Dark fade from left so text stays readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#07131a] via-[#07131a]/85 via-35% to-transparent to-70%" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#07131a]/70 via-transparent to-transparent" />

      {/* Right side vertical tagline with smooth stagger */}
      <div className="hidden xl:flex absolute right-10 top-16 items-start gap-4 z-10">
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "6rem" }}
          transition={{ duration: 0.9, delay: 0.4, ease: SMOOTH_EASE }}
          className="w-px bg-gold/80"
        />
        <div>
          <ul className="space-y-1 text-[11px] tracking-[0.35em] text-white/70 uppercase">
            {sideWords.map((word, index) => (
              <motion.li
                key={word}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + index * 0.1,
                  ease: SMOOTH_EASE,
                }}
              >
                {word}
              </motion.li>
            ))}
          </ul>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.9, ease: SMOOTH_EASE }}
            className="mt-3 h-[3px] w-10 bg-gold origin-left"
          />
        </div>
      </div>

      <div className="container-px relative mx-auto w-full max-w-7xl py-20 md:py-28 z-10">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: SMOOTH_EASE }}
            className="flex items-center gap-4"
          >
            <span className="h-[3px] w-10 bg-gold" />
            <span className="text-[11px] sm:text-xs tracking-[0.25em] uppercase text-white/85">
              Construction <span className="mx-2 text-gold">•</span> Infrastructure{" "}
              <span className="mx-2 text-gold">•</span> Industrial Solutions
            </span>
          </motion.div>

          {/* Headline with smooth upward transition */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.35, ease: SMOOTH_EASE }}
            className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.02] tracking-tight"
          >
            Building Strong Foundations for{" "}
            <span className="text-gold">Tomorrow</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.5, ease: SMOOTH_EASE }}
            className="mt-6 max-w-xl text-base md:text-lg text-white/80 leading-relaxed"
          >
            Reliable construction solutions for industrial projects, warehousing
            and infrastructure. We deliver quality craftsmanship with a
            commitment to long-term value.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: SMOOTH_EASE }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              to="/properties"
              className="group inline-flex items-center gap-3 rounded-xl bg-[#0e9aa7] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#0e9aa7]/25 transition-all duration-300 hover:bg-[#0b8591] hover:shadow-xl hover:shadow-[#0e9aa7]/40 hover:-translate-y-0.5"
            >
              Explore Our Projects{" "}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-xl border border-white/70 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white hover:-translate-y-0.5"
            >
              Get in Touch
            </Link>
          </motion.div>

          {/* Feature highlights */}
          <StaggerContainer
            delayChildren={0.8}
            staggerDelay={0.12}
            className="mt-12 flex flex-wrap items-center gap-y-6"
          >
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex items-center">
                  {index > 0 && (
                    <span className="mx-5 sm:mx-7 hidden sm:block h-10 w-px bg-white/25" />
                  )}
                  <StaggerItem className="flex items-center gap-3 pr-6 sm:pr-0 group">
                    <div className="transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-8 w-8 text-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold leading-tight text-white">{item.title}</p>
                      <p className="text-xs text-white/70">{item.text}</p>
                    </div>
                  </StaggerItem>
                </div>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
