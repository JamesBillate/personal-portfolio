module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: "#b4d455",
      },
      screens: {
        laptop: "64rem", // This defines the 'laptop' breakpoint (1024px)
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
