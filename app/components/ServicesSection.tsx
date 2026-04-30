const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.8">
        <path d="M3 6l9-4 9 4v6c0 5.25-4.5 9-9 10C7.5 21 3 17.25 3 12V6z" />
      </svg>
    ),
    title: "Criminal Defense",
    description: "Aggressive, strategic defense for all criminal charges. We protect your rights from arrest through appeal.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Family Law",
    description: "Compassionate counsel for divorce, custody, and adoption cases — protecting what matters most.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.8">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    title: "Corporate Law",
    description: "Expert business legal services including contracts, M&A, compliance, and dispute resolution.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.8">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22,4 12,14.01 9,11.01" />
      </svg>
    ),
    title: "Personal Injury",
    description: "We fight for maximum compensation for accident victims. No win, no fee guarantee.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.8">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9,22 9,12 15,12 15,22" />
      </svg>
    ),
    title: "Real Estate",
    description: "Comprehensive real estate legal services for buyers, sellers, landlords, and developers.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Immigration",
    description: "Visa applications, green cards, citizenship, and deportation defense handled with expertise.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden min-h-screen flex flex-col justify-center"
      style={{ background: "#111009", padding: "clamp(2rem, 4vw, 3.5rem) 0" }}
    >
      <div className="container relative z-10">

        <div
          style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "3rem" }}
        >
          <div className="section-label justify-center" style={{ marginBottom: "1.25rem" }}>
            <span className="overline">What We Do</span>
          </div>

          <h2
            className="text-white"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 600,
              lineHeight: 1.15,
              textAlign: "center",
              marginBottom: "1.5rem",
            }}
          >
            Legal Guidance For{" "}
            <span className="text-[#c9a84c] italic">Every Step Forward</span>
          </h2>

          <div className="gold-divider" style={{ marginBottom: "1.5rem" }} />

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 300,
              fontSize: "clamp(0.9rem, 2vw, 1rem)",
              color: "#8a8075",
              lineHeight: 1.85,
              textAlign: "center",
              maxWidth: "36rem",
            }}
          >
            From complex litigation to everyday legal matters, our team delivers
            results-driven counsel with unwavering dedication.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {services.map((service, i) => (
            <div
              key={i}
              className="group rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-0.5 flex flex-col"
              style={{
                background: "#1c1a16",
                border: "1px solid rgba(255,255,255,0.06)",
                padding: "2.25rem 2rem",
              }}
            >
              {/* Icon */}
              <div style={{ marginBottom: "1.25rem" }}>
                {service.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "#ffffff",
                  lineHeight: 1.3,
                  marginBottom: "0.85rem",
                }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 400,
                  fontSize: "0.92rem",
                  color: "#9a9080",
                  lineHeight: 1.85,
                  flexGrow: 1,
                  marginBottom: "1.5rem",
                }}
              >
                {service.description}
              </p>

              {/* Learn More link */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  color: "#c9a84c",
                  letterSpacing: "0.02em",
                }}
              >
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
