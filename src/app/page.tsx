import HeroSection from '../components/shared/HeroSection'
import Project from "@/components/shared/Project";
import Footer from "@/components/shared/Footer";
import Skills from "@/components/shared/Skills";
import Aboutus from '@/components/shared/Aboutus';

export default function Home() {
  return (
    <>
      <div className="max-w-7xl justify-center mx-auto my-20 px-6">
        <HeroSection />
        <div className='max-w-full mx-auto'>
          <Project />
          <Aboutus/>
          <Skills />
          <Footer />
        </div>
      </div>


    </>
  );
}
