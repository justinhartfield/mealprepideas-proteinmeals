import sharedPreset from '@mealprepideas/shared/styles/tailwind.preset.js';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [sharedPreset],
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
    '../../packages/shared/**/*.{astro,html,js,jsx,ts,tsx}',
  ],
};
