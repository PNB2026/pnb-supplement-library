import Image from "next/image";
import Link from "next/link";

export default function LanguagePage() {
  const domains = [
    "Neuroplasticity / BDNF",
    "Cerebral Blood Flow",
    "Excitatory / Inhibitory Balance",
    "Motor Speech / Cortical Coordination",
    "Metabolic / Mitochondrial Support",
  ];

  const supplements = [
    {
      name: "Magnesium",
      summary:
        "Often discussed when regulatory balance, signaling stability, and excitatory tone may influence access to language output.",
      href: "/supplements/magnesium?from=language",
      available: true,
    },
    {
      name: "L-Theanine",
      summary:
        "Commonly considered when smoother regulation and reduced internal noise may support more consistent language access and engagement.",
      href: "/supplements/l-theanine?from=language",
      available: true,
    },
    {
      name: "Taurine",
      summary:
        "Frequently viewed as a support option for inhibitory tone, network stability, and physiologic steadiness relevant to language output.",
      href: "/supplements/taurine?from=language",
      available: true,
    },
    {
      name: "NAC",
      summary:
        "Often discussed when oxidative stress handling, excitatory regulation, or broader inflammatory load may be interfering with language consistency.",
      href: "/supplements/nac?from=language",
      available: true,
    },
    {
      name: "Curcumin",
      summary:
        "Commonly considered when neuroinflammatory tone and broader inflammatory signaling may be contributing to disrupted language access.",
      href: "/supplements/curcumin?from=language",
      available: true,
    },
    {
      name: "Creatine",
      summary:
        "Often discussed when cellular energy availability, speech-motor effort, and cortical output demand may be limiting expressive language.",
      href: "/supplements/creatine?from=language",
      available: true,
    },
    {
      name: "Citicoline",
      summary:
        "Commonly considered when phospholipid metabolism, cortical signaling efficiency, and speech-related network activation are relevant.",
      href: "/supplements/citicoline?from=language",
      available: true,
    },
    {
      name: "Alpha-GPC",
      summary:
        "Often discussed when cholinergic tone, motor planning circuits, and broader cortical activation are part of the language profile.",
      href: "/supplements/alpha-gpc?from=language",
      available: true,
    },
    {
      name: "Bacopa",
      summary:
        "Commonly considered when cognitive processing, language organization, and broader neuroplastic support are relevant within the framework.",
      href: "/supplements/bacopa?from=language",
      available: true,
    },
    {
      name: "Sulforaphane",
      summary:
        "Often discussed when oxidative stress handling, neuroinflammatory tone, and broader biologic burden may be impacting language development.",
      href: "/supplements/sulforaphane?from=language",
      available: true,
    },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #f4f7f5 0%, #eef3f0 45%, #ffffff 100%)",
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
            padding: "34px 24px 48px 24px",
          }}
        >
          <div style={{ maxWidth: 820 }}>
            <div style={{ marginBottom: 10 }}>
              <Link
                href="/"
                style={{
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                <Image
                  src="/pnb-logo.png"
                  alt="Precision Neurobiology"
                  width={320}
                  height={82}
                  priority
                  style={{
                    width: "100%",
                    maxWidth: 240,
                    height: "auto",
                    display: "block",
                  }}
                />
              </Link>
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
                marginBottom: 12,
              }}
            >
              Language
            </div>

            <h1
              style={{
                margin: 0,
                fontSize: "clamp(34px, 5vw, 52px)",
                lineHeight: 1.06,
                fontWeight: 700,
                letterSpacing: "-0.03em",
                color: "#1b5e3b",
              }}
            >
              Understanding language within the Precision Neurobiology™ framework
            </h1>

            <p
              style={{
                marginTop: 18,
                fontSize: 18,
                lineHeight: 1.75,
                color: "#5c6f68",
                maxWidth: 760,
              }}
            >
              In the Precision Neurobiology™ model, language is not viewed as an
              isolated skill. It is often shaped by broader biologic domains
              related to neuroplasticity, motor planning, cortical coordination,
              signaling balance, and the brain&apos;s ability to generate organized
              output across speech networks.
            </p>

            <div
              style={{
                marginTop: 20,
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
                This page is educational in nature. It is designed to help
                parents understand how language-related concerns are organized
                within the Precision Neurobiology™ framework and does not
                provide individualized recommendations.
              </p>
            </div>

            <div
              style={{
                marginTop: 16,
                height: 3,
                width: "100%",
                maxWidth: 380,
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
          padding: "44px 24px 36px 24px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.15fr) minmax(280px, 0.85fr)",
            gap: 24,
          }}
        >
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #d9e3de",
              borderRadius: 22,
              padding: 24,
              boxShadow: "0 6px 18px rgba(15, 23, 42, 0.04)",
            }}
          >
            <h2
              style={{
                margin: 0,
                fontSize: 24,
                fontWeight: 700,
                color: "#1b5e3b",
              }}
            >
              Commonly related domains
            </h2>

            <p
              style={{
                marginTop: 14,
                marginBottom: 0,
                fontSize: 15,
                lineHeight: 1.8,
                color: "#5c6f68",
              }}
            >
              Language-related difficulty is often connected to multiple biologic
              drivers rather than a single isolated mechanism. Within the
              Precision Neurobiology™ framework, these commonly include:
            </p>

            <div
              style={{
                marginTop: 20,
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
              }}
            >
              {domains.map((d) => (
                <span
                  key={d}
                  style={{
                    borderRadius: 999,
                    border: "1px solid #d9e3de",
                    background: "#f3f6f4",
                    color: "#1b5e3b",
                    fontSize: 13,
                    fontWeight: 600,
                    padding: "8px 12px",
                  }}
                >
                  {d}
                </span>
              ))}
            </div>
          </div>

          <div
            style={{
              background: "#ffffff",
              border: "1px solid #d9e3de",
              borderRadius: 22,
              padding: 24,
              boxShadow: "0 6px 18px rgba(15, 23, 42, 0.04)",
            }}
          >
            <h2
              style={{
                margin: 0,
                fontSize: 24,
                fontWeight: 700,
                color: "#1b5e3b",
              }}
            >
              Framework flow
            </h2>

            <div
              style={{
                marginTop: 16,
                display: "grid",
                gap: 10,
              }}
            >
              {[
                "Language concern",
                "Related biological domains",
                "Mechanisms within those domains",
                "Supplement categories often discussed in context",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    border: "1px solid #d9e3de",
                    borderRadius: 14,
                    background: "#f9fbfa",
                    padding: "12px 14px",
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#1b5e3b",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "8px 24px 64px 24px",
        }}
      >
        <div style={{ maxWidth: 760, marginBottom: 24 }}>
          <h2
            style={{
              margin: 0,
              fontSize: 24,
              fontWeight: 700,
              color: "#1b5e3b",
            }}
          >
            Supplement categories commonly discussed in this context
          </h2>

          <p
            style={{
              marginTop: 12,
              fontSize: 15,
              lineHeight: 1.75,
              color: "#5c6f68",
            }}
          >
            These are not direct recommendations. They are examples of
            supplement categories that are commonly discussed when this domain is
            relevant within the Precision Neurobiology™ framework.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {supplements.map((s) => (
            <article
              key={s.name}
              style={{
                background: "#ffffff",
                border: "1px solid #d9e3de",
                borderRadius: 22,
                padding: 22,
                boxShadow: "0 6px 18px rgba(15, 23, 42, 0.04)",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#1b5e3b",
                }}
              >
                {s.name}
              </h3>

              <p
                style={{
                  marginTop: 12,
                  fontSize: 14,
                  lineHeight: 1.75,
                  color: "#5c6f68",
                }}
              >
                {s.summary}
              </p>

              <div style={{ marginTop: 18 }}>
                {s.available ? (
                  <Link
                    href={s.href}
                    style={{
                      display: "inline-block",
                      textDecoration: "none",
                      background:
                        "linear-gradient(90deg, #1b5e3b 0%, #5b3fa3 100%)",
                      color: "#ffffff",
                      borderRadius: 12,
                      padding: "10px 14px",
                      fontSize: 13,
                      fontWeight: 700,
                      boxShadow: "0 4px 12px rgba(27, 94, 59, 0.18)",
                    }}
                  >
                    View {s.name}
                  </Link>
                ) : (
                  <span
                    style={{
                      display: "inline-block",
                      border: "1px solid #d9e3de",
                      background: "#f9fbfa",
                      color: "#5c6f68",
                      borderRadius: 12,
                      padding: "10px 14px",
                      fontSize: 13,
                      fontWeight: 700,
                    }}
                  >
                    Page coming soon
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        <div style={{ marginTop: 28 }}>
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              textDecoration: "none",
              color: "#1b5e3b",
              fontSize: 14,
              fontWeight: 700,
            }}
          >
            ← Back to library home
          </Link>
        </div>
      </section>
    </main>
  );
}