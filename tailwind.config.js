module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'pink-primary': '#fef4f8',
        'green-primary': '#64c24d',
        'pink-second': '#bf7f91',
      },
      transitionDuration: {
        0: '0ms',
        2000: '2000ms',
      },
    },
  },
  plugins: [],
};
