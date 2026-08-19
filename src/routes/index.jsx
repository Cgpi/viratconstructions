import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  MapPinned,
  Scale,
  Users,
  Home as HomeIcon,
  KeyRound,
  Briefcase,
  TrendingUp,
  Star,
  ChevronRight,
  Building2,
  Factory,
  Warehouse,
  Hotel,
  School,
  HeartPulse,
  ClipboardList,
  Ruler,
  HardHat,
  PaintBucket,
  CheckCircle2,
  Plus,
  Minus,
  CalendarDays,
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Clock3,
  Building,
  Layers,
  Home,
  Paintbrush,
  Construction,
} from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/hero.jpg";
import ctaImg from "@/assets/cta.jpg";
import { properties, testimonials } from "@/lib/data";
import { PropertyCard } from "@/components/property-card";
import { submitContactForm } from "@/lib/contact-form";

const stats = [
  { value: "100+", label: "Happy Clients" },
  { value: "200+", label: "Projects Completed" },
  { value: "15+", label: "Years Experience" },
];

const reasons = [
  {
    icon: Building2,
    title: "Industrial Expertise",
    text: "Specialized experience in re-rolling mills, dal mills, warehousing, and industrial infrastructure projects.",
  },
  {
    icon: HardHat,
    title: "Quality Construction",
    text: "Every project is executed using quality materials, skilled workmanship, and proven construction practices.",
  },
  {
    icon: Clock3,
    title: "On-Time Delivery",
    text: "We follow efficient project planning and execution to deliver projects within committed timelines.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Solutions",
    text: "From Trimix roads and layout development to interiors and commercial projects, we provide dependable end-to-end construction services.",
  },
];
const services = [
  {
    icon: Factory,
    title: "Industrial Projects",
    text: "Specialized construction for steel industries, dal mills, manufacturing units, and industrial facilities.",
  },
  {
    icon: Home,
    title: "Residential Projects",
    text: "Quality residential construction focused on comfortable spaces, practical layouts, and lasting durability.",
  },
  {
    icon: Building2,
    title: "Commercial Projects",
    text: "Professional construction solutions for offices, showrooms, shops, and modern commercial spaces.",
  },
  {
    icon: Warehouse,
    title: "Warehousing Projects",
    text: "Durable warehouse structures designed for efficient storage, safety, accessibility, and long-term performance.",
  },
  {
    icon: Layers,
    title: "VDF Flooring",
    text: "Strong and smooth VDF flooring solutions designed for industrial, commercial, warehouse, and heavy-use areas.",
  },
  {
    icon: Paintbrush,
    title: "Interior Designing",
    text: "Creative and functional interior solutions designed to transform residential, commercial, and business spaces.",
  },
  {
    icon: MapPin,
    title: "Layout Development",
    text: "Well-planned layouts focused on effective land utilization, accessibility, infrastructure, and future development.",
  },
  {
    icon: Building,
    title: "Apartments",
    text: "Modern apartment construction with efficient floor plans, quality materials, comfortable spaces, and lasting value.",
  },
  {
    icon: Home,
    title: "Row Houses",
    text: "Thoughtfully planned row houses combining modern design, comfortable living spaces, and efficient land utilization.",
  },
];

const industries = [
  {
    icon: Factory,
    title: "Industrial Facilities",
    text: "Construction of re-rolling mills, dal mills, production units, and industrial infrastructure.",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    text: "Modern warehouse construction designed for efficient storage and logistics.",
  },
  {
    icon: Construction,
    title: "Infrastructure",
    text: "Trimix roads and layout development for industrial, commercial, and residential projects.",
  },
  {
    icon: Building2,
    title: "Commercial Buildings",
    text: "Construction solutions for offices, retail spaces, and commercial developments.",
  },
  {
    icon: Home,
    title: "Residential Projects",
    text: "Quality construction services for homes and residential developments.",
  },
  {
    icon: Paintbrush,
    title: "Interior Projects",
    text: "Professional interior construction and finishing solutions.",
  },
];

const processSteps = [
  { icon: ClipboardList, step: "01", title: "Consultation", text: "We assess your goals, site, and budget to shape a clear brief." },
  { icon: Ruler, step: "02", title: "Design & Planning", text: "Architects and engineers translate the brief into detailed plans." },
  { icon: HardHat, step: "03", title: "Construction", text: "Our crews execute with safety, quality control, and daily tracking." },
  { icon: PaintBucket, step: "04", title: "Finishing & Handover", text: "Interior works, inspections, and a smooth, documented handover." },
];

const faqs = [
  {
    q: "What types of construction projects do you undertake?",
    a: "We specialize in industrial construction, including re-rolling mills, dal mills, warehousing facilities, Trimix roads, layout development, interior projects, and residential and commercial buildings.",
  },
  {
    q: "Do you handle both industrial and commercial projects?",
    a: "Yes. Our team has experience delivering industrial, commercial, and residential construction projects with a focus on quality, safety, and timely execution.",
  },
  {
    q: "Can you manage projects from planning to completion?",
    a: "Yes. We provide end-to-end construction solutions, from project planning and execution to quality inspections and final handover.",
  },
  {
    q: "How do you ensure construction quality?",
    a: "We use quality materials, skilled professionals, and established construction practices while maintaining strict quality checks throughout every stage of the project.",
  },
  {
    q: "Do you undertake interior and infrastructure work?",
    a: "Yes. Along with building construction, we also execute interior projects, Trimix road construction, and layout development for various sectors.",
  },
];

const blogs = [
  {
    title: "5 Signs a Neighborhood Will Appreciate in Value",
    date: "Jun 12, 2026",
    tag: "Market Insight",
  },
  {
    title: "Trimix Roads Explained: Why Developers Are Switching",
    date: "May 28, 2026",
    tag: "Construction",
  },
  {
    title: "A Buyer's Checklist for Off-Market Properties",
    date: "May 09, 2026",
    tag: "Buying Guide",
  },
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitState, setSubmitState] = useState({ type: "idle", message: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setSubmitState({ type: "idle", message: "" });

    try {
      await submitContactForm({
        name: form.name,
        email: form.email,
        phone: form.phone,
        subject: form.subject,
        message: form.message,
      });
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      setSubmitState({ type: "success", message: "Thanks! Your message has been sent successfully." });
    } catch (error) {
      setSubmitState({ type: "error", message: error instanceof Error ? error.message : "Unable to send your message right now." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center text-white overflow-hidden">
        <img src={heroImg} alt="Luxury villa at dusk" width={1920} height={1280} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/60 to-navy/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />

        <div className="container-px relative mx-auto max-w-7xl py-24 md:py-32">
          <span className="eyebrow text-gold">Premium Real Estate · Est. 2011</span>
          <h1 className="mt-5 font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] max-w-3xl">
            Foundation towards <span className="text-gradient-gold">Success</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80 leading-relaxed">
            We deliver reliable construction solutions with expertise in industrial infrastructure, warehouses, Trimix roads, layout development, interior works, and residential and commercial projects.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link to="/properties" className="btn-gold">
              View Properties <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="btn-outline-light">Contact Us</Link>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-4 sm:p-6">
                <p className="font-display text-2xl sm:text-4xl font-bold text-gold">{s.value}</p>
                <p className="mt-1 text-xs sm:text-sm text-white/75">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT OVERVIEW */}
    <section className="section-pad">
  <div className="container-px mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 items-center">
    <div className="relative">
      <img
        src={ctaImg}
        alt="Construction team executing industrial infrastructure project"
        width={960}
        height={720}
        loading="lazy"
        className="w-full rounded-3xl object-cover aspect-[4/3]"
      />
      <div className="absolute -bottom-6 -right-6 hidden sm:block rounded-2xl bg-navy text-white p-6 shadow-[var(--shadow-card)]">
        <p className="font-display text-3xl font-bold text-gold">15+</p>
        <p className="text-sm text-white/75">Years of construction excellence</p>
      </div>
    </div>

    <div>
      <span className="eyebrow">About Us</span>

      <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-navy">
        Delivering quality construction with precision and reliability
      </h2>

      <p className="mt-5 text-muted-foreground leading-relaxed">
        We specialize in delivering dependable construction solutions across industrial,
        commercial, and residential sectors. Our expertise includes re-rolling mills,
        dal mills, warehousing facilities, Trimix roads, layout development, and
        interior projects, ensuring every project is completed with quality,
        efficiency, and long-term durability.
      </p>

      <ul className="mt-6 space-y-3">
        {[
          "Specialized expertise in industrial and infrastructure projects",
          "Quality workmanship with timely project execution",
          "Complete solutions from planning to final project delivery",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-foreground/85">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-gold" />
            {item}
          </li>
        ))}
      </ul>

      <Link
        to="/about"
        className="mt-8 inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-gold"
      >
        Learn more about us <ChevronRight className="h-4 w-4" />
      </Link>
    </div>
  </div>
</section>

      {/* WHY CHOOSE US */}
<section className="section-pad">
  <div className="container-px mx-auto max-w-7xl">
    <div className="text-center max-w-2xl mx-auto">
      <span className="eyebrow">Why Choose Us</span>

      <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-navy">
        Building excellence with every project
      </h2>

      <p className="mt-4 text-muted-foreground">
        We deliver quality construction through expertise, precision, timely execution, and a commitment to lasting value.
      </p>
    </div>

    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {reasons.map((r) => (
        <div key={r.title} className="card-luxury p-7 text-center">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-navy text-gold">
            <r.icon className="h-6 w-6" />
          </div>

          <h3 className="mt-5 font-display text-lg font-semibold text-navy">
            {r.title}
          </h3>

          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            {r.text}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* SERVICES */}
<section className="section-pad bg-secondary/50">
  <div className="container-px mx-auto max-w-7xl">
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div className="max-w-2xl">
        <span className="eyebrow">Our Services</span>

        <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-navy">
          Comprehensive construction solutions
        </h2>
      </div>

      <Link
        to="/services"
        className="text-sm font-semibold text-navy inline-flex items-center gap-1 hover:text-gold"
      >
        All services <ChevronRight className="h-4 w-4" />
      </Link>
    </div>

    <div className="mt-12 overflow-x-auto pb-5 scroll-smooth">
      <div className="flex gap-6 min-w-full px-5 sm:px-0">
        {services.map((s) => (
          <div
            key={s.title}
            className="min-w-[min(80vw,280px)] sm:min-w-[calc(50%-0.75rem)] lg:min-w-[calc(25%-0.75rem)] group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:border-gold hover:shadow-[var(--shadow-card)]"
          >
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gold/10 transition-all group-hover:scale-150" />

            <s.icon className="relative h-9 w-9 text-gold" />

            <h3 className="relative mt-5 font-display text-lg font-semibold text-navy">
              {s.title}
            </h3>

            <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed">
              {s.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* INDUSTRIES SERVED */}
<section className="section-pad">
  <div className="container-px mx-auto max-w-7xl">
    <div className="text-center max-w-2xl mx-auto">
      <span className="eyebrow">Industries Served</span>

      <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-navy">
        Delivering solutions across diverse sectors
      </h2>

      <p className="mt-4 text-muted-foreground">
        We provide reliable construction services for industrial, commercial, and residential projects with a focus on quality, durability, and timely execution.
      </p>
    </div>

    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {industries.map((ind) => (
        <div key={ind.title} className="card-luxury p-7">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-navy text-gold">
            <ind.icon className="h-6 w-6" />
          </div>

          <h3 className="mt-5 font-display text-lg font-semibold text-navy">
            {ind.title}
          </h3>

          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            {ind.text}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* CONSTRUCTION PROCESS */}
      <section className="section-pad bg-navy text-white">
        <div className="container-px mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow text-gold">Our Process</span>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold">From blueprint to handover</h2>
            <p className="mt-4 text-white/70">A disciplined, four-stage process built for predictability.</p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <div key={step.title} className="relative">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10 border border-white/15 text-gold">
                  <step.icon className="h-6 w-6" />
                </div>
                <span className="mt-5 block font-display text-4xl font-bold text-white/15">{step.step}</span>
                <h3 className="mt-2 font-display text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{step.text}</p>
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-full w-8 border-t border-dashed border-white/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      {/* <section className="section-pad bg-secondary/50">
        <div className="container-px mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Client Stories</span>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-navy">Quietly trusted by hundreds</h2>
          </div>
          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="card-luxury p-7">
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-5 text-foreground/85 leading-relaxed">"{t.text}"</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <img src={t.image} alt={t.name} loading="lazy" className="h-12 w-12 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-navy">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section> */}

      {/* FAQs */}
      <section className="section-pad">
        <div className="container-px mx-auto max-w-4xl">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">FAQs</span>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-navy">Common questions</h2>
             <p className="mt-4 text-muted-foreground">
    Find answers to common questions about our construction services and project execution.
  </p>
          </div>
          <div className="mt-12 space-y-4">
            {faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={f.q} className="card-luxury overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base md:text-lg font-semibold text-navy">{f.q}</span>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-navy text-gold">
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
<section className="relative overflow-hidden">
  <img
    src={ctaImg}
    alt="Construction project"
    width={1920}
    height={1080}
    loading="lazy"
    className="absolute inset-0 h-full w-full object-cover"
  />

  <div className="absolute inset-0 bg-navy/80" />

  <div className="container-px relative mx-auto max-w-5xl py-24 md:py-32 text-center text-white">
    <span className="eyebrow text-gold">Let's Build Together</span>

    <h2 className="mt-4 font-display text-3xl md:text-5xl lg:text-6xl font-bold">
      Ready to start your <span className="text-gradient-gold">construction project?</span>
    </h2>

    <p className="mt-5 max-w-xl mx-auto text-white/80">
      Whether it's an industrial facility, warehouse, Trimix road, interior project, or residential and commercial construction, our team is ready to bring your vision to life.
    </p>

    <div className="mt-9 flex flex-wrap justify-center gap-4">
      <Link to="/contact" className="btn-gold">
        Get a Free Consultation
      </Link>

      <Link to="/contact" className="btn-outline-light">
        Contact Us
      </Link>
    </div>
  </div>
</section>

      {/* CONTACT */}
      <section className="section-pad">
        <div className="container-px mx-auto max-w-7xl grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <span className="eyebrow">Get In Touch</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-navy">
              Talk to a senior advisor
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Have a question about a listing or an upcoming project? Reach out and our team
              will get back to you within one business day.
            </p>
            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy text-gold">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy">Call Us</p>
                  <p className="text-sm text-muted-foreground">7020999781
</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy text-gold">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy">Email Us</p>
                  <p className="text-sm text-muted-foreground">anurag1801agrawal@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy text-gold">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy">Visit Us</p>
                  <p className="text-sm text-muted-foreground">
                    Subhadra,<br />
                    Plot No 10, Markandey Nagar<br />
                    Vyankatesh Nagar Jalna<br />
                    Maharashtra, 431202
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy text-gold">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy">Office Hours</p>
                  <p className="text-sm text-muted-foreground">Mon – Sat, 9:00 AM – 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-3 card-luxury p-7 md:p-10 grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label htmlFor="name" className="text-sm font-medium text-navy">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold"
                placeholder="Jane Doe"
              />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="email" className="text-sm font-medium text-navy">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold"
                placeholder="jane@example.com"
              />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="phone" className="text-sm font-medium text-navy">Phone</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold"
                placeholder="+1 (555) 000-0000"
              />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="subject" className="text-sm font-medium text-navy">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={(event) => setForm((current) => ({ ...current, subject: event.target.value }))}
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold"
                placeholder="Property inquiry"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="text-sm font-medium text-navy">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={form.message}
                onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold"
                placeholder="Tell us what you're looking for..."
              />
            </div>
            <div className="sm:col-span-2">
              {submitState.message ? (
                <p className={`mb-3 text-sm ${submitState.type === "success" ? "text-green-700" : "text-red-600"}`}>
                  {submitState.message}
                </p>
              ) : null}
              <button type="submit" disabled={loading} className="btn-gold w-full sm:w-auto disabled:cursor-not-allowed disabled:opacity-70">
                {loading ? "Sending..." : <>Send Message <ArrowRight className="h-4 w-4" /></>}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
