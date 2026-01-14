tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#f472b6", // Warm pink
                "background-light": "#fdf8f5", // Creamy beige
                "background-dark": "#1a1212", // Deep warm dark
                accent: "#e5d1c5", // Kraft paper beige
            },
            fontFamily: {
                display: ["Playfair Display", "serif"],
                handwriting: ["Dancing Script", "cursive"],
                sans: ["Inter", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: "1rem",
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'petal-fall': 'fall 10s linear infinite',
                'subtle-pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                fall: {
                    '0%': { transform: 'translateY(-10vh) translateX(0) rotate(0deg)', opacity: '0' },
                    '10%': { opacity: '0.8' },
                    '90%': { opacity: '0.8' },
                    '100%': { transform: 'translateY(110vh) translateX(100px) rotate(360deg)', opacity: '0' },
                }
            }
        },
    },
};

