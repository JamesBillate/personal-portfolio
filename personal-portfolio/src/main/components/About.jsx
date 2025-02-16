import React from "react";
import Header from "./Header";

import motion, {
  hover_animation,
  scroll_animation,
} from "./animations/animations";

const sectionHeader = "text-4xl font-bold";
const aboutInfo = "leading-7 mt-5 text-xl";

const skills = [
  "Lightroom",
  "Figma",
  "Canva",
  "HTML",
  "CSS",
  "JavaScript",
  "PHP",
  "MySQL",
  "C++",
];

const experiences = [
  { exp: "Hooman Design", position: "Immersion", year: "2019" },
  { exp: "CIIT Obelisk", position: "Photographer", year: "2021 to 2025" },
];

const About = () => {
  return (
    <div className="w-screen pb-15">
      <Header pageName="AboutMe" />
      <div className="mx-35">
        {/* First Section */}
        <motion.div className="flex gap-10 mt-5 mb-35" {...scroll_animation}>
          <div
            {...scroll_animation}
            className="p-10 items-center justify-center flex-1"
          >
            <motion.img
              {...hover_animation}
              className="size-90 rounded-xl -rotate-2 object-cover object-center"
              src="/src/main/components/images/GradPic.jpg"
              alt="James Billate Grad Pic"
            />
          </div>
          <div className="flex-1">
            <p className="text-2xl">Hi there,</p>
            <p className={sectionHeader}>I am James Derick Billate</p>
            <p className={aboutInfo}>
              Currently a student programmer, taking BS Computer Science in CIIT
              College of Arts and Technology. The interest started wayback in
              Junior Highschool, introducing me to basic HTML, which then become
              a motivation to pursue the field.
            </p>
            <p className={aboutInfo}>
              Right now, I aim to become a Web Devloper, fond particularly on
              desigining front-end. Conceptualizing with Canva and Pinterest,
              and wireframe and prototype using Figma. I am also exploring
              various frameworks for UI/UX, inclusing React.js, Tailwind and
              Motion Frame.
            </p>
            <p className={aboutInfo}>
              Let's make a change in digital world and create an inclusive
              design for all.
            </p>
          </div>
        </motion.div>

        {/* Second Section */}
        <motion.div className="flex gap-10 my-25" {...scroll_animation}>
          <div className="flex-1">
            <p className={sectionHeader}>The Creative Me</p>
            <p className={aboutInfo}>
              Despite the focus on programming, I also have the passion towards
              photograph. During free times at school, I take the opportunity to
              take photos of the streets. Doens't really have the sideline for
              this field, but it empowers my creative and management skills on
              various projects.
            </p>
            <p className={aboutInfo}>
              If you are interested to capture the you, lets collaborate and
              lets immotalize your uniquess.
            </p>
          </div>

          <div className="p-10 flex-2 grid grid-cols-2 gap-5 rotate-5">
            <motion.img
              {...hover_animation}
              className="mt-20 w-full size-50 rounded-xl object-cover object-center"
              src="/src/main/components/images/street_1.jpg"
              alt="James Billate Grad Pic"
            />
            <motion.img
              {...hover_animation}
              className="size-50 w-full rounded-xl object-cover object-center"
              src="/src/main/components/images/street_2.jpg"
              alt="James Billate Grad Pic"
            />
            <motion.img
              {...hover_animation}
              className="size-50 w-full rounded-xl object-cover object-center"
              src="/src/main/components/images/street_3.jpg"
              alt="James Billate Grad Pic"
            />
            <motion.img
              {...hover_animation}
              className="-mt-20 w-full size-50 rounded-xl object-cover object-center"
              src="/src/main/components/images/street_4.jpg"
              alt="James Billate Grad Pic"
            />
          </div>
        </motion.div>

        {/* Third Section */}
        <motion.div className="flex gap-10 mt-5 mb-35" {...scroll_animation}>
          <div className="flex-1">
            <p className={sectionHeader}>Skills</p>
            <div className="grid grid-cols-4 gap-2 p-4">
              {skills.map((skill) => (
                <div className="border border-solid border-gray-100 p-2 text-center rounded-lg">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <p className={sectionHeader}>Experiences</p>
            <div className="grid grid-cols-1 gap-2 p-4">
              {experiences.map((experience) => (
                <div className="border border-solid border-gray-100 p-2 text-center rounded-lg">
                  {`${experience.exp} - ${experience.position} - ${experience.year}`}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
