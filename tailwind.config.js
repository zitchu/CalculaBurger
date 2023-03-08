/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    theme: {
        extend: {
            backgroundImage: {
                sea1: 'url("https://plus.unsplash.com/premium_photo-1670333291468-4efc060d4f82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80")',
                sea2: 'url("https://images.unsplash.com/photo-1678185135842-e75946134504?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")',
                sea3: 'url("https://images.unsplash.com/photo-1678186878140-1c7eefc0a0b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80")',
            },
        },
    },
    plugins: [],
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    mode: "jit",
};
