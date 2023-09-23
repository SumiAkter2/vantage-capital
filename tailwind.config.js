/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1ba9ca",

          secondary: "#fff",

          accent: "#9ca3af",

          info: "#6b7280",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
