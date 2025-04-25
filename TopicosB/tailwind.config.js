/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,ts}", "./**/*.astro"],
    theme: {
      extend: {},
    },
    plugins: [require('@tailwindcss/typography')],
  }
  