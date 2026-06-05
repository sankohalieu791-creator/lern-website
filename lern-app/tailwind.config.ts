import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.css',
  ],
  theme: {
    extend: {
      colors: {
        lern: {
          bg: '#0a0a0a',
          card: 'rgba(124,58,237,0.08)',
          purple: '#7C3AED',
          cyan: '#00D9FF',
          orange: '#FF6B2B',
          pink: '#E91E8C',
          green: '#2ECC71',
          red: '#FF3B30',
        },
      },
      backgroundImage: {
        'gradient-lern': 'linear-gradient(135deg, #FF6B2B 0%, #E91E8C 50%, #7C3AED 100%)',
      },
    },
  },
  plugins: [],
}

export default config
