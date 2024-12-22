import Header from "@/app/components/header";
import Hero from "@/app/components/hero";
import Projects from "@/app/components/projects";
import Works from "./components/works";
import Skills from "./components/skills";
import Contact from "./components/contact";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="min-h-[60vh] flex items-center justify-center">
          <Hero />
        </section>

        <section id="works">
          <Works />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Home;
