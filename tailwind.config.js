/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "3.5/5": "70%", // Custom width value
      },
    },
  },
  plugins: [],
};
