import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { PageHero } from "@/components/page-hero";

const faqs = [
  { q: "How do I schedule a property visit?", a: "Use the Book Site Visit button anywhere on the site, or call our advisory team directly. We typically confirm appointments within two business hours." },
  { q: "Do you provide legal assistance?", a: "Yes. Every transaction includes review by our in-house counsel, covering contracts, title verification, easements, and disclosures at no additional charge." },
  { q: "Are home loans available?", a: "We work with a panel of preferred lenders offering competitive rates for our clients. We can introduce you and shepherd the pre-approval process end-to-end." },
  { q: "How can I contact an agent?", a: "Reach us by phone, email, or the contact form. A senior advisor will respond personally — never an auto-reply or junior associate." },
  { q: "What is your fee structure?", a: "Fees are agreed transparently up front. We share our standard schedule on the first call and tailor it where the scope warrants." },
  { q: "Do you handle international buyers?", a: "Absolutely. We routinely advise overseas buyers and can coordinate viewings, financing, and closing remotely with full discretion." },
];

export default function FAQPage() {
  const [open, setOpen] = useState(0);

  return (
    <>
      <PageHero
        eyebrow="Help Center"
        title="Frequently asked questions."
        subtitle="If your question isn't here, our advisors are a phone call away."
      />

      <section className="section-pad">
        <div className="container-px mx-auto max-w-3xl">
          <div className="space-y-4">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className={`rounded-2xl border bg-card transition-all ${isOpen ? "border-gold shadow-[var(--shadow-card)]" : "border-border"}`}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-lg font-semibold text-navy">{f.q}</span>
                    <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition-all ${isOpen ? "bg-gold text-navy" : "bg-secondary text-navy"}`}>
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-muted-foreground leading-relaxed animate-fade-in">
                      {f.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
