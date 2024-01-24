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
      fontFamily: {
        'trade-winds': ["Trade Winds", "sans-serif"],
        'yeseva-one': ["Yeseva One", "sans-serif"],
        'libre-baskerville': ["Libre Baskerville", "sans-serif"],
        'reem-kufi': ["Reem Kufi Fun", "sans-serif"]
      },
      colors: {
        'orange-tint':'#FCCAAD',
        'orange-doorhinge':'#FA9F3A',
        'red-juicy':'#EE3859',
        'red-pomegranate':'#F63056'
      },
      height: {
        'screen-3/4':'calc(75vh)',
        'screen-1/2':'calc(50vh)'
      },
      dropShadow: {
        'stroke':'0 1px 1px rgba(255, 255, 255, 1.0)',
      }
    },
  },
  plugins: [],
}
export default config
