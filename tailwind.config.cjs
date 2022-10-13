/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 25s linear infinite",
      },
    },
  },
  variants: {
    extend: {
      display: ["group-focus"],
      opacity: ["group-focus"],
      inset: ["group-focus"],
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
