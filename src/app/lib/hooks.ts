// lib/hooks.ts
import { useState, useEffect } from 'react'
import { client } from './sanity'
import {
  portfolioQuery,
  allPropertiesQuery,
  propertyDetailQuery,
  categoriesQuery,
  typesQuery,
  siteSettingsQuery,
} from './queries'
import type {
  PropertyCard,
  PropertyFull,
  SiteSettings,
  PropertyCategory,
  PropertyType,
} from '../types/property'

export function usePortfolioProperties() {
  const [properties, setProperties] = useState<PropertyCard[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    client
      .fetch<PropertyCard[]>(portfolioQuery)
      .then(setProperties)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  return { properties, loading }
}

export function useAllProperties() {
  const [properties, setProperties] = useState<(PropertyCard & { categorySlug?: string; typeRef?: string })[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    client
      .fetch(allPropertiesQuery)
      .then(setProperties)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  return { properties, loading }
}

export function usePropertyDetail(slug: string) {
  const [property, setProperty] = useState<PropertyFull | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!slug) return
    setLoading(true)
    client
      .fetch<PropertyFull>(propertyDetailQuery, { slug })
      .then(setProperty)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [slug])

  return { property, loading }
}

export function useCategories() {
  const [categories, setCategories] = useState<PropertyCategory[]>([])

  useEffect(() => {
    client.fetch<PropertyCategory[]>(categoriesQuery).then(setCategories).catch(console.error)
  }, [])

  return categories
}

export function usePropertyTypes() {
  const [types, setTypes] = useState<PropertyType[]>([])

  useEffect(() => {
    client.fetch<PropertyType[]>(typesQuery).then(setTypes).catch(console.error)
  }, [])

  return types
}

export function useSiteSettings() {
  const [settings, setSettings] = useState<SiteSettings | null>(null)

  useEffect(() => {
    client.fetch<SiteSettings>(siteSettingsQuery).then(setSettings).catch(console.error)
  }, [])

  return settings
}