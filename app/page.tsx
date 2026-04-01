import Header from "./components/Header";
import Hero from "./components/Hero";
import BentoGrid from "./components/BentoGrid";
import DataIntelligence from "./components/DataIntelligence";
import CaseStudies from "./components/CaseStudies";
import About from "./components/About";
import Roadmap from "./components/Roadmap";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <BentoGrid />
        <DataIntelligence />
        <CaseStudies />
        <About />
        <Roadmap />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
