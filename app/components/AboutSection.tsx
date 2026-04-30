"use client";

import React from "react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden min-h-screen flex flex-col justify-center"
      style={{ background: "var(--cream)", padding: "clamp(2rem, 4vw, 3.5rem) 0" }}
    >
      {/* Top border */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Left: Decorative Badge ── */}
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 shrink-0">
              {/* Spinning outer ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#c9a84c]/35 animate-spin-slow" />
              {/* Inner static ring */}
              <div className="absolute inset-5 rounded-full border border-[#c9a84c]/15" />

              {/* Center badge */}
              <div className="absolute inset-10 rounded-full bg-[#1a1612] flex flex-col items-center justify-center shadow-2xl border border-[#c9a84c]/25">
                <div className="text-[#c9a84c] mb-2">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <span
                  className="text-[#c9a84c] leading-none"
                  style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 5vw, 2.8rem)", fontWeight: 700 }}
                >
                  25+
                </span>
                <span
                  className="text-[#c9a84c]/60 text-center mt-1 uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-sans)", fontSize: "0.55rem" }}
                >
                  Years of<br />Excellence
                </span>
              </div>

              {/* Corner labels */}
              <div
                className="absolute -top-3 -right-3 sm:-top-5 sm:-right-5 bg-[#c9a84c] text-[#1a1612] font-bold shadow-lg px-3 py-1.5"
                style={{ fontFamily: "var(--font-sans)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase" }}
              >
                AV Rated
              </div>
              <div
                className="absolute -bottom-3 -left-3 sm:-bottom-5 sm:-left-5 bg-[#1a1612] text-[#c9a84c] border border-[#c9a84c]/30 shadow-lg px-3 py-1.5"
                style={{ fontFamily: "var(--font-sans)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase" }}
              >
                Top 1% Firm
              </div>
            </div>
          </div>

          {/* ── Right: Content ── */}
          <div className="order-1 lg:order-2">
            {/* Overline */}
            <div className="section-label" style={{ marginBottom: "1.25rem" }}>
              <span className="overline">Our Story</span>
            </div>

            {/* Heading */}
            <h2
              className="text-[#1a1612]"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 600,
                lineHeight: 1.18,
                marginBottom: "1.5rem",
              }}
            >
              Going Strong — Representation<br />
              Led By{" "}
              <span className="text-[#c9a84c] italic">Royal Call</span>
              {" "}And Specialists
            </h2>

            {/* Gold divider */}
            <div className="w-14 h-[2px] bg-[#c9a84c]" style={{ marginBottom: "1.5rem" }} />

            {/* Body text — larger and more readable */}
            <p
              className="text-[#3d352b] mb-6"
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 400,
                fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
                lineHeight: 1.9,
              }}
            >
              For over two and a half decades, Royal Call Law Firm has stood as
              a beacon of justice in our community. Founded on the principles of
              integrity, excellence, and unwavering client advocacy, we have
              successfully resolved thousands of cases across all legal domains.
            </p>

            <p
              className="text-[#3d352b] mb-10"
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 400,
                fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
                lineHeight: 1.9,
                marginBottom: "1rem",
              }}
            >
              Our team of distinguished attorneys brings specialized expertise
              and a proven track record to every case. We believe every client
              deserves the highest caliber of legal representation, regardless of
              the complexity of their matter.
            </p>

            {/* Feature checklist */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {[
                "Award-Winning Legal Team",
                "Personalized Strategy",
                "Transparent Communication",
                "Results-Driven Approach",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#c9a84c] flex items-center justify-center shrink-0">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#1a1612" strokeWidth="3">
                      <polyline points="20,6 9,17 4,12" />
                    </svg>
                  </div>
                  <span
                    className="text-[#2a2218]"
                    style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "clamp(0.875rem, 2vw, 0.95rem)" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <a href="#team" className="btn-gold inline-flex" style={{ marginTop: "1.5rem" }}>
              Meet Our Team
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
