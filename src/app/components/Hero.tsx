import { useState, useEffect } from "react";

const WA_LINK =
  "https://wa.me/5534999999999?text=Ol%C3%A1%20Ricardo%2C%20tenho%20interesse%20em%20atendimento%20exclusivo.%20Pode%20me%20ajudar%3F";

const URBAN_IMG =
  "https://images.unsplash.com/photo-1758448756350-3d0eec02ba37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZW50aG91c2UlMjBpbnRlcmlvciUyMG1vZGVybiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzc0NDU4MjAzfDA&ixlib=rb-4.1.0&q=80&w=1080";

const FARM_IMG =
  "https://images.unsplash.com/photo-1767103593977-217ae79c9de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBmYXJtJTIwY291bnRyeXNpZGUlMjBsYW5kc2NhcGUlMjBCcmF6aWx8ZW58MXx8fHwxNzc0NDU4MjA0fDA&ixlib=rb-4.1.0&q=80&w=1080";

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        minHeight: 600,
        overflow: "hidden",
      }}
    >
      {/* Split Screen Images */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
        }}
      >
        {/* Left – Urban */}
        <div
          style={{
            flex: 1,
            position: "relative",
            transition: "flex 1.2s cubic-bezier(0.77, 0, 0.175, 1)",
            flex: active === 0 ? 1.6 : 0.4,
            overflow: "hidden",
          }}
        >
          <img
            src={URBAN_IMG}
            alt="Imóvel urbano de alto padrão"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 1.6s ease",
              transform: active === 0 ? "scale(1.03)" : "scale(1)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, rgba(15,28,46,0.65) 0%, rgba(15,28,46,0.15) 100%)",
            }}
          />
          {/* Urban label */}
          <div
            style={{
              position: "absolute",
              bottom: 40,
              left: 36,
              opacity: active === 0 ? 1 : 0,
              transition: "opacity 0.6s",
            }}
          >
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#B8935A",
                background: "rgba(15,28,46,0.7)",
                padding: "5px 12px",
                borderRadius: 3,
              }}
            >
              Alto Padrão Urbano
            </span>
          </div>
        </div>

        {/* Divider line */}
        <div
          style={{
            width: 2,
            background: "rgba(184,147,90,0.6)",
            zIndex: 2,
            flexShrink: 0,
          }}
        />

        {/* Right – Farm */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            transition: "flex 1.2s cubic-bezier(0.77, 0, 0.175, 1)",
            flex: active === 1 ? 1.6 : 0.4,
          }}
        >
          <img
            src={FARM_IMG}
            alt="Fazenda de alto padrão"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 1.6s ease",
              transform: active === 1 ? "scale(1.03)" : "scale(1)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to left, rgba(15,28,46,0.65) 0%, rgba(15,28,46,0.15) 100%)",
            }}
          />
          {/* Farm label */}
          <div
            style={{
              position: "absolute",
              bottom: 40,
              right: 36,
              opacity: active === 1 ? 1 : 0,
              transition: "opacity 0.6s",
            }}
          >
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#B8935A",
                background: "rgba(15,28,46,0.7)",
                padding: "5px 12px",
                borderRadius: 3,
              }}
            >
              Fazendas &amp; Sítios
            </span>
          </div>
        </div>
      </div>

      {/* Central Overlay – Content */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 24px",
          zIndex: 10,
          pointerEvents: "none",
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 20,
            pointerEvents: "auto",
          }}
        >
          <div
            style={{ width: 40, height: 1, background: "#B8935A" }}
          />
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#B8935A",
            }}
          >
            Curadoria Exclusiva de Imóveis
          </span>
          <div
            style={{ width: 40, height: 1, background: "#B8935A" }}
          />
        </div>

        {/* H1 */}
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(32px, 5.5vw, 68px)",
            fontWeight: 600,
            color: "#FFFFFF",
            lineHeight: 1.2,
            maxWidth: 820,
            marginBottom: 20,
            textShadow: "0 2px 24px rgba(0,0,0,0.4)",
            pointerEvents: "auto",
          }}
        >
          Encontre a exclusividade
          <br />
          que você busca,{" "}
          <span style={{ color: "#B8935A" }}>na cidade ou no campo.</span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(14px, 1.8vw, 18px)",
            fontWeight: 400,
            color: "rgba(255,255,255,0.85)",
            maxWidth: 540,
            lineHeight: 1.7,
            marginBottom: 40,
            pointerEvents: "auto",
          }}
        >
          Imóveis urbanos de alto padrão e propriedades rurais selecionados
          a dedo para um perfil que exige o melhor.
        </p>

        {/* CTA */}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-cta"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            background: "#25D366",
            color: "#fff",
            fontFamily: "'Inter', sans-serif",
            fontSize: 16,
            fontWeight: 700,
            padding: "17px 40px",
            borderRadius: 8,
            textDecoration: "none",
            transition: "background 0.2s, transform 0.2s, box-shadow 0.2s",
            boxShadow: "0 8px 32px rgba(37,211,102,0.35)",
            letterSpacing: "0.02em",
            pointerEvents: "auto",
            maxWidth: "100%",
            boxSizing: "border-box",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "#1DB954";
            (e.currentTarget as HTMLElement).style.transform = "translateY(-2px) scale(1.02)";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(37,211,102,0.45)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "#25D366";
            (e.currentTarget as HTMLElement).style.transform = "translateY(0) scale(1)";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(37,211,102,0.35)";
          }}
        >
          <WhatsAppIcon />
          Atendimento Exclusivo via WhatsApp
        </a>
      </div>

      {/* Slide toggles */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 10,
          zIndex: 20,
        }}
      >
        {[0, 1].map((i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              width: i === active ? 28 : 8,
              height: 8,
              borderRadius: 4,
              background: i === active ? "#B8935A" : "rgba(255,255,255,0.4)",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "all 0.4s",
            }}
          />
        ))}
      </div>

      <style>{`
        @media (max-width: 480px) {
          .hero-cta {
            width: 100%;
            padding: 15px 20px !important;
            font-size: 14px !important;
          }
        }
      `}</style>

      {/* Scroll hint */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          right: 36,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          zIndex: 20,
        }}
      >
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 9,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.5)",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: 1,
            height: 36,
            background: "linear-gradient(to bottom, rgba(184,147,90,0.8), transparent)",
          }}
        />
      </div>
    </section>
  );
}
