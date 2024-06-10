/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      
      colors: {
        'light-green': "#5BC5CD",
        'dark-green': "#027C9F",
        'pale': "#F4FEFF",
        'primary': "#ECEEFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
        'glass-border': "#ffffff1a",
        'glass': "#ffffff24" /* glass coloring */,
        'glass-shadow': "#0000001a",
        'blue-main': "#0100E2" /* blue color */,
        'blue': '#1716FF',
        'light-blue': "#1164F2" /* lighter blue color */,
        'grey': "#F0F3F8" /* greyish color */,
        'light-grey': "#D0E4FF" /* light blue/grey color */,
        'dark-grey': "#242E49" /* dark grey color */,
        'whitish': "#f4f4f4" /* white color */,
        'white': "#ffffff" /* w color */,
        'grey-lovely': "#2e2e2e" /* best grey color */,
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'hero': "url('assets/images/collection-background.svg')",
        'card': "url('assets/images/thumbnail-background.svg')",
        'logo': "url('assets/logos/cx_logo.svg')",
        'front': "url('assets/images/hero-image.png')",
        'podium': "url('assets/images/podium.png')",
        'video': "url('assets/video/background.mp4)",
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}
