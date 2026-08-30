import Hero3D from "../Hero-section/Model/Model";
import HeroContent from "../Hero-section/Hero-content/HeroContent";
import SkillsPage from "../Skill";
import About from "../About";
import Contact from "@/app/components/Contact";
import Projects from "../Project";
export default function Hero() {
  return (
    <main className="page relative bg-black">

      {/* 3D OBJECT */}
      <div className="fixed inset-0 z-0 opacity-50 pointer-events-none">
        <Hero3D />
      </div>

      {/* CONTENT */}
      <div className="relative z-10">

        {/* HOME */}
        <section
          id="home"
          className="min-h-screen "
        >
          <HeroContent />
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className=""
        >
          <About />
        </section>
        <section
          id="about"
          className=""
        >
          <SkillsPage />
        </section>
         <section
          id="about"
          className=""
        >
         
          <Projects />
        </section>
        <section
          id="about"
          className=""
        >
         
          <Contact />
        </section>
        

        

      </div>

    </main>
  );
}