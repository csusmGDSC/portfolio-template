import { data } from "../config/data";
import "../styles/hero.css";

export function Hero() {
  return (
    <section id="hero">
      <div>
        <h1>
          Hi, I'm <span>{data.name}</span>
        </h1>
        <p>{data.summary}</p>
      </div>

      <img src={data.imageSrc} alt="profile" />
    </section>
  );
}
