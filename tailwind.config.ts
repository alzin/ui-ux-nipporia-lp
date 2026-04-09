import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/content/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B5CF6',
        'primary-dark': '#7C3AED',
        secondary: '#06B6D4',
        dark: '#1a1a2e',
        'dark-lighter': '#16213e',
        gray: '#94a3b8',
        white: '#ffffff',
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        cream: '#FEF7E7',
        peach: '#FFECD2',
        coral: '#FF6B6B',
        mint: '#4ECDC4',
        lavender: '#E8D5F2',
        gold: '#FFD93D',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-up-delay': 'fadeInUp 0.6s ease-out 0.2s forwards',
        gradientShift: 'gradientShift 3s ease infinite',
        float: 'float 20s infinite ease-in-out',
        fadeInUp: 'fadeInUp 1s ease',
        ctaPulse: 'ctaPulse 2s ease infinite',
        iconShake: 'iconShake 4s ease infinite',
        textShine: 'textShine 3s ease infinite',
        badgeBounce: 'badgeBounce 2s ease infinite',
        pulseWave: 'pulseWave 2s ease infinite',
        arrowMove: 'arrowMove 2s ease infinite',
        textGlow: 'textGlow 2s ease infinite',
        iconFloat: 'iconFloat 3s ease infinite',
        serviceFloat: 'serviceFloat 6s ease infinite',
        iconRotate: 'iconRotate 8s linear infinite',
        lineExpand: 'lineExpand 2s ease infinite',
        titleGlow: 'titleGlow 4s ease infinite',
        problemPulse: 'problemPulse 3s ease infinite',
        marquee: 'marquee 44s linear infinite',
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(30px,-30px) scale(1.1)' },
          '66%': { transform: 'translate(-20px,20px) scale(0.9)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        ctaPulse: {
          '0%, 100%': { boxShadow: '0 10px 30px rgba(139,92,246,0.3)' },
          '50%': { boxShadow: '0 15px 40px rgba(139,92,246,0.5)' },
        },
        iconShake: {
          '0%, 90%, 100%': { transform: 'rotate(0deg)' },
          '92%': { transform: 'rotate(-5deg)' },
          '94%': { transform: 'rotate(5deg)' },
          '96%': { transform: 'rotate(-5deg)' },
          '98%': { transform: 'rotate(5deg)' },
        },
        textShine: {
          '0%, 100%': { filter: 'brightness(1)' },
          '50%': { filter: 'brightness(1.2)' },
        },
        badgeBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        pulseWave: {
          '0%': { transform: 'translate(-50%,-50%) scale(0.8)', opacity: '0.8' },
          '100%': { transform: 'translate(-50%,-50%) scale(1.5)', opacity: '0' },
        },
        arrowMove: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' },
        },
        textGlow: {
          '0%, 100%': { filter: 'brightness(1)', transform: 'scale(1)' },
          '50%': { filter: 'brightness(1.2)', transform: 'scale(1.05)' },
        },
        iconFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        serviceFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        iconRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        lineExpand: {
          '0%, 100%': { width: "100px" },
          '50%': { width: "150px" }
        },
        titleGlow: {
          '0%, 100%': { textShadow: '0 0 20px rgba(139, 92, 246, 0.3);' },
          '50%': { textShadow: '0 0 40px rgba(139, 92, 246, 0.5);' },
        },
        problemPulse: {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;