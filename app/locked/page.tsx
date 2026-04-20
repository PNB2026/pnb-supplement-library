import Image from "next/image";
import Link from "next/link";

export default function LockedPage() {
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
            padding: "34px 24px 54px 24px",
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
              Supplement Intelligence™
            </div>

            <h1
              style={{
                margin: 0,
                fontSize: "clamp(34px, 5vw, 52px)",
                lineHeight: 1.06,
                fontWeight: 700,
                letterSpacing: "-0.03em",
                color: "#1b5e3b",
                maxWidth: 900,
              }}
            >
              Premium supplement reference access is required to enter this
              library
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
              Supplement Intelligence™ is a standalone educational product
              within the Precision Neurobiology™ framework. It is designed to
              help families understand how supplements are grouped by biologic
              domain, mechanism, and functional context.
            </p>

            <div
              style={{
                marginTop: 20,
                background: "#ffffff",
                border: "1px solid #d9e3de",
                borderRadius: 18,
                padding: 18,
                boxShadow: "0 6px 18px rgba(15, 23, 42, 0.04)",
                maxWidth: 760,
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
                This library is educational in nature and does not provide
                individualized treatment recommendations. Access is intended for
                users who have purchased the standalone Supplement
                Intelligence™ product.
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
          padding: "44px 24px 72px 24px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.05fr) minmax(320px, 0.95fr)",
            gap: 24,
            alignItems: "start",
          }}
        >
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #d9e3de",
              borderRadius: 24,
              padding: 26,
              boxShadow: "0 8px 24px rgba(15, 23, 42, 0.05)",
            }}
          >
            <h2
              style={{
                margin: 0,
                fontSize: 26,
                fontWeight: 700,
                color: "#1b5e3b",
              }}
            >
              What this library includes
            </h2>

            <div
              style={{
                marginTop: 18,
                display: "grid",
                gap: 14,
              }}
            >
              {[
                "Domain-based organization across Sleep, Behavior, Language, Focus, and Sensory Regulation",
                "Individual supplement pages organized by biologic role and functional use context",
                "Form-factor guidance and example quality brands for parent-facing education",
                "Precision Neurobiology™ structure designed to explain patterns rather than list random products",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "18px 1fr",
                    gap: 12,
                    alignItems: "start",
                  }}
                >
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 999,
                      background:
                        "linear-gradient(180deg, #1b5e3b 0%, #5b3fa3 100%)",
                      marginTop: 7,
                    }}
                  />
                  <p
                    style={{
                      margin: 0,
                      fontSize: 15,
                      lineHeight: 1.8,
                      color: "#5c6f68",
                    }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: 24,
                paddingTop: 20,
                borderTop: "1px solid #e5ece8",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: 14,
                  lineHeight: 1.8,
                  color: "#5c6f68",
                }}
              >
                This is a premium educational reference designed to help users
                move from biologic pattern recognition toward more structured
                supplement understanding.
              </p>
            </div>
          </div>

          <div
            style={{
              background: "#ffffff",
              border: "1px solid #d9e3de",
              borderRadius: 24,
              padding: 26,
              boxShadow: "0 8px 24px rgba(15, 23, 42, 0.05)",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                borderRadius: 999,
                border: "1px solid #d9e3de",
                background: "#f7faf8",
                color: "#1b5e3b",
                fontSize: 12,
                fontWeight: 700,
                padding: "6px 10px",
              }}
            >
              Standalone Access
            </div>

            <h2
              style={{
                marginTop: 14,
                marginBottom: 0,
                fontSize: 28,
                fontWeight: 700,
                color: "#1b5e3b",
              }}
            >
              $29
            </h2>

            <p
              style={{
                marginTop: 10,
                marginBottom: 0,
                fontSize: 15,
                lineHeight: 1.8,
                color: "#5c6f68",
              }}
            >
              One-time purchase for ongoing access to the Supplement
              Intelligence™ library.
            </p>

            <div style={{ marginTop: 24, display: "grid", gap: 12 }}>
              <a
                href="https://buy.stripe.com/6oU7sEbFgej7bhr1hScZa01"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  background:
                    "linear-gradient(90deg, #1b5e3b 0%, #5b3fa3 100%)",
                  color: "#ffffff",
                  borderRadius: 14,
                  padding: "14px 18px",
                  fontSize: 15,
                  fontWeight: 700,
                  boxShadow: "0 4px 12px rgba(27, 94, 59, 0.18)",
                }}
              >
                Purchase Supplement Intelligence™
              </a>

              <Link
                href="/returning-access"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  border: "1px solid #d9e3de",
                  background: "#ffffff",
                  color: "#1b5e3b",
                  borderRadius: 14,
                  padding: "14px 18px",
                  fontSize: 15,
                  fontWeight: 700,
                }}
              >
                Returning customer access
              </Link>
            </div>

            <p
              style={{
                marginTop: 16,
                marginBottom: 0,
                fontSize: 12,
                lineHeight: 1.75,
                color: "#6b7d76",
              }}
            >
              Standalone access is activated after Stripe payment and confirmed
              through your purchase email.
            </p>
          </div>
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