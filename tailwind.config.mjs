/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
          selection: {
              background: '#FF9610',
              text: '#000000',
          },
      },
  },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'gold': '#FF9610',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'blue': '#0e78b5',
      'lightBlue': '#2b90c2',
      'black': '#000000',
      'background': '#01121b',
      'lightGold': '#FAECC3',
      'deepBlue': '#052336'
    },                            
    extend: {
      boxShadow: {
        'xl': '0 0 4px 2px rgba(43, 144, 194, 0.6)',
        'blue': '0 0 6px 3px rgba(43, 120, 190, 0.6)'
      },
      animation: {
        'bounce-slow': 'bounce-slow 10s linear infinite',
        'bounce-reverse': 'bounce-reverse 10s linear infinite',
      },
      keyframes: {
        "bounce-reverse": {
          "0%, 100%": { transform: "translateY(25%)", animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)" },
          "50%": { transform: "translateY(-10%) translateX(-10%)", animationTimingFunction: "cubic-bezier(0.3, 0, 0.2, 1)" },
        },
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(25%)", animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)" },
          "50%": { transform: "translateY(0) translateX(10%)", animationTimingFunction: "cubic-bezier(0.3, 0, 0.2, 1)" },
        },

      },
      
    }
  },
  plugins: [
    require('daisyui'),
    
  ],
};
