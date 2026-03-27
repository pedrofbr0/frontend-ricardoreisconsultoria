// pages/PropertyDetailPage.tsx
import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Bed,
  Car,
  Trees,
  Maximize2,
  ShowerHead,
  Building2,
  Calendar,
  Layers,
  X,
  Share,
  Check,
} from 'lucide-react'
import { usePropertyDetail, useSiteSettings } from '../lib/hooks'
import { urlFor } from '../lib/sanity'
import { getDisplayPrice, formatPrice, formatArea, buildWhatsAppLink, getCharGroupLabel } from '../lib/format'

const WhatsAppIcon = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

// ─── Gallery lightbox ────────────────────────────────────
function GalleryLightbox({
  images,
  startIndex,
  onClose,
}: {
  images: { url: string; alt?: string }[]
  startIndex: number
  onClose: () => void
}) {
  const [index, setIndex] = useState(startIndex)
  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1))
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1))

  return (
    <div className="fixed inset-0 bg-black/90 z-[200] flex items-center justify-center" onClick={onClose}>
      <button onClick={(e) => { e.stopPropagation(); onClose() }} className="absolute top-4 right-4 text-white/70 hover:text-white cursor-pointer z-10">
        <X size={28} />
      </button>
      <button onClick={(e) => { e.stopPropagation(); prev() }} className="absolute left-4 text-white/70 hover:text-white cursor-pointer z-10">
        <ChevronLeft size={36} />
      </button>
      <img
        src={images[index].url}
        alt={images[index].alt || ''}
        className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
        onClick={(e) => e.stopPropagation()}
      />
      <button onClick={(e) => { e.stopPropagation(); next() }} className="absolute right-4 text-white/70 hover:text-white cursor-pointer z-10">
        <ChevronRight size={36} />
      </button>
      <div className="absolute bottom-4 text-white/60 text-sm font-['Inter']">
        {index + 1} / {images.length}
      </div>
    </div>
  )
}

// ─── Spec row ────────────────────────────────────────────
function SpecRow({ icon: Icon, label, value }: { icon: any; label: string; value: string | number }) {
  return (
    <div className="flex items-center gap-3 py-3 border-b border-[#EDE8E0] last:border-0">
      <Icon size={18} className="text-[#B8935A] shrink-0" />
      <span className="font-['Inter'] text-sm text-[#5A6478]">{label}</span>
      <span className="font-['Inter'] text-sm text-[#162940] font-semibold ml-auto">{value}</span>
    </div>
  )
}

// ─── Main page ───────────────────────────────────────────
export function PropertyDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const { property, loading } = usePropertyDetail(slug || '')
  const settings = useSiteSettings()
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [shared, setShared] = useState(false)

  const waNumber = settings?.whatsappNumber || '5534996731968'

  // ─── Loading ──────────────────────────────────────────
  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8F5F0] pt-[72px]">
        <div className="max-w-[1200px] mx-auto px-6 py-8">
          <div className="animate-pulse space-y-6">
            <div className="bg-gray-200 h-96 rounded-xl" />
            <div className="bg-gray-200 h-8 w-96 rounded" />
            <div className="bg-gray-200 h-6 w-48 rounded" />
          </div>
        </div>
      </div>
    )
  }

  // ─── Not found ────────────────────────────────────────
  if (!property) {
    return (
      <div className="min-h-screen bg-[#F8F5F0] pt-[72px] flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-['Playfair_Display'] text-2xl font-semibold text-[#162940] mb-4">
            Imóvel não encontrado
          </h2>
          <Link to="/imoveis" className="font-['Inter'] text-sm text-[#B8935A] font-semibold hover:underline">
            Ver todos os imóveis
          </Link>
        </div>
      </div>
    )
  }

  const price = getDisplayPrice(property)
  const waLink = buildWhatsAppLink(
    waNumber,
    property.whatsappMessage || `Olá, tenho interesse no imóvel "${property.title}" (Cod: ${property.code || 'N/A'}). Pode me dar mais informações?`,
  )

  // All images
  const allImages: { url: string; alt?: string }[] = []
  if (property.mainImage) {
    allImages.push({
      url: urlFor(property.mainImage).width(1400).quality(85).url(),
      alt: (property.mainImage as any).alt || property.title,
    })
  }
  if (property.gallery) {
    property.gallery.forEach((img) => {
      if (img.asset?.url) {
        allImages.push({ url: img.asset.url, alt: img.alt || '' })
      }
    })
  }

  // Group characteristics
  const charGroups: Record<string, string[]> = {}
  property.characteristics?.forEach((c) => {
    const group = c.group || 'other'
    if (!charGroups[group]) charGroups[group] = []
    charGroups[group].push(c.title)
  })

  // Location
  const locationParts = []
  if (property.showExactAddress && property.address) locationParts.push(property.address)
  if (property.neighborhood) locationParts.push(property.neighborhood)
  locationParts.push(`${property.city} - ${property.state}`)
  const locationText = locationParts.join(', ')


  async function handleShare() {
    const url = window.location.href
    const isTouchDevice = navigator.maxTouchPoints > 0
    if (isTouchDevice && navigator.share) {
      try {
        await navigator.share({ title: property.title, url })
      } catch {
        // user cancelled — do nothing
      }
    } else {
      await navigator.clipboard.writeText(url)
      setShared(true)
      setTimeout(() => setShared(false), 2500)
    }
  }

  return (
    <div className="min-h-screen bg-[#F8F5F0] pt-[72px]">
      {/* ─── Breadcrumb ──────────────────────────────── */}
      <div className="bg-[#162940]/5 border-b border-[#EDE8E0]">
        <div className="max-w-[1200px] mx-auto px-6 py-3 flex items-center gap-2 text-sm font-['Inter']">
          <Link to="/" className="text-[#5A6478] hover:text-[#162940] no-underline transition-colors">
            Início
          </Link>
          <ChevronRight size={14} className="text-[#B8935A]" />
          <Link to="/imoveis" className="text-[#5A6478] hover:text-[#162940] no-underline transition-colors">
            Imóveis
          </Link>
          <ChevronRight size={14} className="text-[#B8935A]" />
          <span className="text-[#162940] font-medium truncate max-w-[300px]">{property.title}</span>
        </div>
      </div>

      {/* ─── Gallery ─────────────────────────────────── */}
      <div className="max-w-[1200px] mx-auto px-6 pt-8">
        <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[420px] rounded-xl overflow-hidden max-lg:grid-cols-1 max-lg:grid-rows-1 max-lg:h-[280px]">
          {/* Main image */}
          <div
            className="col-span-2 row-span-2 max-lg:col-span-1 max-lg:row-span-1 relative cursor-pointer group"
            onClick={() => setLightboxIndex(0)}
          >
            {allImages[0] && (
              <img
                src={allImages[0].url}
                alt={allImages[0].alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
            )}
            {property.tag && (
              <span
                className="absolute top-4 left-4 text-white text-[10px] font-semibold tracking-[0.18em] uppercase px-3 py-1.5 rounded"
                style={{ background: property.categoryColor || '#162940' }}
              >
                {property.tag}
              </span>
            )}
            {/* Mobile: gallery count */}
            {allImages.length > 1 && (
              <span className="absolute bottom-3 right-3 bg-black/60 text-white text-xs font-medium px-2.5 py-1 rounded lg:hidden">
                {allImages.length} fotos
              </span>
            )}
          </div>

          {/* Secondary images (desktop only) */}
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="relative cursor-pointer group overflow-hidden max-lg:hidden"
              onClick={() => allImages[i] && setLightboxIndex(i)}
            >
              {allImages[i] ? (
                <img
                  src={allImages[i].url}
                  alt={allImages[i].alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full bg-[#EDE8E0] flex items-center justify-center">
                  <MapPin size={24} className="text-[#B8935A]/30" />
                </div>
              )}
              {i === 4 && allImages.length > 5 && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="text-white font-['Inter'] text-sm font-semibold">
                    +{allImages.length - 5} fotos
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ─── Content ─────────────────────────────────── */}
      <div className="max-w-[1200px] mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ─── Left: Details ───────────────────────── */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title & location */}
            <div>
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                {property.typeName && (
                  <span className="font-['Inter'] text-xs font-semibold text-[#B8935A] bg-[#B8935A]/10 px-2.5 py-1 rounded">
                    {property.typeName}
                  </span>
                )}
                {property.transactionType && (
                  <span className="font-['Inter'] text-xs font-medium text-[#5A6478] bg-[#EDE8E0] px-2.5 py-1 rounded">
                    {property.transactionType === 'sale' ? 'Venda' : property.transactionType === 'rent' ? 'Aluguel' : 'Venda e Aluguel'}
                  </span>
                )}
                {property.code && (
                  <span className="font-['Inter'] text-xs text-[#5A6478]">
                    Cod: {property.code}
                  </span>
                )}
              </div>

              <h1 className="font-['Playfair_Display'] text-[clamp(24px,3.5vw,36px)] font-semibold text-[#162940] leading-tight mb-3">
                {property.title}
              </h1>

              <div className="flex items-center gap-1.5">
                <MapPin size={14} className="text-[#B8935A] shrink-0" />
                <span className="font-['Inter'] text-sm text-[#5A6478]">{locationText}</span>
              </div>
            </div>

            {/* Description */}
            {property.shortDescription && (
              <div>
                <h2 className="font-['Playfair_Display'] text-lg font-semibold text-[#162940] mb-3">Detalhes</h2>
                <p className="font-['Inter'] text-sm text-[#5A6478] leading-relaxed">{property.shortDescription}</p>
              </div>
            )}

            {property.fullDescription && property.fullDescription.length > 0 && (
              <div>
                {!property.shortDescription && (
                  <h2 className="font-['Playfair_Display'] text-lg font-semibold text-[#162940] mb-3">Detalhes</h2>
                )}
                <div className="font-['Inter'] text-sm text-[#5A6478] leading-relaxed space-y-3">
                  {property.fullDescription.map((block: any, i: number) => {
                    if (block._type === 'block') {
                      const text = block.children?.map((c: any) => c.text).join('') || ''
                      if (!text) return null
                      return <p key={i}>{text}</p>
                    }
                    return null
                  })}
                </div>
              </div>
            )}

            {/* Specifications */}
            <div>
              <h2 className="font-['Playfair_Display'] text-lg font-semibold text-[#162940] mb-4">Especificações</h2>
              <div className="bg-white rounded-xl p-5 shadow-sm border border-[#EDE8E0]">
                {property.totalArea && <SpecRow icon={Maximize2} label="Área Total" value={formatArea(property.totalArea)} />}
                {property.privateArea && <SpecRow icon={Maximize2} label="Área Privativa" value={formatArea(property.privateArea)} />}
                {property.landArea && <SpecRow icon={Trees} label="Área do Terreno" value={formatArea(property.landArea, property.landAreaUnit)} />}
                {(property.bedrooms || property.suites) && (
                  <SpecRow
                    icon={Bed}
                    label="Dormitórios"
                    value={
                      property.suites
                        ? `${(property.bedrooms || 0) + property.suites} (${property.suites} suíte${property.suites > 1 ? 's' : ''})`
                        : String(property.bedrooms)
                    }
                  />
                )}
                {property.bathrooms && <SpecRow icon={ShowerHead} label="Banheiros" value={property.bathrooms} />}
                {property.parkingSpots && <SpecRow icon={Car} label="Vagas de Garagem" value={property.parkingSpots} />}
                {property.floors && <SpecRow icon={Layers} label="Andares" value={property.floors} />}
                {property.yearBuilt && <SpecRow icon={Calendar} label="Ano de Construção" value={property.yearBuilt} />}
              </div>
            </div>

            {/* Characteristics */}
            {Object.keys(charGroups).length > 0 && (
              <div>
                <h2 className="font-['Playfair_Display'] text-lg font-semibold text-[#162940] mb-4">Características</h2>
                <div className="bg-white rounded-xl p-5 shadow-sm border border-[#EDE8E0] space-y-5">
                  {Object.entries(charGroups).map(([group, items]) => (
                    <div key={group}>
                      <h4 className="font-['Inter'] text-xs font-semibold text-[#B8935A] uppercase tracking-wider mb-2.5">
                        {getCharGroupLabel(group)}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {items.map((item) => (
                          <span key={item} className="font-['Inter'] text-xs text-[#162940] bg-[#F8F5F0] border border-[#EDE8E0] px-3 py-1.5 rounded-full">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Location */}
            <div>
              <h2 className="font-['Playfair_Display'] text-lg font-semibold text-[#162940] mb-4">Localização</h2>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#EDE8E0]">
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin size={16} className="text-[#B8935A]" />
                    <span className="font-['Inter'] text-sm font-semibold text-[#162940]">{locationText}</span>
                  </div>
                  {property.region && (
                    <span className="font-['Inter'] text-xs text-[#5A6478] ml-6">Região: {property.region}</span>
                  )}
                </div>
                {property.geopoint?.lat && property.geopoint?.lng && (
                  <iframe
                    title="Localização do imóvel"
                    src={`https://www.openstreetmap.org/export/embed.html?bbox=${property.geopoint.lng - 0.01},${property.geopoint.lat - 0.01},${property.geopoint.lng + 0.01},${property.geopoint.lat + 0.01}&layer=mapnik&marker=${property.geopoint.lat},${property.geopoint.lng}`}
                    className="w-full h-64 border-t border-[#EDE8E0]"
                    loading="lazy"
                  />
                )}
              </div>
            </div>
          </div>

          {/* ─── Right: Sidebar ──────────────────────── */}
          <div className="lg:col-span-1">
            <div className="sticky top-[88px] space-y-5">
              {/* Price card */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-[#EDE8E0]">
                <div className={`font-['Inter'] text-2xl font-bold mb-1 ${price.muted ? 'text-[#B8935A]' : 'text-[#162940]'}`}>
                  {price.text}
                </div>

                {(property.condoFee || (property.iptu !== undefined && property.iptu !== null)) && (
                  <div className="flex gap-4 mt-3 pt-3 border-t border-[#EDE8E0]">
                    {property.condoFee ? (
                      <div>
                        <span className="font-['Inter'] text-[10px] text-[#5A6478] uppercase tracking-wider block">Condomínio</span>
                        <span className="font-['Inter'] text-sm font-semibold text-[#162940]">{formatPrice(property.condoFee)}</span>
                      </div>
                    ) : null}
                    {property.iptu ? (
                      <div>
                        <span className="font-['Inter'] text-[10px] text-[#5A6478] uppercase tracking-wider block">
                          IPTU {property.iptuPeriod === 'yearly' ? '(anual)' : ''}
                        </span>
                        <span className="font-['Inter'] text-sm font-semibold text-[#162940]">{formatPrice(property.iptu)}</span>
                      </div>
                    ) : null}
                  </div>
                )}

                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex items-center justify-center gap-2 bg-[#25D366] text-white font-['Inter'] text-sm font-bold py-3.5 rounded-lg no-underline transition-all hover:bg-[#1DB954] hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(37,211,102,0.3)] w-full"
                >
                  <WhatsAppIcon size={18} />
                  Tenho interesse
                </a>

                {settings?.whatsappNumber && (
                  <a
                    href={`tel:+${settings.whatsappNumber}`}
                    className="mt-3 flex items-center justify-center gap-2 bg-[#162940] text-white font-['Inter'] text-sm font-bold py-3.5 rounded-lg no-underline transition-all hover:bg-[#1e3a5c] w-full"
                  >
                    Ligar agora
                  </a>
                )}

                <button
                  onClick={handleShare}
                  className="mt-3 flex items-center justify-center gap-2 w-full border border-[#EDE8E0] bg-white text-[#162940] font-['Inter'] text-sm font-semibold py-3.5 rounded-lg transition-all hover:border-[#B8935A] hover:text-[#B8935A] cursor-pointer"
                >
                  {shared ? (
                    <>
                      <Check size={16} className="text-[#B8935A]" />
                      Link copiado!
                    </>
                  ) : (
                    <>
                      <Share size={16} />
                      Compartilhar imóvel
                    </>
                  )}
                </button>
              </div>

              {/* Broker card */}
              {settings && (
                <div className="bg-white rounded-xl p-5 shadow-sm border border-[#EDE8E0]">
                  <div className="flex items-center gap-3 mb-3">
                    {settings.brokerPhotoUrl ? (
                      <img src={settings.brokerPhotoUrl} alt={settings.brokerName} className="w-12 h-12 rounded-full object-cover" />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-[#162940] flex items-center justify-center text-white font-['Inter'] font-bold text-lg">
                        {settings.brokerName?.[0]}
                      </div>
                    )}
                    <div>
                      <div className="font-['Inter'] text-sm font-semibold text-[#162940]">{settings.brokerName}</div>
                      <div className="font-['Inter'] text-xs text-[#5A6478]">Corretor - CRECI {settings.creci}</div>
                    </div>
                  </div>
                  {settings.email && (
                    <a href={`mailto:${settings.email}`} className="font-['Inter'] text-xs text-[#B8935A] hover:underline block">
                      {settings.email}
                    </a>
                  )}
                  {settings.companyName && (
                    <div className="mt-3 pt-3 border-t border-[#EDE8E0]">
                      <div className="font-['Inter'] text-xs text-[#5A6478]">
                        <Building2 size={12} className="inline mr-1" />
                        {settings.companyName}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ─── Lightbox ────────────────────────────────── */}
      {lightboxIndex !== null && (
        <GalleryLightbox images={allImages} startIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} />
      )}
    </div>
  )
}