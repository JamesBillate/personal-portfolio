import projects_data from "./data/project_data";
import Header from "./Header";

import motion, {
  hover_animation,
  scroll_animation,
} from "./animations/animations";

const Projects = () => {
  return (
    <div className="w-screen pb-16">
      <Header pageName="Projects" />
      <div className="mx-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects_data.map((project) => (
          <motion.div
            key={project.content}
            className="rounded-lg bg-gray-200/30 p-6 shadow-xs shadow-stone-950 backdrop-blur-sm"
            {...hover_animation} // Apply hover animation
            {...scroll_animation} // Apply scroll animation
          >
            <img
              className="mb-4 h-40 w-full rounded-md object-cover"
              src={project.image}
              alt={project.name}
            />
            <h1 className="text-3xl font-bold">{project.name}</h1>
            <div className="flex flex-wrap gap-2 my-3">
              {project.skills?.map((skill) => (
                <div className="py-1 px-2 border border-white rounded-full text-xs">
                  {skill}
                </div>
              ))}
            </div>
            <article className="mb-3 leading-relaxed">
              {project.content}
            </article>

            <a href={project.github}>
              <i className="fa-brands fa-github text-2xl transition duration-300 hover:text-green-400"></i>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
