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
        customYellow: 'rgba(151, 191, 15, 0.5)',
        customBorder: '#DDDDDD',
        customIcon: '#443850',
        customBg: '#94bd0f',
        customDark: '#7f9d1b',
        bodyBg: '#f1f1f1',
        harleyOrange: '#ff6600',
      },
    },
  },
  plugins: [],
};
