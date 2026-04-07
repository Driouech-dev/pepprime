/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0d3f8f',
          blue: '#2563eb',
          teal: '#38bdf8',
          softblue: '#eaf3ff',
          ink: '#0f172a'
        }
      },
      boxShadow: {
        soft: '0 18px 48px rgba(15, 23, 42, 0.08)',
        glow: '0 18px 42px rgba(37, 99, 235, 0.18)'
      },
      backgroundImage: {
        'hero-grid': 'linear-gradient(rgba(13,63,143,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(13,63,143,0.05) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
};
