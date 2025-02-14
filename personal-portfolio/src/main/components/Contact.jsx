import React, { useState } from "react";
import Header from "./Header";

import connect_data from "./data/connect_data";

const Contact = () => {
  const [social, setSocial] = useState(
    "If you are interested to work with me, get in touch and lets connect."
  );

  function currentSocial(getSocial) {
    setSocial(getSocial);
  }

  return (
    <div className="w-screen">
      <Header pageName="Connect" />
      <div className="mx-15 grid grid-cols-1 md:grid-cols-2">
        <div className="py-5 grid grid-cols-5 gap-x-2 gap-y-5 order-2 items-center md:order-1">
          {connect_data.map((connect) => (
            <a
              onMouseEnter={() => currentSocial(connect.hover)}
              onMouseLeave={() =>
                currentSocial(
                  "If you are interested to work with me, get in touch and lets connect."
                )
              }
              key={connect.key}
              href={connect.link}
              className="cursor-pointer p-5 text-4xl border border-gray-100 rounded-lg text-center"
            >
              <i className={connect.icon + " w-10"} />
            </a>
          ))}
        </div>
        <div className="text-right order-1 md:order-2 ml-30">
          <h1 className="text-4xl mb-4">
            Let's create innovative ideas and make it to life!
          </h1>
          <p className="text-xl mb-7">{social}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
