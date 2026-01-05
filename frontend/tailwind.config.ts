import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'royal-blue': '#0a274b',
        'light-blue': '#57b7cc',
        'pink': '#e68b8d',
        'green': '#5dc1a6',
      },
      fontFamily: {
        'english': ['Baqacents Semi Bold', 'sans-serif'],
        'arabic': ['GE Dinar Two Medium', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;

