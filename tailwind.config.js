/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        kaushan:["Kaushan Script", "cursive"]
      }
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          // colors: {
          //   primary: "#0072f5",
          // },
          colors: {
            primary: {
              DEFAULT: "#0072f5",
              foreground: "#FFFFFF",
            },
            focus: "#0072f5",
          }
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#0072f5",
              foreground: "#FFFFFF",
            },
            focus: "#0072f5",
          },
        },
      },
    }),
  ]
}

