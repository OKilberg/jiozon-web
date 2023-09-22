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
        'gradient2':'linear-gradient(180deg, #264030 0%, #17261D 13%, #000000 150%)',
      },
      colors: {
        'green-bg':'#0F1A13',
        'green-dark':'#17261D',
        'green-grey':'#577563',
        'green-white':'#CEE4D7',
        'green':'#427054',
        'green-light':'#62846F',
        'green-lightest':'#CDE4D6',
        'pink-background':'#804C6C',
        'pink-border':'#A05F87',
        'purple-background':'#4C5280',
        'purple-border':'#60669F',
        'brown-background':'#80614C',
        'brown-border':'#9F7960',
        'mint-border':'#609F99',
        'mint-background':'#4C807A',
        'yellow-gradient':'linear-gradient(180deg, #FCE662 0%, #FCED95 50%, #FCF4C7 100%)',
      },
      fontFamily: {
        'jomhuria': ['"Jomhuria"'],
        'interactive':['"Tajawal"'],
      },
    },
    
  },
  plugins: [],
}
export default config
