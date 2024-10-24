/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./packages/app/**/*{jsx,tsx}"
  ],
  presets: [require('nativewind/preset')],
  important: 'html',
  theme: {
    extend: {},
  },
  plugins: [],
}

