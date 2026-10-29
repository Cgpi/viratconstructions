import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { PageHero } from "@/components/page-hero";
import { blogPosts } from "@/lib/data";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/motion-elements";
import { SMOOTH_EASE } from "@/components/animations/constants";

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="The Journal"
        title="Insights, design, and the market."
        subtitle="Long-form thinking from our advisors, architects, and investment desk."
      />

      <section className="section-pad">
        <div className="container-px mx-auto max-w-7xl">
          <StaggerContainer
            staggerDelay={0.1}
            delayChildren={0.1}
            className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
          >
            {blogPosts.map((post) => (
              <StaggerItem key={post.id}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.35, ease: SMOOTH_EASE }}
                  className="card-luxury group h-full flex flex-col"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <motion.img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.7, ease: SMOOTH_EASE }}
                      className="h-full w-full object-cover will-change-transform"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="rounded-full bg-gold/20 text-navy px-2.5 py-1 font-semibold uppercase tracking-wider">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3 w-3" /> {post.date}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-xl font-semibold text-navy leading-snug transition-colors duration-200 group-hover:text-primary">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                      {post.excerpt}
                    </p>
                    <a
                      href="#"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-gold transition-colors duration-200"
                    >
                      Read More{" "}
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </a>
                  </div>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
