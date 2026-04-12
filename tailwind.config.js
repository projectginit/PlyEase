/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"Outfit"', 'system-ui', 'sans-serif'],
      },
      colors: {
        wood: {
          pale:  '#E8C99A',
          light: '#C49A6C',
          DEFAULT: '#8B5E3C',
          dark:  '#5C3D20',
          mid:   '#A0785A',
        },
        cream: {
          light: '#FAF6F0',
          DEFAULT: '#F0E8DC',
          mid:   '#E8DDD0',
        },
        forest: {
          light: '#D4EAD9',
          mid:   '#3E7A50',
          DEFAULT: '#2E5D3B',
        },
        ink: {
          light: '#9E8872',
          mid:   '#5A4C3E',
          DEFAULT: '#1A1612',
        },
      },},
  },
  plugins: [],
}