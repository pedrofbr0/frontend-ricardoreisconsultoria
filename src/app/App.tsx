import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Portfolio } from "./components/Portfolio";
import { About } from "./components/About";
import { SocialProof } from "./components/SocialProof";
import { CTAStrip } from "./components/CTAStrip";
import { Footer } from "./components/Footer";
import { FAB } from "./components/FAB";

export default function App() {
  return (
    <div
      style={{
        fontFamily: "'Inter', sans-serif",
        background: "#F8F5F0",
        overflowX: "hidden",
      }}
    >
      <Header />
      <Hero />
      <Portfolio />
      <SocialProof />
      <About />
      <CTAStrip />
      <Footer />
      <FAB />
    </div>
  );
}
