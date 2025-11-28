/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Habilita dark mode baseado em classe
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0a0a0a',
          surface: '#111111',
          card: '#1a1a1a',
          border: '#2a2a2a',
        },
        light: {
          bg: '#ffffff',
          surface: '#f8f9fa',
          card: '#ffffff',
          border: '#e5e7eb',
        },
        accent: {
          primary: '#3b82f6',
          secondary: '#8b5cf6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

