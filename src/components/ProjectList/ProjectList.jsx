import { myProjects } from "../../data";
import Project from "../Project/Project";
import "./ProjectList.scss";

const ProjectList = () => {
  return (
    <div id="projects">
      <div className="projectList">
        <div className="title">
          <h2>My Projects</h2>
        </div>
        <div className="container">
          {myProjects
            .sort((a, b) => (b.id < a.id ? -1 : b.id > a.id ? 1 : 0))
            .map((project) => (
              <Project
                key={project.id}
                title={project.title}
                description={project.description}
                img={project.img}
                demo={project.demo}
                code={project.code}
                stacks={project.stacks}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
