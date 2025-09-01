import HeroSection from '@/components/HeroSection'
import Project from "@/components/Project";
import Footer from "@/components/Footer";
import Aboutme from '@/components/Aboutme';

export default function Home() {
  return (
    <>
      <div className='justify-center  mx-auto'>
        <HeroSection />
        <Project />
        <div className='bg-white'>
          <Aboutme />
          <Footer />
        </div>

      </div>
    </>
  );
}
