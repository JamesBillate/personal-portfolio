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
    <div className="w-screen">
      <Header pageName="AboutMe" />
      <div className="mx-15 sm:mx-20 md:mx-35">
        {/* First Section */}
        <motion.div
          className="gap-10 mt-5 mb-35 grid grid-cols-1 md:grid-cols-2"
          {...scroll_animation}
        >
          <div
            {...scroll_animation}
            className="p-10 items-center justify-center order-2 md:order-1"
          >
            <motion.img
              {...hover_animation}
              className="size-90 rounded-xl object-cover object-center md:-rotate-2"
              src="/src/main/components/images/GradPic.jpg"
              alt="James Billate Grad Pic"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-2xl">Hi there,</p>
            <p className={sectionHeader}>I am James Derick Billate</p>
            <p className={aboutInfo}>
              Currently a student programmer, taking BS Computer Science in CIIT
              College of Arts and Technology. The interest started way back in
              Junior Highschool, introducing me to basic HTML, which then became
              a motivation to pursue the field.
            </p>
            <p className={aboutInfo}>
              Right now, I aim to become a Web Developer, fond particularly of
              designing front-end. Conceptualizing with Canva and Pinterest, and
              wireframing and prototyping using Figma. I am also exploring
              various frameworks for UI/UX, including React.js, Tailwind, and
              Motion Frame.
            </p>
            <p className={aboutInfo}>
              Let's make a change in the digital world and create an inclusive
              design for all.
            </p>
          </div>
        </motion.div>

        {/* Second Section */}
        <motion.div className="my-25" {...scroll_animation}>
          <div className="order-1">
            <p className={sectionHeader}>The Creative Me</p>
            <p className={aboutInfo}>
              Despite the focus on programming, I also have a passion for
              photography. During free times at school, I take the opportunity
              to take photos of the streets. I don't really have a sideline for
              this field, but it empowers my creative and management skills on
              various projects.
            </p>
            <p className={aboutInfo}>
              If you are interested in capturing the moment, let's collaborate
              and immortalize your uniqueness.
            </p>
          </div>

          <div className="p-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            <motion.img
              {...hover_animation}
              className="mt-0 md:mt-20 w-full size-50 rounded-xl object-cover object-center"
              src="/src/main/components/images/street_1.jpg"
              alt="Street Photography 1"
            />
            <motion.img
              {...hover_animation}
              className="size-50 w-full rounded-xl object-cover object-center"
              src="/src/main/components/images/street_2.jpg"
              alt="Street Photography 2"
            />
            <motion.img
              {...hover_animation}
              className="size-50 w-full rounded-xl object-cover object-center"
              src="/src/main/components/images/street_3.jpg"
              alt="Street Photography 3"
            />
            <motion.img
              {...hover_animation}
              className="mt-0 md:-mt-20 w-full size-50 rounded-xl object-cover object-center"
              src="/src/main/components/images/street_4.jpg"
              alt="Street Photography 4"
            />
          </div>
        </motion.div>

        {/* Third Section */}
        <motion.div
          className="mt-5 mb-35 grid grid-cols-1 gap-10 md:grid-cols-2"
          {...scroll_animation}
        >
          <div>
            <p className={`${sectionHeader} text-center`}>Skills</p>
            <div className="grid grid-cols-2 gap-2 p-4 lg:grid-cols-4">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="border border-solid border-gray-100 p-2 text-center rounded-lg"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className={`${sectionHeader} text-center`}>Experiences</p>
            <div className="grid grid-cols-1 gap-2 p-4">
              {experiences.map(({ exp, position, year }) => (
                <div
                  key={exp}
                  className="border border-solid border-gray-100 p-2 text-center rounded-lg"
                >
                  {`${exp} - ${position} - ${year}`}
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
