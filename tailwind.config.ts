import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'green-bg':'#0F1A13',
        'green-text':'#427054',
        'yellow-gradient':'linear-gradient(180deg, #FCE662 0%, #FCED95 50%, #FCF4C7 100%)',
      },
      fontFamily: {
        'jomhuria': ['"Jomhuria"'],
      },
    },
    
  },
  plugins: [],
}
export default config
