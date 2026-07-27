import { Link } from "react-router-dom";
import { Bed, Bath, Maximize, MapPin, ArrowUpRight } from "lucide-react";

export function PropertyCard({ p }) {
  return (
    <article className="card-luxury group">
      <Link
        to={`/properties/${p.id}`}
        className="block"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={p.image}
            alt={p.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-navy">
            For {p.listing}
          </span>
          <span className="absolute right-4 top-4 rounded-full bg-gold px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-navy">
            {p.category}
          </span>
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-xl font-semibold text-navy line-clamp-1">{p.title}</h3>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:text-gold group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
          <p className="mt-1.5 flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" /> {p.location}
          </p>
          <p className="mt-4 text-2xl font-bold text-gradient-gold font-display">{p.price}</p>
          <div className="mt-5 flex items-center gap-5 border-t border-border pt-4 text-sm text-muted-foreground">
            {p.beds > 0 && (
              <span className="flex items-center gap-1.5"><Bed className="h-4 w-4 text-gold" /> {p.beds} Beds</span>
            )}
            {p.baths > 0 && (
              <span className="flex items-center gap-1.5"><Bath className="h-4 w-4 text-gold" /> {p.baths} Baths</span>
            )}
            <span className="flex items-center gap-1.5 ml-auto"><Maximize className="h-4 w-4 text-gold" /> {p.area.toLocaleString()} sqft</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
