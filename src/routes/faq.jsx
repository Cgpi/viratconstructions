import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { PageHero } from "@/components/page-hero";

const faqs = [
  {
    q: "What types of construction projects do you undertake?",
    a: "We undertake a wide range of construction projects including industrial projects, residential buildings, commercial spaces, warehouses, apartments, and row houses. We also provide VDF flooring, interior designing, and layout development services."
  },
  {
    q: "Do you undertake industrial construction projects?",
    a: "Yes. We provide construction solutions for various industrial requirements, including steel industries, re-rolling mills, dal mills, manufacturing facilities, industrial structures, and other customized industrial projects."
  },
  {
    q: "Do you provide complete residential construction services?",
    a: "Yes. We undertake residential construction projects from planning and development to execution. Our services include individual homes, apartments, row houses, and other residential developments based on the client's requirements."
  },
  {
    q: "Do you undertake commercial construction projects?",
    a: "Yes. We provide construction solutions for commercial buildings, offices, shops, showrooms, business spaces, and other commercial developments, with a focus on functionality, durability, and efficient space utilization."
  },
  {
    q: "Do you provide warehouse construction services?",
    a: "Yes. We construct warehouses and storage facilities designed around the client's operational requirements. Our warehouse solutions focus on structural strength, efficient space utilization, accessibility, and long-term durability."
  },
  {
    q: "What is VDF flooring and where is it used?",
    a: "VDF, or Vacuum Dewatered Flooring, is a durable concrete flooring solution suitable for areas that experience heavy usage and movement. It is commonly used in industrial facilities, warehouses, factories, workshops, commercial spaces, and other heavy-duty applications."
  },
  {
    q: "Do you provide interior designing services?",
    a: "Yes. We provide interior designing solutions for residential and commercial spaces. Our services focus on creating functional, comfortable, and visually appealing interiors while considering the client's requirements, preferences, and available space."
  },
  {
    q: "Do you provide layout development services?",
    a: "Yes. We undertake layout development with a focus on effective land utilization, accessibility, internal planning, and overall functionality. Layouts can be developed for residential, commercial, and other development projects."
  },
  {
    q: "Do you construct apartments and row houses?",
    a: "Yes. We undertake apartment and row house construction projects with an emphasis on practical planning, quality construction, efficient space utilization, and modern living requirements."
  },
  {
    q: "Can you customize a project according to our requirements?",
    a: "Absolutely. Every project has different requirements, so we work closely with our clients to understand their needs, site conditions, design preferences, budget, and intended use before planning the appropriate construction solution."
  },
  {
    q: "How can I discuss my construction project with your team?",
    a: "You can contact us through the phone number, email address, or contact form provided on our website. Share your project requirements with us, and our team can discuss the scope, requirements, and next steps with you."
  },
  {
    q: "Do you handle both new construction and development projects?",
    a: "Yes. We work on new construction and development projects across industrial, residential, commercial, and warehousing segments, along with specialized services such as VDF flooring, interiors, and layout development."
  },
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
