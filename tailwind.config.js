/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sf-pro': ['"SF Pro"', 'sans-serif'],
      },
      colors: {
        hostSectionBackground: '#F0EFE9',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')],
}
