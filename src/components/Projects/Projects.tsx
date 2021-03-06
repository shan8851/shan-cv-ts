import s from "./Projects.module.scss";
import { data } from "../../data/projects";

interface Project {
  title: string;
  url: string;
  description: string;
  id: number;
}

export const Projects = () => {
  return (
    <div className={s.container}>
      <h1 className={s.heading}>Projects</h1>
      <div className={s.line} />
      <div className={s.wrapper}>
        {data.map((item: Project) => (
          <div key={item.id}>
            <h3 className={s.title}>{item.title}</h3>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={item.url}
              className={s.link}
            >
              {item.url}
            </a>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
