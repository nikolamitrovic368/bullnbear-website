/* IMPORT PLUGINS */
import tailwindLineClamp from '@tailwindcss/line-clamp'

/* TAILWIND COLORS */
const colors = require('tailwindcss/colors')

/* TAILWIND THEME */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],

  theme: {
    screens: {
      sm: '577px',
      md: '768px',
      md2: '993px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px'
    },

    colors: {
      currentColor: colors.currentColor,
      transparent: colors.transparent,

      white: colors.white,
      black: colors.black,

      'reversed-grey': '#06070A',
      'splash-of-grenadine': '#FF7EE2',
      orochimaru: '#D9D9D9',
      'time-warp': '#9396A2',
      'konkikyo-blue': '#191A3E',
      jagger: '#3E2F48',
      'dreamy-sunset': '#FFAB5E',
      'shark-bait': '#F0639E',
      'brilliant-azure': '#32A1FF',
      'jewel-caterpillar': '#D176D4',
      'rose-souvenir': '#c587c9',
      'inner-journey': '#6d68a9',
      'norkolk-sky': '#6CB8EE',
      'china-pink': '#E467A4',
      telopea: '#2c2543',
      'carbon-blue': '#363C51',
      'wild-caribbean-green': '#1ED5B0',
      'in-the-vines': '#5B487E'
    },

    extend: {
      spacing: {
        auto: 'auto',
        0: '0',
        1: '0.0625rem',
        2: '0.125rem',
        3: '0.1875rem',
        4: '0.25rem',
        5: '0.3125rem',
        6: '0.375rem',
        7: '0.4375rem',
        8: '0.5rem',
        9: '0.5625rem',
        10: '0.625rem',
        12: '0.75rem',
        14: '0.875rem',
        16: '1rem',
        18: '1.125rem',
        20: '1.25rem',
        22: '1.375rem',
        24: '1.5rem',
        26: '1.625rem',
        28: '1.75rem',
        30: '1.875rem',
        32: '2rem',
        34: '2.125rem',
        36: '2.25rem',
        38: '2.375rem',
        40: '2.5rem',
        45: '2.8125rem',
        50: '3.125rem',
        55: '3.4375rem',
        60: '3.75rem',
        65: '4.0625rem',
        70: '4.375rem',
        80: '5rem',
        90: '5.625rem',
        100: '6.25rem',
        125: '7.8125rem'
      },

      textOpacity: {
        50: '0.5'
      },

      borderRadius: {
        sm: '5px',
        md: '10px',
        lg: '15px',
        xl: '30px',
        full: '9999px',
        none: '0'
      },

      fontFamily: {
        base: ['IBM Plex Sans', ...defaultTheme.fontFamily.sans],
        'accidental-presidency': ['Accidental Presidency', ...defaultTheme.fontFamily.sans],
        kusanagi: ['Kusanagi', ...defaultTheme.fontFamily.sans]
      },

      fontSize: {
        12: '0.75rem',
        14: '0.875rem',
        base: '1rem', // 16px
        18: '1.125rem',
        20: '1.25rem',
        25: '1.5625rem',
        30: '1.875rem',
        35: '2.1875rem',
        50: '3.125rem'
      },

      letterSpacing: {
        xxs: '0.8px'
      },

      zIndex: {
        60: 60,
        70: 70
      }
    }
  },

  plugins: [tailwindLineClamp]
}
