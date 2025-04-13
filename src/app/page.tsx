import About from '@/app/components/about';
import Contact from '@/app/components/contact';
import Experience from '@/app/components/experience';
import Header from '@/app/components/header';
import Projects from '@/app/components/projects';
import Skills from '@/app/components/skills';

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <About />

        <Skills />

        <Projects />

        <Experience />

        <Contact />
      </main>
    </div>
  );
};

export default Home;
