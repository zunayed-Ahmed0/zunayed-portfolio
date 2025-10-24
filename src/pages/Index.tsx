import { ThemeProvider } from "next-themes";
import SidebarNavbar from "@/components/SidebarNavbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen relative">
        <main className="transition-all duration-300">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </main>

        <SidebarNavbar />
      </div>
    </ThemeProvider>
  );
};

export default Index;
