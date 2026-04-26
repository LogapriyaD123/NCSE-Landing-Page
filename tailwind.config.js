/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0A0F1E",
                surface: "#0D1B3E",
                "surface-2": "#112050",
                border: "#1A3A6B",
                "border-light": "#2A5080",
                accent: "#D4A017",
                "accent-hover": "#E8B820",
                "accent-muted": "#7A5B0A",
                foreground: "#F5ECD0",
                "foreground-muted": "#A89F8C",
                "foreground-dim": "#6B6358",
                navy: "#0A0F1E",
                "navy-mid": "#0D1B3E",
                "navy-bright": "#1A3A6B",
            },
        },
    },
    plugins: [],
}
