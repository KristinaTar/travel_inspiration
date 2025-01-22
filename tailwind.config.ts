import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'green-primary': '#657a42',
        'white-primary': '#ccd5c7',
        'grey-primary': '#6d6d6d',
      },
    },
    fontFamily: {
      playwrite:['Playwrite VN, sans-serif'],
      knewave: ['Knewave, sans-serif'],

    },
    fontSize: {
      sm: ['16px', '24px'],
      base: ['24px', '24px'],
      lg: ['34px', '28px'],
      xl: ['24px', '32px'],
    },
    fontWeight:{
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    keyframes: {
      ticker: {
        '0%': { transform: 'translate(100%, 0)' },
        '50%': { transform: 'translate(0, 0)' },
        '100%': { transform: 'translate(-100%, 0)' },
      },
    },
    animation: {
      ticker: 'ticker 15s infinite linear',
    },

  },
  plugins: [],
} satisfies Config;
