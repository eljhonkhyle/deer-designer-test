import Image from "next/image";

const attorneys = [
  {
    name: "James R. Caldwell",
    title: "Founding Partner",
    specialization: "Criminal Defense & Civil Litigation",
    image: "/attorney1.png",
    bar: "Bar #: CA 219843",
    education: "Harvard Law School, J.D.",
  },
  {
    name: "Dr. Sophia Lin",
    title: "Senior Partner",
    specialization: "Family Law & Immigration",
    image: "/attorney2.png",
    bar: "Bar #: CA 304521",
    education: "Yale Law School, J.D.",
  },
  {
    name: "Robert A. Martinez",
    title: "Managing Partner",
    specialization: "Corporate Law & Real Estate",
    image: "/attorney3.png",
    bar: "Bar #: CA 198734",
    education: "Columbia Law School, J.D.",
  },
];

export default function TeamSection() {
  return (
    <section
      id="team"
      className="relative overflow-hidden min-h-screen"
      style={{ background: "var(--cream-2)", padding: "clamp(2rem, 4vw, 3.5rem) 0" }}
    >
      <div className="container">

        {/* Header — same pattern as ServicesSection */}
        <div
          style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "3rem" }}
        >
          <div className="section-label justify-center" style={{ marginBottom: "1.25rem" }}>
            <span className="overline">Our People</span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 600,
              lineHeight: 1.15,
              textAlign: "center",
              color: "#1a1612",
              marginBottom: "1.5rem",
            }}
          >
            Meet Our{" "}
            <span style={{ color: "var(--gold)", fontStyle: "italic" }}>Partners</span>
          </h2>

          <div className="gold-divider" style={{ marginBottom: "1.5rem" }} />

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 400,
              fontSize: "clamp(0.9rem, 2vw, 1rem)",
              color: "#5a4f3e",
              lineHeight: 1.85,
              textAlign: "center",
              maxWidth: "36rem",
            }}
          >
            Our distinguished attorneys bring decades of experience and a passion
            for justice to every case.
          </p>
        </div>

        {/* Cards — same style as ServicesSection */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {attorneys.map((attorney, i) => (
            <div
              key={i}
              className="group rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-0.5 flex flex-col overflow-hidden"
              style={{
                background: "#1c1a16",

              }}
            >
              {/* Photo */}
              <div className="relative overflow-hidden" style={{ height: "280px", background: "#231f1a" }}>
                <Image
                  src={attorney.image}
                  alt={attorney.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                {/* Bar badge */}
                <div
                  className="absolute top-4 left-4 backdrop-blur-2xl rounded-md"
                  style={{
                    fontWeight: 600,
                    color: "#ffffff",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.58rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    padding: "0.35rem 0.75rem",
                  }}
                >
                  {attorney.bar}
                </div>
              </div>

              {/* Info — same card text pattern as ServicesSection */}
              <div
                className="flex flex-col"
                style={{ padding: "1.75rem 1.75rem", flexGrow: 1 }}
              >
                {/* Partner title (acts like the tag in service cards) */}
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#c9a84c",
                    marginBottom: "0.6rem",
                  }}
                >
                  {attorney.title}
                </span>

                {/* Name — bold title, same as service card h3 */}
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "#ffffff",
                    lineHeight: 1.3,
                    marginBottom: "0.5rem",
                  }}
                >
                  {attorney.name}
                </h3>

                {/* Specialization — same as service card description */}
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 400,
                    fontSize: "0.92rem",
                    color: "#9a9080",
                    lineHeight: 1.85,
                    marginBottom: "0.5rem",
                    flexGrow: 1,
                  }}
                >
                  {attorney.specialization}
                </p>

                {/* Education italic */}
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "0.78rem",
                    fontStyle: "italic",
                    color: "#ffffff",
                    marginBottom: "1.5rem",
                  }}
                >
                  {attorney.education}
                </p>

                {/* View Profile — same as "Learn More →" */}
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
                  View Profile
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
