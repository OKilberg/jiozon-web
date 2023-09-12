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
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'custom-gradient': 'linear-gradient(114deg, #122117 0%, #24422F 33.85%, #122117 64.59%, #24422F 81.25%, #122117 100%)',
      },
      colors: {
        'green-bg':'#0F1A13',
        'green':'#427054',
        'green-light':'#62846F',
        'green-lightest':'#CDE4D6',
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
