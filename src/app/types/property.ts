// types/property.ts

export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
  room?: string
  hotspot?: {
    x: number
    y: number
  }
}

export interface DisplayAttribute {
  icon: 'bed' | 'car' | 'trees' | 'area' | 'bath'
  label: string
}

export interface Video {
  type: 'url' | 'file'
  url?: string
  file?: { asset: { _ref: string; url?: string } }
  caption?: string
}

export interface PropertyCard {
  _id: string
  title: string
  slug: { current: string }
  code?: string
  tag?: string
  categoryColor?: string
  typeName?: string
  mainImage: SanityImage
  galleryCount: number
  salePrice?: number
  rentPrice?: number
  priceOnRequest?: boolean
  condoFee?: number
  iptu?: number
  locationLabel?: string
  neighborhood?: string
  city: string
  state: string
  bedrooms?: number
  suites?: number
  bathrooms?: number
  parkingSpots?: number
  totalArea?: number
  privateArea?: number
  landArea?: number
  landAreaUnit?: string
  displayAttributes?: DisplayAttribute[]
  whatsappMessage?: string
  featured?: boolean
  transactionType?: string
}

export interface PropertyFull extends PropertyCard {
  categoryTitle?: string
  region?: string
  address?: string
  showExactAddress?: boolean
  geopoint?: { lat: number; lng: number }
  shortDescription?: string
  fullDescription?: any[]
  characteristics?: { title: string; group: string }[]
  gallery?: (SanityImage & { asset: { _ref: string; url: string } })[]
  videos?: Video[]
  yearBuilt?: number
  floors?: number
  iptuPeriod?: string
}

export interface SiteSettings {
  brokerName: string
  creci: string
  whatsappNumber: string
  email: string
  defaultWhatsappMessage: string
  brokerPhotoUrl?: string
  companyName: string
  companyAddress?: string
}

export interface PropertyCategory {
  _id: string
  title: string
  slug: { current: string }
  color?: string
}

export interface PropertyType {
  _id: string
  title: string
  categoryRef: string
}