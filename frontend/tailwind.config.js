/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class", // or 'media' (but 'class' gives manual control),
  theme: {
    extend: {
      fontFamily:
      {
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'top': '0 -5px 5px -5px rgba(0, 0, 0, 0.3)',
      },
      screens: {
        sm: "375px",   // Extra small phones (and landscape phones)
        md: "768px",   // Small tablets
        lg: "1024px",  // Tablets & small laptops
        xl: "1280px",  // Laptops & desktops
        "2xl": "1536px", // Large screens & monitors
        "3xl": "1920px", // Ultra-wide monitors (Full HD and above)
        "4xl": "2560px", // Optional: Extremely large displays (5K+)
      },

    },
  },
  plugins: [],
}



