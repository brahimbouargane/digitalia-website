import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Awards from "@/components/sections/Awards";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import Blogs from "@/components/sections/Blogs";
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
      {/* <Awards /> */}
      <Services />
      <Process />
      {/* <Projects /> */}
      <Testimonials />
      {/* <Blogs /> */}
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
