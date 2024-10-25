// src/App.jsx
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Banner from "./components/Banner/Banner.jsx";
import Category from "./components/Category/Category.jsx";
import Category2 from "./components/Category/Category2.jsx";
import Auth from "./components/Auth/Auth.jsx";
import { auth } from "./components/firebase";
import { onAuthStateChanged } from "firebase/auth";
import Services from "./components/Services/Services.jsx";
import Banner2 from "./components/Banner2/Banner2.jsx";
import headphone from "./assets/hero/headphone.png";
import Product from "./components/Product/Product.jsx";
import ps5 from "./assets/category/gaming.png";
import Blog from "./components/Blog/Blog.jsx";
import Company from "./components/Company/Company.jsx";
import Footer from "./components/Footer/Footer.jsx";

const BannerData = {
	discount: "30% OFF",
	title: "Fine Smile",
	date: "1 Sept to 10 Sept",
	image: headphone,
	title2: "HyperX Cloud Stinger",
	title3: "Diwali Sale",
	title4: "Listen to your favourite Beats!!",
	bgColor: "#112b83",
};
const BannerData2 = {
	discount: "60% OFF",
	title: "Happy Hour",
	date: "8 Sept to 17 Sept",
	image: ps5,
	title2: "Playstation 5",
	title3: "Diwali Sale",
	title4: "Experience the video game world!!",
	bgColor: "#2dcc",
};


const App = () => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser(null);
			}
		});

		return () => unsubscribe();
	}, []);

	return (
		<div className="overflow-hidden bg-white dark:bg-gray-900 dark:text-white duration-200">
			<Navbar user={user} />
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Banner />
							<Category />
							<Category2 />
							<Services />
							<Banner2 data={BannerData} />
							<Product />
							<Banner2 data={BannerData2} />
							<Blog />
							<Company />
							<Footer />
						</>
					}
				/>
				<Route path="/auth" element={<Auth />} />
			</Routes>
		</div>
	);
};

export default App;
