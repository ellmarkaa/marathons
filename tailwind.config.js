/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        xl: '1352px',
      },
    },
    extend: {
      colors: {
        tonal: '#1d192b',
        primary: {
          0: '#202531',
          10: '#30394A',
          20: '#344157',
          30: '#3C4B65',
          40: '#4A5E7F',
          50: '#607698',
          60: '#8699B6',
          70: '#ABB9CD',
          80: '#F2F2F2',
          90: '#ECEEF2',
          99: '#F6F7F9',
        },
        accent: {
          0: '#000F3C',
          10: '#002672',
          20: '#003A9D',
          30: '#0046B0',
          40: '#004EC5',
          50: '#226F54',
          60: '#548CF7',
          70: '#97B8FF',
          80: '#C6D9FF',
          90: '#E9F0FF',
          99: '#F4FBF9',
        },
        neutral: {
          0: '#000000',
          10: '#1C1B1C',
          20: '#313031',
          30: '#484647',
          40: '#605E5F',
          50: '#797677',
          60: '#A6A4A5',
          70: '#C9C5C6',
          80: '#E6E1E2',
          90: '#F4F0F0',
          99: '#FAFAFA',
        }
      }
    },
  },
  plugins: [],
};
