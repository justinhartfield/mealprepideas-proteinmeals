/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lexend', 'sans-serif'],
      },
      colors: {
        pantry: {
          cream: '#F9F7F2',
          slate: '#2D3436',
          sage: '#7E9680',
          accent: '#E67E22',
          'label-tape': '#EFEFEF',
        },
      },
      boxShadow: {
        'tactical': '0 4px 0px rgba(0,0,0,0.02), 0 15px 35px -5px rgba(0,0,0,0.05)',
        'tactical-hover': '0 25px 50px -12px rgba(0,0,0,0.1)',
      },
      transitionTimingFunction: {
        'springy': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
    },
  },
};
