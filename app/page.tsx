import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const categories = [
    {
      title: "Sleep",
      slug: "sleep",
      description:
        "Explore how regulation, calming pathways, and neuroinflammatory factors may influence sleep-related difficulties.",
    },
    {
      title: "Behavior",
      slug: "behavior",
      description:
        "Understand how regulation, inflammatory load, and physiologic stress can affect behavioral output.",
    },
    {
      title: "Language",
      slug: "language",
      description:
        "See how neuroplasticity, blood flow, and regulation can influence language access and output.",
    },
    {
      title: "Focus",
      slug: "focus",
      description:
        "Review how neurotransmission, energy systems, and cerebral efficiency can affect attention and consistency.",
    },
    {
      title: "Sensory Regulation",
      slug: "sensory",
      description:
        "Learn how excitability, inflammation, and signaling stability can contribute to sensory dysregulation.",
    },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #f4f7f5 0%, #eef3f0 45%, #ffffff 100%)",
        color: "#14251f",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <section
        style={{
          borderBottom: "1px solid #d9e3de",
          background:
            "linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(244,247,245,1) 55%, rgba(242,237,255,0.55) 100%)",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "38px 24px 56px 24px",
          }}
        >
          <div style={{ maxWidth: 760 }}>
            <div style={{ marginBottom: 6 }}>
              <Image
                src="/pnb-logo.png"
                alt="Precision Neurobiology"
                width={360}
                height={90}
                priority
                style={{
                  width: "100%",
                  maxWidth: 260,
                  height: "auto",
                }}
              />
            </div>

            <div
              style={{
                display: "inline-flex",
                border: "1px solid #d9e3de",
                background: "rgba(255,255,255,0.9)",
                borderRadius: 999,
                padding: "6px 10px",
                fontSize: 12,
                fontWeight: 700,
                color: "#1b5e3b",
                marginBottom: 10,
              }}
            >
              Precision Neurobiology™ Supplement Reference Library
            </div>

            <h1
              style={{
                margin: 0,
                fontSize: "clamp(36px, 5.5vw, 54px)",
                lineHeight: 1.05,
                fontWeight: 700,
                letterSpacing: "-0.03em",
                color: "#1b5e3b",
              }}
            >
              Understand how supplements are organized within the Precision
              Neurobiology™ framework
            </h1>

            <p
              style={{
                marginTop: 18,
                fontSize: 19,
                lineHeight: 1.7,
                color: "#5c6f68",
              }}
            >
              This parent-facing library is educational in nature and explains
              how common supplement categories are grouped by mechanism and
              biological domain within the Precision Neurobiology™ model.
            </p>

            <div
              style={{
                marginTop: 18,
                background: "#ffffff",
                border: "1px solid #d9e3de",
                borderRadius: 18,
                padding: 18,
                boxShadow: "0 6px 18px rgba(15, 23, 42, 0.04)",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: 13,
                  lineHeight: 1.8,
                  color: "#5c6f68",
                }}
              >
                This library is designed to support understanding, not to provide
                individualized recommendations. Individual needs vary based on
                physiology, history, tolerance, age, and broader clinical context.
              </p>
            </div>

            <div
              style={{
                marginTop: 16,
                height: 3,
                width: "100%",
                maxWidth: 420,
                borderRadius: 999,
                background:
                  "linear-gradient(90deg, #1b5e3b 0%, #5b3fa3 100%)",
              }}
            />
          </div>
        </div>
      </section>

      <section
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "50px 24px 56px 24px",
        }}
      >
        <div style={{ maxWidth: 700, marginBottom: 28 }}>
          <h2
            style={{
              margin: 0,
              fontSize: 24,
              fontWeight: 700,
              color: "#1b5e3b",
            }}
          >
            What would you like to better understand?
          </h2>

          <p
            style={{
              marginTop: 12,
              fontSize: 15,
              lineHeight: 1.7,
              color: "#5c6f68",
            }}
          >
            Begin with the area that feels most relevant. From there, the library
            introduces the biological domains and mechanisms that commonly shape
            that pattern within the Precision Neurobiology™ model.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {categories.map((category) => (
            <article
              key={category.title}
              style={{
                background: "#ffffff",
                border: "1px solid #d9e3de",
                borderRadius: 22,
                padding: 20,
                boxShadow: "0 6px 18px rgba(15, 23, 42, 0.04)",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#1b5e3b",
                }}
              >
                {category.title}
              </h3>

              <p
                style={{
                  marginTop: 10,
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: "#5c6f68",
                }}
              >
                {category.description}
              </p>

              <div style={{ marginTop: 20 }}>
                <Link
                  href={`/${category.slug}`}
                  style={{ textDecoration: "none" }}
                >
                  <button
                    style={{
                      background: "linear-gradient(90deg, #1b5e3b, #5b3fa3)",
                      color: "#fff",
                      border: "none",
                      borderRadius: 12,
                      padding: "10px 14px",
                      fontSize: 13,
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    Explore {category.title}
                  </button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}