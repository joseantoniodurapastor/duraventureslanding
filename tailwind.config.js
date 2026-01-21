/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'negro-absoluto': '#000000',
        'oro-ejecutivo': '#D4AF37',
        'blanco-puro': '#FFFFFF',
        'platino-dark': '#8C8C8C',
        'zinc-oscuro': '#09090b',
        'rojo-borde': '#DC2626',
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'heading': ['Inter', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      fontWeight: {
        'display': '900',
      },
    },
  },
  plugins: [],
}
