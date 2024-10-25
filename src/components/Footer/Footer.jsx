import React from "react";
import { FaInstagram, FaTwitter, FaLocationArrow, FaFacebook } from "react-icons/fa";
const Footer = () => {
	return (
		<div className="dark:bg-gray-950" id="about">
			<div className="container">
				<div className="grid md:grid-cols-3 pb-20 pt-5 ">
					<div className="py-8 px-4">
						<a
							href="/"
							className="text-primary dark:text-white font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
						>
							Harsheyss Store
						</a>
						<p className="text-gray-600 lg:pr-24 pt-3 ">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
							alias cum
						</p>
						<p className="text-gray-500 mt-4 ">Made with ❤️ by Harsh Garg</p>
						<a href="" className=""></a>
					</div>
					<div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md: pl-48 py-8 px-4">
						<div>
							<h1 className="text-primary dark:text-white font-bold text-lg sm:text-2xl ">
								Connect with Us
							</h1>

							<p className=" flex text-gray-600 text-sm sm:text-lg pt-3 font-semibold dark:text-gray-400 ">
								<FaLocationArrow className="text-sm mt-1 mr-3 sm:text-lg dark:text-gray-300" />
								Address : Jaipur , Rajasthan
							</p>
							<div className="flex">
								<a href="/" className="text-primary dark:text-white ">
									<FaInstagram className="text-2xl sm:text-4xl pt-3" />
								</a>
								<a href="/" className="text-primary dark:text-white ">
									<FaTwitter className="text-2xl sm:text-4xl pt-3" />
								</a>
								<a href="/" className="text-primary dark:text-white ">
									<FaFacebook className="text-2xl sm:text-4xl pt-3" />
								</a>
							</div>
						</div>

						<div>
							<h1 className="text-primary dark:text-white font-bold text-lg sm:text-2xl ">
								Quick Links
							</h1>

							<div className="flex flex-col text-gray-600 text-sm sm:text-lg pt-3 font-semibold dark:text-gray-400 ">
								<a href="/" className=" hover:underline">
									Your Orders
								</a>
								<a href="/" className=" hover:underline">
									Help
								</a>
							</div>
						</div>

						<div>
							<h1 className="text-primary dark:text-white font-bold text-lg sm:text-2xl ">
								Let Us Help You
							</h1>

							<div className="flex flex-col text-gray-600 text-sm sm:text-lg pt-3 font-semibold dark:text-gray-400 ">
								<a href="/" className=" hover:underline">
									Your Orders
								</a>
								<a href="/" className=" hover:underline">
									Help
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
