/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'dancing-script': ['Dancing Script', 'cursive'],
        roboto: ['Roboto', 'sans-serif'],
        helvetica: ['Helvetica', 'sans-serif'],
      },
      colors: {
        customYellow: 'rgba(252, 99, 0, 0.5)',
        customBorder: '#DDDDDD',
        customIcon: '#443850',
        customBg: '#FC6300',
        customDark: '#C2601F',
        bodyBg: '#191719',
        harleyOrange: '#CA5202',
        inputBg: 'rgb(44, 44, 44)',
        signInMobile: '#fb8622',
      },
    },
  },
  plugins: [],
};
