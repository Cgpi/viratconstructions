import { Link } from "react-router-dom";
import { Bed, Bath, Maximize, MapPin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function PropertyCard({ p }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="card-luxury group"
    >
      <Link to={`/properties/${p.id}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <motion.img
            src={p.image}
            alt={p.title}
            loading="lazy"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="h-full w-full object-cover will-change-transform"
          />
          <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-navy shadow-sm">
            For {p.listing}
          </span>
          <span className="absolute right-4 top-4 rounded-full bg-gold px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-navy shadow-sm">
            {p.category}
          </span>
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-xl font-semibold text-navy line-clamp-1 transition-colors duration-200 group-hover:text-primary">
              {p.title}
            </h3>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
          <p className="mt-1.5 flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-primary" /> {p.location}
          </p>
          <p className="mt-4 text-2xl font-bold text-gradient-gold font-display">
            {p.price}
          </p>
          <div className="mt-5 flex items-center gap-5 border-t border-border pt-4 text-sm text-muted-foreground">
            {p.beds > 0 && (
              <span className="flex items-center gap-1.5">
                <Bed className="h-4 w-4 text-primary" /> {p.beds} Beds
              </span>
            )}
            {p.baths > 0 && (
              <span className="flex items-center gap-1.5">
                <Bath className="h-4 w-4 text-primary" /> {p.baths} Baths
              </span>
            )}
            <span className="flex items-center gap-1.5 ml-auto">
              <Maximize className="h-4 w-4 text-primary" /> {p.area.toLocaleString()} sqft
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
