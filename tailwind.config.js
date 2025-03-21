/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        dark: {
          100: '#1E293B',
          200: '#0F172A',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundImage: {
        // 'custom-linear-even': 'linear-gradient(10deg, rgba(125,211,252,1) 10%, rgba(186,230,253,1) 40%, rgba(224,242,254,0.2047991071428571) 100%)',
        // 'custom-linear-odd': "linear-gradient(190deg, rgba(125,211,252,1) 10%, rgba(186,230,253,1) 40%, rgba(224,242,254,0.2047991071428571) 100%)",
      },
    },
  },
  plugins: [],
};