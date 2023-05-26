/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        maindark: "#333333",
        base: {
          primary: "#f5f9f9",
          secondary: "#fefefe",
          hover: "#EDEAEF",
        },
        primary: {
          DEFAULT: "#f2963d",
          hover: "#ED943D",
          dark: "#794B1F",
          light: "#FAE9C3",
        },
        secondary: {
          DEFAULT: "#3d8da6",
          light: "#d8e8ed",
        },
        danger: {
          DEFAULT: "#DE593D",
          hover: "#ED943D",
          light: "#f4c8be",
        },
        tertiary: "#F2F2F2",
        quaternary: "#495057",
        quinary: "#4f4e4e",
      },
      container: {
        center: true,
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f2963d",
          secondary: "#3d8da6",
          tertiary: "#F2F2F2",
          quaternary: "#495057",
          quinary: "#F2F2F2",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
