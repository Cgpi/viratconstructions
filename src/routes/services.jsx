import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Factory,
  Home,
  Building2,
  Warehouse,
  Layers,
  Paintbrush,
  Map,
  Building,
  Rows3,
  ArrowRight,
  X,
  CheckCircle2,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = activeService ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeService]);

  // Close modal on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setActiveService(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const services = [
    {
      icon: Factory,
      title: "Industrial Projects",
      summary:
        "Construction and development projects for industrial facilities designed around specific operational requirements of businesses.",
      intro: [
        "We undertake construction and development projects for industrial facilities designed around the specific operational requirements of businesses.",
        "From manufacturing units to processing facilities, we focus on creating strong, functional, and efficient structures capable of supporting demanding industrial operations.",
      ],
      listTitle: "Our industrial construction solutions include:",
      points: [
        "Manufacturing and production facilities",
        "Steel industry projects",
        "Dal mills and food-processing units",
        "Industrial sheds and structures",
        "Factory buildings",
        "Utility and service areas",
        "Customized industrial spaces",
      ],
      outro:
        "We combine practical planning, structural strength, and efficient space utilization to create industrial facilities built for long-term use.",
    },
    {
      icon: Home,
      title: "Residential Projects",
      summary:
        "Residential spaces that combine structural quality, functionality, comfort, and modern design tailored to client requirements.",
      intro: [
        "We build residential spaces that combine structural quality, functionality, comfort, and modern design. Every residential project is planned according to the lifestyle, requirements, and budget of the client.",
        "From individual homes to larger residential developments, we focus on creating spaces that are comfortable, practical, and built to last.",
      ],
      listTitle: "Our residential construction services include:",
      points: [
        "Individual residential buildings",
        "Custom-designed homes",
        "Bungalows",
        "Multi-storey residential structures",
        "Residential developments",
        "Renovation and improvement works",
      ],
      outro:
        "Our approach ensures that every stage of construction is carefully coordinated to achieve a quality finished home.",
    },
    {
      icon: Building2,
      title: "Commercial Projects",
      summary:
        "Commercial construction projects with a strong focus on functionality, accessibility, aesthetics, and efficient utilization of space.",
      intro: [
        "We undertake commercial construction projects with a strong focus on functionality, accessibility, aesthetics, and efficient utilization of space.",
        "Whether it is a standalone commercial building or a business facility, we develop spaces that support the client's operational and commercial requirements.",
      ],
      listTitle: "Our commercial projects include:",
      points: [
        "Commercial buildings",
        "Offices",
        "Shops and retail spaces",
        "Showrooms",
        "Business establishments",
        "Mixed-use developments",
        "Commercial interiors",
      ],
      outro:
        "We aim to create professional and practical commercial environments that make a strong impression while supporting day-to-day business operations.",
    },
    {
      icon: Warehouse,
      title: "Warehousing Projects",
      summary:
        "Construction solutions for warehouses and storage facilities designed for efficient handling, storage, and movement of goods.",
      intro: [
        "We provide construction solutions for warehouses and storage facilities designed for efficient handling, storage, and movement of goods.",
        "Our warehouse projects are planned with attention to available space, accessibility, circulation, storage requirements, and operational efficiency.",
      ],
      listTitle: "Our warehousing solutions include:",
      points: [
        "Storage warehouses",
        "Industrial warehouses",
        "Distribution facilities",
        "Logistics spaces",
        "Custom warehouse structures",
        "Loading and unloading areas",
      ],
      outro:
        "From structural planning to execution, we focus on delivering durable and functional warehouse spaces suited to the client's operational needs.",
    },
    {
      icon: Layers,
      title: "VDF Flooring",
      summary:
        "Vacuum Dewatered Flooring solutions for areas that require a strong, durable, and smooth concrete floor surface.",
      intro: [
        "We provide VDF (Vacuum Dewatered Flooring) solutions for areas that require a strong, durable, and smooth concrete floor surface.",
        "VDF flooring is particularly suitable for industrial and commercial environments where floors are subjected to heavy movement, equipment, storage, and regular usage.",
      ],
      listTitle: "Suitable applications include:",
      points: [
        "Industrial units",
        "Warehouses",
        "Manufacturing facilities",
        "Workshops",
        "Commercial spaces",
        "Parking and utility areas",
      ],
      outro:
        "Our flooring work focuses on proper execution, surface finishing, durability, and the specific functional requirements of the project.",
    },
    {
      icon: Paintbrush,
      title: "Interior Designing",
      summary:
        "Interior spaces that balance aesthetics, functionality, comfort, and the identity of the space.",
      intro: [
        "We create interior spaces that balance aesthetics, functionality, comfort, and the identity of the space.",
        "Our interior design approach begins with understanding how the space will be used and then developing layouts, finishes, materials, and design elements accordingly.",
      ],
      listTitle: "Our interior solutions include:",
      points: [
        "Residential interiors",
        "Commercial interiors",
        "Office spaces",
        "Retail and showroom interiors",
        "Space planning",
        "Material and finish selection",
        "Customized interior concepts",
      ],
      outro:
        "From concept to execution, we aim to transform spaces into environments that are visually appealing, comfortable, and practical.",
    },
    {
      icon: Map,
      title: "Layout Development",
      summary:
        "Layout development solutions focused on effective land utilization, accessibility, functionality, and future development requirements.",
      intro: [
        "A well-planned layout is the foundation of an efficient and successful development project. We provide layout development solutions focused on effective land utilization, accessibility, functionality, and future development requirements.",
        "We work on planning spaces according to the nature of the development while maintaining a practical approach to circulation and overall site utilization.",
      ],
      listTitle: "Our layout development services include:",
      points: [
        "Residential layouts",
        "Plot planning",
        "Site development planning",
        "Internal road planning",
        "Space utilization planning",
        "Infrastructure coordination",
        "Development-oriented layouts",
      ],
      outro:
        "Our objective is to create organized and practical layouts that maximize the potential of the available site.",
    },
    {
      icon: Building,
      title: "Apartments",
      summary:
        "Apartment construction and development projects with a focus on efficient planning, structural quality, and modern living requirements.",
      intro: [
        "We undertake apartment construction and development projects with a focus on efficient planning, structural quality, functionality, and modern living requirements.",
        "From individual apartment buildings to larger residential developments, we pay attention to the overall planning of living spaces, common areas, circulation, and essential amenities.",
      ],
      listTitle: "Our apartment projects focus on:",
      points: [
        "Efficient floor plans",
        "Comfortable living spaces",
        "Quality construction",
        "Functional common areas",
        "Modern design",
        "Effective space utilization",
        "Long-term durability",
      ],
      outro:
        "We work to create apartment developments that offer a balance of comfort, functionality, and contemporary living.",
    },
    {
      icon: Rows3,
      title: "Row Houses",
      summary:
        "Row house projects that combine the advantages of independent living with efficient land utilization.",
      intro: [
        "We develop row house projects that combine the advantages of independent living with efficient land utilization.",
        "Our row house planning focuses on creating comfortable homes with well-organized internal spaces, practical layouts, attractive elevations, and appropriate outdoor areas.",
      ],
      listTitle: "Our row house solutions include:",
      points: [
        "Residential planning and development",
        "Individual row house units",
        "Optimized floor plans",
        "Modern elevations",
        "Internal roads and common areas",
        "Efficient land utilization",
        "Customized residential designs",
      ],
      outro:
        "Every project is approached with attention to functionality, aesthetics, construction quality, and the overall living experience.",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Construction solutions built around your vision."
        description="From industrial infrastructure and warehouses to roads, layouts, interiors, and complete residential and commercial projects."
      />

      <section className="section-pad">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = s.icon;

              return (
                <div
                  key={s.title}
                  className="group card-luxury p-8 relative overflow-hidden flex flex-col"
                >
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/10 transition-all group-hover:scale-150" />

                  <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-navy text-gold">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="relative mt-6 font-display text-xl font-semibold text-navy">
                    {s.title}
                  </h3>

                  <p className="relative mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                    {s.summary}
                  </p>

                  <div className="relative mt-6 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setActiveService(s)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-gold transition-colors"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-navy text-navy-foreground">
        <div className="container-px mx-auto max-w-4xl text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Planning your next project?
          </h2>

          <p className="mt-5 text-white/70">
            Talk to our team about your construction, infrastructure,
            development, or interior requirements and explore the right
            approach for your project.
          </p>

          <Link to="/contact" className="btn-gold mt-8 inline-flex">
            Start a Conversation
          </Link>
        </div>
      </section>

      {/* Modal */}
      {activeService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setActiveService(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-navy/60 backdrop-blur-sm animate-in fade-in" />

          {/* Modal panel */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-card shadow-2xl animate-in fade-in zoom-in-95"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-border bg-card px-6 py-5 sm:px-8">
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-navy text-gold">
                  <activeService.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-navy">
                  {activeService.title}
                </h3>
              </div>

              <button
                onClick={() => setActiveService(null)}
                aria-label="Close"
                className="shrink-0 rounded-full p-2 text-muted-foreground hover:bg-secondary hover:text-navy transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Body */}
            <div className="px-6 py-6 sm:px-8 sm:py-7">
              {activeService.intro.map((para, idx) => (
                <p
                  key={idx}
                  className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4"
                >
                  {para}
                </p>
              ))}

              <h4 className="mt-6 font-display text-base sm:text-lg font-semibold text-navy">
                {activeService.listTitle}
              </h4>

              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {activeService.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-gold" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {activeService.outro && (
                <p className="mt-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {activeService.outro}
                </p>
              )}

              <Link
                to="/contact"
                onClick={() => setActiveService(null)}
                className="btn-gold mt-8 inline-flex items-center gap-1.5"
              >
                Enquire About This Service
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}