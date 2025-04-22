import { useState } from "react";
import { Title } from "./title";
import { data } from "../config/data";
import "../styles/experience.css";

export function Experience() {
  const [current, setCurrent] = useState(0);
  const experience = data.roles[current];

  return (
    <section id="experience">
      <Title title="Experience" />

      <div className="buttons">
        {data.roles.map((role, index) => (
          <button
            className={index === current ? "selected" : ""}
            key={index}
            onClick={() => setCurrent(index)}
          >
            {role.title}
          </button>
        ))}
      </div>

      <div className="experience-card">
        <h3>{experience.title}</h3>
        <p className="company">{experience.company}</p>
        <p className="info">{experience.info}</p>

        <ul>
          {experience.bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
