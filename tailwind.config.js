/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // make sure to include your JSX files
  ],
  theme: {
    extend: {
      colors: {
        darkgrey: "#191919",
      },
    },
  },
  plugins: [],
};
