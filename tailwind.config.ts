import type { Config } from 'tailwindcss'

const config: Config = {
  important: true,
  corePlugins: {
    preflight: false,
  },
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
      },
    },
  },
  plugins: [],
}
export default config
