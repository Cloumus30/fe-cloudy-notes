/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors:{
        'navbar': '#1E293B',
        'font-navbar': '#cbd5e1'
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
