import pss from "/src/main/components/images/pss.png";
import periodic from "/src/main/components/images/periodic.png";
import convert from "/src/main/components/images/convert.png";
import grading from "/src/main/components/images/gradingsys.png";
import news from "/src/main/components/images/newsletter.png";
import cravehub from "/src/main/components/images/cravehub.png";
import lunas from "/src/main/components/images/lunas.png";
import think from "/src/main/components/images/think.png";

const project_data = [
  {
    key: 1,
    name: "Point of Sales System",
    image: pss,
    content:
      "This project enacts the real-life system that various establishments use such as department stores, fast food chains to monitor their sales and give a receipt of purchase to their shoppers.",
    skills: ["HTML", "CSS", "PHP"],
    github: "https://github.com/ZicronDisc/Point-Of-Sales-System",
  },
  {
    key: 2,
    name: "The Periodic Table",
    image: periodic,
    content:
      "This is the digital version of the physical periodic table that students use in school. One function of this is it can allow you to see each element's group by simply hovering in the menu to highlight whether they are included or not.",
    skills: ["HTML", "CSS"],
    github: "https://github.com/ZicronDisc/Periodic-Table.github.io",
  },
  {
    key: 3,
    name: "Convert ",
    image: convert,
    content:
      "This system simply allows you to convert your desired value to different options such as mi to km, and cm to ft and in, and lb to g and allows you to see the differences of each metric system.",
    skills: ["HTML", "CSS", "PHP", "JavaScript"],
    github: "https://github.com/ZicronDisc/Convert",
  },
  {
    key: 4,
    name: "Grading System",
    image: grading,
    content:
      "This allows you to compute students' grades without any hassle of manually computing every value needed to find the final grade. It will also tell you if one computation is passed or not.",
    skills: ["HTML", "CSS", "PHP"],
    github: "https://github.com/ZicronDisc/Grading-System",
  },
  {
    key: 5,
    name: "Newsletter Website",
    image: news,
    content:
      "This is a prototype of a news site that allows us to practice the usage of Bootstrap in our works especially the readability of the information that users will need from the newsletter.",
    skills: ["HTML", "CSS"],
    github: "https://github.com/ZicronDisc/Newsletter",
  },
  {
    key: 6,
    name: "LunasExpress",
    image: lunas,
    content:
      "This projects applies the concept of React as component-based UI/UX interaction design and implementation, providing clearner and accessibile web projects.",
    skills: ["React", "Firebase", "Tailwind"],
    github: "https://github.com/ZicronDisc/Newsletter",
  },
  {
    key: 8,
    name: "Think Finance",
    image: think,
    content:
      "This project applies RestAPI and Laravel framework for efficient MySQL queries which enabled generating dynamic website with efficient frameworks",
    skills: ["Laravel", "Tailwind CSS"],
    github: "https://github.com/ZicronDisc/Newsletter",
  },
  {
    key: 9,
    name: "Cravehub",
    image: cravehub,
    content:
      "This is a thesis project with the aim to enhance restaurant discoverability and provide ease interaction of food explorers through interactions.",
    skills: ["Leadership", "Time Management", "React", "Laravel", "Tailwind"],
    github: "https://github.com/ZicronDisc/Newsletter",
  },
];

export default project_data;
