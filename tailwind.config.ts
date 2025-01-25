import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		rotate: {
  			'15': '15deg',
  			'20': '20deg',
  			'30': '30deg',
  			'-30': '-30deg',
  			'-15': '-15deg',
  			'-20': '-20deg'
  		},
  		animation: {
  			slowSpin: 'spin 2s linear infinite',
  			float: 'float 1.5s ease-in-out infinite',
  			legBack: 'leg-back 2s linear infinite',
  			legFront: 'leg-front 2s linear infinite',
  			bodyMotion: 'body-motion 1s linear infinite',
  			gooseWalk: 'gooseWalk 15s linear infinite'
  		},
  		keyframes: {
  			gooseWalk: {
  				'0%': {
  					transform: 'translateX(0) scaleX(1)'
  				},
  				'50%': {
  					transform: 'translateX(200px) scaleX(1)'
  				},
  				'50.1%': {
  					transform: 'translateX(200px) scaleX(-1)'
  				},
  				'100%': {
  					transform: 'translateX(0) scaleX(-1)'
  				}
  			},
  			float: {
  				'0%, 100%': {
  					transform: 'translateY(0)'
  				},
  				'50%': {
  					transform: 'translateY(-10px)'
  				}
  			},
  			'body-motion': {
  				'0%': {
  					transform: 'rotate(0deg) translateY(0px)'
  				},
  				'50%': {
  					transform: 'rotate(5deg) translateY(3px)'
  				},
  				'100%': {
  					transform: 'rotate(0deg) translateY(0px)'
  				}
  			},
  			'leg-back': {
  				'0%': {
  					transform: 'rotate(20deg) translateY(2px)'
  				},
  				'25%': {
  					transform: 'rotate(0deg) translateY(-2px)'
  				},
  				'50%': {
  					transform: 'rotate(-20deg) translateY(0px)'
  				},
  				'62.5%': {
  					transform: 'rotate(-10deg) translateY(2px)'
  				},
  				'75%': {
  					transform: 'rotate(0deg) translateY(2px)'
  				},
  				'100%': {
  					transform: 'rotate(20deg) translateY(2px)'
  				}
  			},
  			'leg-front': {
  				'0%': {
  					transform: 'rotate(-20deg) translateY(0px)'
  				},
  				'12.5%': {
  					transform: 'rotate(-10deg) translateY(2px)'
  				},
  				'25%': {
  					transform: 'rotate(0deg) translateY(2px)'
  				},
  				'50%': {
  					transform: 'rotate(20deg) translateY(2px)'
  				},
  				'75%': {
  					transform: 'rotate(0deg) translateY(-2px)'
  				},
  				'100%': {
  					transform: 'rotate(-20deg) translateY(0px)'
  				}
  			}
  		},
  		animationDelay: {
  			'200ms': '200ms',
  			'40ms': '40ms'
  		},
  		colors: {
  			icon: {
  				dark: 'var(--icon-light)',
  				light: 'var(--icon-dark)'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			hoverWhite: 'hsl(var(--hover-white))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
