// lib/queries.ts

// Cards do portfólio (home — apenas destaques ou todos ativos)
export const portfolioQuery = `
  *[_type == "property" && active == true && featured == true] | order(order asc) {
    _id,
    title,
    slug,
    code,
    tag,
    "categoryColor": category->color,
    "typeName": propertyType->title,
    mainImage,
    "galleryCount": count(gallery),
    salePrice,
    rentPrice,
    priceOnRequest,
    condoFee,
    iptu,
    locationLabel,
    neighborhood,
    city,
    state,
    bedrooms,
    suites,
    bathrooms,
    parkingSpots,
    totalArea,
    privateArea,
    landArea,
    landAreaUnit,
    displayAttributes,
    whatsappMessage,
    featured,
    transactionType,
  }
`

// Listagem completa com filtros
export const allPropertiesQuery = `
  *[_type == "property" && active == true] | order(order asc) {
    _id,
    title,
    slug,
    code,
    tag,
    "categoryColor": category->color,
    "categorySlug": category->slug.current,
    "typeName": propertyType->title,
    "typeRef": propertyType->_id,
    mainImage,
    "galleryCount": count(gallery),
    salePrice,
    rentPrice,
    priceOnRequest,
    condoFee,
    iptu,
    locationLabel,
    neighborhood,
    city,
    state,
    bedrooms,
    suites,
    bathrooms,
    parkingSpots,
    totalArea,
    privateArea,
    landArea,
    landAreaUnit,
    displayAttributes,
    whatsappMessage,
    featured,
    transactionType,
  }
`

// Página de detalhes do imóvel
export const propertyDetailQuery = `
  *[_type == "property" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    code,
    tag,
    "categoryTitle": category->title,
    "categoryColor": category->color,
    "typeName": propertyType->title,
    mainImage,
    gallery[] {
      ...,
      "asset": asset-> { "_ref": _id, "url": url }
    },
    videos,
    "galleryCount": count(gallery),
    salePrice,
    rentPrice,
    priceOnRequest,
    condoFee,
    iptu,
    iptuPeriod,
    locationLabel,
    neighborhood,
    city,
    state,
    region,
    address,
    showExactAddress,
    geopoint,
    bedrooms,
    suites,
    bathrooms,
    parkingSpots,
    totalArea,
    privateArea,
    landArea,
    landAreaUnit,
    floors,
    yearBuilt,
    shortDescription,
    fullDescription,
    "characteristics": characteristics[]->{ title, group },
    displayAttributes,
    whatsappMessage,
    transactionType,
  }
`

// Categorias para filtros
export const categoriesQuery = `
  *[_type == "propertyCategory"] | order(order asc) {
    _id,
    title,
    slug,
    color,
  }
`

// Tipos para filtros
export const typesQuery = `
  *[_type == "propertyType"] {
    _id,
    title,
    "categoryRef": category->_id,
  }
`

// Configurações do site
export const siteSettingsQuery = `
  *[_type == "siteSettings"][0] {
    brokerName,
    creci,
    whatsappNumber,
    email,
    defaultWhatsappMessage,
    "brokerPhotoUrl": brokerPhoto.asset->url,
    companyName,
    companyAddress,
  }
`