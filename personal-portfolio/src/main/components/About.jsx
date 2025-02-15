import React from "react";
import Header from "./Header";

const About = () => {
  return (
    <div className="w-screen pb-15">
      <Header pageName="AboutMe" />
      <div className="mx-15 flex flex-wrap gap-5">
        <h2>Hi! I am James Derick Billate</h2>
        <p>
          a student programmer from CIIT College of Arts and Technology under
          Senior High School track of Programming. I am an 18-year-old Filipino
          who is currently located in Quezon City. I started to became curious
          about programming when our teacher from grade 8 introduces us to basic
          HTML documents. From that point on it became more interesting and
          really pursued learning the field. As a centennial who uses technology
          at its highs and lows, I want to become a part of the change to make
          the society advance in current technology that will soon help lives
          most especially my kababayans the Filipinos.
        </p>

        <h2>Technical Skills</h2>
        <p>Web Devleopenf</p>
      </div>
    </div>
  );
};

export default About;
