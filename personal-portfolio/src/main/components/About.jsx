import React from "react";
import Header from "./Header";

const About = () => {
  return (
    <div className="w-screen pb-15">
      <Header pageName="AboutMe" />
      <div className="mx-15 flex flex-wrap gap-5">
        <h2>About Me</h2>
        <p>This section contains information about me.</p>
      </div>
    </div>
  );
};

export default About;
