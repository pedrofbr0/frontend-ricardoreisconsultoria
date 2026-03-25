import { Bed, Car, Trees, MapPin, Maximize2 } from "lucide-react";

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

const properties = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1724688078741-6d89e587e809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBoaWdoJTIwZW5kJTIwaG91c2UlMjBhcmNoaXRlY3R1cmUlMjBwb29sfGVufDF8fHx8MTc3NDQ1ODIwNXww&ixlib=rb-4.1.0&q=80&w=800",
    tag: "Alto Padrão · Uberlândia",
    tagType: "urban",
    title: "Residência Contemporânea com Piscina",
    price: "R$ 2.800.000",
    location: "Uberlândia, MG",
    attrs: [
      { icon: "bed", label: "5 Suítes" },
      { icon: "car", label: "4 Vagas" },
      { icon: "area", label: "480 m²" },
    ],
    waMessage: "Ol%C3%A1%20Ricardo%2C%20tenho%20interesse%20na%20Resid%C3%AAncia%20Contempor%C3%A2nea%20em%20Uberl%C3%A2ndia.%20Pode%20me%20dar%20mais%20informa%C3%A7%C3%B5es%3F",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1769056644224-2e235d695354?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXR0bGUlMjByYW5jaCUyMGZhcm0lMjBhZXJpYWwlMjB2aWV3fGVufDF8fHx8MTc3NDQ1ODIwNXww&ixlib=rb-4.1.0&q=80&w=800",
    tag: "Fazenda Produtiva",
    tagType: "farm",
    title: "Fazenda de Engorda · Triângulo Mineiro",
    price: "Valor sob consulta",
    location: "Prata, MG",
    attrs: [
      { icon: "trees", label: "2.400 ha" },
      { icon: "bed", label: "Casa sede" },
      { icon: "area", label: "Pasto formado" },
    ],
    waMessage: "Ol%C3%A1%20Ricardo%2C%20tenho%20interesse%20na%20Fazenda%20de%20Engorda%20no%20Tri%C3%A2ngulo%20Mineiro.%20Pode%20me%20dar%20mais%20informa%C3%A7%C3%B5es%3F",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1715985160053-d339e8b6eb94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBjb25kbyUyMGludGVyaW9yJTIwZGVzaWduJTIwcHJlbWl1bXxlbnwxfHx8fDE3NzQ0NTgyMTB8MA&ixlib=rb-4.1.0&q=80&w=800",
    tag: "Alto Padrão · Goiânia",
    tagType: "urban",
    title: "Cobertura Duplex · Setor Marista",
    price: "R$ 3.500.000",
    location: "Goiânia, GO",
    attrs: [
      { icon: "bed", label: "4 Suítes" },
      { icon: "car", label: "3 Vagas" },
      { icon: "area", label: "320 m²" },
    ],
    waMessage: "Ol%C3%A1%20Ricardo%2C%20tenho%20interesse%20na%20Cobertura%20Duplex%20em%20Goi%C3%A2nia.%20Pode%20me%20dar%20mais%20informa%C3%A7%C3%B5es%3F",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1759759266688-5004fcd9d014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBydXJhbCUyMGVzdGF0ZSUyMGNvdW50cnklMjBob3VzZSUyMG5hdHVyZXxlbnwxfHx8fDE3NzQ0NTgyMTB8MA&ixlib=rb-4.1.0&q=80&w=800",
    tag: "Sítio de Lazer",
    tagType: "farm",
    title: "Sítio Premium com Lago Particular",
    price: "R$ 1.250.000",
    location: "Araxá, MG",
    attrs: [
      { icon: "trees", label: "18 ha" },
      { icon: "bed", label: "3 Quartos" },
      { icon: "area", label: "Lago natural" },
    ],
    waMessage: "Ol%C3%A1%20Ricardo%2C%20tenho%20interesse%20no%20S%C3%ADtio%20Premium%20em%20Arax%C3%A1.%20Pode%20me%20dar%20mais%20informa%C3%A7%C3%B5es%3F",
  },
];

function AttrIcon({ type }: { type: string }) {
  const color = "#162940";
  const size = 14;
  if (type === "bed") return <Bed size={size} color={color} />;
  if (type === "car") return <Car size={size} color={color} />;
  if (type === "trees") return <Trees size={size} color={color} />;
  return <Maximize2 size={size} color={color} />;
}

function PropertyCard({ property }: { property: (typeof properties)[0] }) {
  const isUrban = property.tagType === "urban";
  const waLink = `https://wa.me/5534999999999?text=${property.waMessage}`;

  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: 12,
        overflow: "hidden",
        boxShadow: "0 4px 24px rgba(22,41,64,0.10)",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.25s, box-shadow 0.25s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px rgba(22,41,64,0.18)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(22,41,64,0.10)";
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", paddingTop: "62%", overflow: "hidden" }}>
        <img
          src={property.image}
          alt={property.title}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s ease",
          }}
          onMouseEnter={(e) =>
            ((e.target as HTMLImageElement).style.transform = "scale(1.06)")
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLImageElement).style.transform = "scale(1)")
          }
        />
        {/* Tag */}
        <div
          style={{
            position: "absolute",
            top: 14,
            left: 14,
            background: isUrban ? "#162940" : "#2d4a22",
            color: "#fff",
            fontFamily: "'Inter', sans-serif",
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            padding: "5px 11px",
            borderRadius: 4,
          }}
        >
          {property.tag}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "20px 22px 0", flex: 1 }}>
        {/* Location */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            marginBottom: 8,
          }}
        >
          <MapPin size={12} color="#B8935A" />
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              color: "#B8935A",
              fontWeight: 500,
              letterSpacing: "0.06em",
            }}
          >
            {property.location}
          </span>
        </div>

        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 17,
            fontWeight: 600,
            color: "#162940",
            lineHeight: 1.3,
            marginBottom: 10,
          }}
        >
          {property.title}
        </h3>

        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 18,
            fontWeight: 700,
            color: property.price === "Valor sob consulta" ? "#B8935A" : "#162940",
            marginBottom: 16,
            letterSpacing: "-0.02em",
          }}
        >
          {property.price}
        </div>

        {/* Attributes */}
        <div
          style={{
            display: "flex",
            gap: 16,
            paddingBottom: 18,
            borderBottom: "1px solid #EDE8E0",
          }}
        >
          {property.attrs.map((attr) => (
            <div
              key={attr.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
              }}
            >
              <AttrIcon type={attr.icon} />
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 12,
                  color: "#5A6478",
                  fontWeight: 500,
                }}
              >
                {attr.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          background: "#25D366",
          color: "#fff",
          fontFamily: "'Inter', sans-serif",
          fontSize: 13,
          fontWeight: 700,
          padding: "14px",
          textDecoration: "none",
          transition: "background 0.2s",
          letterSpacing: "0.04em",
          borderRadius: "0 0 12px 12px",
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLElement).style.background = "#1DB954")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLElement).style.background = "#25D366")
        }
      >
        <WhatsAppIcon size={15} />
        Saber mais no WhatsApp
      </a>
    </div>
  );
}

export function Portfolio() {
  return (
    <section
      id="portfolio"
      style={{
        background: "#F8F5F0",
        padding: "96px 24px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
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
            Portfólio Selecionado
          </span>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 600,
              color: "#162940",
              lineHeight: 1.2,
              marginBottom: 16,
            }}
          >
            Últimas Oportunidades
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 16,
              color: "#5A6478",
              maxWidth: 520,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Cada imóvel desta seleção passa por uma curadoria rigorosa —
            apresentamos apenas o que verdadeiramente vale o seu tempo.
          </p>
          <div
            style={{
              width: 50,
              height: 2,
              background: "#B8935A",
              margin: "24px auto 0",
            }}
          />
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 28,
          }}
        >
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: "center", marginTop: 56 }}>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 15,
              color: "#5A6478",
              marginBottom: 20,
            }}
          >
            Não encontrou o que procura? Temos um portfólio exclusivo aguardando você.
          </p>
          <a
            href="https://wa.me/5534999999999?text=Ol%C3%A1%20Ricardo%2C%20gostaria%20de%20conhecer%20todo%20o%20portf%C3%B3lio%20dispon%C3%ADvel."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#25D366",
              color: "#fff",
              fontFamily: "'Inter', sans-serif",
              fontSize: 14,
              fontWeight: 700,
              padding: "14px 32px",
              borderRadius: 7,
              textDecoration: "none",
              transition: "background 0.2s, transform 0.2s",
              boxShadow: "0 4px 20px rgba(37,211,102,0.3)",
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
            Ver Portfólio Completo
          </a>
        </div>
      </div>
    </section>
  );
}
