import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { TechStack } from "./components/TechStack";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="size-full">
      <Navigation />
      <main className="pt-16">
        <Hero />
        <Projects />
        <TechStack />
        <About />
        <Contact />
      </main>
    </div>
  );
}