import { data } from "../config/data";
import { Title } from "./title";
import "../styles/projects.css";

export function Projects() {
  return (
    <section id="projects">
      <Title title="Projects" />

      <div>
        {data.projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.imageSrc} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
