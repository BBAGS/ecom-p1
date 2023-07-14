/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./hoc/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: "#D6FF79", // light green
          secondary: "#B0FF92", // light green
          accent: "#A09BE7", // light purple
          muted: "#F0F4EF", // off-white
        },
        dark: {
          primary: "#271F30", // very dark purple
          secondary: "#3F3356", // dark purple
          accent: "#9CBBE9", // sky blue
          muted: "#2D283E", // very dark desaturated blue
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("prettier-plugin-tailwindcss"),
    require("@tailwindcss/container-queries"),
  ],
  daisyui: {
    themes: ["light", "dark"],
  },
  darkMode: ["class", '[data-theme="dark"]'],
};
