/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#1D9BF0",
                secondary: "#253341",
                success: "#00CB6A",
                danger: "#F26666",
                dark: "#15202B",
                white: "#F5F8FA",
                gray: {
                    100: "#AAB8C2",
                },
            },
            fontFamily: {
                pthin: ["Poppins-Thin", "sans-serif"],
                pextralight: ["Poppins-ExtraLight", "sans-serif"],
                plight: ["Poppins-Light", "sans-serif"],
                pregular: ["Poppins-Regular", "sans-serif"],
                pmedium: ["Poppins-Medium", "sans-serif"],
                psemibold: ["Poppins-SemiBold", "sans-serif"],
                pbold: ["Poppins-Bold", "sans-serif"],
                pextrabold: ["Poppins-ExtraBold", "sans-serif"],
                pblack: ["Poppins-Black", "sans-serif"],
            },
        },
    },
    plugins: [],
};
