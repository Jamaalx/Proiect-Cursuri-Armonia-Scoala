import daisyui from "daisyui";
import { fontFamily } from "tailwindcss/defaultTheme";
import fluid, { extract, screens as fluidScreens, fontSize as fluidFontSize } from 'fluid-tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx,css}",
      "./src/app/layout/styles.css",
    ],
    extract,
  },
  theme: {
    // definim screens pentru fluid responsiveness
    screens: {
      ...fluidScreens, // de la fluid-tailwind
      xs: '20rem',     // custom
      sm: '40rem',     // 640px
      md: '48rem',     // 768px
      lg: '64rem',     // 1024px
      xl: '80rem',     // 1280px
      '2xl': '96rem',  // 1536px
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        saint: ['"Saint Regus"', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        epilogue: ["Epilogue", "sans-serif"],
        abril: ['"Abril Fatface"', 'cursive'],
        sora: ['Sora', 'sans-serif'],
        hind: ['Hind', 'sans-serif'],
      },
      colors: {
        'green-secondary': '#09B289',
        'green-secondary-rgb': '#09B289CC',
        'purple-primary': '#7E56C6',
        'purple-secondary': "#A67DEF",
        'sky-primary': "#25C4CB",
        'sky-secondary': "#43D6DD",
        'yellow-primary': "#FFC230",
        'yellow-secondary': "#FFD46C",
        "blue-text-primary": "#0E2A46"
      },
      fontSize: {
        ...fluidFontSize, // importă toate fontSize-urile de la fluid-tailwind
        'fluid-xs': 'clamp(30px, 2vw, 36px)',
        'fluid-sm': 'clamp(36px, 3vw, 48px)',
        'fluid-md': 'clamp(48px, 4vw, 64px)',
        'fluid-lg': 'clamp(64px, 5vw, 80px)',
        'fluid-xl': 'clamp(80px, 6vw, 96px)',
        'fluid-2xl': 'clamp(96px, 7vw, 112px)',
        'fluid-3xl': 'clamp(112px, 8vw, 128px)',
        'fluid-4xl': 'clamp(128px, 9vw, 140px)',
        'fluid-5xl': 'clamp(140px, 10vw, 150px)',
      },
    },
  },
  plugins: [
    daisyui,
    fluid({
      checkSC144: true, // activează accesibilitatea WCAG dacă vrei
    }),
  ],
  daisyui: {
    themes: ["light"],
  },
};
