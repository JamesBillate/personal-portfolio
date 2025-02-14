import React from "react";
import Header from "./Header";

const Contact = () => {
  return (
    <div className="w-screen pb-15">
      <Header pageName="Connect" />
      <div className="mx-15 grid grid-cols-1 md:grid-cols-2">
        <div className="order-2 md:order-1">Socials area</div>
        <div className="text-right order-1 md:order-2 ml-30">
          <h1 className="text-4xl mb-4">
            Let's create innovative ideas and make it to life!
          </h1>
          <p className="text-xl mb-7">
            If you are interested to work with me, get in touch and lets
            connect.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
