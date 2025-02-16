import React from "react";
import Header from "./Header";

const sectionHeader = "text-4xl font-bold";
const aboutInfo = "leading-7 mt-5 text-xl";

const About = () => {
  return (
    <div className="w-screen pb-15">
      <Header pageName="AboutMe" />
      <div className="mx-30 grid grid-cols-2 gap-y-30">
        <div>Image here</div>
        <div className="ml-5">
          <p className="text-2xl">Hi there,</p>
          <p className={sectionHeader}>I am James Derick Billate</p>
          <p className={aboutInfo}>
            Currently a student programmer, taking BS Computer Science in CIIT
            College of Arts and Technology. The interest started wayback in
            Junior Highschool, introducing me to basic HTML, which then become a
            motivation to pursue the field.
          </p>
          <p className={aboutInfo}>
            Right now, I aim to become a Web Devloper, fond particularly on
            desigining front-end. Conceptualizing with Canva and Pinterest, and
            wireframe and prototype using Figma. I am also exploring various
            frameworks for UI/UX, inclusing React.js, Tailwind and Motion Frame.
          </p>
          <p className={aboutInfo}>
            Let's make a change in digital world and create an inclusive design
            for all.
          </p>
        </div>

        <div className="mr-5">
          <p className={sectionHeader}>The Creative Me</p>
          <p className={aboutInfo}>
            Despite the focus on programming, I also have the passion towards
            photograph. During free times at school, I take the opportunity to
            take photos of the streets. Doens't really have the sideline for
            this field, but it empowers my creative and management skills on
            various projects.
          </p>
          <p className={aboutInfo}>
            If you are interested to capture the you, lets collaborate and lets
            immotalize your uniquess.
          </p>
        </div>

        <div>df</div>

        <div>
          <p className={sectionHeader}>Skills</p>
          <div className="flex">
            <div>Lightroom</div>
            <div>Figma</div>
            <div>Canva</div>
            <div>HTML</div>
            <div>CSS</div>
            <div>JavaScript</div>
            <div>PHP</div>
            <div>MySQL</div>
            <div>C++</div>
          </div>
        </div>

        <div>
          <p className={sectionHeader}>Experiences</p>
          <div>Hooman Design</div>
          <div>CIIT Obelisk</div>
        </div>
      </div>
    </div>
  );
};

export default About;
