/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'green-base': '#036C66',
      },
      fontFamily: {
        acid: ['acid Grotesk'],
        futura: ['Futura Bold'],
      },
    },
  },
  plugins: [],
};
