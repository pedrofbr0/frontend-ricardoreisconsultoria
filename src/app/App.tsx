// App.tsx
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Portfolio } from './components/Portfolio'
import { About } from './components/About'
import { SocialProof } from './components/SocialProof'
import { CTAStrip } from './components/CTAStrip'
import { Footer } from './components/Footer'
import { FAB } from './components/FAB'
import { ScrollToTop } from './components/ScrollToTop'
import { PropertiesPage } from './pages/PropertiesPage'
import { PropertyDetailPage } from './pages/PropertyDetailPage'

function HomePage() {
  return (
    <>
      <Hero />
      <Portfolio />
      <About />
      <SocialProof />
      <CTAStrip />
    </>
  )
}

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <FAB />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/imoveis" element={<PropertiesPage />} />
          <Route path="/imoveis/:slug" element={<PropertyDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}