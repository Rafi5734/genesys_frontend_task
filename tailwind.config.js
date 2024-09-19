/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        "200%": "200%",
      },
      backgroundPosition: {
        left: "left",
        right: "right",
      },
      transitionProperty: {
        "bg-position": "background-position",
      },
    },
  },
  plugins: [
    nextui(),
    function ({ addUtilities }) {
      addUtilities({
        ".bg-clip-text": {
          "-webkit-background-clip": "text",
          "background-clip": "text",
        },
      });
    },
  ],
};

