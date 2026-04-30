"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/public/LOGO.png";

const quickLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our Team", href: "#team" },
  { label: "Practice Areas", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact Us", href: "#contact" },
  { label: "Privacy Policy", href: "#" },
];

const practiceAreas = [
  "Criminal Defense",
  "Family Law",
  "Corporate Law",
  "Personal Injury",
  "Real Estate",
  "Immigration",
];

const socials = [
  {
    label: "Twitter/X",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.213 5.567 5.95-5.567zm-1.161 17.52h1.833L7.084 4.126H5.117z",
    isFilled: true,
  },
  {
    label: "LinkedIn",
    path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
    isFilled: false,
  },
  {
    label: "Instagram",
    path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zm1.5-4.87h.01M7.5 20.5h9a4 4 0 0 0 4-4v-9a4 4 0 0 0-4-4h-9a4 4 0 0 0-4 4v9a4 4 0 0 0 4 4z",
    isFilled: false,
  },
  {
    label: "Facebook",
    path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
    isFilled: false,
  },
];

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "#111009" }}>

      {/* ── CTA Banner ── */}
      <div
        className="relative overflow-hidden text-center"
        style={{
          background: "linear-gradient(135deg, #1a1612 0%, #231f1a 50%, #1a1612 100%)",
          padding: "clamp(3rem, 6vw, 5rem) 1.5rem",
          borderBottom: "1px solid rgba(201,168,76,0.1)",
        }}
      >
        {/* Decorative circles */}
        <div className="absolute -right-16 -top-16 w-52 h-52 rounded-full border border-[#c9a84c]/08 pointer-events-none" />
        <div className="absolute -left-16 -bottom-16 w-52 h-52 rounded-full border border-[#c9a84c]/08 pointer-events-none" />

        <span className="overline block" style={{ marginBottom: "1rem" }}>
          Begin Your Legal Journey
        </span>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 600,
            color: "#ffffff",
            marginBottom: "2rem",
            lineHeight: 1.2,
          }}
        >
          How May We{" "}
          <span style={{ color: "#c9a84c", fontStyle: "italic" }}>Serve You?</span>
        </h2>
        <a href="#contact" className="btn-gold inline-flex">
          Get Free Legal Advice Today
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      {/* ── Main Footer ── */}
      <div className="relative">
        {/* Subtle decorative geometric lines */}
        <svg
          aria-hidden="true"
          className="absolute inset-0 w-full h-full pointer-events-none select-none"
          style={{ opacity: 0.04 }}
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 900 400"
        >
          <polyline points="450,20 700,360 200,360 450,20" fill="none" stroke="#c9a84c" strokeWidth="1" />
          <polyline points="450,80 660,340 240,340 450,80" fill="none" stroke="#c9a84c" strokeWidth="1" />
        </svg>

        <div
          className="container relative z-10"
          style={{ padding: "clamp(3rem, 6vw, 5rem) clamp(2rem, 7vw, 5rem)" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

            {/* ── Col 1: Brand ── */}
            <div>
              <Link href="#home" className="inline-block mb-6">
                <Image src={logo} alt="Royal Call Law Firm" width={150} height={48} className="object-contain" />
              </Link>

              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.9rem",
                  fontWeight: 300,
                  color: "#8a7d6a",
                  lineHeight: 1.85,
                  marginBottom: "2rem",
                  maxWidth: "22rem",
                }}
              >
                Trusted legal advisors since 1998. We fight for justice with
                integrity, expertise, and unwavering dedication to our clients.
              </p>

              {/* Social icons */}
              <div style={{ display: "flex", gap: "0.75rem", marginBottom: "2.5rem" }}>
                {socials.map((s) => (
                  <button
                    key={s.label}
                    aria-label={s.label}
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      border: "1px solid rgba(201,168,76,0.3)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#c9a84c",
                      background: "transparent",
                      cursor: "pointer",
                      transition: "background 0.2s ease, color 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#c9a84c";
                      e.currentTarget.style.color = "#1a1612";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "#c9a84c";
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill={s.isFilled ? "currentColor" : "none"} stroke={s.isFilled ? "none" : "currentColor"} strokeWidth="1.8">
                      <path d={s.path} />
                    </svg>
                  </button>
                ))}
              </div>

              {/* Back to top */}
              <button
                onClick={scrollToTop}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  border: "1px solid rgba(201,168,76,0.3)",
                  borderRadius: "0.375rem",
                  padding: "0.6rem 1.1rem",
                  background: "transparent",
                  color: "#c9a84c",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.65rem",
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "background 0.2s ease, color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(201,168,76,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 19V5M5 12l7-7 7 7" />
                </svg>
                Back to Top
              </button>
            </div>

            {/* ── Col 2: Quick Links ── */}
            <div>
              <h4
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "#ffffff",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "1.75rem",
                }}
              >
                Quick Links
              </h4>
              <ul style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.875rem",
                        fontWeight: 300,
                        color: "#8a7d6a",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.6rem",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#8a7d6a")}
                    >
                      <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "rgba(201,168,76,0.4)", flexShrink: 0 }} />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Col 3: Practice Areas ── */}
            <div>
              <h4
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "#ffffff",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "1.75rem",
                }}
              >
                Practice Areas
              </h4>
              <ul style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {practiceAreas.map((area) => (
                  <li key={area}>
                    <a
                      href="#services"
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.875rem",
                        fontWeight: 300,
                        color: "#8a7d6a",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.6rem",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#8a7d6a")}
                    >
                      <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "rgba(201,168,76,0.4)", flexShrink: 0 }} />
                      {area}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div style={{ borderTop: "1px solid rgba(201,168,76,0.1)", padding: "1.25rem 0" }}>
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.4rem",
            textAlign: "center",
          }}
        >
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "#8a7d6a", fontWeight: 300 }}>
            © {new Date().getFullYear()} Royal Call Law Firm & Associates. All Rights Reserved.
          </p>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", color: "#5a4f3e", fontWeight: 300 }}>
            Attorney Advertising · Results May Vary · Past Outcomes Do Not Guarantee Future Results
          </p>
        </div>
      </div>

      {/* Gold bottom accent bar */}
      <div style={{ height: "3px", background: "linear-gradient(90deg, transparent, #c9a84c 30%, #c9a84c 70%, transparent)" }} />

    </footer>
  );
}
