/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#030710",
        lightColor: "#1f232e",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right, #da51d3, #9674da, #6290de)",
      },
    },
  },
  plugins: [],
};
