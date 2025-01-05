/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", // Pastikan file HTML Anda terdaftar di sini
    "./src/**/*.{html,js}" // Jika menggunakan folder src
  ],
  theme: {
    extend: {
      colors: {
        'biru': '#4E65C6',
        'kuning': '#FB773C',
      },
    },
  },
  plugins: [],
}