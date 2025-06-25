import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        'primary-dark': '#4f46e5',
        secondary: '#22d3ee',
        dark: '#0f172a',
        'dark-lighter': '#1e293b',
        gray: '#64748b',
        white: '#ffffff',
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
      },
      animation: {
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
        lineExpand: 'lineExpand 2s ease infinite', // Added this line and fixed the name
        titleGlow: 'titleGlow 4s ease infinite', // You're also using this but it wasn't defined
        problemPulse: 'problemPulse 3s ease infinite', // And this one too
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
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        ctaPulse: {
          '0%, 100%': { boxShadow: '0 10px 30px rgba(99,102,241,0.3)' },
          '50%': { boxShadow: '0 15px 40px rgba(99,102,241,0.5)' },
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
          '0%, 100%': { textShadow: '0 0 20px rgba(99, 102, 241, 0.3);' },
          '50%': { textShadow: '0 0 40px rgba(99, 102, 241, 0.5);' },
        },
        problemPulse: {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;