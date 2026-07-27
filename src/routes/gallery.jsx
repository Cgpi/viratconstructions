import { PageHero } from "@/components/page-hero";
import { galleryImages } from "@/lib/data";

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="The portfolio in pictures."
        subtitle="A curated look at the homes, interiors, and spaces that pass our threshold."
      />

      <section className="section-pad">
        <div className="container-px mx-auto max-w-7xl">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [&>*]:mb-6 [&>*]:break-inside-avoid">
            {galleryImages.map((src, i) => (
              <figure key={i} className="overflow-hidden rounded-2xl group cursor-zoom-in shadow-[var(--shadow-card)]">
                <img
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  loading="lazy"
                  className="w-full transition-transform duration-700 group-hover:scale-110"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
