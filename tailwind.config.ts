import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      scale: {
        '5': '.05',
        '10': '.10',
        '15': '.15',
        '20': '.20',
        '25': '.25',
        '30': '.30',
        '35': '.35',
        '40': '.40',
        '45': '.45',
        '55': '.55',
        '60': '.60',
        '65': '.65',
        '70': '.70',
        '80': '.80',
        '85': '.85',
        '90': '.90',
        '95': '.95'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["business"],
  },
}
export default config
