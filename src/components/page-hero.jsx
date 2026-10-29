import { motion } from "framer-motion";
import { SMOOTH_EASE } from "@/components/animations/constants";

export function PageHero({ eyebrow, title, subtitle, description, children }) {
  const displaySubtitle = subtitle || description;

  return (
    <section className="relative bg-navy text-navy-foreground overflow-hidden">
      {/* Dynamic ambient glow */}
      <motion.div
        initial={{ opacity: 0.15, scale: 0.95 }}
        animate={{ opacity: 0.28, scale: 1.05 }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, color-mix(in srgb, var(--color-accent) 35%, transparent), transparent 55%), radial-gradient(circle at 80% 70%, color-mix(in srgb, var(--color-primary) 40%, transparent), transparent 55%)",
        }}
      />

      <div className="container-px relative mx-auto max-w-7xl py-24 md:py-32">
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: SMOOTH_EASE }}
            className="flex items-center gap-3"
          >
            <span className="h-[2px] w-8 bg-gold" />
            <span className="eyebrow text-gold">{eyebrow}</span>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: SMOOTH_EASE }}
          className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl leading-[1.1]"
        >
          {title}
        </motion.h1>

        {displaySubtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: SMOOTH_EASE }}
            className="mt-5 max-w-2xl text-base md:text-lg text-white/75 leading-relaxed"
          >
            {displaySubtitle}
          </motion.p>
        )}

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3, ease: SMOOTH_EASE }}
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
