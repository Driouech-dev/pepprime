/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          midnight: '#050b16',
          panel: '#0b1220',
          surface: '#101a2e',
          card: '#0f1b31',
          navy: '#0f274f',
          blue: '#2563eb',
          cyan: '#38bdf8',
          border: 'rgba(96, 165, 250, 0.20)',
          text: '#f8fbff',
          muted: '#c7d7ee',
          dim: '#88a0c4'
        }
      },
      boxShadow: {
        soft: '0 22px 60px rgba(2, 8, 23, 0.35)',
        glow: '0 26px 80px rgba(37, 99, 235, 0.28)',
        edge: 'inset 0 1px 0 rgba(255,255,255,0.03)'
      },
      backgroundImage: {
        'hero-grid': 'linear-gradient(rgba(56,189,248,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.08) 1px, transparent 1px)',
        'hero-glow': 'radial-gradient(circle at top left, rgba(37, 99, 235, 0.20), transparent 28%), radial-gradient(circle at top right, rgba(56, 189, 248, 0.14), transparent 24%), linear-gradient(180deg, rgba(5,11,22,0.96), rgba(5,11,22,1))'
      }
    }
  },
  plugins: []
};
