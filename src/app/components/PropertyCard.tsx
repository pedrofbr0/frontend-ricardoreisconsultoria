// components/PropertyCard.tsx
import { Link } from 'react-router-dom'
import { Bed, Car, Trees, MapPin, Maximize2, ShowerHead, Image } from 'lucide-react'
import { urlFor } from '../lib/sanity'
import { getDisplayPrice, buildWhatsAppLink } from '../lib/format'
import type { PropertyCard as PropertyCardType } from '../types/property'

const WhatsAppIcon = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

function AttrIcon({ type }: { type: string }) {
  const cls = "text-[#162940] shrink-0"
  const s = 14
  if (type === 'bed') return <Bed size={s} className={cls} />
  if (type === 'car') return <Car size={s} className={cls} />
  if (type === 'trees') return <Trees size={s} className={cls} />
  if (type === 'bath') return <ShowerHead size={s} className={cls} />
  return <Maximize2 size={s} className={cls} />
}

interface Props {
  property: PropertyCardType
  whatsappNumber?: string
}

export function PropertyCard({ property, whatsappNumber = '5534996896161' }: Props) {
  const price = getDisplayPrice(property)
  const tagBg = property.categoryColor || '#162940'

  const waLink = buildWhatsAppLink(
    whatsappNumber,
    property.whatsappMessage || `Olá, tenho interesse no imóvel "${property.title}". Pode me dar mais informações?`,
  )

  const imageUrl = property.mainImage
    ? urlFor(property.mainImage).width(800).height(500).quality(80).url()
    : '/placeholder.jpg'

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(22,41,64,0.10)] flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(22,41,64,0.18)]">
      {/* Image — click goes to detail page */}
      <Link
        to={`/imoveis/${property.slug.current}`}
        className="relative block overflow-hidden"
        style={{ paddingTop: '62%' }}
      >
        <img
          src={imageUrl}
          alt={property.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Tag */}
        {property.tag && (
          <span
            className="absolute top-3.5 left-3.5 text-white text-[10px] font-semibold tracking-[0.18em] uppercase px-2.5 py-1 rounded"
            style={{ background: tagBg }}
          >
            {property.tag}
          </span>
        )}

        {/* Gallery count badge */}
        {property.galleryCount > 0 && (
          <span className="absolute bottom-3 right-3 bg-black/60 text-white text-xs font-medium px-2 py-1 rounded flex items-center gap-1">
            <Image size={12} />
            +{property.galleryCount}
          </span>
        )}
      </Link>

      {/* Content — click goes to detail page */}
      <Link
        to={`/imoveis/${property.slug.current}`}
        className="px-5 pt-5 pb-0 flex-1 no-underline block"
      >
        {/* Location */}
        <div className="flex items-center gap-1 mb-2">
          <MapPin size={12} className="text-[#B8935A] shrink-0" />
          <span className="font-['Inter'] text-[11px] text-[#B8935A] font-medium tracking-wide">
            {property.locationLabel || `${property.city}, ${property.state}`}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-['Playfair_Display'] text-[17px] font-semibold text-[#162940] leading-tight mb-2.5">
          {property.title}
        </h3>

        {/* Price */}
        <div
          className={`font-['Inter'] text-lg font-bold tracking-tight mb-4 ${
            price.muted ? 'text-[#B8935A]' : 'text-[#162940]'
          }`}
        >
          {price.text}
        </div>

        {/* Condo & IPTU (if available) */}
        {(property.condoFee || property.iptu) && (
          <div className="flex gap-3 mb-3 text-[11px] text-[#5A6478] font-['Inter']">
            {property.condoFee ? (
              <span>Cond: R$ {property.condoFee.toLocaleString('pt-BR')}</span>
            ) : null}
            {property.iptu !== undefined && property.iptu !== null ? (
              <span>IPTU: R$ {property.iptu.toLocaleString('pt-BR')}</span>
            ) : null}
          </div>
        )}

        {/* Attributes */}
        <div className="flex gap-4 pb-4 border-b border-[#EDE8E0]">
          {property.displayAttributes?.map((attr) => (
            <div key={attr.label} className="flex items-center gap-1.5">
              <AttrIcon type={attr.icon} />
              <span className="font-['Inter'] text-xs text-[#5A6478] font-medium">
                {attr.label}
              </span>
            </div>
          ))}
        </div>
      </Link>

      {/* WhatsApp CTA */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-['Inter'] text-[13px] font-bold py-3.5 no-underline transition-colors tracking-wide hover:bg-[#1DB954] rounded-b-xl"
      >
        <WhatsAppIcon size={15} />
        Saber mais no WhatsApp
      </a>
    </div>
  )
}