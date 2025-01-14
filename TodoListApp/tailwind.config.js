/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'custom-background': "url('./src/assets/pexels-robertkso-15208152.jpg')"
      })
    },
  },
  plugins: [],
}

