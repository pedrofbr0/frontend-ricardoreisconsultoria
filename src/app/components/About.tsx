import { Award, Shield, Users, Star } from "lucide-react";

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const stats = [
  { value: "12+", label: "Anos de Experiência" },
  { value: "380+", label: "Imóveis Negociados" },
  { value: "R$ 900M+", label: "Em Transações" },
  { value: "98%", label: "Clientes Satisfeitos" },
];

const credentials = [
  {
    icon: Shield,
    title: "CRECI-MG 47.218",
    desc: "Registro ativo e regularizado junto ao Conselho Regional.",
  },
  {
    icon: Award,
    title: "Especialista em Alto Padrão",
    desc: "Certificação em negociação de imóveis de luxo e alta performance.",
  },
  {
    icon: Users,
    title: "Atendimento Personalizado",
    desc: "Curadoria dedicada: apenas imóveis que fazem sentido para o seu perfil.",
  },
  {
    icon: Star,
    title: "Top Producer 2023–2024",
    desc: "Premiado entre os melhores corretores do Triângulo Mineiro.",
  },
];

export function About() {
  return (
    <section
      id="sobre"
      style={{
        background: "#162940",
        padding: "96px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          top: -120,
          right: -120,
          width: 480,
          height: 480,
          borderRadius: "50%",
          background: "rgba(184,147,90,0.06)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -80,
          left: -80,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "rgba(184,147,90,0.04)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
        {/* Two columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 72,
            alignItems: "center",
          }}
          className="grid-cols-about"
        >
          {/* Left – Photo + Stats */}
          <div>
            {/* Photo */}
            <div
              style={{
                position: "relative",
                display: "inline-block",
                width: "100%",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 20,
                  left: 20,
                  right: -20,
                  bottom: -20,
                  border: "2px solid rgba(184,147,90,0.35)",
                  borderRadius: 12,
                  zIndex: 0,
                }}
              />
              <img
                src="https://images.unsplash.com/photo-1593029927096-1ba50b83ab01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcmVhbCUyMGVzdGF0ZSUyMGJyb2tlciUyMGJ1c2luZXNzJTIwcHJvZmVzc2lvbmFsJTIwbWFufGVufDF8fHx8MTc3NDQ1ODIwNXww&ixlib=rb-4.1.0&q=80&w=600"
                alt="Ricardo Reis – Corretor de Imóveis"
                style={{
                  width: "100%",
                  aspectRatio: "4/5",
                  objectFit: "cover",
                  objectPosition: "top",
                  borderRadius: 12,
                  display: "block",
                  position: "relative",
                  zIndex: 1,
                }}
              />
              {/* CRECI badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: 24,
                  right: -12,
                  zIndex: 2,
                  background: "#B8935A",
                  color: "#fff",
                  borderRadius: 8,
                  padding: "10px 16px",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    opacity: 0.85,
                    marginBottom: 2,
                  }}
                >
                  Registro
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 14,
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                  }}
                >
                  CRECI-MG 47.218
                </div>
              </div>
            </div>

            {/* Stats grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
                marginTop: 40,
              }}
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(184,147,90,0.2)",
                    borderRadius: 10,
                    padding: "18px 20px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 24,
                      fontWeight: 700,
                      color: "#B8935A",
                      lineHeight: 1,
                      marginBottom: 6,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 11,
                      fontWeight: 500,
                      color: "rgba(255,255,255,0.55)",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – Text */}
          <div>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#B8935A",
                display: "block",
                marginBottom: 16,
              }}
            >
              Sobre o Especialista
            </span>

            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(26px, 3.5vw, 42px)",
                fontWeight: 600,
                color: "#FFFFFF",
                lineHeight: 1.25,
                marginBottom: 24,
              }}
            >
              Há mais de 12 anos conectando pessoas aos imóveis certos.
            </h2>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.85,
                marginBottom: 18,
              }}
            >
              Meu trabalho começa antes de você ver qualquer imóvel. Entendo
              profundamente o seu estilo de vida, seus objetivos financeiros e o
              que realmente representa "o imóvel certo" para você — seja um
              apartamento de luxo no coração da cidade ou uma fazenda produtiva
              no cerrado.
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.85,
                marginBottom: 36,
              }}
            >
              Essa curadoria personalizada é o que diferencia meu atendimento.
              Você não perde tempo com opções que não fazem sentido — só chego
              até você quando tenho algo que realmente vale a pena apresentar.
            </p>

            {/* Credentials */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
                marginBottom: 40,
              }}
            >
              {credentials.map((cred) => {
                const Icon = cred.icon;
                return (
                  <div
                    key={cred.title}
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: 10,
                      padding: "16px",
                      transition: "border-color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "rgba(184,147,90,0.4)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "rgba(255,255,255,0.08)";
                    }}
                  >
                    <Icon size={18} color="#B8935A" style={{ marginBottom: 8 }} />
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 12,
                        fontWeight: 700,
                        color: "#FFFFFF",
                        marginBottom: 4,
                      }}
                    >
                      {cred.title}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 11,
                        color: "rgba(255,255,255,0.5)",
                        lineHeight: 1.5,
                      }}
                    >
                      {cred.desc}
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href="https://wa.me/5534999999999?text=Ol%C3%A1%20Ricardo%2C%20gostaria%20de%20falar%20diretamente%20com%20voc%C3%AA%20sobre%20im%C3%B3veis."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "#25D366",
                color: "#fff",
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                fontWeight: 700,
                padding: "15px 32px",
                borderRadius: 8,
                textDecoration: "none",
                transition: "background 0.2s, transform 0.2s",
                boxShadow: "0 6px 24px rgba(37,211,102,0.3)",
                letterSpacing: "0.02em",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#1DB954";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#25D366";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <WhatsAppIcon />
              Fale Diretamente Comigo
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .grid-cols-about {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
