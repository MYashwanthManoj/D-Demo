import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: { inter: ['Inter', 'sans-serif'] },
      colors: {
        brand: {
          50: '#EFF4FF', 100: '#DCE6FF', 200: '#BFD0FF', 300: '#93AEFF',
          400: '#6087FB', 500: '#3B62F6', 600: '#2549E0', 700: '#1B37B5',
          800: '#152C88', 900: '#10265E',
        },
        navy: {
          900: '#0F1420', 800: '#1E2533', 700: '#333B4A',
          600: '#4E586B', 500: '#6B7689', 400: '#9AA5BB',
          300: '#CBD3E1', 200: '#E2E7F0', 100: '#EEF1F7',
          50: '#F5F7FB', 25: '#FBFCFE',
        },
        success: { 50: '#E8F8EE', 500: '#12A150', 700: '#0B7038' },
        warning: { 50: '#FFF6E5', 500: '#D98800', 700: '#9A6100' },
        danger:  { 50: '#FEECEB', 500: '#E5484D', 700: '#B4272B' },
      },
      borderRadius: {
        'xs': '3px', 'sm': '4px', 'md': '8px',
        'lg': '12px', 'xl': '16px', '2xl': '24px', '3xl': '32px',
      },
      boxShadow: {
        'elevation-1': '0 1px 2px rgba(15, 20, 32, 0.05)',
        'elevation-2': '0 2px 8px rgba(15, 20, 32, 0.08)',
        'elevation-3': '0 4px 16px rgba(15, 20, 32, 0.10)',
        'elevation-4': '0 8px 32px rgba(15, 20, 32, 0.12)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
