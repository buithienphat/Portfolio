/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            poppins: ["Poppins"],
            rm: ["Rubik Moonrocks"],
        },
        extend: {
            colors: {
                main: "#00FF85",
            },
            aspectRatio: {
                "1280/800": "1280 / 800",
            },
        },
    },
    plugins: [],
};
