// components/Portfolio.tsx
import { Link } from 'react-router-dom'
import { PropertyCard } from './PropertyCard'
import { usePortfolioProperties, useSiteSettings } from '../lib/hooks'

const WhatsAppIcon = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

export function Portfolio() {
  const { properties, loading } = usePortfolioProperties()
  const settings = useSiteSettings()
  const waNumber = settings?.whatsappNumber || '5534996896161'

  return (
    <section id="portfolio" className="bg-[#F8F5F0] py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="font-['Inter'] text-[11px] font-semibold tracking-[0.28em] uppercase text-[#B8935A] block mb-3.5">
            Portfólio Selecionado
          </span>
          <h2 className="font-['Playfair_Display'] text-[clamp(28px,4vw,44px)] font-semibold text-[#162940] leading-tight mb-4">
            Últimas Oportunidades
          </h2>
          <p className="font-['Inter'] text-base text-[#5A6478] max-w-[520px] mx-auto leading-relaxed">
            Cada imóvel desta seleção passa por uma curadoria rigorosa —
            apresentamos apenas o que verdadeiramente vale o seu tempo.
          </p>
          <div className="w-[50px] h-0.5 bg-[#B8935A] mx-auto mt-6" />
        </div>

        {/* Loading */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden animate-pulse">
                <div className="bg-gray-200 h-48" />
                <div className="p-5 space-y-3">
                  <div className="bg-gray-200 h-3 w-20 rounded" />
                  <div className="bg-gray-200 h-5 w-40 rounded" />
                  <div className="bg-gray-200 h-5 w-28 rounded" />
                  <div className="bg-gray-200 h-3 w-full rounded" />
                </div>
                <div className="bg-gray-200 h-12" />
              </div>
            ))}
          </div>
        )}

        {/* Grid */}
        {!loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {properties.map((property) => (
              <PropertyCard key={property._id} property={property} whatsappNumber={waNumber} />
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="font-['Inter'] text-[15px] text-[#5A6478] mb-5">
            Não encontrou o que procura? Temos um portfólio exclusivo aguardando você.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              to="/imoveis"
              className="inline-flex items-center gap-2 bg-[#162940] text-white font-['Inter'] text-sm font-bold py-3.5 px-8 rounded-lg no-underline transition-all hover:bg-[#1e3a5c] hover:-translate-y-0.5 shadow-lg"
            >
              Ver Todos os Imóveis
            </Link>
            <a
              href={`https://wa.me/${waNumber}?text=${encodeURIComponent(settings?.defaultWhatsappMessage || 'Olá Ricardo, gostaria de conhecer todo o portfólio disponível.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white font-['Inter'] text-sm font-bold py-3.5 px-8 rounded-lg no-underline transition-all hover:bg-[#1DB954] hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(37,211,102,0.3)]"
            >
              <WhatsAppIcon />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}