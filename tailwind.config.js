/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        agro: {
          50: "#f0f8ef",
          100: "#dff0dd",
          200: "#bfe0b9",
          500: "#4fa845",
          600: "#3f953a",
          700: "#2d7431",
          800: "#1f5a2a",
          900: "#153f21"
        }
      },
      boxShadow: {
        panel: "0 18px 45px rgba(25, 70, 44, 0.08)"
      }
    }
  },
  plugins: []
};
