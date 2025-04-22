import { Education } from "./components/education";
import { Experience } from "./components/experience";
import { Hero } from "./components/hero";
import { Projects } from "./components/projects";
import { Skills } from "./components/skills";

function App() {
  return (
    <div>
      <Hero />
      <Education />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
