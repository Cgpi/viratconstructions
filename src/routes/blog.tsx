import { ArrowRight, Calendar } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { blogPosts } from "@/lib/data";

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
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.id} className="card-luxury group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={post.image} alt={post.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="rounded-full bg-gold/15 text-navy px-2.5 py-1 font-semibold uppercase tracking-wider">{post.category}</span>
                    <span className="flex items-center gap-1.5"><Calendar className="h-3 w-3" /> {post.date}</span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold text-navy leading-snug">{post.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                  <a href="#" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-gold">
                    Read More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
