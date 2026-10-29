import { useState } from "react";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { submitContactForm } from "@/lib/contact-form";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/motion-elements";

const emptyForm = { name: "", email: "", phone: "", subject: "", message: "" };

export function ContactSection() {
  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(false);
  const [submitState, setSubmitState] = useState({
    type: "idle",
    message: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setSubmitState({ type: "idle", message: "" });

    try {
      await submitContactForm(form);
      setForm(emptyForm);
      setSubmitState({
        type: "success",
        message: "Thanks! Your message has been sent successfully.",
      });
    } catch (error) {
      setSubmitState({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to send your message right now.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section-pad">
      <div className="container-px mx-auto max-w-7xl grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <FadeIn direction="up" delay={0.05}>
            <span className="eyebrow">Get In Touch</span>
          </FadeIn>
          <FadeIn direction="up" delay={0.15}>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-navy">
              Talk to a senior advisor
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.25}>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Have a question about a listing or an upcoming project? Reach out and our team
              will get back to you within one business day.
            </p>
          </FadeIn>

          <StaggerContainer
            staggerDelay={0.1}
            delayChildren={0.25}
            className="mt-8 space-y-5"
          >
            <StaggerItem className="flex items-start gap-4 group">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy text-gold transition-transform duration-300 group-hover:scale-110">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-navy">Call Us</p>
                <p className="text-sm text-muted-foreground">7020999781</p>
              </div>
            </StaggerItem>

            <StaggerItem className="flex items-start gap-4 group">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy text-gold transition-transform duration-300 group-hover:scale-110">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-navy">Email Us</p>
                <p className="text-sm text-muted-foreground">anurag1801agrawal@gmail.com</p>
              </div>
            </StaggerItem>

            <StaggerItem className="flex items-start gap-4 group">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy text-gold transition-transform duration-300 group-hover:scale-110">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-navy">Visit Us</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Subhadra,<br />
                  Plot No 10, Markandey Nagar<br />
                  Vyankatesh Nagar Jalna<br />
                  Maharashtra, 431202
                </p>
              </div>
            </StaggerItem>

            <StaggerItem className="flex items-start gap-4 group">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy text-gold transition-transform duration-300 group-hover:scale-110">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-navy">Office Hours</p>
                <p className="text-sm text-muted-foreground">Mon – Sat, 9:00 AM – 8:00 PM</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>

        <FadeIn direction="left" delay={0.2} className="lg:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="card-luxury p-7 md:p-10 grid gap-5 sm:grid-cols-2"
          >
            <div>
              <label htmlFor="name" className="text-sm font-medium text-navy">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={(event) =>
                  setForm((current) => ({ ...current, name: event.target.value }))
                }
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium text-navy">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={(event) =>
                  setForm((current) => ({ ...current, email: event.target.value }))
                }
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="text-sm font-medium text-navy">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={(event) =>
                  setForm((current) => ({ ...current, phone: event.target.value }))
                }
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                placeholder="+91 98765 43210"
              />
            </div>

            <div>
              <label htmlFor="subject" className="text-sm font-medium text-navy">
                Project Type
              </label>
              <select
                id="subject"
                name="subject"
                value={form.subject}
                onChange={(event) =>
                  setForm((current) => ({ ...current, subject: event.target.value }))
                }
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
              >
                <option value="">Select a category</option>
                <option value="Industrial Construction">Industrial Construction</option>
                <option value="Warehouse Construction">Warehouse Construction</option>
                <option value="Trimix Road Construction">Trimix Road Construction</option>
                <option value="Commercial Construction">Commercial Construction</option>
                <option value="Residential Construction">Residential Construction</option>
                <option value="Interior Designing">Interior Designing</option>
                <option value="Layout Development">Layout Development</option>
                <option value="Other">Other Inquiry</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="text-sm font-medium text-navy">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={form.message}
                onChange={(event) =>
                  setForm((current) => ({ ...current, message: event.target.value }))
                }
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                placeholder="Tell us about your project requirements..."
              />
            </div>

            {submitState.type !== "idle" && (
              <div
                className={`sm:col-span-2 rounded-xl p-4 text-sm ${
                  submitState.type === "success"
                    ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                    : "bg-rose-50 text-rose-800 border border-rose-200"
                }`}
              >
                {submitState.message}
              </div>
            )}

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full sm:w-auto"
              >
                {loading ? "Sending..." : "Send Message"}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
