/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,scss}"],
  theme: {
    extend: {
      colors: {
        Primary: "#2A85FF",
        "Primary-hover": "#2474e0",
        Gray: "#6F767E",
        "light-Gray": "#f4f4f4",
      },
    },
  },
  plugins: [require("daisyui")],
  function({ addVariant }) {
    addVariant("child", "& > *");
    addVariant("child-hover", "& > *:hover");
  },
  daisyui: {
    theme: false,
    darkTheme: false,
  },
};
