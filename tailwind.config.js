/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				mynerve: ["Mynerve", "cursive"],
				annie: ['"Annie Use Your Telescope"', "cursive"],
				pen: ['"Nanum Pen Script"', "cursive"],
				brush: ['"Caveat Brush"', "cursive"],
				shadows: ['"Shadows Into Light Two"', "cursive"],
				lumanosimo: ["Lumanosimo", "cursive"],
				shantell: ['"Shantell Sans"', "cursive"],
			},
		},
		// fontSize: {
		// 	"2xl": "1.6rem",
		// },
	},
	plugins: [],
};
