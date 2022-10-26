// Ghi đè và bổ sung cấu hình mặc định của tailwind

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      h1: '36px',
      h2: '32px',
      h3: '24px',
      h4: '20px',
      h5: '16px',
      h6: '14px',
    },
    screens: {
      sm: '320px', // Mobile
      md: '768px', // Tablet
      lg: '1024px', // Desktop
      xl: '1440px', // Big Desktop
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    extend: {
      colors: {
        // Primary
        primary: '#0E46C7',
        secondary: '#424242',

        // Text
        t_dark: '#333333',
        t_gray: '#777777',
        t_white: '#FFFFFF',
        t_light_gray: '#E7E5EA',
        t_light_gray_2: '#A9A7AC',

        // Background
        bg_light_gray: '#F5F7F9',
        bg_white: '#FFFFFF',
        bg_black: '#131417',
        bg_dark_gray: '#27292B',
        bg_primary: '#F5F5F5',

        // Border
        br_gray: '#90909033',
        br_light_gray: '#D2D0D5',

        // Actions
        ac_turquoise: '#61DCDF',
        ac_blue: '#2860E1',
        ac_green: '#34C635',
        ac_purple: '#886CFF',
        ac_red: '#EF3737',
        ac_orange: '#FF9513',
        ac_yellow: '#F9E492',
        ac_dark_blue: '#001C7F',
        ac_lighter_blue: '#208AFF',
        ac_lighter_green: '#1FCF9B',
      },
    },
  },
  plugins: [],
};
