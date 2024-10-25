
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: "#180161",
				secondary: "#B1AFFF",
				brandPurple: "#4F1787",
				brandPink: "#EB3678",
				brandOrange: "#FF0000",
				brandBlue: "#0E46A3",
			},
			container: {
			
				center: true,
				padding: {
					DEFAULT: "1rem",
					sm: "3rem",
				},
			},
		},
	},
	plugins: [],
};