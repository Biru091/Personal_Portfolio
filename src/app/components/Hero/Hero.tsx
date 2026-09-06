"use client"
import Hero3D from "../Hero-section/Model/Model";
import HeroContent from "../Hero-section/Hero-content/HeroContent";
import SkillsPage from "../Skill";
import About from "../About";
import Contact from "@/app/components/Contact";
import Movingtext from "@/app/components/Movingtext";
import Rounded from "../Rounded";
export default function Hero() {
  return (
    <main  className="page relative ">

     
      <div className="fixed inset-0 z-5 pointer-events-none">
  <Hero3D />
</div>

<div className="fixed inset-0 z-0 pointer-events-none">
  <Movingtext />
</div>
<div className=" absolute bottom-10 right-10 inset-0 z-10 pointer-events-none">
  <Rounded />
</div>

     
      <div className="relative z-20">

        
        <section
          id="home"
          className="min-h-screen  bg-cover bg-center"
          
        >
          <HeroContent />
        </section>

       
        <section
          id="about"
          className="relative z-20"
        >
          <About />
        </section>
        <section
          id="skill"
          className="relative z-20"
        >
          <SkillsPage />
        </section>
        
        <section
          id="contact"
          className="relative z-20"
        >
         
          <Contact />
        </section>
        

        

      </div>

    </main>
  );
}