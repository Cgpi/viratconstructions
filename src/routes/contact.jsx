import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Globe2,
  MessageCircle,
  Camera,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { PageHero } from "@/components/page-hero";
import {
  submitContactForm,
  validateContactForm,
} from "@/lib/contact-form";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/motion-elements";

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const prefillService = searchParams.get("service") || "";

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [formErrors, setFormErrors] = useState({});

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: prefillService,
    message: prefillService ? `Inquiring about ${prefillService} construction services.` : "",
  });

  useEffect(() => {
    if (prefillService) {
      setForm((prev) => ({
        ...prev,
        interest: prefillService,
        message: prev.message || `Inquiring about ${prefillService} construction services.`,
      }));
    }
  }, [prefillService]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Custom validation
    const errors = validateContactForm(form);

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setError("Please fix the highlighted fields before sending.");
      setSent(false);
      return;
    }

    setFormErrors({});
    setError(null);
    setSent(false);
    setLoading(true);

    try {
      await submitContactForm({
        name: form.name,
        email: form.email,
        phone: form.phone,
        interest: form.interest,
        message: form.message,
      });

      setSent(true);

      // Clear form after successful submission
      setForm({
        name: "",
        email: "",
        phone: "",
        interest: "",
        message: "",
      });
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Unable to submit your inquiry right now."
      );
      setSent(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's build something enduring."
        subtitle="Reach out to discuss your next industrial, commercial, or residential construction project."
      />

      <section className="section-pad">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* ================= LEFT SIDE ================= */}
            <div className="lg:col-span-2">
              <FadeIn direction="up" delay={0.05}>
                <span className="eyebrow">Reach Us</span>
              </FadeIn>

              <FadeIn direction="up" delay={0.15}>
                <h2 className="mt-3 font-display text-3xl font-bold text-navy">
                  Speak to a senior advisor.
                </h2>
              </FadeIn>

              <FadeIn direction="up" delay={0.25}>
                <p className="mt-4 text-muted-foreground">
                  No bots. No auto-replies. A real human responds — usually
                  within two hours.
                </p>
              </FadeIn>

              <StaggerContainer
                staggerDelay={0.1}
                delayChildren={0.2}
                className="mt-10 space-y-5"
              >
                {[
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+91 7020999781",
                    href: "tel:7020999781",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "anurag1801agrawal@gmail.com",
                    href: "mailto:anurag1801agrawal@gmail.com",
                  },
                  {
                    icon: MapPin,
                    label: "Office",
                    value:
                      "Subhadra,\nPlot No 10, Markandey Nagar\nVyankatesh Nagar Jalna\nMaharashtra, 431202",
                  },
                ].map((c) => (
                  <StaggerItem key={c.label}>
                    <motion.a
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.2 }}
                      href={c.href ?? "#"}
                      className="flex gap-4 rounded-2xl border border-border p-5 transition-all duration-300 hover:border-primary hover:shadow-[var(--shadow-card)] group"
                    >
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent text-brand-dark transition-transform duration-300 group-hover:scale-110">
                        <c.icon className="h-5 w-5" />
                      </span>

                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                          {c.label}
                        </p>

                        <p className="mt-1 font-semibold text-navy whitespace-pre-line">
                          {c.value}
                        </p>
                      </div>
                    </motion.a>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* FOLLOW */}
              <FadeIn direction="up" delay={0.4} className="mt-10">
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                  Follow
                </p>

                <div className="mt-4 flex gap-3">
                  {[Globe2, MessageCircle, Camera, Sparkles].map(
                    (Icon, i) => (
                      <motion.a
                        key={i}
                        whileHover={{ scale: 1.1, y: -2 }}
                        transition={{ duration: 0.2 }}
                        href="#"
                        className="grid h-11 w-11 place-items-center rounded-full border border-border text-primary transition-colors hover:bg-primary hover:text-white hover:border-primary"
                      >
                        <Icon className="h-4 w-4" />
                      </motion.a>
                    )
                  )}
                </div>
              </FadeIn>
            </div>

            {/* ================= RIGHT SIDE FORM ================= */}
            <FadeIn direction="left" delay={0.2} className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-[var(--shadow-card)]"
              >
                <h3 className="font-display text-2xl font-bold text-navy">
                  Send us a message
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  We'll get back within two business hours.
                </p>

                {/* FORM FIELDS */}
                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  {/* NAME */}
                  <Field
                    label="Full Name"
                    name="name"
                    placeholder="Jane Doe"
                    value={form.name}
                    onChange={(value) =>
                      setForm((current) => ({
                        ...current,
                        name: value,
                      }))
                    }
                    error={formErrors.name}
                    required
                  />

                  {/* EMAIL */}
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="jane@email.com"
                    value={form.email}
                    onChange={(value) =>
                      setForm((current) => ({
                        ...current,
                        email: value,
                      }))
                    }
                    error={formErrors.email}
                    required
                    pattern="^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"
                    inputMode="email"
                  />

                  {/* PHONE */}
                  <Field
                    label="Phone"
                    name="phone"
                    type="tel"
                    placeholder="9876543210"
                    value={form.phone}
                    onChange={(value) =>
                      setForm((current) => ({
                        ...current,
                        phone: value,
                      }))
                    }
                    error={formErrors.phone}
                    required
                    pattern="[0-9]{10}"
                    inputMode="numeric"
                  />

                  {/* INTEREST */}
                  <Field
                    label="Interest"
                    name="interest"
                    placeholder="Industrial / Residential / Interior"
                    value={form.interest}
                    onChange={(value) =>
                      setForm((current) => ({
                        ...current,
                        interest: value,
                      }))
                    }
                    error={formErrors.interest}
                    required
                  />
                </div>

                {/* MESSAGE */}
                <div className="mt-5">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us a little about what you're looking for…"
                    value={form.message}
                    required
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        message: event.target.value,
                      }))
                    }
                    aria-invalid={!!formErrors.message}
                    className={`w-full rounded-xl border bg-white px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 ${
                      formErrors.message
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500/30"
                        : "border-border focus:border-primary focus:ring-primary/30"
                    }`}
                  />

                  {formErrors.message ? (
                    <p className="mt-2 text-sm text-red-600">
                      {formErrors.message}
                    </p>
                  ) : null}
                </div>

                {/* GENERAL ERROR */}
                {error ? (
                  <p className="mt-4 text-sm text-red-600">
                    {error}
                  </p>
                ) : null}

                {/* SUCCESS */}
                {sent ? (
                  <p className="mt-4 text-sm font-medium text-green-700">
                    Thanks! Your message has been sent successfully.
                  </p>
                ) : null}

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary mt-7 w-full sm:w-auto disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? (
                    "Sending..."
                  ) : sent ? (
                    "Message Sent ✓"
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  required = false,
  pattern,
  inputMode,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
      >
        {label}
        {required && (
          <span className="ml-1 text-red-500">*</span>
        )}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        required={required}
        pattern={pattern}
        inputMode={inputMode}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`w-full rounded-xl border bg-white px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 ${
          error
            ? "border-red-500 focus:border-red-500 focus:ring-red-500/30"
            : "border-border focus:border-primary focus:ring-primary/30"
        }`}
      />

      {error ? (
        <p
          id={`${name}-error`}
          className="mt-2 text-sm text-red-600"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}
