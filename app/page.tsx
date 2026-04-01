import Hero from "./components/Hero";
import BentoGrid from "./components/BentoGrid";
import Roadmap from "./components/Roadmap";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import ContactCta from "./components/ContactCta";

export default function Home() {
  return (
    <main>
      <Hero />
      <BentoGrid />
      <Roadmap />
      <About />
      <Testimonials />
      <ContactCta />
    </main>
  );
}
