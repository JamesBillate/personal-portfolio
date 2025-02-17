import React, { useState } from "react";
import Header from "./Header";
import motion, { socials_animation } from "./animations/animations";

import connect_data from "./data/connect_data";

const defaultText =
  "If you are interested to work with me, get in touch and lets connect.";

const Contact = () => {
  //Hover on socials
  const [social, setSocial] = useState(defaultText);

  function currentSocial(getSocial) {
    setSocial(getSocial);
  }

  return (
    <div className="w-screen">
      <Header pageName="Connect" />
      <div className="mx-15 mt-10 pb-20 grid grid-cols-1 gap-15 md:grid-cols-2">
        {/* Available Contacts */}
        <div className="py-5 grid grid-cols-5 gap-x-2 gap-y-5 order-2 items-center md:order-1">
          {connect_data.map((connect) => (
            <motion.a
              {...socials_animation}
              onMouseEnter={() => currentSocial(connect.hover)}
              onMouseLeave={() => currentSocial(defaultText)}
              key={connect.key}
              href={connect.link}
              className="cursor-pointer p-5 text-4xl border border-gray-100 rounded-lg text-center"
            >
              <i className={connect.icon + " w-10"} />
            </motion.a>
          ))}
        </div>

        {/* Heading or opening part */}
        <div className="text-right order-1 ml-15 md:order-2 md:ml-30">
          <h1 className="text-4xl mb-4">
            Let's create innovative ideas and make it to life!
          </h1>
          <p className="text-xl mb-7 h-9">{social}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
