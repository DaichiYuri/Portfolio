import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'], // Add Pacifico font as a utility
        sacramento: ['Sacramento'],
        oswald: ['Oswald'],
        raleway: ['Raleway'],
        bebas: ['Bebas Neue'],
        merienda: ['Merienda'],
        lobster: ['Lobster'],
        unbounded: ['Unbounded'],
        greatvibes:['Great Vibes'],
        playfair:['Playfair Display']
      },
      boxShadow: {
        // '3xl': [
        //   '2px 2px 2px #c3d5e9',
        //   '-2px -2px 2px #f1f5f9'
        // ],
        // '4xl': [
        //   '4px 4px 8px #c3d5e9',
        //   '-4px -4px 8px #f1f5f9'
        // ],
        'xlw': [
          '2px 2px 2px #000000',
          '-2px -2px 2px #292929'
        ],
        '3xlw': [
          '4px 4px 8px #000000',
          '-4px -4px 8px #292929'
        ],
        '4xl': [
          '4px 4px 8px #000000',
          '-4px -4px 8px #292929'
        ],
        '5xl': [
          '8px 8px 16px #000000',
          '-8px -8px 16px #292929	'
        ],
        'n5xl': [
          '8px 8px 16px #c3d5e9 inset',
          '-8px -8px 16px #f1f5f9 inset'
        ],
        'orxl': [
          '2px 2px 2px #b35e06',
          '-2px -2px 2px #ffa842'
        ],
        'or2xl': [
          '4px 4px 8px #B8B1A3',
          '-4px -4px 8px #EDE8DF'
        ],
        'pxl': [
          '4px 4px 8px #8DA3BF',
          '-4px -4px 8px #D1E2F0'
        ]
      },
      keyframes: {
        boxShadowChange: {
          '0%': { boxShadow: '4px 4px 8px #c3d5e9, -4px -4px 8px #ffffff' },
          '50%': { boxShadow: '1px 1px 2px #c3d5e9, -1px -1px 2px #ffffff' },
          '100%': { boxShadow: '4px 4px 8px #c3d5e9, -4px -4px 8px #ffffff' },
        },
        typing: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        blink: {
          "50%": { opacity: "0" },
        },
        rise: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        clickshadow: 'boxShadowChange 0.5s ease infinite',
        // typing: "typing 3s steps(30, end) infinite ",
        blink: "blink 0.7s infinite",
        rise: "rise 1.5s ease-out forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
