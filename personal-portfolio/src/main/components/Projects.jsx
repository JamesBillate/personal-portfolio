import React from "react";
import projects_data from "./data/project_data";
import Header from "./Header";

import motion, {
  hover_animation,
  scroll_animation,
} from "./animations/animations";

const Projects = () => {
  return (
    <div className="w-screen pb-15">
      <Header pageName="Projects" />
      <div className="mx-15 grid grid-cols-1 md:grid-cols-3 gap-5">
        {projects_data.map((project) => (
          <motion.div
            key={project.content}
            className="p-6 bg-gray-200/30 backdrop-blur-sm rounded-lg shadow-xs shadow-stone-950"
            {...hover_animation} //Apply hover animation
            {...scroll_animation} //Apply scroll animation
          >
            <img
              className="mb-4 w-full h-sm object-cover rounded-md"
              src={project.image}
              alt={project.name}
            />
            <h1 className="text-3xl font-bold">{project.name}</h1>
            <article className="mb-3 leading-relaxed">
              {project.content}
            </article>
            <a href={project.github}>
              <i class="text-2xl fa-brands fa-github hover:text-green-400 transition duration-300"></i>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
