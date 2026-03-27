// lib/sanity.ts
import { createClient } from '@sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url'
import type { SanityImage } from '../types/property'

export const client = createClient({
  projectId: 'bfw6ro7b',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})

const builder = createImageUrlBuilder(client)

export function urlFor(source: SanityImage) {
  return builder.image(source)
}