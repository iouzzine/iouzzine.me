import { data } from '@/lib/data';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Experience from '@/components/sections/experience';
import Contact from '@/components/sections/contact';
import ScrollProgress from '@/components/ui/scroll-progress';

const Home = () => {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero personal={data.personal} stats={data.stats} />
        <About about={data.about} />
        <Skills skills={data.skills} />
        <Projects projects={data.projects} />
        <Experience experience={data.experience} />
        <Contact personal={data.personal} />
      </main>
      <Footer personal={data.personal} />
    </>
  );
};

export default Home;
