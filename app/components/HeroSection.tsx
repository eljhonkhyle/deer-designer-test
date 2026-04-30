"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Law firm background"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0d0b08]/65" />
      </div>

      {/* Decorative ring — right side, desktop only */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 translate-x-[40%] z-10 hidden lg:block"
      >
        <div className="w-[560px] h-[560px] rounded-full border border-[#c9a84c]/18" />
        <div className="absolute inset-[60px] rounded-full border border-[#c9a84c]/10" />
      </div>

      {/* Content — left aligned */}
      <div className="relative z-20 w-full container pt-52 pb-60">
        <div className="max-w-xl">

          {/* Overline */}
          <div
            className="flex items-center gap-3 mb-16"
            style={{ fontFamily: "var(--font-sans)", fontSize: "0.6rem", letterSpacing: "0.28em", color: "#c9a84c" }}
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="#c9a84c" aria-hidden="true">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="uppercase tracking-[0.28em]">
              Board Certified Specialists in Law
            </span>
          </div>

          {/* Headline */}
          <h1
            className="mb-12 sm:mb-14"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
              fontWeight: 400,
              lineHeight: 1.18,
              letterSpacing: "-0.01em",
            }}
          >
            <em className="not-italic font-light text-white block">Your Future</em>
            <span className="font-semibold block" style={{ color: "#c9a84c" }}>
              Starts Here
            </span>
          </h1>

          {/* Divider */}
          <div
            className="w-20 h-[2px] mb-12 sm:mb-14"
            style={{ background: "linear-gradient(90deg, var(--gold), transparent)" }}
          />

          {/* Subtitle */}
          <p
            className="mb-28 sm:mb-32"
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 300,
              fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
              color: "#d4c9b0",
              lineHeight: 2,
              maxWidth: "32rem",
            }}
          >
            Expert Legal Representation in Criminal Defense, Family Law,
            Corporate Matters, and More — Serving Clients Across the State.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
            <a href="tel:+18005557695" className="btn-gold">
              CALL NOW
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#contact" className="btn-outline">
              SCHEDULE A CONSULTATION
            </a>
          </div>

        </div>
      </div>

      {/* Stats strip — centered at bottom */}
      <div className="absolute bottom-10 sm:bottom-14 left-0 right-0 z-20 flex justify-center px-4">
        <div className="flex gap-12 sm:gap-20">
          {[
            { value: "25+", label: "Years of Practice" },
            { value: "98%", label: "Success Rate" },
            { value: "3,000+", label: "Cases Won" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span
                className="text-[#c9a84c] leading-none mb-2"
                style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 600 }}
              >
                {stat.value}
              </span>
              <span
                className="text-[#8a7d6a] uppercase text-center"
                style={{ fontFamily: "var(--font-sans)", fontSize: "clamp(0.5rem, 1.2vw, 0.62rem)", letterSpacing: "0.18em" }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#1a1612] to-transparent z-10 pointer-events-none" />
    </section>
  );
}
