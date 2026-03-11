/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F4EFEA', // Soft Sand
        text: '#1A1A1A',       // Onyx Black
        accent: '#A63D40',     // Velvet Red
        surface: '#FFFFFF',    // Pure White
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
