import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import TrustedBy from "@/components/sections/TrustedBy";
import Locations from "@/components/sections/Locations";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Process />
      <TrustedBy />
      <Locations />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
