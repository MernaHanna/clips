/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  // configure the purger which is responsible for removing unused classes
  // this array includes a list of classees that should be included in the bundled regardless if they appear in out app
  // this is how we define dynamic classes in tailwind
  safelist: ['bg-blue-400', 'bg-green-400', 'bg-red-400'],
  theme: {
    extend: {},
  },
  plugins: [],
}

