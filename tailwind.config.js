module.exports = {
  mode: "jit",
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./src/components/*.{js,jsx}",
    "node_modules/preline/dist/*.js",
  ],
  darkMode: false, // or 'media' or 'class'
  daisyui: {
    darkTheme: "light",
  },
  theme: {
    extend: {
      colors: {
        primary: "#02897A",
        text: "#22343D",
      },
      backgroundImage: {},
      boxShadow: {
        borderShadow: "0px 2px 8px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("preline/plugin"),
    require("daisyui"),
  ],
};
