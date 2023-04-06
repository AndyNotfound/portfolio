import Navbar from "@/components/Navbar";
import Hero from "@/components/Home/hero";
import AboutMe from "@/components/Home/about";
import RecentProjects from "@/components/Home/projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <RecentProjects />
      </main>
      <Footer />
    </>
  );
}
