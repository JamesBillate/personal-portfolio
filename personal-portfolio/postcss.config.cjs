// postcss.config.js or postcss.config.cjs

module.exports = {
  plugins: [
    require('@tailwindcss/postcss'),  // Add tailwindcss here
    require('autoprefixer'),  // Optional: add autoprefixer if needed
  ],
}
