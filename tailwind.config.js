/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  // daisyui: {
  //   themes: [
  //     {
  //       mytheme: {
  //         primary: "#7700ff",

  //         secondary: "#e76f00",

  //         accent: "#7e9a00",

  //         neutral: "#030713",

  //         "base-100": "#fcfcfc",

  //         info: "#00efff",

  //         success: "#00a66b",

  //         warning: "#f44100",

  //         error: "#ff0068",
  //       },
  //     },
  //   ],
  // },
};
