import { useState } from "react";
import { Phone, Mail, MapPin, Send, Globe2, MessageCircle, Camera, Sparkles } from "lucide-react";
import { PageHero } from "@/components/page-hero";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Let's start a conversation."
        subtitle="Whether you're buying, selling, or simply exploring — we'd love to hear from you."
      />

      <section className="section-pad">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* LEFT */}
            <div className="lg:col-span-2">
              <span className="eyebrow">Reach Us</span>
              <h2 className="mt-3 font-display text-3xl font-bold text-navy">Speak to a senior advisor.</h2>
              <p className="mt-4 text-muted-foreground">No bots. No auto-replies. A real human responds — usually within two hours.</p>

              <div className="mt-10 space-y-5">
                {[
                  { icon: Phone, label: "Phone", value: "+1 (212) 555-0199", href: "tel:+12125550199" },
                  { icon: Mail, label: "Email", value: "hello@aureliaestates.com", href: "mailto:hello@aureliaestates.com" },
                  { icon: MapPin, label: "Office", value: "1240 Park Avenue, Suite 800\nNew York, NY 10128" },
                ].map((c) => (
                  <a key={c.label} href={c.href ?? "#"} className="flex gap-4 rounded-2xl border border-border p-5 transition-all hover:border-gold hover:shadow-[var(--shadow-card)]">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy text-gold">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{c.label}</p>
                      <p className="mt-1 font-semibold text-navy whitespace-pre-line">{c.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-10">
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Follow</p>
                <div className="mt-4 flex gap-3">
                  {[Globe2, MessageCircle, Camera, Sparkles].map((Icon, i) => (
                    <a key={i} href="#" className="grid h-11 w-11 place-items-center rounded-full border border-border text-navy transition-all hover:bg-navy hover:text-gold hover:border-navy">
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="lg:col-span-3">
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-[var(--shadow-card)]"
              >
                <h3 className="font-display text-2xl font-bold text-navy">Send us a message</h3>
                <p className="mt-2 text-sm text-muted-foreground">We'll get back within two business hours.</p>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <Field label="Full Name" name="name" placeholder="Jane Doe" />
                  <Field label="Email" name="email" type="email" placeholder="jane@email.com" />
                  <Field label="Phone" name="phone" type="tel" placeholder="+1 (000) 000-0000" />
                  <Field label="Interest" name="interest" placeholder="Buying / Selling / Renting" />
                </div>
                <div className="mt-5">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us a little about what you're looking for…"
                    className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all"
                  />
                </div>
                <button type="submit" className="btn-gold mt-7 w-full sm:w-auto">
                  {sent ? "Message Sent ✓" : <>Send Message <Send className="h-4 w-4" /></>}
                </button>
              </form>
            </div>
          </div>

          {/* MAP PLACEHOLDER */}
          <div className="mt-16 relative aspect-[21/9] overflow-hidden rounded-3xl border border-border bg-secondary">
            <div className="absolute inset-0 grid place-items-center" style={{
              backgroundImage: "radial-gradient(circle at 30% 40%, oklch(0.85 0.05 250 / 0.4), transparent 40%), radial-gradient(circle at 70% 60%, oklch(0.78 0.14 85 / 0.2), transparent 40%)"
            }}>
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gold mx-auto" />
                <p className="mt-3 font-display text-xl text-navy font-semibold">1240 Park Avenue, NYC</p>
                <p className="text-sm text-muted-foreground">Interactive map placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", placeholder }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all"
      />
    </div>
  );
}
