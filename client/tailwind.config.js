/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        'lg': '2px 2px 4px rgba(0, 0, 0, 0.5)',
      },
      fontFamily:{
        title: ['Poppins', 'sans-serif'],
      },
      colors:{
        primary:'#FF2020',
        navMobile:'#4C4C4C',
        nav:'#16161A',
        hero:'#FFFFFF',
        testimonial:"#F3EAD8",
        adminDashborad:'#F8F8FB',
        footer:'#171613',
        frontpage:'#2D394B',
        second:"#F87957",
        third:'#3688FA',
        fourth:'#FFAE1F',
        fifth:'#26BA4F'
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
    require('@tailwindcss/forms'),
  ],
}