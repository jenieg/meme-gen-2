/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", // Adjust this path to match your project structure
    ],
    theme: {
        extend: {
            fontFamily: {
                karla: ["Karla", "sans-serif"],
                impact: ["Impact", "sans-serif"],
            },
        },
    },
    plugins: [],
};
