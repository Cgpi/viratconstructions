import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { SMOOTH_EASE } from "./constants";

export { SMOOTH_EASE } from "./constants";

/**
 * FadeIn component
 * Smoothly animates content into view with directional drift and opacity
 */
export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.75,
  distance = 32,
  once = true,
  className = "",
  style = {},
  ...props
}) {
  const directions = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  };

  const initialOffset = directions[direction] || directions.up;

  return (
    <motion.div
      initial={{ opacity: 0, ...initialOffset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount: 0.15 }}
      transition={{
        duration,
        delay,
        ease: SMOOTH_EASE,
      }}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerContainer & StaggerItem
 * Staggers the entrance of child elements
 */
export function StaggerContainer({
  children,
  staggerDelay = 0.08,
  delayChildren = 0.1,
  once = true,
  className = "",
  ...props
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.15 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  direction = "up",
  distance = 28,
  duration = 0.65,
  className = "",
  ...props
}) {
  const directions = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  };

  const initialOffset = directions[direction] || directions.up;

  const itemVariants = {
    hidden: { opacity: 0, ...initialOffset },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        ease: SMOOTH_EASE,
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className} {...props}>
      {children}
    </motion.div>
  );
}

/**
 * TextReveal component
 * Splits text into words and smoothly reveals them with staggered slides
 */
export function TextReveal({
  text,
  as: Component = "h2",
  className = "",
  delay = 0,
  wordDuration = 0.6,
  staggerDelay = 0.04,
  once = true,
}) {
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: wordDuration,
        ease: SMOOTH_EASE,
      },
    },
  };

  return (
    <Component className={className}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once, amount: 0.2 }}
        className="inline-flex flex-wrap gap-x-[0.28em]"
      >
        {words.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            variants={wordVariants}
            className="inline-block will-change-transform"
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  );
}

/**
 * ImageReveal component
 * Smooth entrance animation for images (fade + subtle scale unpack)
 * with an optional smooth hover zoom effect
 */
export function ImageReveal({
  src,
  alt = "",
  width,
  height,
  className = "",
  imgClassName = "",
  aspectRatio,
  delay = 0,
  duration = 0.9,
  hoverZoom = true,
  priority = false,
  ...props
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration,
        delay,
        ease: SMOOTH_EASE,
      }}
      className={`overflow-hidden relative ${className}`}
      style={aspectRatio ? { aspectRatio } : undefined}
      {...props}
    >
      <motion.img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        whileHover={hoverZoom ? { scale: 1.05 } : undefined}
        transition={{
          duration: 0.7,
          ease: SMOOTH_EASE,
        }}
        className={`w-full h-full object-cover will-change-transform ${imgClassName}`}
      />
    </motion.div>
  );
}

/**
 * CounterNumber component
 * Smoothly animates numbers when in view (e.g. 2011, 100, 15)
 */
export function CounterNumber({ value, suffix = "", className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [displayValue, setDisplayValue] = useState(0);

  // Extract number from string if string passed
  const numericValue = typeof value === "number" ? value : parseInt(value, 10) || 0;

  useEffect(() => {
    if (!isInView) return;

    const durationMs = 1600;
    const startTime = performance.now();

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(easeProgress * numericValue);

      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setDisplayValue(numericValue);
      }
    }

    requestAnimationFrame(update);
  }, [isInView, numericValue]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
      {suffix}
    </span>
  );
}
