import { Mail, Instagram, Linkedin, Facebook } from "lucide-react";

const WhatsAppIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const socials = [
  {
    icon: Instagram,
    href: "https://instagram.com",
    label: "Instagram",
  },
  {
    icon: Facebook,
    href: "https://facebook.com",
    label: "Facebook",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com",
    label: "LinkedIn",
  },
];

export function Footer() {
  return (
    <footer
      id="footer"
      style={{
        background: "#0D1E30",
        borderTop: "1px solid rgba(184,147,90,0.15)",
        padding: "56px 24px 32px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Top – three columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr",
            gap: 48,
            marginBottom: 48,
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ marginBottom: 16 }}>
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 22,
                  fontWeight: 600,
                  color: "#FFFFFF",
                  letterSpacing: "0.04em",
                  display: "block",
                  lineHeight: 1,
                }}
              >
                Ricardo Reis
              </span>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 9,
                  fontWeight: 400,
                  color: "#B8935A",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  marginTop: 4,
                  display: "block",
                }}
              >
                Consultoria Imobiliária
              </span>
            </div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 13,
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.75,
                maxWidth: 300,
                marginBottom: 20,
              }}
            >
              Especialista em imóveis urbanos de alto padrão e propriedades
              rurais no Triângulo Mineiro e região. Curadoria exclusiva para
              quem busca o melhor.
            </p>
            {/* Social */}
            <div style={{ display: "flex", gap: 12 }}>
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    border: "1px solid rgba(255,255,255,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.6)",
                    textDecoration: "none",
                    transition: "border-color 0.2s, color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "#B8935A";
                    (e.currentTarget as HTMLElement).style.color = "#B8935A";
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(184,147,90,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(255,255,255,0.12)";
                    (e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.6)";
                    (e.currentTarget as HTMLElement).style.background =
                      "transparent";
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#B8935A",
                marginBottom: 20,
              }}
            >
              Navegação
            </h4>
            {["Portfólio", "Sobre", "Contato", "CRECI-MG 24.283"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  style={{
                    display: "block",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 13,
                    color: "rgba(255,255,255,0.55)",
                    textDecoration: "none",
                    marginBottom: 10,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "#fff")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color =
                      "rgba(255,255,255,0.55)")
                  }
                >
                  {item}
                </a>
              )
            )}
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#B8935A",
                marginBottom: 20,
              }}
            >
              Contato Direto
            </h4>

            {/* WhatsApp */}
            <a
              href="https://wa.me/553496731968"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                background: "#25D366",
                color: "#fff",
                fontFamily: "'Inter', sans-serif",
                fontSize: 13,
                fontWeight: 700,
                padding: "11px 18px",
                borderRadius: 7,
                textDecoration: "none",
                marginBottom: 14,
                transition: "background 0.2s",
                width: "fit-content",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "#1DB954")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "#25D366")
              }
            >
              <WhatsAppIcon size={14} />
              (34) 9 9673-1968
            </a>

            {/* Email */}
            <a
              href="mailto:contato@ricardoreis.imob.br"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontFamily: "'Inter', sans-serif",
                fontSize: 13,
                color: "rgba(255,255,255,0.55)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#fff")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color =
                  "rgba(255,255,255,0.55)")
              }
            >
              <Mail size={14} color="currentColor" />
              contato@ricardoreis.imob.br
            </a>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              color: "rgba(255,255,255,0.3)",
            }}
          >
            © 2025 Ricardo Reis Consultoria Imobiliária · CRECI-MG 24.283 ·
            Todos os direitos reservados.
          </span>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              color: "rgba(255,255,255,0.3)",
            }}
          >
            Uberlândia · Triângulo Mineiro · MG
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </footer>
  );
}
