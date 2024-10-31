/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter'],
      },
      colors: {
        customBlack: '#1A1A1A',
        customLightBlack: "#1F1F1B",
        customWhite: '#FEF4F4',
        customLightPurple: '#8E43ED',
        customDarkPurple: '#512687',
        customLightYellow: '#F0EC8B',
        customDarkYellow: '#DED84D',
        customLightGrey: "#828282",
        customDarkGrey: '#323232',
        customLightBlack: '#262626',
        customLightBrown: '#322A33',
        customMidPurple: '#622BA8',
      },
    },
  },
  plugins: [],
};
