"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import logo from "@/public/LOGO.png";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Practice Areas", href: "#services" },
  { label: "Our Team", href: "#team" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* lock body scroll when menu open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || menuOpen
            ? "bg-[#1a1612]/96 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
          }`}
      >
        <nav className="w-full flex items-center justify-between h-16 sm:h-20" style={{ padding: "0 clamp(2rem, 5vw, 3.5rem)" }}>

          {/* Logo */}
          <Link href="#home" onClick={() => setMenuOpen(false)} className="flex items-center shrink-0">
            <Image src={logo} alt="Royal Call Law Firm" width={160} height={40} className="object-contain" priority />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative text-[0.72rem] tracking-[0.14em] uppercase text-[#d4c9b0] hover:text-[#c9a84c] transition-colors duration-300 group"
                  style={{ fontFamily: "var(--font-sans)", fontWeight: 400 }}
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#c9a84c] transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a href="#contact" className="btn-gold hidden lg:inline-flex text-[0.68rem] py-3 px-6">
            Free Consultation
          </a>

          {/* Hamburger — animated to X */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-[5px] shrink-0 z-[60]"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className="block h-[1.5px] bg-[#c9a84c] transition-all duration-300 origin-center"
              style={{
                width: menuOpen ? "1.5rem" : "1.5rem",
                transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none",
              }}
            />
            <span
              className="block h-[1.5px] bg-[#c9a84c] transition-all duration-300"
              style={{
                width: "1rem",
                opacity: menuOpen ? 0 : 1,
                transform: menuOpen ? "scaleX(0)" : "none",
                alignSelf: "flex-end",
              }}
            />
            <span
              className="block h-[1.5px] bg-[#c9a84c] transition-all duration-300 origin-center"
              style={{
                width: "1.5rem",
                transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none",
              }}
            />
          </button>
        </nav>
      </header>

      {/* Full-screen overlay menu */}
      <div
        className="fixed inset-0 z-40 lg:hidden flex flex-col"
        style={{
          background: "#111009",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
          transition: "opacity 0.4s ease",
        }}
      >
        {/* Gold top bar */}
        <div style={{ height: "3px", background: "linear-gradient(90deg, transparent, #c9a84c 30%, #c9a84c 70%, transparent)", flexShrink: 0 }} />

        {/* Spacer for the navbar height */}
        <div style={{ height: "4rem", flexShrink: 0 }} />

        {/* Nav items */}
        <nav
          className="flex flex-col justify-center flex-grow"
          style={{ padding: "2rem clamp(1.5rem, 7vw, 4rem)" }}
        >
          {/* Gold accent line */}
          <div style={{ width: "2.5rem", height: "2px", background: "#c9a84c", marginBottom: "2.5rem" }} />

          <ul style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {navLinks.map((link, i) => (
              <li
                key={link.href}
                style={{
                  borderBottom: "1px solid rgba(201,168,76,0.1)",
                  transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                  opacity: menuOpen ? 1 : 0,
                  transition: `transform 0.4s ease ${i * 0.06}s, opacity 0.4s ease ${i * 0.06}s`,
                }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "1.1rem 0",
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(1.4rem, 5vw, 2rem)",
                    fontWeight: 400,
                    color: "#d4c9b0",
                    textDecoration: "none",
                    letterSpacing: "0.01em",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#d4c9b0")}
                >
                  {link.label}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5" style={{ opacity: 0.5 }}>
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div
            style={{
              marginTop: "2.5rem",
              transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              opacity: menuOpen ? 1 : 0,
              transition: `transform 0.4s ease ${navLinks.length * 0.06 + 0.05}s, opacity 0.4s ease ${navLinks.length * 0.06 + 0.05}s`,
            }}
          >
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="btn-gold"
              style={{ width: "100%", justifyContent: "center", fontSize: "0.7rem", padding: "1rem" }}
            >
              Free Consultation
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </nav>

        {/* Bottom: small tagline */}
        <div
          style={{
            padding: "1.5rem clamp(1.5rem, 7vw, 4rem)",
            borderTop: "1px solid rgba(201,168,76,0.08)",
            flexShrink: 0,
          }}
        >
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", color: "#5a4f3e", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            Board Certified Specialists in Law · Since 1998
          </p>
        </div>
      </div>
    </>
  );
}
