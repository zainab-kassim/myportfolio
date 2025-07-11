import HeroSection from '../components/shared/HeroSection'
import Project from "@/components/shared/Project";
import Footer from "@/components/shared/Footer";
import Skills from "@/components/shared/Skills";
import Aboutme from '@/components/shared/Aboutme';

export default function Home() {
  return (
    <>
      <div className="max-w-7xl justify-center mx-auto mb-10 mt-12 md:px-16 px-8">
        <HeroSection />
          <Project />
          <Aboutme/>
          <Skills />
          <Footer />
      </div>


    </>
  );
}
