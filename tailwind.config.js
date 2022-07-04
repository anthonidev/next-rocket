/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'chakra': ['Chakra Petch'],
      'roboto': ['Roboto'],
    },

    extend: {
      colors: {
        dark: {
          DEFAULT: "#0A192F",
          100: "#112D3D",
          200: "#133040",
          300: "#112240",
          400: "#326D7F",
        },
      },
      animation: {
        cursor: 'cursor .6s linear infinite alternate',
        type: 'type 2.7s ease-out .8s infinite alternate both',
        'type-reverse': 'type 1.8s ease-out 0s infinite alternate-reverse both',
      },
      backgroundImage: {
        'hero-cotizador': "url('/assets/images/cotiza.jpg')",
      },
      keyframes: {
        type: {
          '0%': { width: '0ch' },
          '5%, 10%': { width: '1ch' },
          '15%, 20%': { width: '2ch' },
          '25%, 30%': { width: '3ch' },
          '35%, 40%': { width: '4ch' },
          '45%, 50%': { width: '5ch' },
          '55%, 60%': { width: '6ch' },
          '65%, 70%': { width: '7ch' },
          '75%, 80%': { width: '8ch' },
          '85%, 90%': { width: '9ch' },
          '95%': { width: '10ch' },
        },
      },
    },
  },
  plugins: [],
}
