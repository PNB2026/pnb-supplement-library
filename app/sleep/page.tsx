import Image from "next/image";
import Link from "next/link";

export default function SleepPage() {
  const domains = [
    "Excitatory / Inhibitory Balance",
    "Neurotransmitter Regulation",
    "Neuroinflammation",
    "Circadian Signaling",
  ];

  const supplements = [
    {
      name: "Magnesium",
      summary:
        "Often discussed in this context for its role in regulation, calming support, excitatory balance, and, depending on form, broader cortical support.",
      href: "/supplements/magnesium?from=sleep",
      available: true,
    },
    {
      name: "L-Theanine",
      summary:
        "Commonly considered when the goal is to support calm attention, light regulatory support, and reduced overactivation without heavy sedation.",
      href: "/supplements/l-theanine?from=sleep",
      available: true,
    },
    {
      name: "Taurine",
      summary:
        "Frequently viewed as a support option for broader regulatory stability, inhibitory tone, and membrane-related physiologic balance.",
      href: "/supplements/taurine?from=sleep",
      available: true,
    },
    {
      name: "NAC",
      summary:
        "Often discussed when oxidative stress, glutathione-related support, excitatory regulation, or broader inflammatory load are part of the picture.",
      href: "/supplements/nac?from=sleep",
      available: true,
    },
    {
      name: "Curcumin",
      summary:
        "Commonly considered when neuroinflammatory tone, oxidative stress handling, or broader inflammatory regulation are relevant within the framework.",
      href: "/supplements/curcumin?from=sleep",
      available: true,
    },
    {
      name: "Melatonin",
      summary:
        "Commonly used to support sleep timing and initiation. Within the Precision Neurobiology™ framework, it is typically viewed as a signaling support rather than a primary regulator of underlying biologic drivers.",
      href: "/supplements/melatonin?from=sleep",
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
              <Link href="/" style={{ textDecoration: "none" }}>
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
                  }}
                />
              </Link>
            </div>

            <div
              style={{
                display: "inline-flex",
                border: "1px solid #d9e3de",
                borderRadius: 999,
                padding: "6px 10px",
                fontSize: 12,
                fontWeight: 700,
                color: "#1b5e3b",
                marginBottom: 12,
              }}
            >
              Sleep
            </div>

            <h1
              style={{
                fontSize: "clamp(34px, 5vw, 52px)",
                lineHeight: 1.06,
                color: "#1b5e3b",
                margin: 0,
              }}
            >
              Understanding sleep within the Precision Neurobiology™ framework
            </h1>

            <p
              style={{
                marginTop: 18,
                fontSize: 18,
                lineHeight: 1.75,
                color: "#5c6f68",
              }}
            >
              In the Precision Neurobiology™ model, sleep is rarely viewed as a
              stand-alone issue. It is often shaped by broader biological domains
              related to regulation, calming pathways, inflammatory load, and the
              brain&apos;s ability to transition out of activation.
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
              <p style={{ margin: 0, fontSize: 13, color: "#5c6f68" }}>
                This page is educational in nature. It is designed to help
                parents understand how sleep-related concerns are organized
                within the Precision Neurobiology™ framework and does not provide
                individualized recommendations.
              </p>
            </div>

            <div
              style={{
                marginTop: 16,
                height: 3,
                maxWidth: 380,
                background:
                  "linear-gradient(90deg, #1b5e3b 0%, #5b3fa3 100%)",
                borderRadius: 999,
              }}
            />
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1100, margin: "0 auto", padding: 40 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
          }}
        >
          <div style={card}>
            <h2 style={h2}>Commonly related domains</h2>
            <p style={p}>
              Sleep-related difficulty is often connected to multiple biologic
              drivers rather than a single cause. Within the Precision
              Neurobiology™ framework, these commonly include:
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {domains.map((d) => (
                <span key={d} style={tag}>
                  {d}
                </span>
              ))}
            </div>
          </div>

          <div style={card}>
            <h2 style={h2}>Framework flow</h2>

            {[
              "Sleep concern",
              "Related biological domains",
              "Mechanisms within those domains",
              "Supplement categories often discussed in context",
            ].map((item) => (
              <div key={item} style={flowBox}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1100, margin: "0 auto", padding: 40 }}>
        <h2 style={h2}>
          Supplement categories commonly discussed in this context
        </h2>

        <p style={p}>
          These are not direct recommendations. They are examples of supplement
          categories that are commonly discussed when this domain is relevant
          within the Precision Neurobiology™ framework.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {supplements.map((s) => (
            <div key={s.name} style={card}>
              <h3 style={{ color: "#1b5e3b" }}>{s.name}</h3>
              <p style={p}>{s.summary}</p>

              {s.available ? (
                <Link href={s.href} style={button}>
                  View {s.name}
                </Link>
              ) : (
                <div style={comingSoon}>Page coming soon</div>
              )}
            </div>
          ))}
        </div>

        <div style={{ marginTop: 30 }}>
          <Link href="/" style={{ color: "#1b5e3b", fontWeight: 700 }}>
            ← Back to library home
          </Link>
        </div>
      </section>
    </main>
  );
}

const card = {
  background: "#ffffff",
  border: "1px solid #d9e3de",
  borderRadius: 20,
  padding: 20,
};

const h2 = {
  color: "#1b5e3b",
  marginBottom: 10,
};

const p = {
  fontSize: 14,
  color: "#5c6f68",
  lineHeight: 1.7,
};

const tag = {
  padding: "6px 12px",
  borderRadius: 999,
  border: "1px solid #d9e3de",
  background: "#f3f6f4",
  fontSize: 12,
};

const flowBox = {
  border: "1px solid #d9e3de",
  borderRadius: 10,
  padding: 10,
  marginBottom: 8,
  background: "#f9fbfa",
};

const button = {
  display: "inline-block",
  marginTop: 10,
  padding: "10px 14px",
  background: "linear-gradient(90deg, #1b5e3b 0%, #5b3fa3 100%)",
  color: "#fff",
  borderRadius: 10,
  textDecoration: "none",
  fontWeight: 700,
};

const comingSoon = {
  marginTop: 10,
  padding: "10px 14px",
  border: "1px solid #d9e3de",
  borderRadius: 10,
  fontSize: 13,
  color: "#5c6f68",
  background: "#f9fbfa",
};