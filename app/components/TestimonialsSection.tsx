"use client";

import { useState } from "react";

const testimonials = [
  {
    rating: 5,
    text: "Royal Call Law Firm transformed what seemed like a hopeless situation. James Caldwell's expertise in criminal defense was absolutely extraordinary. We won the case and I could not be more grateful.",
    name: "Michael Thompson",
    case: "Criminal Defense Case",
    initials: "MT",
  },
  {
    rating: 5,
    text: "Dr. Sophia Lin handled my divorce and custody case with incredible compassion and professionalism. She fought hard for my children and got us the outcome we needed. I can't thank her enough.",
    name: "Amanda Rivera",
    case: "Family Law Case",
    initials: "AR",
  },
  {
    rating: 5,
    text: "Robert Martinez saved our company from a potentially devastating corporate dispute. His strategic thinking and negotiation skills are second to none. Royal Call is the only firm I trust for business matters.",
    name: "David Chen",
    case: "Corporate Litigation",
    initials: "DC",
  },
  {
    rating: 5,
    text: "After my accident, I didn't know where to turn. Royal Call took my personal injury case on contingency and recovered far more than I expected. True professionals who genuinely care.",
    name: "Sarah Johnson",
    case: "Personal Injury Case",
    initials: "SJ",
  },
  {
    rating: 5,
    text: "Navigating immigration law is incredibly stressful, but Dr. Lin made the entire process manageable. My green card came through and I'm now a permanent resident. Forever grateful.",
    name: "Priya Patel",
    case: "Immigration Case",
    initials: "PP",
  },
  {
    rating: 5,
    text: "The real estate transaction had complications that threatened to derail everything. Royal Call resolved all issues efficiently. Their knowledge and responsiveness is unmatched.",
    name: "Gregory Walsh",
    case: "Real Estate Matter",
    initials: "GW",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  
  // For mobile, maybe we only show 1, tablet 2, desktop 3.
  // Using CSS Grid is easier than complex JS resize logic.
  // We will show 3 testimonials and let CSS handle stacking.
  const visibleCount = 3;
  const displayed = testimonials.slice(active, active + visibleCount);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #1a1612 0%, #231f1a 50%, #1a1612 100%)",
        padding: "clamp(2rem, 4vw, 3.5rem) 0",
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
        <div
          className="text-[12rem] sm:text-[20rem] font-bold text-[#c9a84c] leading-none"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          "
        </div>
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div className="section-label justify-center" style={{ marginBottom: "1.25rem" }}>
            <span className="overline">Client Stories</span>
          </div>

          <h2
            className="section-title text-white"
            style={{ marginBottom: "1rem" }}
          >
            What Our Clients{" "}
            <span className="text-[var(--gold)] italic">Have to Say</span>
          </h2>

          <div className="gold-divider" style={{ marginBottom: "1.5rem" }} />

          {/* Rating bar */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}
            className="sm:flex-row sm:justify-center"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#c9a84c">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <div className="flex items-center gap-2 mt-2 sm:mt-0">
              <span className="text-[#c9a84c] font-bold text-lg leading-none" style={{ fontFamily: "var(--font-serif)" }}>
                5.0
              </span>
              <span className="text-[#8a7d6a] text-sm leading-none" style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}>
                from 847 verified reviews
              </span>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div
          className="grid md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: "clamp(1.25rem, 3vw, 2rem)", marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}
        >
          {displayed.map((t, i) => (
            <div
              key={active + i}
              className={`group relative flex flex-col
                ${i >= 1 ? 'hidden md:flex' : 'flex'}
                ${i >= 2 ? 'md:hidden lg:flex' : ''}
              `}
              style={{
                background: "#1c1a16",
                border: "1px solid rgba(201,168,76,0.15)",
                borderRadius: "1rem",
                padding: "clamp(1.75rem, 4vw, 2.5rem)",
                transition: "border-color 0.4s ease, transform 0.3s ease",
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.15)")}
            >
              {/* Quote mark */}
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "5rem",
                  color: "rgba(201,168,76,0.2)",
                  lineHeight: 1,
                  marginBottom: "1.25rem",
                  fontWeight: 700,
                }}
              >
                &ldquo;
              </div>

              {/* Stars */}
              <div style={{ display: "flex", gap: "0.3rem", marginBottom: "1.25rem" }}>
                {[...Array(t.rating)].map((_, j) => (
                  <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="#c9a84c">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "0.95rem",
                  color: "#d4c9b0",
                  lineHeight: 1.9,
                  fontStyle: "italic",
                  flexGrow: 1,
                  marginBottom: "1.75rem",
                }}
              >
                {t.text}
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  paddingTop: "1.25rem",
                  borderTop: "1px solid rgba(201,168,76,0.15)",
                  marginTop: "auto",
                }}
              >
                <div
                  style={{
                    width: "2.75rem",
                    height: "2.75rem",
                    borderRadius: "50%",
                    background: "#c9a84c",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span style={{ fontFamily: "var(--font-sans)", color: "#1a1612", fontSize: "0.75rem", fontWeight: 700 }}>
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-serif)", color: "#ffffff", fontWeight: 600, fontSize: "1rem", lineHeight: 1.3, marginBottom: "0.3rem" }}>
                    {t.name}
                  </p>
                  <p style={{ fontFamily: "var(--font-sans)", color: "#8a7d6a", fontSize: "0.68rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    {t.case}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0.75rem", paddingTop: "clamp(1.5rem, 3vw, 2.5rem)" }}>
          {Array.from({ length: testimonials.length - visibleCount + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                height: "0.5rem",
                width: active === i ? "2.5rem" : "0.5rem",
                borderRadius: "9999px",
                background: active === i ? "#c9a84c" : "rgba(201,168,76,0.25)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.35s ease",
                padding: 0,
              }}
              aria-label={`Go to testimonial page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
