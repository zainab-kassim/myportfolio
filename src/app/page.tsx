import HeroSection from '../components/shared/HeroSection'
import Project from "@/components/shared/Project";
import Experience from "@/components/shared/Experience";
import Footer from "@/components/shared/Footer";
import Skills from "@/components/shared/Skills";

export default function Home() {
  return (
    <>
      <div className="pb-2" >
        <HeroSection />
      </div>
      <div className="mx-5 mt-48">
        <Project/>
        <Experience />
        <Skills/>
        <Footer />
      </div>


    </>
  );
}
