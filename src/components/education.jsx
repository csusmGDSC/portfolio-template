import { data } from "../config/data";
import { Title } from "./title";
import "../styles/education.css";

export function Education() {
  return (
    <section id="education">
      <Title title="Education" />

      <div className="education-card">
        <h3>{data.degree}</h3>
        <p className="school">{data.school}</p>
        <p className="graduation">Expected Graduation: {data.graduation}</p>
      </div>
    </section>
  );
}
