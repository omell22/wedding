/** @type {import('tailwindcss').Config} */
export default {
   content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {},
      container: {
         center: true,
         padding: {
            DEFAULT: 'calc(5vw)',
            content: '40px',
         },
         screens: {
            content: '1280px',
         },
      },
      maxWidth: {
         content: '1120px',
         container: '1440px',
      },
      screens: {
         sm: '300px',
         md: '768px',
         lg: '1120px',
         xl: '1440px',
      },
   },
   plugins: [],
}

