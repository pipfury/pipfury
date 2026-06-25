export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        terminal:'#05070A', panel:'#0B1117', raised:'#111923', steel:'#1F2A36',
        text:'#E6EDF3', muted:'#9BA8B5', dim:'#66717F', green:'#18C37E', red:'#F05252', amber:'#F5A524', cyan:'#22D3EE', violet:'#A78BFA'
      },
      fontFamily: { sans:['Inter','system-ui','sans-serif'], display:['Space Grotesk','Inter','sans-serif'], mono:['JetBrains Mono','ui-monospace','monospace'] },
      boxShadow: { glow:'0 0 0 1px rgba(245,165,36,.18), 0 18px 60px rgba(0,0,0,.34)' }
    }
  },
  plugins: []
}
