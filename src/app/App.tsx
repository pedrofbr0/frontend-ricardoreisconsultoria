import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Portfolio } from "./components/Portfolio";
import { About } from "./components/About";
import { SocialProof } from "./components/SocialProof";
import { CTAStrip } from "./components/CTAStrip";
import { Footer } from "./components/Footer";
import { FAB } from "./components/FAB";

import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import { PropertiesPage } from './pages/PropertiesPage'
import { PropertyDetailPage } from './pages/PropertyDetailPage'

export function HomePage() {
  return (
    <div>
      <Hero />
      <Portfolio />
      <About />
      <SocialProof />
      <CTAStrip />
    </div>
  )
}

export function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <FAB />
    </div>
  )
}


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/imoveis" element={<PropertiesPage />} />
          <Route path="/imoveis/:slug" element={<PropertyDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
