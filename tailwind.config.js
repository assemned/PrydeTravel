/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          text: "#0E3D4D",
          green: "#CCF32F",
          yellow: "#D9ED82",
          star: "#FFB800",
          blue: "#112F38",
          gray: "#F3F3F3",
        },
      },
      screens: {
        xs: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
      fontFamily: {
        first: ["Playfair Display", "serif"],
        second: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        cta: "url('/cta.png')",
      },
    },
  },
  plugins: [],
};
