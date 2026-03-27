const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export function CTAStrip() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #162940 0%, #1e3a5f 100%)",
        padding: "72px 24px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative circles */}
      <div
        style={{
          position: "absolute",
          top: -60,
          left: "10%",
          width: 220,
          height: 220,
          borderRadius: "50%",
          border: "1px solid rgba(184,147,90,0.12)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -80,
          right: "8%",
          width: 300,
          height: 300,
          borderRadius: "50%",
          border: "1px solid rgba(184,147,90,0.08)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 680,
          margin: "0 auto",
          position: "relative",
        }}
      >
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
          Pronto para começar?
        </span>

        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(26px, 4vw, 46px)",
            fontWeight: 600,
            color: "#FFFFFF",
            lineHeight: 1.25,
            marginBottom: 16,
          }}
        >
          Seu próximo imóvel começa com uma conversa.
        </h2>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 16,
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.7,
            marginBottom: 36,
          }}
        >
          Entre em contato agora — sem compromisso. Conto o que tenho em
          portfólio e entendo o que você busca.
        </p>

        <a
          href="https://wa.me/5534996731968?text=Ol%C3%A1%20Ricardo%2C%20gostaria%20de%20iniciar%20um%20atendimento%20exclusivo."
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            background: "#25D366",
            color: "#fff",
            fontFamily: "'Inter', sans-serif",
            fontSize: 17,
            fontWeight: 700,
            padding: "18px 44px",
            borderRadius: 8,
            textDecoration: "none",
            transition: "background 0.2s, transform 0.2s, box-shadow 0.2s",
            boxShadow: "0 8px 40px rgba(37,211,102,0.4)",
            letterSpacing: "0.02em",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "#1DB954";
            (e.currentTarget as HTMLElement).style.transform =
              "translateY(-2px) scale(1.02)";
            (e.currentTarget as HTMLElement).style.boxShadow =
              "0 14px 48px rgba(37,211,102,0.5)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "#25D366";
            (e.currentTarget as HTMLElement).style.transform =
              "translateY(0) scale(1)";
            (e.currentTarget as HTMLElement).style.boxShadow =
              "0 8px 40px rgba(37,211,102,0.4)";
          }}
        >
          <WhatsAppIcon />
          Iniciar Atendimento Exclusivo
        </a>

        {/* Trust indicators */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 32,
            marginTop: 32,
            flexWrap: "wrap",
          }}
        >
          {[
            "✓  Resposta em até 1h",
            "✓  Sem taxas ocultas",
            "✓  Atendimento personalizado",
          ].map((item) => (
            <span
              key={item}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 12,
                color: "rgba(255,255,255,0.5)",
                fontWeight: 500,
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
