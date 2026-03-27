// lib/format.ts

export function formatPrice(value?: number): string {
  if (!value) return ''
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
}

export function formatArea(value?: number, unit?: string): string {
  if (!value) return ''
  if (unit === 'ha') return `${value.toLocaleString('pt-BR')} ha`
  if (unit === 'alq') return `${value.toLocaleString('pt-BR')} alqueires`
  return `${value.toLocaleString('pt-BR')} m²`
}

export function buildWhatsAppLink(
  phone: string,
  message?: string,
): string {
  const encoded = message ? encodeURIComponent(message) : ''
  return `https://wa.me/${phone}?text=${encoded}`
}

export function getDisplayPrice(property: {
  salePrice?: number
  rentPrice?: number
  priceOnRequest?: boolean
  transactionType?: string
}): { text: string; muted: boolean } {
  if (property.priceOnRequest) {
    return { text: 'Valor sob consulta', muted: true }
  }

  if (property.transactionType === 'rent' && property.rentPrice) {
    return { text: `${formatPrice(property.rentPrice)}/mês`, muted: false }
  }

  if (property.salePrice) {
    return { text: formatPrice(property.salePrice), muted: false }
  }

  if (property.rentPrice) {
    return { text: `${formatPrice(property.rentPrice)}/mês`, muted: false }
  }

  return { text: 'Valor sob consulta', muted: true }
}

const CHAR_GROUP_LABELS: Record<string, string> = {
  kitchen: 'Cozinha',
  bathroom: 'Banheiro',
  outdoor: 'Área Externa',
  leisure: 'Lazer',
  security: 'Segurança',
  infrastructure: 'Infraestrutura',
  other: 'Outros',
}

export function getCharGroupLabel(group: string): string {
  return CHAR_GROUP_LABELS[group] || group
}