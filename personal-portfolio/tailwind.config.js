/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      screens: {
        mobile: "320px",
        tablet: "481px",
        laptop: "769px",
        wide: "1025px",
      },
    },
  },
  plugins: [],
  corePlugins: {
    backdropFilter: true,
  },
};
