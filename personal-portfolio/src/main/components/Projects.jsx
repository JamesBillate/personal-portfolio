import React from "react";
import { motion } from "motion/react";
import projects_data from "./data/project_data";

function Project_Card(props) {
  return (
    <>
      <motion.div className="p-4 bg-gray-200/30 backdrop-blur-sm rounded-lg shadow-xs shadow-stone-950">
        <img src={props.image} alt={props.name}></img>
        <h1>{props.name}</h1>
        <article>{props.content}</article>
        <a href={props.github}>GitHub</a>
      </motion.div>
    </>
  );
}

const Projects = () => {
  return (
    <div className="w-screen">
      <div className="mx-15 grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects_data.map((project) => (
          <Project_Card
            key={project.key}
            image={project.image}
            name={project.name}
            content={project.content}
            github={project.github}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
