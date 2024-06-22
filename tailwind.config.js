const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./public/index.php",
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
		'./vendor/rappasoft/laravel-livewire-tables/resources/views/**/*.blade.php',
        "./storage/framework/views/*.php",
        "./resources/**/*.blade.php",
        "./resources/**/*.{js,ts,jsx,tsx}",
        "./node_modules/flowbite/**/*.js",
    ],
    darkMode: "class", // or 'class'
    theme: {
        extend: {
			colors: {
				cafe: "#886242",
				crema: "#fbf9f8",
			},
			fontFamily: {
				karla: ["Karla", "sans-serif"],
				AdobeGaramond: ["Adobe Garamond Pro", "sans-serif"]
			},
			boxShadow: {
				card: "5px 5px 25px 0 rgba(0, 0, 0, 0.1)",
			},
		},
    },

    plugins: [require("@tailwindcss/forms"), require("flowbite/plugin")],
};
