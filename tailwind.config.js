/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  //darkMode: "",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#828d7d",
          secondary: "#3b3e35",
          accent: "#a4aa9e",
          neutral: "#d4dad0",
          "base-100": "#FFFFFF",
          info: "#828d7d",
          success: "#8fbd71",
          warning: "#f5c242",
          error: "#f04328",
        },
      },
    ],
  },
  theme: {
    extend: {
      animation: {
        pulse: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      fontFamily: {
        // add the css variable and include fallback fonts from tailwind default theme
        serif: ["var(--font-serif)", ...fontFamily.serif],
      },
    },
  },
  plugins: [require("daisyui")],
};
