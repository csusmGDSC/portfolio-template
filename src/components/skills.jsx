import { Title } from "./title";
import "../styles/skills.css";
import { data } from "../config/data";

export function Skills() {
  return (
    <section id="skills">
      <Title title="Skills" />
      <div>
        {data.skills.map((skill, index) => (
          <span key={index}>{skill}</span>
        ))}
      </div>
    </section>
  );
}
