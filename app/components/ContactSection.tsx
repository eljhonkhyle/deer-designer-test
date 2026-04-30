"use client";

import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden min-h-screen flex flex-col justify-center"
      style={{ background: "var(--cream)", padding: "clamp(2rem, 4vw, 3.5rem) 0" }}
    >
      {/* Top border */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ── Left: Info ── */}
          <div>
            <div className="section-label" style={{ marginBottom: "1.25rem" }}>
              <span className="overline">Get In Touch</span>
            </div>

            <h2 className="section-title text-[#1a1612]" style={{ marginBottom: "1.5rem" }}>
              Close Attention To{" "}
              <span className="text-[var(--gold)] italic">What You Need</span>
            </h2>

            <div className="w-12 h-[2px] bg-[#c9a84c]" style={{ marginBottom: "1.5rem" }} />

            <p className="body-text text-[var(--text-body)] mb-10 sm:mb-12">
              We offer free, confidential consultations to understand your
              situation and advise you on the best path forward. Every case
              receives our full attention and dedication.
            </p>

            {/* Contact details */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginTop: "2.2rem" }}>
              {[
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.72-.72a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  ),
                  label: "Phone",
                  value: "+1 (800) 555-ROYAL",
                  sub: "Available 24/7 for emergencies",
                  href: "tel:+18005557695",
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  ),
                  label: "Email",
                  value: "consult@royalcalllaw.com",
                  sub: "Response within 24 hours",
                  href: "mailto:consult@royalcalllaw.com",
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                  label: "Office",
                  value: "1234 Justice Avenue, Suite 800",
                  sub: "Los Angeles, California 90012",
                  href: "#",
                },
              ].map((item, i) => (
                <a key={i} href={item.href} style={{ display: "flex", alignItems: "flex-start", gap: "1.25rem", textDecoration: "none" }} className="group">
                  <div style={{
                    width: "3rem", height: "3rem",
                    background: "#c9a84c",
                    borderRadius: "0.75rem",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#1a1612",
                    flexShrink: 0,
                    transition: "background 0.2s ease",
                  }}
                    onMouseEnter={e => (e.currentTarget.style.background = "#e2c97e")}
                    onMouseLeave={e => (e.currentTarget.style.background = "#c9a84c")}
                  >
                    {item.icon}
                  </div>
                  <div style={{ paddingTop: "0.15rem" }}>
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.58rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c", display: "block", marginBottom: "0.35rem" }}>
                      {item.label}
                    </span>
                    <p style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1rem, 2vw, 1.1rem)", color: "#1a1612", fontWeight: 500, marginBottom: "0.25rem", transition: "color 0.2s ease" }} className="group-hover:text-[#9e7a28]">
                      {item.value}
                    </p>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "#8a7d6a", fontWeight: 300 }}>
                      {item.sub}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div style={{
            background: "#1a1612",
            borderRadius: "1.25rem",
            padding: "clamp(1.75rem, 4vw, 2.75rem)",
            border: "1px solid rgba(201,168,76,0.2)",
            boxShadow: "0 24px 64px rgba(0,0,0,0.18)",
          }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "3rem 1.5rem" }}>
                {/* Icon */}
                <div style={{
                  width: "5rem", height: "5rem",
                  background: "linear-gradient(135deg, #9e7a28, #c9a84c, #e2c97e)",
                  borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 1.75rem",
                  boxShadow: "0 8px 24px rgba(201,168,76,0.35)",
                }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a1612" strokeWidth="2.5">
                    <polyline points="20,6 9,17 4,12" />
                  </svg>
                </div>
                {/* Gold divider */}
                <div style={{ width: "3rem", height: "2px", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)", margin: "0 auto 1.5rem" }} />
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.6rem", fontWeight: 600, color: "#ffffff", marginBottom: "1rem" }}>
                  Message Received
                </h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", color: "#8a7d6a", lineHeight: 1.8, fontWeight: 300, maxWidth: "22rem", margin: "0 auto" }}>
                  We'll be in touch within 24 hours to schedule your free consultation.
                </p>
              </div>
            ) : (
              <>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.25rem, 3vw, 1.6rem)", fontWeight: 600, color: "#ffffff", marginBottom: "0.5rem" }}>
                  Request a Free Consultation
                </h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "#8a7d6a", fontWeight: 300, marginBottom: "2rem", lineHeight: 1.7 }}>
                  Complete the form and we'll reach out promptly.
                </p>

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Full Name *"
                      required
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      className="form-input"
                    />
                    <input
                      id="contact-phone"
                      type="tel"
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                      className="form-input"
                    />
                  </div>

                  <input
                    id="contact-email"
                    type="email"
                    placeholder="Email Address *"
                    required
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className="form-input"
                  />

                  <select
                    id="contact-service"
                    value={form.service}
                    onChange={(e) => setForm((f) => ({ ...f, service: e.target.value }))}
                    className="form-input text-gray-400 focus:text-[#d4c9b0]"
                    style={{ backgroundImage: "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23c9a84c' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 1rem center", backgroundSize: "1em" }}
                  >
                    <option value="" disabled className="text-gray-500">Select Practice Area</option>
                    <option value="criminal">Criminal Defense</option>
                    <option value="family">Family Law</option>
                    <option value="corporate">Corporate Law</option>
                    <option value="personal">Personal Injury</option>
                    <option value="real-estate">Real Estate</option>
                    <option value="immigration">Immigration</option>
                  </select>

                  <textarea
                    id="contact-message"
                    placeholder="Describe your legal matter..."
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="form-input resize-none"
                  />

                  <button type="submit" className="btn-gold w-full text-[0.7rem] sm:text-[0.75rem] py-3.5 sm:py-4 mt-2">
                    Send Message — It's Free
                  </button>
                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
