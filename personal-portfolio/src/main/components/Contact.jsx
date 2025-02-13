import React from "react";
import Header from "./Header";

const Contact = () => {
  return (
    <div className="w-screen pb-15">
      <Header pageName="Connect" />
      <div className="mx-15 flex flex-wrap gap-5">
        <h2>Contact Me</h2>
        <p>Email: your.email@example.com</p>
      </div>
    </div>
  );
};

export default Contact;
