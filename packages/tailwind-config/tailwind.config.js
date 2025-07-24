/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Current app
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    
    // Only include specific shared packages if needed
    "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}",
    // Don't use "../**/*" - it's too broad
  ],
  theme: {
    extend: {
      fontFamily: {
        inter:        ['var(--font-inter)'],
        poppins:      ['var(--font-poppins)'],
        roboto:       ['var(--font-roboto)'],
        'open-sans':  ['var(--font-open-sans)'],
        lato:         ['var(--font-lato)'],
        montserrat:   ['var(--font-montserrat)'],
        raleway:      ['var(--font-raleway)'],
        ubuntu:       ['var(--font-ubuntu)'],
        'source-sans-pro': ['var(--font-source-sans-pro)'],
        'work-sans':  ['var(--font-work-sans)'],
        'noto-sans':  ['var(--font-noto-sans)'],
        karla:        ['var(--font-karla)'],
        mulish:       ['var(--font-mulish)'],
        nunito:       ['var(--font-nunito)'],
        'dm-sans':    ['var(--font-dm-sans)'],
        manrope:      ['var(--font-manrope)'],
        rubik:        ['var(--font-rubik)'],
        'playfair':   ['var(--font-playfair)'],
        merriweather: ['var(--font-merriweather)'],
        'fira-sans':  ['var(--font-fira-sans)'],
      },
    },
  },
  plugins: [],
};



// /** @type {import('tailwindcss').Config} */
// const config = {
//   content: [
//     "../../apps/**/*.{js,ts,jsx,tsx,mdx}",
//     "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         inter: ['Inter', 'sans-serif'],
//         poppins: ['Poppins', 'sans-serif'],
//         manrope: ['Manrope', 'sans-serif'],
//         'dm-sans': ['DM Sans', 'sans-serif'],
//         urbanist: ['Urbanist', 'sans-serif'],
//         nunito: ['Nunito', 'sans-serif'],
//         rubik: ['Rubik', 'sans-serif'],
//         outfit: ['Outfit', 'sans-serif'],
//         mulish: ['Mulish', 'sans-serif'],
//         karla: ['Karla', 'sans-serif'],
//       },
//     },
//   },
//   plugins: [],
// };

// export default config;
