// pages/PropertiesPage.tsx
import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Search, SlidersHorizontal, X, ChevronLeft, MapPin } from 'lucide-react'
import { PropertyCard } from '../components/PropertyCard'
import { useAllProperties, useCategories, usePropertyTypes, useSiteSettings } from '../lib/hooks'

export function PropertiesPage() {
  const { properties, loading } = useAllProperties()
  const categories = useCategories()
  const types = usePropertyTypes()
  const settings = useSiteSettings()
  const waNumber = settings?.whatsappNumber || '5534996896161'

  // ─── Filter state ────────────────────────────────────
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [selectedType, setSelectedType] = useState<string>('')
  const [selectedCity, setSelectedCity] = useState<string>('')
  const [selectedTransaction, setSelectedTransaction] = useState<string>('')
  const [priceMin, setPriceMin] = useState<string>('')
  const [priceMax, setPriceMax] = useState<string>('')
  const [bedroomsMin, setBedroomsMin] = useState<string>('')
  const [showFilters, setShowFilters] = useState(false)

  // ─── Derived data for filter options ─────────────────
  const cities = useMemo(() => {
    const set = new Set(properties.map((p) => p.city).filter(Boolean))
    return Array.from(set).sort()
  }, [properties])

  const filteredTypes = useMemo(() => {
    if (!selectedCategory) return types
    const cat = categories.find((c) => c.slug.current === selectedCategory)
    if (!cat) return types
    return types.filter((t) => t.categoryRef === cat._id)
  }, [types, categories, selectedCategory])

  // ─── Apply filters ───────────────────────────────────
  const filtered = useMemo(() => {
    return properties.filter((p) => {
      // Text search
      if (search) {
        const q = search.toLowerCase()
        const haystack = [p.title, p.city, p.neighborhood, p.locationLabel, p.code, p.typeName]
          .filter(Boolean)
          .join(' ')
          .toLowerCase()
        if (!haystack.includes(q)) return false
      }

      // Category
      if (selectedCategory && (p as any).categorySlug !== selectedCategory) return false

      // Type
      if (selectedType && (p as any).typeRef !== selectedType) return false

      // City
      if (selectedCity && p.city !== selectedCity) return false

      // Transaction type
      if (selectedTransaction && p.transactionType !== selectedTransaction) return false

      // Price range
      const price = p.salePrice || p.rentPrice || 0
      if (priceMin && price < Number(priceMin)) return false
      if (priceMax && price > Number(priceMax)) return false

      // Bedrooms
      if (bedroomsMin) {
        const beds = (p.bedrooms || 0) + (p.suites || 0)
        if (beds < Number(bedroomsMin)) return false
      }

      return true
    })
  }, [properties, search, selectedCategory, selectedType, selectedCity, selectedTransaction, priceMin, priceMax, bedroomsMin])

  const hasActiveFilters =
    search || selectedCategory || selectedType || selectedCity || selectedTransaction || priceMin || priceMax || bedroomsMin

  function clearFilters() {
    setSearch('')
    setSelectedCategory('')
    setSelectedType('')
    setSelectedCity('')
    setSelectedTransaction('')
    setPriceMin('')
    setPriceMax('')
    setBedroomsMin('')
  }

  // ─── Common select style ─────────────────────────────
  const selectCls =
    "w-full bg-white border border-[#EDE8E0] rounded-lg px-3 py-2.5 text-sm text-[#162940] font-['Inter'] focus:outline-none focus:border-[#B8935A] focus:ring-1 focus:ring-[#B8935A]/30 appearance-none cursor-pointer"

  const inputCls =
    "w-full bg-white border border-[#EDE8E0] rounded-lg px-3 py-2.5 text-sm text-[#162940] font-['Inter'] focus:outline-none focus:border-[#B8935A] focus:ring-1 focus:ring-[#B8935A]/30"

  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      {/* ─── Header ──────────────────────────────────── */}
      <header className="bg-[#162940] text-white">
        <div className="max-w-[1200px] mx-auto px-6 py-5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-white no-underline group">
            <ChevronLeft size={20} className="transition-transform group-hover:-translate-x-1" />
            <span className="font-['Inter'] text-sm font-medium">Voltar ao site</span>
          </Link>
          <h1 className="font-['Playfair_Display'] text-xl font-semibold">Imóveis</h1>
          <div className="w-24" /> {/* spacer */}
        </div>
      </header>

      <div className="max-w-[1200px] mx-auto px-6 py-8">
        {/* ─── Search bar + toggle ───────────────────── */}
        <div className="flex gap-3 mb-6">
          <div className="flex-1 relative">
            <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#5A6478]" />
            <input
              type="text"
              placeholder="Buscar por nome, cidade, código..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={`${inputCls} pl-10`}
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border text-sm font-['Inter'] font-medium transition-colors cursor-pointer ${
              showFilters
                ? 'bg-[#162940] text-white border-[#162940]'
                : 'bg-white text-[#162940] border-[#EDE8E0] hover:border-[#B8935A]'
            }`}
          >
            <SlidersHorizontal size={16} />
            <span className="hidden sm:inline">Filtros</span>
            {hasActiveFilters && (
              <span className="bg-[#B8935A] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                !
              </span>
            )}
          </button>
        </div>

        {/* ─── Filters panel ─────────────────────────── */}
        {showFilters && (
          <div className="bg-white rounded-xl shadow-sm border border-[#EDE8E0] p-6 mb-6 animate-[fadeIn_0.2s_ease-out]">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-['Inter'] text-sm font-semibold text-[#162940]">Filtros</h3>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1 text-xs text-[#B8935A] font-['Inter'] font-medium hover:underline cursor-pointer"
                >
                  <X size={14} />
                  Limpar tudo
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Category */}
              <div>
                <label className="block text-xs text-[#5A6478] font-['Inter'] font-medium mb-1.5">
                  Categoria
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => {
                    setSelectedCategory(e.target.value)
                    setSelectedType('')
                  }}
                  className={selectCls}
                >
                  <option value="">Todas</option>
                  {categories.map((c) => (
                    <option key={c._id} value={c.slug.current}>
                      {c.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Type */}
              <div>
                <label className="block text-xs text-[#5A6478] font-['Inter'] font-medium mb-1.5">
                  Tipo
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className={selectCls}
                >
                  <option value="">Todos</option>
                  {filteredTypes.map((t) => (
                    <option key={t._id} value={t._id}>
                      {t.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* City */}
              <div>
                <label className="block text-xs text-[#5A6478] font-['Inter'] font-medium mb-1.5">
                  Cidade
                </label>
                <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} className={selectCls}>
                  <option value="">Todas</option>
                  {cities.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Transaction */}
              <div>
                <label className="block text-xs text-[#5A6478] font-['Inter'] font-medium mb-1.5">
                  Negócio
                </label>
                <select
                  value={selectedTransaction}
                  onChange={(e) => setSelectedTransaction(e.target.value)}
                  className={selectCls}
                >
                  <option value="">Todos</option>
                  <option value="sale">Venda</option>
                  <option value="rent">Aluguel</option>
                  <option value="both">Venda e Aluguel</option>
                </select>
              </div>

              {/* Price min */}
              <div>
                <label className="block text-xs text-[#5A6478] font-['Inter'] font-medium mb-1.5">
                  Preço mínimo (R$)
                </label>
                <input
                  type="number"
                  placeholder="Ex: 200000"
                  value={priceMin}
                  onChange={(e) => setPriceMin(e.target.value)}
                  className={inputCls}
                />
              </div>

              {/* Price max */}
              <div>
                <label className="block text-xs text-[#5A6478] font-['Inter'] font-medium mb-1.5">
                  Preço máximo (R$)
                </label>
                <input
                  type="number"
                  placeholder="Ex: 1000000"
                  value={priceMax}
                  onChange={(e) => setPriceMax(e.target.value)}
                  className={inputCls}
                />
              </div>

              {/* Bedrooms */}
              <div>
                <label className="block text-xs text-[#5A6478] font-['Inter'] font-medium mb-1.5">
                  Quartos (mínimo)
                </label>
                <select value={bedroomsMin} onChange={(e) => setBedroomsMin(e.target.value)} className={selectCls}>
                  <option value="">Qualquer</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* ─── Results count ─────────────────────────── */}
        <div className="flex items-center justify-between mb-6">
          <p className="font-['Inter'] text-sm text-[#5A6478]">
            {loading ? (
              'Carregando...'
            ) : (
              <>
                <span className="font-semibold text-[#162940]">{filtered.length}</span>{' '}
                {filtered.length === 1 ? 'imóvel encontrado' : 'imóveis encontrados'}
              </>
            )}
          </p>
        </div>

        {/* ─── Loading skeleton ──────────────────────── */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden animate-pulse">
                <div className="bg-gray-200 h-48" />
                <div className="p-5 space-y-3">
                  <div className="bg-gray-200 h-3 w-20 rounded" />
                  <div className="bg-gray-200 h-5 w-40 rounded" />
                  <div className="bg-gray-200 h-5 w-28 rounded" />
                </div>
                <div className="bg-gray-200 h-12" />
              </div>
            ))}
          </div>
        )}

        {/* ─── Grid ──────────────────────────────────── */}
        {!loading && filtered.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((property) => (
              <PropertyCard key={property._id} property={property} whatsappNumber={waNumber} />
            ))}
          </div>
        )}

        {/* ─── Empty state ───────────────────────────── */}
        {!loading && filtered.length === 0 && (
          <div className="text-center py-20">
            <MapPin size={48} className="text-[#EDE8E0] mx-auto mb-4" />
            <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#162940] mb-2">
              Nenhum imóvel encontrado
            </h3>
            <p className="font-['Inter'] text-sm text-[#5A6478] mb-6 max-w-md mx-auto">
              Tente ajustar os filtros ou entre em contato — podemos ter o imóvel
              ideal para você em nosso portfólio exclusivo.
            </p>
            <button
              onClick={clearFilters}
              className="font-['Inter'] text-sm font-semibold text-[#B8935A] hover:underline cursor-pointer"
            >
              Limpar todos os filtros
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
