/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      lg: { max: '1024px' },
      md: { max: '768px' },
      sm: { max: '640px' },
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        'a-white': '#FFFFFF',
        'a-black': '#111827',
        'a-gray': '#6B7280',
        'a-gray-dark': '#374151',
        'a-gray-light': '#D1D5DB',
        'a-gray-bg': 'rgba(107, 114, 128, 0.75)',
        'a-blue': '#3B82F6',
        'a-green': '#0D9488',
        'a-green-light': '#16A34A',
        'a-green-light-hover': '#139041',
        'a-green-light-disabled': '#5AA777',
        'a-blue-hover': '#3576DF',
        'a-green-hover': '#0C8378',
      },
    },
  },
  plugins: [],
};
