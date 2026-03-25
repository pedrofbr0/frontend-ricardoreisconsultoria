import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Marcos Oliveira",
    role: "Empresário · Uberlândia",
    text: "O Ricardo entendeu exatamente o que eu precisava sem que eu precisasse explicar muito. Em duas semanas, apresentou a fazenda que comprei. Atendimento impecável do início ao fim.",
    stars: 5,
    type: "rural",
  },
  {
    id: 2,
    name: "Fernanda Castilho",
    role: "Médica · Goiânia",
    text: "Procurei vários corretores antes. Só o Ricardo me trouxe opções que faziam sentido pro meu padrão. Comprei meu apartamento sem stress, com toda a segurança jurídica que precisava.",
    stars: 5,
    type: "urban",
  },
  {
    id: 3,
    name: "Paulo & Renata Menezes",
    role: "Investidores · São Paulo",
    text: "Investimos em dois imóveis com o Ricardo em menos de um ano. Ele tem um olhar cirúrgico para oportunidade — sabe o que vai valorizar antes que o mercado perceba.",
    stars: 5,
    type: "urban",
  },
];

export function SocialProof() {
  return (
    <section
      style={{
        background: "#F8F5F0",
        padding: "80px 24px",
        borderTop: "1px solid #EDE8E0",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#B8935A",
              display: "block",
              marginBottom: 14,
            }}
          >
            O Que Dizem os Clientes
          </span>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(24px, 3.5vw, 38px)",
              fontWeight: 600,
              color: "#162940",
              lineHeight: 1.2,
            }}
          >
            Histórias de quem encontrou o imóvel certo.
          </h2>
          <div
            style={{
              width: 50,
              height: 2,
              background: "#B8935A",
              margin: "20px auto 0",
            }}
          />
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              style={{
                background: "#FFFFFF",
                borderRadius: 12,
                padding: "28px 28px 24px",
                boxShadow: "0 2px 16px rgba(22,41,64,0.07)",
                position: "relative",
                transition: "box-shadow 0.25s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.boxShadow =
                  "0 8px 32px rgba(22,41,64,0.14)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.boxShadow =
                  "0 2px 16px rgba(22,41,64,0.07)")
              }
            >
              {/* Quote icon */}
              <div
                style={{
                  position: "absolute",
                  top: 20,
                  right: 24,
                  opacity: 0.08,
                }}
              >
                <Quote size={48} color="#162940" />
              </div>

              {/* Stars */}
              <div style={{ display: "flex", gap: 3, marginBottom: 16 }}>
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} size={14} fill="#B8935A" color="#B8935A" />
                ))}
              </div>

              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  color: "#3D4F62",
                  lineHeight: 1.75,
                  marginBottom: 24,
                  fontStyle: "italic",
                }}
              >
                "{t.text}"
              </p>

              {/* Author */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  paddingTop: 18,
                  borderTop: "1px solid #EDE8E0",
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background:
                      t.type === "urban"
                        ? "linear-gradient(135deg, #162940 0%, #2a4a6e 100%)"
                        : "linear-gradient(135deg, #2d4a22 0%, #4a7a38 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 16,
                      fontWeight: 600,
                      color: "#B8935A",
                    }}
                  >
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#162940",
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 11,
                      color: "#8899A6",
                    }}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
