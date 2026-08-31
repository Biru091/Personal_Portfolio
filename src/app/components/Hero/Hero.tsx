"use client"
import Hero3D from "../Hero-section/Model/Model";
import HeroContent from "../Hero-section/Hero-content/HeroContent";
import SkillsPage from "../Skill";
import About from "../About";
import Contact from "@/app/components/Contact";

export default function Hero() {
  return (
    <main  className="page relative ">

     
      <div  className="fixed inset-0 z-0 opacity-100 pointer-events-none">
        <Hero3D />
      </div>

     
      <div className="relative z-10">

        
        <section
          id="home"
          className="min-h-screen  bg-cover bg-center"
          
        >
          <HeroContent />
        </section>

       
        <section
          id="about"
          className=""
        >
          <About />
        </section>
        <section
          id="skill"
          className=""
        >
          <SkillsPage />
        </section>
        
        <section
          id="contact"
          className=""
        >
         
          <Contact />
        </section>
        

        

      </div>

    </main>
  );
}