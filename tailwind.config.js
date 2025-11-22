// tailwind.config.js

const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Ensure these paths match your Next.js project structure (app/pages)
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      // 🚨 OVERRIDE THE DEFAULT 'sans' FONT STACK 🚨
      sans: [
        // 1. Hiragino Kaku Gothic ProN (macOS/iOS)
        '"Hiragino Kaku Gothic ProN"',
        // 2. Meiryo (Windows)
        '"メイリオ"',
        'Meiryo',
        // 3. MS PGothic (Older Windows fallback)
        '"ＭＳ Ｐゴシック"',
        '"MS PGothic"',
        // 4. Fallback to Tailwind's default Latin/system stack
        ...defaultTheme.fontFamily.sans,
      ],
    },
    extend: {
      // Add other extended styles here if needed
    },
  },
  plugins: [],
}