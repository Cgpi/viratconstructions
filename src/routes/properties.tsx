import { useState } from "react";
import { PageHero } from "@/components/page-hero";
import { PropertyCard } from "@/components/property-card";
import { properties } from "@/lib/data";

export default function PropertiesPage() {
  const filterGroups = [
    { name: "Listing", key: "listing", options: ["All", "Buy", "Rent"] },
    { name: "Type", key: "type", options: ["All", "Residential", "Commercial"] },
    { name: "Category", key: "category", options: ["All", "Apartment", "Villa", "Plot"] },
  ] as const;

  const [filters, setFilters] = useState<Record<string, string>>({
    listing: "All",
    type: "All",
    category: "All",
  });

  const filtered = properties.filter(
    (p) =>
      (filters.listing === "All" || p.listing === filters.listing) &&
      (filters.type === "All" || p.type === filters.type) &&
      (filters.category === "All" || p.category === filters.category)
  );

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Find your next address."
        subtitle="A handpicked selection of homes, estates and commercial spaces across the world's most coveted markets."
      />

      <section className="section-pad">
        <div className="container-px mx-auto max-w-7xl">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
            <div className="grid gap-6 md:grid-cols-3">
              {filterGroups.map((g) => (
                <div key={g.key}>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">{g.name}</p>
                  <div className="flex flex-wrap gap-2">
                    {g.options.map((opt) => {
                      const active = filters[g.key] === opt;
                      return (
                        <button
                          key={opt}
                          onClick={() => setFilters((f) => ({ ...f, [g.key]: opt }))}
                          className={`rounded-full px-4 py-1.5 text-sm font-medium border transition-all ${
                            active
                              ? "bg-navy text-navy-foreground border-navy"
                              : "bg-white text-foreground/70 border-border hover:border-gold hover:text-navy"
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Showing <span className="font-semibold text-navy">{filtered.length}</span> of {properties.length} properties
          </p>

          <div className="mt-6 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => <PropertyCard key={p.id} p={p} />)}
          </div>

          {filtered.length === 0 && (
            <div className="mt-12 text-center text-muted-foreground py-16 border border-dashed rounded-2xl">
              No properties match these filters. Try adjusting your selection.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
