import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import UpstateChurch from "@/components/UpstateChurch";
import Book from "@/components/Book";
import Podcast from "@/components/Podcast";
import Sermons from "@/components/Sermons";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <UpstateChurch />
        <Book />
        <Podcast />
        <Sermons />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
