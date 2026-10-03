/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#123E8C',       // Primary Blue
          primary: '#2F80ED',    // Secondary Blue
          light: '#EAF6FF',      // Soft Light Blue
          subtle: '#F7FBFF',     // Very Light Background
          textDark: '#172033',   // Dark Text
          textMuted: '#64748B',  // Muted Slate Text
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(18, 62, 140, 0.08)',
        'card': '0 14px 34px -10px rgba(18, 62, 140, 0.12)',
        'float': '0 20px 45px -15px rgba(18, 62, 140, 0.18)',
      }
    },
  },
  plugins: [],
}
