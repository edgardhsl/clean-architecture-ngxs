/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{html,ts}"],
    theme: {
        extend: {
            important: true,
            container: {
                center: true,
                padding: "2rem"
            },
            screens: {
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px"
            },
            fontFamily: {
                title: ["Lexend, sans-serif"],
                text: ["Nunito Sans, sans-serif"],
                material: ["Material Icons"]
            },
            colors: {
                primary: "#020024",
                accent: "#08c2b6",
                text: "#7f878c",
                body: "#f0f1f5",
                border: "#e2e8f0",
                container: "#0b0c2b",
                "dark-white": "#171c2f",
                "dark-body": "#1a2035",
                "dark-container": "#202940",
                "dark-text": "#8b92a9",
                "dark-border": "#2b3040"
            }
        }
    },
    plugins: []
};
