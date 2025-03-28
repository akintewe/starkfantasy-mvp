/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors:{
                'neutral': '#0F172B',
                'gray-3': '#D1D5DC',
                'neutral-900' : 'oklch(0.205 0 0)'
            }
        },
    },
    plugins: [],
};
