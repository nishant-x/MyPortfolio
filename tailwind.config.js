/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      colors: {
        ink: '#050816',
        panel: '#0b1022',
        mint: '#34f5c5',
        cyan: '#38d9ff',
        coral: '#ff8a7a',
        gold: '#f8d66d',
      },
      boxShadow: {
        glow: '0 0 35px rgba(56, 217, 255, 0.22)',
        mint: '0 0 35px rgba(52, 245, 197, 0.18)',
      },
      backgroundImage: {
        'radial-grid':
          'radial-gradient(circle at 25% 20%, rgba(56,217,255,.18), transparent 32%), radial-gradient(circle at 78% 12%, rgba(255,138,122,.14), transparent 28%), radial-gradient(circle at 55% 80%, rgba(52,245,197,.12), transparent 34%)',
      },
    },
  },
  plugins: [],
};
