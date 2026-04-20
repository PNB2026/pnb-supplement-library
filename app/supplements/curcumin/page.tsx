import Image from "next/image";
import Link from "next/link";

type CurcuminPageProps = {
  searchParams?: Promise<{
    from?: string;
  }>;
};

export default async function CurcuminPage({
  searchParams,
}: CurcuminPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const from = resolvedSearchParams?.from;

  let backHref = "/";
  let backLabel = "← Back to library home";

  if (from === "sleep") {
    backHref = "/sleep";
    backLabel = "← Back to Sleep";
  } else if (from === "behavior") {
    backHref = "/behavior";
    backLabel = "← Back to Behavior";
  } else if (from === "language") {
    backHref = "/language";
    backLabel = "← Back to Language";
  } else if (from === "focus") {
    backHref = "/focus";
    backLabel = "← Back to Focus";
  } else if (from === "sensory") {
    backHref = "/sensory";
    backLabel = "← Back to Sensory Regulation";
  }

  const categories = [
    {
      title: "Neuroinflammatory / Precision-Oriented Support",
      description:
        "This category is most relevant when curcumin is being considered for neuroinflammatory tone, cytokine-related burden, or broader inflammatory signaling within the Precision Neurobiology™ framework. In this context, curcumin is most useful when chosen in a form designed for meaningful absorption rather than generic turmeric powder products.",
      forms: [
        "Enhanced-bioavailability Curcumin",
        "Phytosome / Meriva-style Curcumin",
        "Liposomal or advanced-delivery Curcumin",
      ],
      brands: [
        "Thorne Meriva-SF",
        "Integrative Therapeutics Theracurmin HP",
        "Pure Encapsulations Curcumin 500 with Bioperine",
      ],
    },
    {
      title: "Oxidative Stress / Broader Regulatory Support",
      description:
        "This category is more relevant when curcumin is being considered as part of a broader strategy aimed at oxidative load, inflammatory stress, and general physiologic regulation. Within the Precision Neurobiology™ model, this is often where curcumin complements agents like NAC.",
      forms: [
        "Standardized Curcumin Extract",
        "Curcumin with Piperine",
      ],
      brands: [
        "NOW Curcumin",
        "Jarrow Curcumin 95",
        "Doctor's Best Curcumin C3 Complex",
      ],
    },
    {
      title: "General Turmeric / Less Precision-Oriented Use",
      description:
        "These products are typically broader and less targeted. Within the Precision Neurobiology™ framework, plain turmeric products are generally viewed as less precise because potency and absorption are often too variable for mechanism-focused use.",
      forms: ["Turmeric powder", "General turmeric capsules"],
      brands: ["Mixed retail turmeric formulations"],
    },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #f4f7f5 0%, #eef3f0 45%, #ffffff 100%)",
        fontFamily: "Arial, Helvetica, sans-serif",
        color: "#14251f",
      }}
    >
      <section
        style={{
          borderBottom: "1px solid #d9e3de",
          background:
            "linear-gradient(135deg, #ffffff 0%, #f4f7f5 60%, #f2edff 100%)",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "34px 24px 48px 24px",
          }}
        >
          <div style={{ maxWidth: 780 }}>
            <div style={{ marginBottom: 10 }}>
              <Link
                href="/"
                style={{ display: "inline-block", textDecoration: "none" }}
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
              Curcumin
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
              Curcumin within the Precision Neurobiology™ framework
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
              Curcumin is not viewed simply as a generic anti-inflammatory agent
              within the Precision Neurobiology™ model. Its relevance depends on
              the biologic rationale, the need for meaningful absorption, and
              whether inflammatory load is being considered in a targeted or
              broader regulatory context.
            </p>

            <div
              style={{
                marginTop: 20,
                background: "#ffffff",
                border: "1px solid #d9e3de",
                borderRadius: 18,
                padding: 18,
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
                parents understand how curcumin is categorized within the
                Precision Neurobiology™ framework and does not provide
                individualized recommendations.
              </p>
            </div>

            <div
              style={{
                marginTop: 16,
                height: 3,
                width: "100%",
                maxWidth: 340,
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
          padding: "42px 24px 24px 24px",
        }}
      >
        <div
          style={{
            background: "#ffffff",
            border: "1px solid #d9e3de",
            borderRadius: 22,
            padding: 24,
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
            How curcumin is differentiated in the Precision Neurobiology™ framework
          </h2>

          <p
            style={{
              marginTop: 14,
              marginBottom: 0,
              fontSize: 15,
              lineHeight: 1.8,
              color: "#5c6f68",
              maxWidth: 820,
            }}
          >
            Rather than ranking curcumin universally, the Precision
            Neurobiology™ model first considers whether the target is
            neuroinflammatory signaling, oxidative stress handling, or broader
            regulatory support. It then evaluates whether the form used is
            actually capable of delivering meaningful biologic relevance.
          </p>
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
            Functional categories within the framework
          </h2>

          <p
            style={{
              marginTop: 12,
              fontSize: 15,
              lineHeight: 1.75,
              color: "#5c6f68",
            }}
          >
            These categories reflect how curcumin may be viewed differently
            depending on the intended biologic and functional target.
          </p>
        </div>

        <div style={{ display: "grid", gap: 20 }}>
          {categories.map((category) => (
            <div
              key={category.title}
              style={{
                background: "#ffffff",
                border: "1px solid #d9e3de",
                borderRadius: 22,
                padding: 22,
              }}
            >
              <h3
                style={{
                  marginTop: 0,
                  marginBottom: 10,
                  fontSize: 22,
                  fontWeight: 700,
                  color: "#1b5e3b",
                }}
              >
                {category.title}
              </h3>

              <p
                style={{
                  marginTop: 0,
                  marginBottom: 18,
                  fontSize: 15,
                  lineHeight: 1.8,
                  color: "#5c6f68",
                  maxWidth: 860,
                }}
              >
                {category.description}
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(220px, 320px) minmax(0, 1fr)",
                  gap: 18,
                }}
              >
                <div
                  style={{
                    border: "1px solid #d9e3de",
                    borderRadius: 16,
                    background: "#f9fbfa",
                    padding: 16,
                  }}
                >
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#5b3fa3",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: 10,
                    }}
                  >
                    Forms
                  </div>

                  <div style={{ display: "grid", gap: 8 }}>
                    {category.forms.map((form) => (
                      <div
                        key={form}
                        style={{
                          border: "1px solid #d9e3de",
                          borderRadius: 12,
                          background: "#ffffff",
                          padding: "10px 12px",
                          fontSize: 14,
                          fontWeight: 600,
                          color: "#1b5e3b",
                        }}
                      >
                        {form}
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    border: "1px solid #d9e3de",
                    borderRadius: 16,
                    background: "#ffffff",
                    padding: 16,
                  }}
                >
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#5b3fa3",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: 10,
                    }}
                  >
                    Example quality brands
                  </div>

                  <div style={{ display: "grid", gap: 8 }}>
                    {category.brands.map((brand) => (
                      <div
                        key={brand}
                        style={{
                          borderBottom: "1px solid #eef2ef",
                          paddingBottom: 8,
                          fontSize: 14,
                          color: "#374151",
                        }}
                      >
                        {brand}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 28 }}>
          <Link
            href={backHref}
            style={{
              display: "inline-flex",
              alignItems: "center",
              textDecoration: "none",
              color: "#1b5e3b",
              fontSize: 14,
              fontWeight: 700,
            }}
          >
            {backLabel}
          </Link>
        </div>
      </section>
    </main>
  );
}